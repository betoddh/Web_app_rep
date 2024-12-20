/*
    Prime Factorization - Have the user enter a number and find
    all Prime Factors (if there are any) and display them.
*/

var getPrimeFactors = function (n) {
  "use strict";
  var n = document.getElementById("num").value;

  function isPrime(n) {
    var i;

    for (i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  var i,
    sequence = [];

    for (i=2; i <= n; i++){
      while (n % i === 0 && isPrime(i)) {
        sequence.push(i);
        n /= i;
      }
    }

    


  //TODO: Check which numbers are factors of n and also check if
  // that number also happens to be a prime

    //return sequence;
  document.getElementById("pf").textContent = "The prime factors of " + n + " are: " + sequence.join(", ");
};

// the prime factors for this number are: [ 2, 3, 5, 7, 11, 13 ]
console.log(getPrimeFactors(30));
