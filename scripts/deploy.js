const { ethers } = require("hardhat");

    const main = async () => {
        const LotteryContractFactory = await ethers.deployContract("Lottery");
        const LotteryContract = await LotteryContractFactory.waitForDeployment();
        console.log("Contract deployed to:", await LotteryContract.getAddress());

        
       // Call the enterLottery function
       const amountToSend = ethers.utils.parseEther("0.02"); // Sending 0.02 ether
       const enterLotteryTx = await LotteryContract.enterLottery({ value: amountToSend });
       
       await enterLotteryTx.wait();
       
       console.log("Player entered the lottery with amount:", ethers.utils.formatEther(amountToSend));
      };
      
      const runMain = async () => {
        try {
          await main();
          process.exit(0);
        } catch (error) {
          console.log(error);
          process.exit(1);
        }
      };
      
      runMain();