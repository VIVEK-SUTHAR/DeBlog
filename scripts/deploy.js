// scripts/deploy.js

const hre = require("hardhat");

async function main() {
    // We get the contract to deploy.
    const Deblog = await hre.ethers.getContractFactory("DeBlog");
    const DeBlogContract = await Deblog.deploy();

    await DeBlogContract.deployed();

    console.log("Contract DeBlog", DeBlogContract.address);
    const a = await DeBlogContract.getAllblogs();
    console.log("All blogs:");
    console.log(a);
    console.log(a.length);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });