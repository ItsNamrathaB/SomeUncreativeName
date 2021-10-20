let name = {
    firstName: "Doctor",
    lastName: "Brand"
}

let printName = function (homeTown, state, country) {
    console.log(this.firstName + " " + this.lastName + ", " + homeTown + ", " + state + ", " + country)
}

let printMyName = printName.bind(name, "Alberta")
printMyName("Some intermediate location", "Canada")

Function.prototype.mybind = function(...args){
    // this points to printName method
    let obj = this, //also, we can't use this directly inside the below fn because the context changes
    params = args.slice(1)

    return function(...args2){
        obj.apply(args[0], [...params, ...args2])
    }
}

let printMyName2 = printName.mybind(name, "Alberta", "Some intermediate location")
printMyName2("Canada")
