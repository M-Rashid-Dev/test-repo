// for of loop

const arr = [1, 2, 3, 4, 5, 6]

for ( const num of arr) {
    // console.log(num);
}

const greetings = "hello world"

for (const greet of greetings) {
    // console.log(` each char is ${greet}`);
    
}


//  maps keeps uniques values and same order as declare or initialised

const map = new Map()
map.set('IN', "India")
map.set('PAK', "Pakistan")
map.set('USA', "Unides states of America")
map.set('UK', "United Kingdom")

// console.log(map);

for (const i of map) {
    // console.log(i);
        
}

for (const [i, v] of map) {
    // console.log(i ,":-", v);
}

//  object is not iterable

const obj = {
    name: "rashid",
    age : 28,
    email: "rashid@gmail.com"
}

// for (const [keys, values] of obj) {
//     console.log(keys , ":--", values);
    
// }
