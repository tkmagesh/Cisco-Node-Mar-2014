/*
Constructor Functions
1. is invoked with the "new" keyword
2. "this" -> new object
3. "this" is returned by default
*/

function Employee(id,name,salary){
	this.id = id;
	this.name = name;
	this.salary = salary;
}



/*
Modify the above constructor function to exhibit the following behavior
1. "id" should be readonly
2. "name" cannot be assigned with an empty string
3. "salary" cannot be assigned with a value less than the original value
*/

function Employee(id,name,salary){
	var _id = id,
		_name = name,
		_salary = salary;

	this.id = function(){
		return _id;
	};
	this.name = function(val){
		if (typeof val === "undefined") return _name;
		if (val !== "") _name = val;
		return _name;
	};

	this.salary = function(val){
		if (typeof val === "undefined") return _salary;
		if (val > _salary) _salary = val;
		return _salary;
	}
}