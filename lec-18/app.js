// function sum(a){
//     console.log("hi");
//     console.log("bye");
//     return a;
// }

// let x = () =>{
//     for (let i=0;i<10;i++){
//         console.log(i);
//     }
// };

// let ans = sum(x);
// console.log("ans ki value =");
// console.log(ans);

// ans();

setTimeout(()=>{
    console.log("login ");
    setTimeout(()=>{
        console.log("otp");
        setTimeout(()=>{
            console.log("payment");
        },4000);
    },3000);
},2000);