const fruits = ["apple", "banana", "Orange", "grapes"]

//  call back function in foreach loop
fruits.forEach( function (name) {
    // console.log(name);
})


//  arrow function in for each loop
fruits.forEach( (item) => {
    // console.log(item);
    
})

function fname(item){
    // console.log(item);
    
}
//  function  referance in for each loop
fruits.forEach(fname)

//  other parameters in for each loop ( items, index, arr)
fruits.forEach((item, index, arr) => {
    // console.log(item, index, arr);
    
})

const narray =[
    {
        firstname: "muhmmad",
        lastname: "Rashid"
    },
    {
        firstname: "muhmmad",
        lastname: "Tahir"
    },
    {
        firstname: "muhmmad",
        lastname: "Ali"
    },
    {
        firstname: "muhmmad",
        lastname: "Hassan"
    }
]

narray.forEach((item, index, arr) => {
    console.log(item, index, arr);
    
})