function showPrimes(limit) {

    for (let i = 2; i < limit; i++) {
      if (!isPrime(i)) continue;
        
       console.log(i);  // a prime
    }
  }
  
  function isPrime(i) {
    for (let j = 2; j < i; j++) {
      if ( i % j == 0) return false;
    }
    return true;
  }

  showPrimes(20)
  
