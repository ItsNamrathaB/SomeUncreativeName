let sum = function(a){
    return function(b){
        if(b){ return sum(a+b); }
        return a;
    }
}

// Compacting - Interation 1: Removing functions
let sum1 = (a) => {
     return (b) => {
        return b?  sum1(a+b) : a;
    }
}

// Compacting - Interation 2: Removing parantheses around single arguments, 
// and returns for values spread over just a single line
let sum2 = a => b => b?  sum2(a+b) : a;

console.log(sum(1)(2)());
console.log(sum1(1)(2)());
console.log(sum2(1)(2)());

// Because edge case
console.log(sum1(1)());
console.log(sum2(1)());

console.log("Maturity is realising that the above is not an edge case at all, 'cause anyyy function has to end with a single argument at last!! Haha");