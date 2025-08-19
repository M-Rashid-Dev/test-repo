const name = "Rashid"
const repoCount = 5
// console.log(name + repoCount + "value")

// console.log("My name is" + name + "my rep count is " + repoCount)

// console.log(`My name is ${name.to uppercase} my rep count is ${repoCount}`)

// new type of creating string

// console.log(typeof name);

const myName = new String("Rashid")
// console.log(myName);
// console.log(typeof myName);
// console.log(myName.length);
// console.log(myName[0]);
// console.log(myName.toUpperCase());
// console.log(myName.charAt(4));
// console.log(myName.indexOf("h"));
// substring

const secondName = myName.substring(2, 6)
// console.log(secondName);

// slice

const slicev = myName.slice(-5, 4)
console.log(slicev);

//  trim

const tname= "   rashid      "

console.log(tname);
console.log(tname.trim());

// split ( string into array)

const astring = new String("My-Name-is-Rashid")
console.log(astring.split("-"))

// find in string

console.log(astring.includes("Rashid"))
console.log(astring.includes("Mustafa"))
const findstring= astring.includes("Rashid")
console.log(findstring)