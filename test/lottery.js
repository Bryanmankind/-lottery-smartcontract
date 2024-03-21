const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Lottery", function () {
  async function deployLotteryContract() {
    
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Lottery = await ethers.getContractFactory("Lottery");
    const lottery = await Lottery.deploy();

    return { lottery, owner, otherAccount };
  }

  describe("Deployment", function () {

    it("Should set the right owner", async function () {
      const { lottery, owner } = await loadFixture(deployLotteryContract);

      expect(await lottery.owner()).to.equal(owner.address);
    });

    it("Should receive and store the funds > 0.01 ether", async function () {
      const { lottery, owner, otherAccount } = await loadFixture(deployLotteryContract);
    
      // Send 0.009 ether to the contract (less than 0.01 ether)
      await expect(lottery.connect(otherAccount).enterLottery({ value: ethers.parseEther("0.009") }))
        .to.be.revertedWith("Not enough funds to enter the lottery");
    
      // Send 0.011 ether to the contract (greater than 0.01 ether)
      await expect(lottery.connect(otherAccount).enterLottery({ value: ethers.parseEther("0.011") }))
        .to.not.be.reverted;
  
    });

    it ("should check if player has been added ", async function () {

      const { lottery, otherAccount} = await loadFixture(deployLotteryContract);

      await expect(lottery.connect(otherAccount).enterLottery({ value: ethers.parseEther("0.011") }))
        .to.not.be.reverted;

      // Check if the player has been added
      const players = await lottery.getPlayers();

      await expect(players).to.have.lengthOf(1); 

    })

    it("Should check is only Owner can call pickWinner", async function () {
      const { lottery, otherAccount } = await loadFixture(deployLotteryContract);

      await expect(lottery.connect(otherAccount).pickWinner()).to.be.revertedWith("Not the owner");

    })
    
    
  });


});
