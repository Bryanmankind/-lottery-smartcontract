// SPDX-License-Identifier: MIT;

pragma solidity 0.8.24;

contract Lottery { 
    address public owner;
    address payable[] public players;

    constructor() {
        owner = msg.sender;
    }

    function getBalnce() public view returns (uint) {
        return address(this).balance;
    }

    function enterLottery() public {
        require(msg.value > .01 ether);

        //  address of palyers entrying the lottery...

        players.push(payable (msg.sender));
    }

    function getRanNumber() public view returns (uint) {
        return uint(keccak256(abi.encodePacked(owner, block.timestamp)));
    }

    function pickWinner() public onlyOwner {
        unit index = getRnNumber() % players.length; 
        palyers[index].transfer(address(this).balance)

        // Reset contract 

        players = new address payable[](0);
    }

    modifier onlyOwner () {
        require (msg.sender == owner, "Not the owner");

        -;
    }
}