// Memory types ----( Stack and Heap)

// Stack(Primitive)
// Heap (non Primitive)

let myName = "Rashid"
let frinedName = myName
frinedName = "Ismail"

// console.log(frinedName)
// console.log(myName)
// console.log(frinedName)

let user = {
    firstName: "Muhammad",
    Lastname: "Rashid"
}
console.log(user);


let usertwo = user

usertwo.firstName = "Adeel"
console.log(user.firstName)
console.log(usertwo.firstName);

// why in Heap(non primitives) output is same while in stack it show different values)
