const hre = require("hardhat");

async function main() {

    const Spotify = hre.ethers.ContractFactory("SpotifyWeb3");
    const SpotifyCOntract = await Spotify.deploy();
    await SpotifyCOntract.deployed();

    console.log("Deployed to" + SpotifyCOntract.address);
}



main()
    .then(() => {
        process.exit(0);
    }).catch(err => {
        console.log(err);
        process.exit(1);
    })