// const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach((item) =>{
//     console.log(item);
//     return item
// })
// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums= myNums.filter( (num) => {
//     return num > 4
// })

// const newNums = []

// myNums.forEach((num) => {
//     if (num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    {title: 'Book one',genre:'history',publish:2004,edition:2014},

    {title: 'Book two',genre:'science',publish:2005,edition:2015},

    {title: 'Book three',genre:'fiction',publish:2006,edition:2016},

    {title: 'Book four',genre:'non-fiction',publish:2007,edition:2017},

    {title: 'Book five',genre:'geography',publish:2008,edition:2018},

    {title: 'Book six',genre:'history',publish:2009,edition:2019},
]

let userBooks = books.filter((bk)=> bk.genre ==='history')

userBooks = books.filter ((bk) => { 
    return bk.publish >= 2004 && bk.genre === "history"
})
console.log(userBooks);