define(['jquery','SalaryCalculatorModel'],function($,SalaryCalculator){
	function SalaryCalculatorView(){
		var calculator = new SalaryCalculator();
		
		this.init = function(){
				calculator.addSubscriber("salary", function(){
				$("#divResult").html(calculator.salary());
			});
			calculator.addSubscriber("basic", function(){
				$("#txtBasic").val(calculator.basic());
			});
			calculator.addSubscriber("hra", function(){
				$("#txtHra").val(calculator.hra());
			});
			calculator.addSubscriber("da", function(){
				$("#txtDa").val(calculator.da());
			});
			calculator.addSubscriber("tax", function(){
				$("#rangeTax").val(calculator.tax());
				$("#spanTax").html(calculator.tax());
			});


			$("#txtBasic").change(function(){
				calculator.basic(parseInt(this.value));
			});
			$("#txtHra").change(function(){
				calculator.hra(parseInt(this.value));
			});
			$("#txtDa").change(function(){
				calculator.da(parseInt(this.value));
			});
			$("#rangeTax").change(function(){
				calculator.tax(parseInt(this.value));
			});

			$("#btnCalculate").click(function(){
				calculator.calculate();
			});
		}
	}
	return SalaryCalculatorView;
});