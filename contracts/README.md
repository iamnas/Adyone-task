# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```



- `npm install `
- `npx hardhat run --network sepolia scripts/deployToken.js`
- `npx hardhat run --network polygon_mumbai scripts/deployToken.js`
- `npx hardhat run --network binance_testnet scripts/deployToken.js`
- `npx hardhat verify --network sepolia 0xE730A87c6f8D7f5ee9c3A8Cff622144A9c8D1098 "TokenERC20","TERC20"`
- `npx hardhat verify --network polygon_mumbai 0xE730A87c6f8D7f5ee9c3A8Cff622144A9c8D1098 "TokenERC20","TERC20"`
- `npx hardhat verify --network bsctestnet 0xE730A87c6f8D7f5ee9c3A8Cff622144A9c8D1098 "TokenERC20","TERC20"`

- `npx hardhat run --network binance_testnet scripts/deployBridge.js`
- `npx hardhat run --network polygon_mumbai scripts/deployBridge.js`
- `npx hardhat run --network sepolia scripts/deployBridge.js`



- `npx hardhat verify --network binance_testnet 0x0A94E6FC0194A02c38d37619F47bfCE35e3fD745 "0xD3d5aEF8BF90Fc3839E4334e8159B04eC6E5A43e" "0xE730A87c6f8D7f5ee9c3A8Cff622144A9c8D1098" `
- `npx hardhat verify --network polygon_mumbai 0x0A94E6FC0194A02c38d37619F47bfCE35e3fD745 "0xD3d5aEF8BF90Fc3839E4334e8159B04eC6E5A43e" "0xE730A87c6f8D7f5ee9c3A8Cff622144A9c8D1098" `
- `npx hardhat verify --network sepolia 0x0A94E6FC0194A02c38d37619F47bfCE35e3fD745 "0xD3d5aEF8BF90Fc3839E4334e8159B04eC6E5A43e" "0xE730A87c6f8D7f5ee9c3A8Cff622144A9c8D1098" `



- `TOKEN_ADDRESS="0xE730A87c6f8D7f5ee9c3A8Cff622144A9c8D1098"`
- `VALIDATOR_ADDRESS="0xD3d5aEF8BF90Fc3839E4334e8159B04eC6E5A43e"`

- `BUSD_TOKEN_ADDRESS = "0xAC957949233a47A682B36701F4b7e79f61098B86"`
- `TOKEN_EXCHANGE_ADDRESS = "0xD0b98d48604766308cf90558f4C499Eda04c662B"`
- `BRIDGE_ADDRESS = "0x0A94E6FC0194A02c38d37619F47bfCE35e3fD745"`