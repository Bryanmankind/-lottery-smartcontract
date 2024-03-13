// SPDX-License-Identifier: MIT;

pragma solidity 0.8.24;

contract Lottery { 
    address public owner;
    address payable[] public players;

    constructor() {
        owner = msg.sender;
    }

    function enterLottery() public {
        players.push(msg.sender);
    }
}