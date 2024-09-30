const {Web3} = require('web3');
const web3 = new Web3();

// ABI from your compiled contract
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

const contractAddress = "0xBE6D9C89b8FEb40f5A34C873B024D6628F7C51B8";
const contract = new web3.eth.Contract(abi, contractAddress);

// Function parameters
const employeeId = 1;
const name = "Alice";
const age = 30;

// Encode function call
const encodedFunctionCall = contract.methods.setEmployeeDetails(employeeId, name, age).encodeABI();
console.log(encodedFunctionCall);
