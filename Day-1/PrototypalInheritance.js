function SalaryCalculator(basic,hra,da,tax){
	this.basic = basic;
	this.hra = hra;
	this.da = da;
	this.tax = tax;
}

SalaryCalculator.prototype.calculate = function(){
	var net = this.basic + this.da + this.hra;
	var gross = net * ((100-this.tax)/100);
	this.salary = gross;
}