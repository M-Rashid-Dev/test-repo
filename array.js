//  array
// const array =[6, 1, "rashid", 'a']
// console.log(array[3]);

// const arr2 = new Array(10, 20, 30, 40, 50, 60)
// console.log(arr2[2]);
// console.log(typeof arr2);


// // array method

// // add value in array

// arr2.push(6)
// arr2.push(8)
// // arr2.unshift(7)
// // arr2.shift()
// console.log(arr2);
// console.log(arr2.includes("rashid"));
// console.log(arr2.indexOf("rashid"));

// //  join method returns the array in to string
// const arr3 = arr2.join()

// console.log(arr2);
// console.log(arr3);
// console.log(typeof arr3);

// // // slice and splice
// console.log("A" , arr2);
// const sliarr = arr2.slice(1, 3)

// console.log(sliarr);
// console.log("B", arr2);
// const spliarr = arr2.splice(1, 3)
// // // output of splice

// console.log("c" , arr2);

// console.log(spliarr);

//  array second part

const marval_heros =["ironman", "thor", "Spiderman"]
const dc_heros =["superman", "flash", "batman"]
// marval_heros.push(dc_heros)
// console.log(marval_heros);
// console.log(marval_heros[0]);

//  concat here we can concat just one array
const concat_heros = marval_heros.concat(dc_heros)
// console.log(concat_heros);

//  spread here we can concat more then one array
const spread_heros = [...marval_heros, ...dc_heros]
// console.log(spread_heros);

//  flat we can use this if we have merge arrays

const mix_array = [1,2,3,[4,5,6],7,8,[9,10, [11,12]]]
const flat_array = mix_array.flat(Infinity)
// console.log(flat_array);

// converting to array

console.log(Array.isArray("rashid"));
console.log(Array.from("rashid"));
console.log(Array.from({name: "mustafa"}));

let num1 = 190
let num2 = 293
let num3 = 24723

console.log(Array.of(num1, num2, num3));
