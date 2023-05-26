
const hre = require('hardhat');

async function main() {

const accountDetails = await hre.ethers.getSigners();

console.log(accountDetails[0]);
console.log(hre.ethers);

  
let messageHash = await  hre.ethers.utils.solidityKeccak256(
    ["address", "address", "uint256", "uint256","uint256", "string"],
    [accountDetails[0].address,accountDetails[0].address, "50000000000000000000", 0,80001, "TERC20"]
  );

  const messageArray = ethers.utils.arrayify(messageHash);
  const rawSignature = await accountDetails[0].signMessage(messageArray);
  console.log(rawSignature);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});