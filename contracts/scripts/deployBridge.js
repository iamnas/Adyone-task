
const hre = require('hardhat');


const TokenAddress = process.env.TOKEN_ADDRESS
const VALIDATOR_ADDRESS = process.env.VALIDATOR_ADDRESS

async function main() {

  const Bridge = await  hre.ethers.getContractFactory("Bridge")
  const bridge = await Bridge.deploy(VALIDATOR_ADDRESS,TokenAddress);
  await bridge.deployed();
  console.log("bridge deployed to:", bridge.address);
  
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});