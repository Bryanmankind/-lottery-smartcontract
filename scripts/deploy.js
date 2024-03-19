const { ethers } = require("hardhat");


    const main = async () => {
        const LotteryContractFactory = await ethers.getContractFactory("Lottery");
        const LotteryContract = await LotteryContractFactory.deploy();
        console.log("Contract deployed to:", await LotteryContract.getAddress());

        
       // Call the enterLottery function.
      // For five players 

        const numOfPlayers = 5;
       for (let i = 0; i < numOfPlayers; i++) {
        const amountToSend = ethers.parseEther("0.05"); // Sending 0.05 ether
        const signer = (await ethers.getSigners())[i];
        const enterLotteryTx = await LotteryContract.connect(signer).enterLottery({ value: amountToSend });
        
        await enterLotteryTx.wait();
        
        console.log(`Player ${i + 1} entered the lottery with amount:`, ethers.formatEther(amountToSend));
       }
       


       // Call the getPlayers function.
      const getPlayersTxn = await LotteryContract.getPlayers();

      console.log("Players entered :", getPlayersTxn);

      // Call the winner of the lottery..
      const [owner] = await ethers.getSigners();
      const getLotteryWinnerTxn = await LotteryContract.connect(owner).pickWinner();

      await getLotteryWinnerTxn.wait();

      console.log("winner of the lottery picked :");


      // get winner address

      const getWinnerByLotteryTxn = await LotteryContract.getWinnerByLottery("1");

      console.log("winner of the lottery picked  is :", getWinnerByLotteryTxn);
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