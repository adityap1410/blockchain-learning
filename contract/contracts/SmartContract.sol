// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EmployeeManager {
    struct Employee {
        string name;
        uint256 age;
        bool exists;  
    }
    mapping(uint256 => Employee) private employees;

    // Function to set employee details: name, age, and employeeId
    function setEmployeeDetails(uint256 employeeId, string memory name, uint256 age) public {
        employees[employeeId] = Employee(name, age, true);
    }

    // Function to get employee id, name, and age by employeeId
    function getEmployeeDetails(uint256 employeeId) public view returns (uint256 id, string memory name, uint256 age) {
        require(employees[employeeId].exists, "Employee does not exist");
        Employee memory employee = employees[employeeId];
        return (employeeId, employee.name, employee.age);
    }
}
