// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract KnowledgeModel {
    struct Model {
        string ipfsHash;
        address owner;
    }

    mapping(uint256 => Model) public models;
    uint256 public modelCount;

    function uploadModel(string memory ipfsHash) public {
        models[modelCount] = Model(ipfsHash, msg.sender);
        modelCount++;
    }

    function getModel(uint256 modelId) public view returns (string memory) {
        require(modelId < modelCount, "Model not found");
        return models[modelId].ipfsHash;
    }
}
