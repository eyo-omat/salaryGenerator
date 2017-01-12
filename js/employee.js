'use strict'

var Employee = function (employeeID, fname, sname, phone, employeeType, experiencLevel) {
	this.employeeID = employeeID;
	this.fname = fname;
	this.sname = sname;
	this.phone = phone;
	this.employeeType = employeeType;
	this.experiencLevel = experiencLevel;
	this.saveEmployee = function () {
		
	};
	this.getEmployee = function () {
		return this;
	};
}

module.exports = Employee;


























