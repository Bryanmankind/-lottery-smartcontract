const { ethers } = require("hardhat");

    const main = async () => {
        const LotteryContractFactory = await ethers.deployContract("Lottery");
        const LotteryContract = await LotteryContractFactory.waitForDeployment();
        console.log("Contract deployed to:", await LotteryContract.getAddress());

        // call the functions 

        txn = await LotteryContract.enterLottery()

        await txn.wait()
        console.log("Player one entered with:", )
    
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