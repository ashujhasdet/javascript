//Topic 02
/*   
We have a goal that we will build an eCommerce web Application.
Let's us assume that we have a user on website, I want him to register 
him with his personal details, like name , city , contact etc...
For doing that we need to store the data provided by user, and hence we need something called as "VARIABLE".
variable is a named memory loctaion where data is stored that may be used during program execution.
And if want that value to remain unchanged we will call it constant.
*/
const accountId = 987123 //using ; is not compulsory in javascript
//const keyword indicate that value of variable is now constant we can not change it 
// accountId=1234--> not allowed -->will lead to error
console.log(accountId);
//Now we will have some other variables, and those values can be updated for example:
let accountEmail ="abcd@gs.com"
var accountPassword="123456"
accountCity="Delhi"//In javascript we can use a variable without using var or let keyword ,but it not recommended to use.

//updaing the values
accountEmail="dcba@cg.com"
accountPassword="654321"
accountCity="Bengaluru"

//Next if we use console.log we need to write it for each variable seperately, which is tedious 
//however we can use console.table() for prinitng multiple values, it will give output in tabular format
console.table([accountId,accountEmail,accountPassword,accountCity])

/*   
In javascript we have one way to declare a constant 
but 2 ways of declaraing a varaibel , by using let and var keyword
But using var is not suggested as it was used in initial days and had SCOPE( block and functional Scope) problems with it.
So now a days we use only let in order to declare a variable

Prefer not to use var

*/
//In javascript if we do not initialize a variable then by default it is undefined
let accountState;
console.table([accountState])