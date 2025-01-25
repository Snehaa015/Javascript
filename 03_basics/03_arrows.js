const user = {
    username: "sneha",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     let username = "sneha"
//     console.log(this.username);
// }
// chai()

// const chai = function() {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "hitesh"
    console.log(this);
}
chai()

//() =>{} //basic syntax of arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
//const addTwo = (num1, num2) => num1 + num2
//const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username:"sneha"})
console.log(addTwo(3,4))

const myArray = [2,3,5,6,7]

//myArray.forEach()