require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.0",
  networks: {
    besu: {
      url: "http://127.0.0.1:8545",
      accounts: ["04b400593d634d05cf5f2afa5979054dfc6569a3b6a605160d05e8731da582af"],
      gasPrice: 0,  // Set gas price to 0
      gas: 900719  // Gas limit as a decimal number (equal to "0x1ffffffffffffe")
    }
  }
};
