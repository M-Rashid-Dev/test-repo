const firstsymb = Symbol("key1")


let user= {
    name: "Rashid",
    age: 28 ,
    [firstsymb] : "mykey1",
    email: "rashidmustafa33552gmail.com" ,
    isLoggedIn: false
}
// console.log(user);
//  we can also use this for access the user properties

console.log(user["isLoggedIn"]);
console.log(user[firstsymb]);
console.log(typeof firstsymb);



// symbol
user.name = "muhamamd Rashid"
// Object.freeze(user)
console.log(user);

user.greeting = function(){
    console.log("helo JS user");
    
}

console.log(user.greeting());

user.greetingtwo = function(){
    console.log(`helo JS usertwo ${this.name}`)
    
}

console.log(user.greeting());
console.log(user.greetingtwo());
