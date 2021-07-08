// The __proto__ is an object within every object that points out (references)
//  the prototype that has been set for that object. __proto__ is the actual 
// object that is used in the lookup chain to resolve methods, etc.

var minimalObject = { minimalKey: "minimalValue"};
console.log("minimalObject.prototype: ",minimalObject.prototype); 
// logs undefined
console.log("minimalObject.__proto__: ",minimalObject.__proto__); 
// logs {constructor: ƒ, __defineGetter__: ƒ, __defineSet... (__pro..

function add(a, b){
    return a+b;
}
console.log("add.prototype: ",add.prototype); 
// logs {constructor: ƒ}
console.log("add.__proto__: ",add.__proto__ );
// logs ƒ () { [native code] }




// The prototype property is only present for functions and is a property 
// that’s set only if you’re using the ‘new’ keyword when creating objects 
// with this (constructor) function.

var cat = {breed: "Russian Blue"} 
console.log("cat.__proto__: ",cat.__proto__);
// cat.__proto__ lists all its methods and cat.prototype returns undefined as expected
var dog = {age: 7} 
console.log("dog.__proto__: ",dog.__proto__);
// same for the dog variable

Object.setPrototypeOf(cat, dog)
// Even though we've used 'setPrototypeOf', the cat object still doesn't have 
// a prototype property. It only has a reference to the dog object via __proto__
console.log("cat.hasOwnProperty('prototype'): ",cat.hasOwnProperty('prototype'));
// returns false
console.log("cat.age",cat.age);
// returns 7





// Method 1: We'll define a constructor function and create an object using the 
// new keyword. Then, we'll create another object and see how we can access its 
// properties using the first object
function Person (name, age) {
	this.name = name;
	this.age = age;
}

var person1 = new Person ("Mark", 25) 
// defined an object called person1 using the Person constructor function above
var person2 = {nationality: "Australian"} 
// defines a simple object literal with a nationality key

// Now to let person1 access person2's nationality, we can use the same setPrototypeOf method:
Object.setPrototypeOf(person1, person2) 
// same as the cat and dog example above
console.log("person1.nationality: ", person1.nationality); 
// returns 'Australian' as expected

// Method 2: If we do the same thing but instead, we set the prototype of the constructor 
// function to person2's prototype, we can now only access it via the constructor object:
var person1 = new Person ("Mark", 25)
var person2 = {nationality: "Australian"}
Object.setPrototypeOf(Person, person2) // we've replaced person1 with Person

console.log("person1.nationality: ", person1.nationality); 
// returns 'undefined', because person1 can access person2's properties only via the constructor object, as follows:
console.log("person1.constructor.nationality: ",person1.constructor.nationality);
 // returns "Australian"
