const accountId = 144553
let accountEmail = "sneha.gawande015@gmail.com"
var accountPassword = "12345"
accountCity = "ujjain"

// accountId = 2 //not allowed

accountEmail = "hc@015.com"
accountPassword = "21212121"
accountCity = "pune"
console.log(accountId);

/*
prefer not to use var
because of issue in block scope and function
*/

console.table([accountId,accountEmail,accountPassword,accountCity])

