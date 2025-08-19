let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());

// date format
console.log(typeof myDate);
let myCreatedDate = new Date (2025, 0, 19)
myCreatedDate = new Date (2025, 6, 19, 5, 7)
myCreatedDate = new Date ("2025-08-15")
console.log(myCreatedDate.toDateString());

//  time stamp

const myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));
console.log(Math.round(Date.now()/1000));

