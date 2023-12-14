//In javascript conversion is an issue because it may happen sometime correctly may not happen next time correctly, even 
//if it happen we can't be sure we got desired result
let marks = "99"//string 
console.log(typeof marks)
console.log(typeof(marks))//another way of writing
console.log(marks)//value of marks

//lets convert it into number type --> write data types with first letter uppercase -->Number
let valueInNumber = Number (marks)
console.log(typeof(marks))//before conversion
console.log(typeof(valueInNumber))//after conversion
console.log(valueInNumber)

//low let marks is a combination of number and alphabets
let marks2 = "99ab"
console.log(typeof(marks2))
//trying to convert
let valueInNumber2 = Number(marks2)
console.log(typeof(valueInNumber2))
console.log(valueInNumber2)
//below are some cases of conversion before and after type
//"99"==>99
//"99ab"==>NaN>>>>type changed but value not changed
//null==>0
//true==>1;false==>0
//we can also convert number to string 
let num = 89
let numToString=String(num)
console.log(numToString)
console.log(typeof(numToString))


//1 to boolean==>true; 0==>boolean false
let isLogged=1;
let booleanIsLogged=Boolean(isLogged)
console.log(booleanIsLogged)

//Empty string to boolean==>false
let s1=""
let booleanS1=Boolean(s1)
console.log(booleanS1)
//non empty string to boolean ==> true
let s2="abc"
let booleanS2=Boolean(s2)
console.log(booleanS2)


