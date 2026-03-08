1️⃣ What is the difference between var, let, and const?
Ans:
var, let, and const these are all JavaScript keywords used to declare variable.

###var
var is Function scoped
when declared using var hoisted to the top of scope
it can be re-declared and reassigned
Not recommended in modern JavaScript

###let

let is block scoped ---> means only have the access in that scope
it can be be reassigned but cannot be redeclared in the same scope---> means you can change the value manually and dynamically
it is used when the variable value needs to change

###const

const is block scoped ---> means only have the access in that scope
it cannot be reassigned after declaration---> means you can not change the value manually and dynamically
it must be initialized during declaration 4. usually used when the value is fixed and will not change is future

2️⃣ What is the spread operator (...)?
Ans:
The spread operator (...) in JavaScript is used to expand or unpack the elements of an iterable (such as an array, object, or string) into individual elements. It is commonly used for copying arrays or objects, merging them, or passing multiple values.

3️⃣ What is the difference between map(), filter(), and forEach()?
Ans: These are all function or method , used to perform specific task .
###map()
it create a copy of an Array and you can manipulate copied array without changing the main Array.
Applies a function to each element
Returns the transformed array

### filter()

it is almost like map but it will return you matched condition Array.
suppose you have a array const array= ['Akash', 'akter', 'ashik', 'atif', 'aslam'];
and you condition is like array.filter(name => name.startsWith('a')); it will return ['akter', 'ashik', 'atif', 'aslam'];

### forEach()

this just loop through the all element of array but return nothing
Iterates through all array elements

4️⃣ What is an arrow function?
Ans:
An arrow function is a shorter way to write a function in JavaScript using the => syntax. It allows you to write cleaner and more concise functions.

normal function:
function sum (a,b){
return a+b;
}

arrow function:
const sum = (a,b) => a+b;

5️⃣ What are template literals?
Ans:
Template literals are a way to write strings in JavaScript using ( ` ` ) this syntax .
( ` ` ) this symbol also called backticks.
(" ")--> string only allows you to write string value like 'name', 'my name is nirjhor", "07" etc.
but ( ` ` )--> backticks allows you to write variable in a string also exmaple: `my name is ${name}`
it reduce code and make code easier .
also it is to powerfull.
