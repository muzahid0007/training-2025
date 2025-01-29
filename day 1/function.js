// // // // // //with out prameters
// // // // // function demo(){
// // // // //     console.log("function is executing....");
// // // // // }
// // // // // demo();
// // // // // function with parameters

// // // // // function add(a,b){
// // // // //     console.log(a+b);
  
// // // // // }
// // // // // add(5,6);
// // // // // add(8,9);
// // // // // ! namea function
// // // // // function test(){
// // // // //     console.log("named function is executing");
// // // // // }
// // // // // test();
// // // // // ! anonymus function
// // // // function (){

// // // // }
// // // //Function expression
// // // let a=10;
// // // let x=function(){
// // //     console.log("anonymus is not executing... but executing with variable");
// // // }
// // // // console.log(x);
// // // x();
// // // ! IIFE(immidiate invoke function expression)
// // (function(){
// //     console.log("anonymus..")
    
// // } 
// // )()
// // ! Arrow function

// let x=_ =>{console.log("Arrow Arrow function")};
//  x();

// let y=(a,b)=>console.log(a,b)
// y(6,5);

// // ! implicit return and explicit return.

// function test1(a,b){
//     return(a+b);
// }
// console.log(test1(5,5));

// let z=(a,b) =>{return a*b};
// console.log(z(10,10));

// let h=(a,b) =>{return a*b};
// console.log(h(5,10));

// ! higher order function
// function hof(a){
//     return a() ;
// }
// let x= hof(function(){{return "callback function"}})//! callback function
// console.log(x);

//let y= function(){{return "callback function"}}
//console.log(y());

// let user =["sunny","pranav","kou","vatta"];
// console.log(user);
// user.map(function(user){
//     console.log(user)
// })

var a=10;
let b= 50;
function x(){
    var user ="vasanth";
    let company="Google";
    const sal=1234565789;
    console.log(user);
    console.log(company);
    console.log(sal);
}
x()