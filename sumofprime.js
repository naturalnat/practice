//return sum of all prime numbers that are less than or equal to given number

function sumprime(num) {
    if (num < 2) {
        return 0;
    }
    //if greater than 2: keep track of primes up to and including the paramter
    const primes = [];
    for (let i = 2; i <= num; i++) {
        let composite = false;
        for (const p of primes) {
            if (i % p === 0) {
                composite = true;
                break;
            }
        }
        if (!composite) {
            primes.push(i)
        }
    }
    let sum = primes.reduce((acc, p) => acc + p, 0);
    
    return sum;
}

sumprime(10);