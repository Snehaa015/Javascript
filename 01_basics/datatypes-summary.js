// // primitive

// //7 types : string,number,boolean,null,undefined,symbol,Bigint

// // const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = symbol('123')

// //console.log(id ===anotherId);

// const bigNumber = 345467548497496n


// //reference (Non primitive)

// //array,objects,functions

// const heros = ["shaktiman","naagraj","doga"]
// let myObj = {
//     name:"sneha";
//     Age:20;
// }

// const myFunction =function(){
//     console.log("hello world");
// }

// console.log(typeof scoreValue);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack(primitive),Heap(Non-Primitive)
let myYoutubename = "snehagawande"

let anothername = myYoutubename
anothername = "sneakyyedits"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email="sneha@google.com"

console.log(userOne.email);
console.log(userTwo.email);