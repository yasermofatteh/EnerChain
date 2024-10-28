// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenIncentive is ERC20 {
    constructor() ERC20("KnowledgeToken", "KTKN") {
        _mint(msg.sender, 1000000 * (10 ** uint256(decimals())));
    }

    function rewardUser(address recipient, uint256 amount) public {
        _transfer(msg.sender, recipient, amount);
    }
}
