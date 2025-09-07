// name("rashid")

( function name(){
    console.log("rashid");
}
 )();

//  named IIFE

( function seconName(Name){
    console.log(`dvsgjvd, ${Name}`);
    
})("Rashid");

//  arrow function (SImple iife)

( (website) => {
    console.log(` connected with, ${website}`);
})('youtube');



( ()=>(
    console.log(" wow connected")
    
))()