const contractInfo = require('./contractInfo')
import Web3 from "web3";
const web3Rpc = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545')
const chainId = testnetPresale.chainId

const getContractTestnetBUSDInstance = async (web3) => {
    try {
       
            const contractInstance = new web3.eth.Contract(contractInfo.testnetBUSD.abi, contractInfo.testnetBUSD.contractAddress);
            return contractInstance;

    } catch (err) {
        return err;
    }
}

const getContractTestnetTokenInstance = async (web3) => {
    try {
       
            const contractInstance = new web3.eth.Contract(contractInfo.testnetToken.abi, contractInfo.testnetToken.contractAddress);
            return contractInstance;

    } catch (err) {
        return err;
    }
}

const getContractTestnetBridgeInstance = async (web3) => {
    try {
       
            const contractInstance = new web3.eth.Contract(contractInfo.testnetBridge.abi, contractInfo.testnetBridge.contractAddress);
            return contractInstance;

    } catch (err) {
        return err;
    }
}

const getContractTestnetTokenExhangeInstance = async (web3) => {
    try {
       
            const contractInstance = new web3.eth.Contract(contractInfo.testnetTokenExhange.abi, contractInfo.testnetTokenExhange.contractAddress);
            return contractInstance;

    } catch (err) {
        return err;
    }
}


export const approveBUSD = async (web3, account, amount) => {
    debugger
    try {
        let contractInstance = await getContractTestnetBUSDInstance(web3)
        let result = await contractInstance.methods.approve(contractInfo.testnetTokenExhange.contractAddress, web3Rpc.utils.toWei(amount.toString(), "ether")).send({ from: account });

        return result;
    } catch (error) {
        console.log(error)
        return error
    }
}


export const buyTokenBUSD = async (web3, account, usdAmount) => {
    try {
        let contractInstance = await getContractTestnetTokenExhangeInstance(web3)
        let result = await contractInstance.methods.buyToken(web3Rpc.utils.toWei(usdAmount.toString(), "ether")).send({ from: account });
        return result;
    } catch (error) {
        console.log(error)
        return error
    }
}


export const swapToken = async (web3, account, to,amount,nonce,tokenSymbol) => {
    try {
        let contractInstance = await getContractTestnetBridgeInstance(web3)
        let result = await contractInstance.methods.swap(to,amount,nonce,tokenSymbol).send({ from: account });
        return result;
    } catch (error) {
        console.log(error)
        return error
    }
}

export const redeemToken = async (web3, account, to,amount,nonce,tokenSymbol,signature) => {
    try {
        let contractInstance = await getContractTestnetBridgeInstance(web3)
        let result = await contractInstance.methods.redeem(account,to,amount,nonce,tokenSymbol,signature).send({ from: account });
        return result;
    } catch (error) {
        console.log(error)
        return error
    }
}

