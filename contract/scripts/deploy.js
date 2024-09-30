async function main() {
    const EmployeeManager = await ethers.getContractFactory("EmployeeManager");
    const employeeManager = await EmployeeManager.deploy();
    console.log("Contract deployed to address:", employeeManager.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
  