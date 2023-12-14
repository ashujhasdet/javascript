//javscript has evolved over the years and a lot of new thing have been added 
// if we use "use strict"; then our javascript code will be treated as newer version of js by engines such as nodejs
"use strict";//however these days by default js is treated as per new standards


// alert(3+3)--> we are using nodejs, not browser so this statement has different sytax to use
//Always focus on readibility and indentation while writing code
//Resources for referenec: tc39 and mdn 

//in javascript we have various data types however we dont need to specify them while decalraing varaibes
let name="Ashu"//string
let age=26//integer number 
let isLoggedIn=false//boolean

//Major data types are 
/*
PRIMITIVE
number ==>range of integer from 2 to 2^53
bigint==>large interger values
string==>""/''
boolean==>true/false
null ==>standalone value==> represent void
undefined==>when value is not defined
symbol==> used in thngs like react for uniqueness

NON Primitive
object
*/
//we can use typeof operator to know the data type of a variable
console.log(typeof name)
console.log(typeof isLoggedIn)
console.log(typeof null)//object 
console.log(typeof undefined)//undefined
