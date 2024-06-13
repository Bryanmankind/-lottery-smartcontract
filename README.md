# Lottery Smart Contract

## Overview

This project is a simple Lottery smart contract built and tested with Solidity and Hardhat. The contract allows users to enter the lottery by sending a fixed amount of Ether. After a certain number of participants have entered, a winner is randomly selected, and the entire pool of Ether is transferred to the winner.

## Features

- Enter the lottery by sending a fixed amount of Ether.
- Randomly pick a winner from the participants.
- Transfer the entire pool of Ether to the winner.
- Ensure fair and secure operations using smart contract technology.

## Prerequisites

- Node.js
- npm (Node Package Manager)
- Hardhat

## Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Bryanmankind/lottery-contract.git
    cd lottery-contract
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Compile the contract:**
    ```bash
    npx hardhat compile
    ```

4. **Run tests:**
    ```bash
    npx hardhat test
    ```

## Usage

1. **Deploy the contract:**
    ```bash
    npx hardhat run scripts/deploy.js
    ```

2. **Interact with the contract:**
    - Use a tool like [Remix](https://remix.ethereum.org/) or [Hardhat console](https://hardhat.org/guides/hardhat-console.html) to interact with the deployed contract.
    - Enter the lottery by sending 0.1 Ether to the `enter` function.
    - Pick a winner by calling the `pickWinner` function (only the manager can call this).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.