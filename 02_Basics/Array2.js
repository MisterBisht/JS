//sort() [V Imp]

//Normal Sort 

let animals = ["Dog","Cat","Elephant"]
animals.sort();
// // console.log(animals);//[cat,dog,elephant] //yahan ascending order of first 
// alphabet

let arr = [100,3,25,24]; 
//[100,24,25,3]



arr.sort();
// // console.log(arr);

//btw its wrong for numbers as here sort() treat values as strings !!!!
//_______________________________________________________________________

//correct sort for Numbers 

arr.sort((a,b)=> a-b); //ascending
// // console.log(arr); //[3,24,25,100]

arr.sort((a,b)=> b-a); //descending 
// // console.log(arr); //[100,25,24,3]

//concept 
//tese are compare function 
// a aur b me element rakho  if a - b = +ve swap karo 
//if a -b = -ve swap mat karp 

// descending ke liye hum b - a karte with same rule 

//________________________________________________________________________________


//Sorting Visualization 

//map() function  

//syntax => array.map((element, index, array) => {
// code });


//map() is an array method that executes a function on
// every element of an array and returns a new transformed array.

//Used to transform arrays.

let nums = [1,2,3];

let doubled = nums.map(n => n*2); //n represent current element of array 

// // console.log(doubled); //[2,4,6]

// it is like 

// let nums = [1,2,3];
// let doubled = [];

// for(let i =0 ; i<nums.length;i++)
// {
//     doubled.push(nums[i]*2);
// }

// // console.log(doubled);

//_________________________________________________________________________________________

//filter() function 
//returns matching elements

let nums2 = [1,2,3,4,5];

let even = nums2.filter(n => n % 2 === 0);

//// console.log(even); //[2,4]

//filter returns true or false, truthy ko keep , false ko remove

let square = nums2.filter(n => n**2);

//// console.log(square); //[1,2,3,4,5]

//yahan sab truthy hai as sabke square exist
// karte is liye sare elements aa gye

//filter me nums2 ke hi elements aate hai as per condition 

//map = tranform , filter = select  ,reduce = combines

//________________________________________________________________________________________________

//reduce() function 
//used to combine values into one
//reduce() array ke saare elements ko lekar 
//ek single value me reduce (convert) karta hai

let nums3 = [1,2,3,4];

let totalSum = nums3.reduce((acc,curr)=> acc + curr,0);

//// console.log(totalSum); //10

//it is like

// let nums3 = [1,2,3,4];
// let acc = 0;

// for(let i = 0; i < nums3.length; i++) {
//     acc = acc + nums3[i];
// }

// // console.log(acc); 

//________________________________________________________________________


//Functional Array Methods visual 

//find() => Returns first matching value.

let arr2 = [5,10,15];

let ans = arr2.find(n => n > 9); 

// console.log(ans); //us condition ko pura karne wala first element return karega 
//ie 10 

//findIndex()=> returns index of that first matching value 

let idx = arr2.findIndex(n => n > 9 );

// console.log(idx); //1

//Some() and every()

//some() => At least ONE true toh true warna false

let arr3 = [1,2,3];

// console.log(arr3.some(n=> n>2));  //true

//every() => all should be true for true if one false then false

// console.log(arr3.every(n => n>2));//false

//some = at least one , every = all

//___________________________________________________________________________

//spread operator (...)

// it allows an iterable such as an array or string to be expanded 
// into seperate elements  (basically , unpacks the element)

let numbers = [1,2,3,4,5]

// let max = Math.max(numbers); // will return NaN since elements are not seperated 

let max = Math.max(...numbers) //5

// // console.log(max);

let name = "Mridul Bisht";

let letters1 = [name];

let letters2 = [...name];

// console.log(letters1); //['Mridul Bisht']

// console.log(letters2); //seperates each element of a string

/*[
  'M', 'r', 'i', 'd',
  'u', 'l', ' ', 'B',
  'i', 's', 'h', 't'
]*/

let fruits = ["apple", "orange", "banana"];

let vegetables = ["carrots", "celery", "potatoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"];

// console.log(foods);

//__________________________________________________________________________

//Rest operator (...)

//The rest operator collects multiple values and packs them into a single array. (basically , packs the element)
//works inside a fuction 

/*
Rest Operator (...)

Collects multiple values
and packs them into a
single array or object.

Think:
Rest = Pack / Collect

Commonly used in:
1. Function parameters
2. Array destructuring
3. Object destructuring
*/

// =======================================
// 1. Function Parameters
// =======================================

function showNumbers(...numbers) {
    // console.log(numbers);
}

showNumbers(1, 2, 3, 4, 5);

// Output:
// [1, 2, 3, 4, 5]

/*
Here:

1, 2, 3, 4, 5

are collected into:

[1, 2, 3, 4, 5]
*/


// Real Example

function add(...numbers) {
    return numbers.reduce(
        (acc, curr) => acc + curr,
        0
    );
}

// console.log(add(1, 2, 3));      // 6
// console.log(add(1, 2, 3, 4, 5)); // 15


// =======================================
// 2. Array Destructuring
// =======================================

let marks = [90, 80, 70, 60, 50];

let [first, second, ...remaining] = marks;

// console.log(first);      // 90
// console.log(second);     // 80
// console.log(remaining);  // [70, 60, 50]

/*
first = 90
second = 80

...remaining

collects all remaining elements
into an array.
*/


// =======================================
// 3. Object Destructuring
// =======================================

const user = {
    name: "Mridul",
    age: 20,
    city: "Delhi"
};

const { name: userName, ...rest } = user;

// console.log(userName); // "Mridul"

// console.log(rest);

/*
{
    age: 20,
    city: "Delhi"
}
*/

/*
'name' is extracted.

All remaining properties
are collected into 'rest'.
*/


// =======================================
// Interview Definition
// =======================================

/*
The Rest Operator (...) collects
multiple values and packs them
into a single array or object.
*/


// =======================================
// Memory Trick
// =======================================

/*
Spread  = Unpack values

[...arr]

[1,2,3]
   ↓
1,2,3


Rest = Pack values

(...args)

1,2,3
  ↓
[1,2,3]
*/

//_________________________________________________________________________

//Array.isArray() //method used to check whether a value is an array or not.

console.log(Array.isArray([1,2])); // true

//_______________________________________________________________________

//Multidimensional Array

let matrix = [[1,2],[3,4]];
console.log(matrix[1][0]);//3

 //from function 

 //ek static method hai jo kisi iterable ya array-like object ko real array me convert karta hai
 console.log(Array.from("Mridul")); 
 let set = new Set([1, 2, 3]);

let arr4 = Array.from(set);

console.log(arr4);
 



