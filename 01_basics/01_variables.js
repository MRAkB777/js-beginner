const accountId = 144553
let accountEmail = "kuldeeepb162005@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"

// accountId = 2 //
  
accountEmail = "hc@hc.com"
accountPassword = "212121212"
accountCity = "Bengaluru"

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail, accountPassword, accountCity])