//objects literals

const mySym = Symbol("key1")//defining a symbol
const jsUser = {
    name: "Sneha",
    "full name":"Sneha Gawande",
    [mySym]:"mykey1",//acted as a key//actual syntax
    age:20,
    location:"Jaipur",
    email:"sneha@google.com",
    isloggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}//declaration of objects

//console.log(jsUser.email) //accessing of objects
// console.log(jsUser["email"])//another alternative of accessing
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

jsUser.email = "sneha@chatgpt.com"//changing of values or overwrite
//Object.freeze(jsUser)//Prevents the modification of existing property attributes and values, and prevents the addition of new properties 
jsUser.email="sneha@microsoft.com"
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(jsUser.greeting());

 jsUser.greetingTwo = function(){
     console.log(`Hello JS user, ${this.name}`);
 }

 console.log(jsUser.greeting());
 console.log(jsUser.greetingTwo());
    
