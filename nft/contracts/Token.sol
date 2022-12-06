// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract Token {
  string public name = "My Hasrdhat Token";
  string public symbol = "MHT";

  uint256 public totalSupply = 1000000;

  address public owner;

  mapping (address => uint256) balances;

  event Transfer(address indexed _from, address indexed _to, uint256 _value);

  constructor() {
    console.log("constr start2");
    balances[msg.sender] = totalSupply;
    owner = msg.sender;
  }

  function transfer(address to, uint256 amount) external {
    require(balances[msg.sender] >= amount, "Not enough tokens");

    balances[msg.sender] -= amount;
    balances[to] += amount;

    // オフチェーンのアプリケーションに通知できる
    emit Transfer(msg.sender, to, amount);
  }

  function balanceOf(address account) external view returns (uint256) {
    return balances[account];
  }
}

// デプロイ 0x5FbDB2315678afecb367f032d93F642f64180aa3
