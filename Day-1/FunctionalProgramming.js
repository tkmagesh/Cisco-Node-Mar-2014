	var products = [
		{id : 101, name:"pen", cost:10, units :20, category:1},
		{id : 107, name:"hen", cost:21, units :21, category:2},
		{id : 102, name:"ten", cost:31, units :29, category:1},
		{id : 106, name:"den", cost:18, units :22, category:2},
		{id : 104, name:"len", cost:15, units :25, category:1},
		{id : 109, name:"zen", cost:61, units :23, category:2},
	]

	/*
	1. write a sort function that will by defaul sort  the products by id
	2. modify the sort function in such a way that the function can be used to sort the products by any attribute
	*/
	function sort(list){
	  for(var i=0;i<list.length-1;i++)
	    for(var j=i+1;j<list.length;j++)
	      if (list[i].id > list[j].id){
	        var temp = list[i];
	        list[i] = list[j];
	        list[j] = temp;
	       }
	}

	/*generalized version*/
	function sort(list, attrName){
	  for(var i=0;i<list.length-1;i++)
	    for(var j=i+1;j<list.length;j++)
	      if (list[i][attrName] > list[j][attrName]){
	        var temp = list[i];
	        list[i] = list[j];
	        list[j] = temp;
	       }
	}
	function sort(list, comparerFn){
	  for(var i=0;i<list.length-1;i++)
	    for(var j=i+1;j<list.length;j++)
	      if (comparerFn(list[i],list[j]) > 0){
	        var temp = list[i];
	        list[i] = list[j];
	        list[j] = temp;
	       }
	}

	function groupBy(list,attrName){
		var result = {};
		for(var i=0;i<list.length;i++){
			var key = list[i][attrName];
			if (typeof result[key] === "undefined") result[key] = [];
			result[key].push(list[i]);
		}
		return result;
	}
	function groupBy(list,keySelector){
		var result = {};
		if (typeof keySelector === "string"){
			var keyName = keySelector;
			keySelector = function(p){ return p[keyName];}
		}
		for(var i=0;i<list.length;i++){
			var key = keySelector(list[i]);
			if (typeof result[key] === "undefined") result[key] = [];
			result[key].push(list[i]);
		}
		return result;
	}