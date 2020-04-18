/********** Gyan Phase 1 **********/

let name = {
    firstName: "Christopher",
    lastName: "Nolan",
    printFullName: function(){
        // every function points to a this, name in this case
        console.log(this.firstName+" "+this.lastName)
    }
}
name.printFullName()

let name2 = {
    firstName: "Robert",
    lastName: "Pattinson"
}

// borrow function from name : function borrowing
name.printFullName.call(name2) // name2: what we want this to point to

/********** Gyan Phase 2 - call vs apply **********/

let name1 = {
    firstName: "Christopher",
    lastName: "Nolan",
}

let printFullNameNext = function(city, country){
    console.log(this.firstName+" "+this.lastName + ", " + city + ", " + country)
}

printFullNameNext.call(name1, "Westminster", "UK") 
// name1: what 'this' in method points to, followed by parameters needed

let name3 = {
    firstName: "Robert",
    lastName: "Pattinson"
}

// spoiler: the only difference is that the additional arguments are passed as an array in apply 
printFullNameNext.call(name3, "London", "UK")
printFullNameNext.apply(name3, ["London", "UK"])

/********** Gyan Phase 3 - bind in the action✊(PS: it's a raised fist, in case it's not clear) **********/
// instead of calling directly unlike the above two, it returns a copy of method after
// binding this to object and arguments of method
let printFullNameNextBinded = printFullNameNext.bind(name3, "London", "UK")
printFullNameNextBinded()