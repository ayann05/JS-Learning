const accountId = 122334
let accountEmail = "samplelearning@gmail.com"
var accountPassword = "12345"
accountCity = "kolkata" 
let accountState; //if in js a variable is declared and no value is being provided to it then js considered it as "undefined"

//wherever you decalare const it cannot be changed in the program 

// accountId = 1
//if const is decalred then its value cannot be changed anywhere in the file 

accountEmail = "sample@google.com"
accountPassword = "541"
accountCity = "Bankura"

console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)
console.log(accountState)


//to print all the contents altogether we can also use "console.table()"


console.table([accountEmail,accountId,accountPassword,accountCity,accountState])

/* In javascript variables are declared using let and var
but also we don't use var because in js because in early days there was a problem in var as it dosen't had any control in the scope of it 



Prefer not to use var
because of issue in block scope and functional scope

*/