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

// console.log(user["isLoggedIn"]);
// console.log(user[firstsymb]);
// console.log(typeof firstsymb);



// symbol
user.name = "muhamamd Rashid"
// Object.freeze(user)
// console.log(user);

user.greeting = function(){
    console.log("helo JS user");
    
}

// console.log(user.greeting());

user.greetingtwo = function(){
    console.log(`helo JS usertwo ${this.name}`)
    
}

// console.log(user.greeting());
// console.log(user.greetingtwo());

// singleton Object

// const tinderuser = new Object()

const tinderuser = {}
tinderuser.id = "123S"
tinderuser.name = "rashid"
tinderuser.isLoggedIn = false
// console.log(tinderuser);

const regularuser = {
    email: "abc@gmail.com",
    fullname: {
        userFullname:{
            firstname: "muhammad",
            lastname: "rashid"
        }
    }
}
// console.log(regularuser);
// console.log(regularuser.fullname);
// console.log(regularuser.fullname.userFullname.firstname);

//  combine objects

const obj1 = {1: "a", 2: "b"}
const obj2= {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const users =[
    {
        id: "ab2",
        email: "ab@gmail.com"
    },
    {
        id: "ab2",
        email: "ab@gmail.com"
    },
    {
        id: "ab2",
        email: "ab@gmail.com"
    }
]
users[1].email

console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

