const accountId = 123456
let accountMail = "Aksh@gmail.com"
var account = "Aksh@aksh.com"
accountCity = "Delhi"

let accountState;  // by default it will be undefined


// accountId = 22 // not allowed because of const type vaiable

accountMail = "Aksh@google.com"
account = "akash@aks.com"
accountCity = "Lucknow"

/*
   Do not use var to declare because of block scope and functional scope 
   It does not separate variables based on scopes they are defined in 
   basically it defines variales globally
*/


console.log(accountId);
console.table([accountMail, account, accountCity, accountState]
)
