const { ethers } = require("hardhat");


    const main = async () => {
        const LotteryContractFactory = await ethers.getContractFactory("Lottery");
        const LotteryContract = await LotteryContractFactory.deploy();
        console.log("Contract deployed to:", await LotteryContract.getAddress());

        
       // Call the enterLottery function
       const amountToSend = ethers.parseEther("0.05"); // Sending 0.05 ether
       const enterLotteryTx = await LotteryContract.enterLottery({ value: amountToSend });
       
       await enterLotteryTx.wait();
       
       console.log("Player entered the lottery with amount:", ethers.formatEther(amountToSend));
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