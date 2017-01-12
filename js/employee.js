'use strict'

var Employee = function (employeeID, name, phone, employeeType, experiencLevel) {
	this.employeeID = employeeID;
	this.name = name;
	this.phone = phone;
	this.employeeType = employeeType;
	this.experiencLevel = experiencLevel;
	this.allEmployees = [];
	this.saveEmployee = function (employeeID, name, phone, employeeType, experiencLevel) {
		var obj = new Employee(employeeID, name, phone, employeeType, experiencLevel)
		this.allEmployees.push(obj);
	};
	this.getEmployees = function () {
		return this.allEmployees;
	};
}

module.exports = Employee;


























