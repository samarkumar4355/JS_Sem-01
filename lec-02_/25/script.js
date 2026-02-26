// Hoisting in JavaScript is a behavior where variable and function declarations
//  are conceptually moved to the top of their containing scope during the 
//  compilation phase, before the code is executed.This means that you can 
//  use a variable or call a function before it is explicitly declared in
//   your code. 




// console.log(a);
// var a;
// a=10;
// console.log(a);




// if(true){
// let a=90;
//     a=a+1;
//     console.log(a);  // o/p will be 91//
    

// }
// console.log(a);  // a is declared and intialised inside the local scope only so it will not work outdise the if loop , therefore "ReferenceError: a is not defined" will be output//




// for(let i=0;i<10;i++){
//     console.log("hello");
    
// }
// i++;  // code execution will stop here becuse for loop data will be erased after moving from this// 
// console.log(i); 


// const a=90; //here execution will not be happen because code xecution has stopped above //
// a++;
// console.log(a);






