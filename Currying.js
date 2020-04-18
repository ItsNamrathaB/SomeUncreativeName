// There's two ways to curry: 
//     (i) By Bind
//     (ii) By Closures

// (i) By Bind
console.log("(i) By bind")

let multiply = function(x,y) {
    console.log(x*y)
}

let multiplyByTwo = multiply.bind(this,2); // 2 will be sent as 'x'
// The above function is equivalent to
// let multiply = function(x,y) {
//     let x = 2
//     console.log(x*y)
// }
multiplyByTwo(5); // 5 is 'y'

let multiplyByThree = multiply.bind(this,3); 
multiplyByThree(5);

// If we pass an extra parameter...
let multiplyByTwoParams = multiply.bind(this,2,3);
multiplyByTwoParams(5); // 2,3 are considered, and 5 is ignored. Oh, poor 5! :(
multiplyByTwoParams(); // same as above

// Also same as...
// let multiplyByTwoParams = multiply.bind(this,);
// multiplyByTwoParams(2,3);

// To sum up, we customise(aka CURRY), a method by copying a function and presetting few args

// (i) By Closure
console.log("(ii) By closure")

let closureMultiply = function(x) {
    return function(y) {
        console.log(x*y)
    }
}

let closureMultiplyByTwo = closureMultiply(2);
closureMultiplyByTwo(3);