const {Web3} = require('web3')
       
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));

// The ABI of the contract (replace this with your actual ABI)
const abi = [
    
        {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "employeeId",
                "type": "uint256"
              }
            ],
            "name": "getEmployeeDetails",
            "outputs": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "age",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "employeeId",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "age",
                "type": "uint256"
              }
            ],
            "name": "setEmployeeDetails",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          }
       
      
      
];

// The contract address (replace with your deployed contract address)
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const contract = new web3.eth.Contract(abi, contractAddress);

// The account you will use to send the transaction (replace with your account address)
const account = '0x8b27B197836D9ecFCa70Ff3dc5b9FD0112fe311d';

// Private key of the account (replace with your private key, but handle securely)
const privateKey = '08268b5ba6d2a4bdecfc15aba1802ca4ea343b4533d132c8437043f813175d51';

// Set employee details by sending a transaction
async function setEmployeeDetails(employeeId, name, age) {
    const data = contract.methods.setEmployeeDetails(employeeId, name, age).encodeABI();
    
    // Estimate the required gas for the transaction
    const gas = await web3.eth.estimateGas({
      from: account,
      to: contractAddress,
      data: data
    });
  
    const tx = {
      from: account,
      to: contractAddress,
      gas,  // Dynamically estimated gas
      gasPrice: await web3.eth.getGasPrice(),  // Fetch current gas price
      data: data
    };
  
    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  
    console.log('Transaction receipt:', receipt);
  }
  
  // Get employee details by calling the smart contract
  async function getEmployeeDetails(employeeId) {
    const employee = await contract.methods.getEmployeeDetails(employeeId).call();
    console.log('Employee details:', employee);
  }
  
  // Example usage: set and get employee details
  async function main() {
    // Set employee details (example: ID 1, name "Alice", age 30)
    await setEmployeeDetails(1, "Alice", 30);
  
    // Get employee details
    await getEmployeeDetails(1);
  }
  
  main();
  