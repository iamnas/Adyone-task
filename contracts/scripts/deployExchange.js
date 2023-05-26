
const hre = require('hardhat');

const TOKEN_ADDRESS = process.env.TOKEN_ADDRESS
const VALIDATOR_ADDRESS = process.env.VALIDATOR_ADDRESS
const BUSD_TOKEN_ADDRESS = process.env.BUSD_TOKEN_ADDRESS

async function main() {

  const TokenExhange = await  hre.ethers.getContractFactory("TokenExhange")
  const tokenExhange = await TokenExhange.deploy(TOKEN_ADDRESS,VALIDATOR_ADDRESS,BUSD_TOKEN_ADDRESS);
  await tokenExhange.deployed();
  console.log("TokenExhange deployed to:", tokenExhange.address);
  
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});