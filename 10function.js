function Name(){
    console.log("r");
console.log("a");
console.log("s");
console.log("h");
console.log("i");
console.log("d");

}
// Name();

// function addTowNumber(num1, num2){
//     console.log(num1 + num2);
    
// }

// addTowNumber(3,4)

// const result = addTowNumber(5, 5)
// console.log("result is ," , result)

function addTowNumber(num1, num2){
// let result = num1 +num2
// return result
return num1 + num2
}

const result = addTowNumber(5, 5)
// console.log("result is ," , result)

function loginmessage(username){
    return `${username} just logged in`
}
// loginmessage("rashid") just return not print
// console.log(loginmessage("rashid")); // print 

function secondusermessage(secname = "mustafa"){
    if(secname === undefined){
        console.log("please enter user name");
        return      
    }
    return `${secname} just logged in`
}

// console.log(secondusermessage());


// rest operator return value in array
function calculatecartprice(val1, val2, ...num1){
return num1
}

// console.log(calculatecartprice(2,3,4,5));

//  passing object as parameter in function
const user = {
    username: "rashid",
    price: 200
}

function handleObject( anyobject){
    console.log(`username is ${anyobject.username} and price is 
        ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username: "MUHAMMAD",
    price: 600
})

//  passing Array as parameter in function

const arrayParameter = [1,2,3,4,5]

function arrFunction(anyArray){
    // console.log(anyArray[1]);
    return anyArray[3]
    
}
// arrFunction(arrayParameter)
console.log(arrFunction([200,300,400,500]));
