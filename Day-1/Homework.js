	var products = [
		{id : 101, name:"pen", cost:10, units :20, category:1},
		{id : 107, name:"hen", cost:21, units :21, category:2},
		{id : 102, name:"ten", cost:31, units :29, category:1},
		{id : 106, name:"den", cost:18, units :22, category:2},
		{id : 104, name:"len", cost:15, units :25, category:1},
		{id : 109, name:"zen", cost:61, units :23, category:2},
	]
	var categories = [
		{id : 1, name : "stationary"},
		{id : 2, name : "grocery"}
	]
/*
	function join(products,categories,/*.....*/){

	}*/
	/*
	the result of the above function call should be
	[
		{id : 101, name:"pen", cost:10, units :20, category:"stationary"},
		{id : 107, name:"hen", cost:21, units :21, category:"grocery"},
		{id : 102, name:"ten", cost:31, units :29, category:"stationary"},
		{id : 106, name:"den", cost:18, units :22, category:"grocery"},
		{id : 104, name:"len", cost:15, units :25, category:"stationary"},
		{id : 109, name:"zen", cost:61, units :23, category:"grocery"},
	]
	*/

function join(left,right,leftKey,rightKey,transformFn){
  var result = [];
  for(var i=0;i<left.length;i++){
     var key1 = left[i][leftKey];
     for(var j=0;j<right.length;j++){
        var key2 = right[j][rightKey];
        if (key1 === key2){
           var joinedObj = transformFn(left[i],right[j]);
           result.push(joinedObj);
           break;
        }
      }
    }
   return result;
}

/*Using the above function*/
var result = join(products,categories,"category","id",function(p,c){
    return {id : p.id,name :p.name, cost : p.cost, units : p.units, category : c.name};
});

console.table(result);