

//  curly braces is scope{}
// {} block scope, out of the curly braces are global scope

let a = 40
if (true){
    let a =5
    const b = 3
    var c = 10
    console.log(`inner ${a}`);
}
// console.log(a); here we are accessing a variable out of the scope 
// console.log(c);

console.log(`outer ${a}`);

// 


