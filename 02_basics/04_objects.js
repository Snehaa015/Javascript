//const tinderUser = new Object()//singletonobject

const tinderUser = {} //non singleton object

tinderUser.id = "123abc"
tinderUser.name= "Sneh"
tinderUser.isLoggedIn= "false"

//console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname: {
            firstname:"sneha",
            lastname:"gawande"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a", 6:"b"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2}//spread operator
//console.log(obj3);

const users = [
    {
        id:1,
        email:"sneh@gmail.com"
    },
    {
        id:1,
        email:"sneh@gmail.com"
    },
    {
        id:1,
        email:"sneh@gmail.com"
    },
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

const course ={
    coursename: "js in hindi",
    price:"999",
    courseInstructor:"sneha"
}
//course.courseInstructor
const {courseInstructor:instructor} = course
//console.log(courseInstructor);
console.log(instructor);

// {
//     "name":"sneha",
//     "coursename":"js in hindi",
//     "price":"free"
// }//json format
