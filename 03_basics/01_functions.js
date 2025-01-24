

function sayMyName(){
    console.log("s");
    console.log("n");
    console.log("e");
    console.log("h");
    console.log("a");
}
//sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
    
// }

function addTwoNumbers(number1,number2){
    
    // let result = number1 + number2
    // return result
    return number1 + number2
     }
const result = addTwoNumbers(3,5)

//console.log("Result:",result);

function loginUserMessage(username){
    return `${username} just logged in`

}
//console.log(loginUserMessage("sneha"))
//console.log(loginUserMessage())

function loginUserMessage(username ="sneh"){
if (!username){
    console.log("Please enter a username");
    return

}
return `${username} just logged in`
}
//console.log(loginUserMessage("sneha"))
//console.log(loginUserMessage("sneha"))

function calculatorCartPrice(val1,val2,...num1){//...rest operator or spread operator
return num1
}

//console.log(calculatorCartPrice(200,400,500))

const user = {
    username:"sneha",
    price : 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user) //function is called here
handleObject({
    username : "sam",
    price : 399
})

const myNewArray =[200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,400,2000]));
