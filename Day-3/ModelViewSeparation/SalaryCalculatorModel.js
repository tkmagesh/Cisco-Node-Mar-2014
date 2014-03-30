function SalaryCalculator(){
		this._subscribers = {};
		var _basic = 0,
			_hra = 0,
			_da = 0,
			_tax = 0,
			_salary = 0,
			that = this;

		function triggerChange(attrName){
			for(var i=0;i<that._subscribers[attrName].length;i++)
				setTimeout(that._subscribers[attrName][i]);
		}
		this.basic = function(val){
			if (typeof val === "undefined") return _basic;
			_basic = val;
			triggerChange("basic");
		};

		this.hra = function(val){
			if (typeof val === "undefined") return _hra;
			_hra = val;
			triggerChange("hra");
		};;
		this.da = function(val){
			if (typeof val === "undefined") return _da;
			_da = val;
			triggerChange("da");
		};;
		this.tax = function(val){
			if (typeof val === "undefined") return _tax;
			_tax = val;
			triggerChange("tax");
		};
		
		this.salary = function(val){
			if (typeof val === "undefined") return _salary;
			_salary = val;
			triggerChange("salary");
		};
		
	}
	SalaryCalculator.prototype.addSubscriber = function(attrName,callbackFn){
		if(typeof this._subscribers[attrName] === "undefined") 
			this._subscribers[attrName] = [];
		this._subscribers[attrName].push(callbackFn);
	}
	SalaryCalculator.prototype.calculate = function(){
		var net = this.basic() + this.hra() + this.da();
		var gross = net * ((100-this.tax())/100);
		this.salary(gross);
		
	}