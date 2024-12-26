// contracts/MyToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract zhaolin is ERC20 {
    constructor(uint256 initialSupply) ERC20("zhaolin", "zl") {
        _mint(msg.sender, initialSupply * (10 ** decimals()));
    }
}
