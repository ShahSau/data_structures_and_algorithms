// 1 is a number prime number or not
/// 
const isPrime =(n)=>{
    if(n<=1) return false
    if(n<=3) return false

    // by running the following condition we can skip middle 5 numbers

    if(n%2 === 0 || n%3===0) return false

    for(let i=5; i*i<=n; i=i+6){
        //in this 5 number, there are 3 odd numbers, first one is represented by i, 
        // last one is divisible by 5 and the middle one is checked by i+2
        if(n%i===0 || n%(i+2)===0) 
        return false
    }
    return true
}


// 2 prime factorization of a given number
/// 
/// this alogorithm works in 3 steps. 
// 1st, it checks if the number is even then prints 2.
// 2nd, it checks by what odd numbers the given number is divisible and prints the odd numbers.
// lastly, it prints all the prime number


const primeFactorization = (n)=>{
    //keep printing 2s
    while(n%2===0){
        console.log(2)
        n = n/2
    }
    //2nd step now dealing with odd numbers
    for(let i=3; i*i<=n; i+=2){
        while(n%i===0){
            console.log(i)
            n = n/i
        }
    }
    // 3rd step
    if(n>2){
        console.log(n)
    }
}

// Print all primes less than n.
// just call the isPrime() inside a new function and print all the values for which isPrime is true

const allPrimes = (n)=>{
    for(let i=0;i<n;i++){
        if(isPrime(i)){
            console.log(i)
        }
    }
}
