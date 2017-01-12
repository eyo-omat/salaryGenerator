'use strict'
//require ('jquery-3.1.1.min.js');
var employeetype = require('employeetype.js');
var Employee = function (employeeID, name, phone, employeeType, experiencLevel) {
	this.emplyeeID = employeeID;
	this.name = name;
	this.phone = phone;
	this.employeeType = employeeType;
	this.experiencLevel = experiencLevel;
	this.allEmployees = [];
	this.saveEmployee = function (employeeID, name, phone, employeeType, experiencLevel) {
		var obj = new Employee(employeeID, name, phone, employeeType, experiencLevel);
  		var text = JSON.stringify(obj);
		localStorage.setItem("Employees", text);

	};
	this.getEmployees = function () {
		var allEmployees = parseInt(localStorage.getItem("Employees")); 
		return allEmployees;
	};

}

module.exports = Employee;

var emp = new Employee();
console.log(emp.getEmployees());
var employee = employeetype.getEmployee(this.employeeID, this.allEmployees);
var salary = employeetype.getsalary(employee);

console.log(salary);



















