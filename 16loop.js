// // for loop

// // for (let index = 0; index < 10; index++) {
// //     const element = index;
// //     console.log(element);
    
// // }

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element==5) {
//         console.log(" 5 matced");
        
//     }
//     console.log(element);
// }



//  nested loop

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(i + ' * ' + j + " = " + i*j);
        
    }
    
}


//  array loop

const Myarray =["rashid", "ahil", "ashir" ,"ali"]
// console.log(Myarray.length);
for (let index = 0; index < Myarray.length; index++) {
    const element = Myarray[index];
    // console.log(element); 
}


// key words 

//  break loop ( break and continue) these two key words use for break loop

for (let index = 0; index < 10; index++) {
    if (index==5) {
        console.log(" break the loop at 5");
        break
    }
    console.log(`value of index is ${index}`);
}
// for (let index = 0; index < 10; index++) {
//     if (index==5) {
//         console.log(" break the loop at 5");
//         continue
//     }
//     console.log(`value of index is ${index}`);

// }