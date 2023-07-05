require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("solidity-coverage");
require("dotenv/config");
require("dotenv").config();
require("./tasks/accounts");
require("@typechain/hardhat");
require("hardhat-deploy");

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || "https://eth-goerli.g.alchemy.com/v2/JoNBVOasNy_Ne7dP22jHEuamkurKBCnh";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0xAD9d8988E2d36a9fC693b4Ea0fd5c55759fDE4b1";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "X4UW91KJ192AQXFTTW6K71SJH7YV3DPVS6";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
    },
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      saveDeployments: true,
      chainId: 5,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.7",
      },
    ],
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};
