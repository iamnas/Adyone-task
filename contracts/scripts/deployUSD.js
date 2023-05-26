const hre = require('hardhat');

async function main() {

  const BEP20Token = await  hre.ethers.getContractFactory("BEP20Token")
  const token = await BEP20Token.deploy();
  await token.deployed();
  console.log("token deployed to:", token.address);
  
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});