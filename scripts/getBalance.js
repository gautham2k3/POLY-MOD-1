const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/Ignis.sol/Ignis.json");

const tokenAddress = "0x2BaeA64122Ca09CF857733fbf7375cB3cbd149b2"; // Ethereum address of the deployed ERC721A contract
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xd5dE9B5eA158AB77F3F689BC5D156cD62296dCee"; // Ethereum public address for the wallet

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("You now have a total number of: " + await token.balanceOf(walletAddress) + " tokens in the wallet.");
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
