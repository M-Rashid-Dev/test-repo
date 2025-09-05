

//  curly braces is scope{}
// {} block scope, out of the curly braces are global scope

let a = 40
if (true){
    let a =5
    const b = 3
    var c = 10
    // console.log(`inner ${a}`);
}
// console.log(a); here we are accessing a variable out of the scope 
// console.log(c);

// console.log(`outer ${a}`);

//  scope level and mini hoisting

function one(){
    const name = "Rashid"
    function two(){
        const age = 28
        // console.log(name);
    }
    // console.log(age);
    
    two()
}
one()

// hoisting

console.log(addone(10));

function addone(num){
    return num +1
}

// add(10)      here we are holding function in variable thats why we can not access
const add = function(num){
    return num +2
}

add(10)
