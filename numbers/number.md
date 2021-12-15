# Number

```js
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
```
