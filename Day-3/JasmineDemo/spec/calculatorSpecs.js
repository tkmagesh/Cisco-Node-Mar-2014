describe("A calculator",function(){
	//scenario - 1
	it("should be able to add two numbers",function(){
		var result = calculator.add(10,20);
		expect(result).toBe(30);
	});
});