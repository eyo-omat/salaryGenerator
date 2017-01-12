'use strict'

var Salary = function(){
	this.intern = {
		name: "intern",
		"junior": 20000,
		"senior": 20000,
	};

	this.associates = {
		name: "associates",
		"junior": 50000,
		"senior": 60000,
	};

	this.managers = {
		name: "managers",
		"junior": 100000,
		"senior": 120000,
	};

	this.executives = {
		name: "executives",
		"junior": 150000,
		"senior": 170000,
	};

	this.directors = {
		name: "directors",
		"junior": 200000,
		"senior": 220000,
	};

	this.salary = function (employeeType, experienceLevel) {
		
		var salary = 0;
		switch (employeeType)
		{
			case this.intern.name: salary = this.intern[experienceLevel];
									break;

			case this.associates.name: salary = this.associates[experienceLevel];
									break;
			case this.managers.name: salary = this.managers[experienceLevel];
									break;
			case this.executives.name: salary = this.executives[experienceLevel];
									break;
			case this.directors.name: salary = this.directors[experienceLevel];
									break;
		}
		return salary;
	}
}

module.exports = Salary;