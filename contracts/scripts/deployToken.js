const hre = require('hardhat');

async function main() {

  const TokenERC20 = await  hre.ethers.getContractFactory("TokenERC20")
  const token = await TokenERC20.deploy("TokenERC20","TERC20");
  await token.deployed();
  console.log("token deployed to:", token.address);
  
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});