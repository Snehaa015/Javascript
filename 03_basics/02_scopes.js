let a = 300
if(true){
    let a = 10
    const b = 20
     //console.log("INNER:",a)
}//block scope



//  console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "sneha"

    function two(){
        const website = "youtube"
        //console.log(username);

    }
    //console.log(website);
    two()
}
//one()

if (true){
    const username = "sneha"
    if (username ==="sneha"){
const website = " youtube"
//console.log(username + website);
    }
    //console.log(website);
    
}
//console.log(username);

//++++++++++++interesting+++++++++++++++
console.log(addone(5))

function addone(num){
    return num + 1
}

console.log(addTwo(5))//its not like upperone its giving error!
const addTwo = function(num){
    return num +2
}

//console.log(addTwo(5))




