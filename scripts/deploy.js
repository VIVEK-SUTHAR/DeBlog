// scripts/deploy.js

const hre = require("hardhat");

async function main() {
    // We get the contract to deploy.
    const Deblog = await hre.ethers.getContractFactory("DeBlog");
    const DeBlogContract = await Deblog.deploy();

    await DeBlogContract.deployed();
    console.log("Contract DeBlog", DeBlogContract.address);
    await DeBlogContract.newBlog(
        Math.floor(Math.random() * 10000000),
        "Test blog",
        "THis is a test blog",
        "VIVEK SUTHAR",
        "TEST BLOG UPLOAD BYN VIVEK SUTHAR"
    )
    console.log("All blogs:");
    const a = await DeBlogContract.getAllblogs();
    console.log(a);
    console.log(typeof (a));
    for (const items of a) {
        console.log("ID : " + items.blogId);
        console.log("Title : " + items.blogTitle);
        console.log("SUbtitle : " + items.subTitle);
        console.log("AUTHOR : " + items.authorName);
        console.log("Content : " + items.blogContent);
    }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });