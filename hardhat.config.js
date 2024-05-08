const { testnet } = require("bitcoinjs-lib/src/networks");

require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
const { env } = require('./production.env');
require('dotenv').config(env);



module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
    },
    fantom: {
      url: RPC_URL,
      accounts: [PRIVATE_KEY],
          chainId: 4002

    },

  },
    etherscan: {
    apiKey: {
      url: RPC_URL,
      ftmTestnet: API,
    }
  }
};






