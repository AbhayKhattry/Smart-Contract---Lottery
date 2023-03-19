require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()

const GOERLI_RPC_URL=process.env.GOERLI_RPC_URL
const PRIVATE_KEY=process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY=process.env.ETHERSCAN_API_KEY

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
      hardhat: {
          // // If you want to do some forking, uncomment this
          // forking: {
          //   url: MAINNET_RPC_URL
          // }
          chainId: 31337,
          blockConfirmations:1,
      },
      localhost: {
          chainId: 31337,
      },
      goerli:{
        url:GOERLI_RPC_URL,
        accounts:[PRIVATE_KEY],
        chainId:5,
        blockConfirmations:6,
      },
    }, 
  solidity: "0.8.7",
  namedAccounts: {
      deployer: {
          default: 0, // here this will by default take the first account as deployer
          1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
      },
      player: {
          default: 1,
      },
    },
    etherscan:{
      apiKey:ETHERSCAN_API_KEY,
      customChains: [
        {
            network: "goerli",
            chainId: 5,
            urls: {
                apiURL: "https://api-goerli.etherscan.io/api",
                browserURL: "https://goerli.etherscan.io",
            },
        },
    ],
    },
    mocha:{
      timeout:10000000,
    }
};
