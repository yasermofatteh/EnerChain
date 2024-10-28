import { ethers } from 'ethers';
import KnowledgeModel from '../artifacts/contracts/KnowledgeModel.sol/KnowledgeModel.json';

const contractAddress = "YOUR_CONTRACT_ADDRESS";

export async function storeModelHash(hash) {
    if (!window.ethereum) throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, KnowledgeModel.abi, signer);

    const transaction = await contract.uploadModel(hash);
    await transaction.wait();
}
