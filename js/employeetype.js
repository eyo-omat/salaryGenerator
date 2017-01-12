'use strict';
var myApp = require("../js/salary.js");
module.exports = {
	EmployeeType: function(){
		this.getEmployee = getEmployee;
	}
};
var getEmployee = function(employeeId,employees){
	for (var i = 0; i < employees.length; i++)
	{
		if(employees[i].employeeId === employeeId)
		{
			
			return employees[i];
		}
	}
}
var getSalary = function(employeeType)
{
	var salaryF = new mpApp.Salary();
	return salaryF.salary(employeeType.level, employeeType.experience);
}
