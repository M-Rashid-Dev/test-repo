const user = {
    username: "rashid",
    price: 1000,
    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
// console.log(user);
// user.welcomemessage()
// user.username= "Muhammad"
// user.welcomemessage()
// console.log(this);

//  arrow function

//  explicit return

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit return

// const addtwo = (num1, num2) => num1 + num2
const addtwo = (num1, num2) => (num1 + num2)

// object in implicit return

// const addtwo = (num1, num2) => ({ username: "MUHAMMAD RASHID"})

console.log(addtwo(5, 10));
