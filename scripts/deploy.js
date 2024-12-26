const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    
    console.log("Deploying contracts with the account:", deployer.address);
    
    // 使用 ethers.provider.getBalance 作为替代
    const balance = await ethers.provider.getBalance(deployer.address);
    console.log("Account balance:", ethers.formatEther(balance) + " ETH");
  
    const Token = await ethers.getContractFactory("zhaolin");
    const initialSupply = 1000; // 1000 MTK
    const token = await Token.deploy(initialSupply);
    
    console.log("Token address:", token.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
