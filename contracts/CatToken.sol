//SPDX-License-Identifier: UNLICENSED

// Solidity files have to start with this pragma.
// It will be used by the Solidity compiler to validate its version.
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract CatToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Cutest cat token in the world", "CAT") {
        _mint(msg.sender, initialSupply);
    }
}
