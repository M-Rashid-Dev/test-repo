const userIsLoggedIn = true;

//  for true
if (!userIsLoggedIn) {
    console.log("yes Logged in");
};

//  for false 
if (!userIsLoggedIn) {
    console.log("yes Logged in");
} else {
    console.log(" not connected");
    
}

//  short hand notation

const balance = 500

if (balance > 200) console.log("yes greater")


    //  and statement

const userLogin = true
const debitCard = true

if (userLogin && debitCard) {
    console.log(" now you can buy any thing");    
}

//  Or statement 
const creditCard = false
if (userLogin || creditCard) {
    console.log(" now you can also buy any thing");
}


//  Switch

const age = 20

switch (age) {
    case 25:
        console.log("age is 25");
        break;
    case 26:
        console.log("age is 26");
        break;
    case 28:
        console.log("age is 28");
        break;

    default:
        console.log("not matched");
        
        break;
}