const email = "rashid@gmail.com"
const secemail =""

//  true
if (email) {
    console.log("got user email");
} else {
    console.log(" don't have user email");
}

//  false
if (secemail) {
    console.log("got user email");
} else {
    console.log(" don't have user email");
}

//  flase values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values 

//  "0" any valuse in string is truthy values
// {}, [], function(){} truthy valuse

const Arr1 =[]

if (Arr1.length===0) {
    console.log(" array is empty");
    
}

const obj1 ={}

if (Object.keys(obj1).length===0) {
    console.log(" object is empty");
   
}