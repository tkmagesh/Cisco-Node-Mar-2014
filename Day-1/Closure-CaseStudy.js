function getSpinner(){
  var counter = 0;
  return {
    up : function(){
      return ++counter;
    },
    down : function(){
      return --counter;
    }
  }
}

/*
write a prime checker function that will check if the given number is a prime number or not.  The algorithm that performs the prime check should not be run again for the same number

*/

function getPrimeFinder(){
   var cache = {0 : false, 1 : false, 2 : true, 3 : true};
   return function isPrime(n){
      if (typeof cache[n] !== "undefined"){
          console.log("from cache..");
          return cache[n];
      } else {
          console.log("freshly brewed...");
          cache[n] = true;
          for(var i=2;i<=Math.sqrt(n);i++)
             if (n % i === 0){
                cache[n] = false;
                break;
             }
          return cache[n];
      }
    }
}

var isPrime = getPrimeFinder();
isPrime(10)

function isPrime(n){
   var cache = {0 : false, 1 : false, 2 : true, 3 : true};
   isPrime = function(n){
      if (typeof cache[n] !== "undefined"){
          console.log("from cache..");
          return cache[n];
      } else {
          console.log("freshly brewed...");
          cache[n] = true;
          for(var i=2;i<=Math.sqrt(n);i++)
             if (n % i === 0){
                cache[n] = false;
                break;
             }
          return cache[n];
      }
    }
    return isPrime(n);
}