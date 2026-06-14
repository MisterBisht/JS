//Array 

//creating Arrays

//way 1 (Normal Way)
const myArr = [0,1,2,3,4,5,true , "Mridul"]; 
// console.log(myArr[0]);
//Array creates shallow copy (copy that share same reference point)

const TheBoys = 
["Butcher","hughie", "mother's milk", "Frenchie", "Kimiko","Annie"];

//  console.log(TheBoys.length, TheBoys[0]);


//way 2 (Array Constructor)
let obj_arr = new Array(1,2,3); 
//avoid it unless needed 
// console.log(typeof obj_arr); //object 

//______________________________________________________________________
// Adding and Removing elements in Array [V imp]
let arr = [2,5];
arr.push(3); //adds element at last 
arr.push(9);
// console.log(arr); //[2,5,3,9]

arr.pop(); // removes last element 
// console.log(arr); //[2,5,3]

//********************************//
arr.unshift(4) //adds element at starting of array 
arr.unshift(6)
// console.log(arr); //[6,4,2,5,3]

arr.shift() //removes from beginning 
// console.log(arr); //[4,2,5,3]
//______________________________________________________________________
//changing values ////Arrays are mutable
arr[1] = "Mridul"
// console.log(arr, arr.length);//[4,Mridul,5,3] , 4

arr[4] = "RAJ" //
// console.log(arr);//[4,Mridul,5,3,RAJ]  
// can add like this ,but avoid !!!

arr[6] = "Pranay"
// console.log(arr);
// [4,Mridul,5,3,RAJ,<empty>,Pranay] //(sparse/hole array) 

//use this for only vhanging/updating element in an array 

//________________________________________________________________________

//looping through arrays 

let arr2 = [4,6,3,8]; 

for(let i =0 ;i<arr2.length;i++)
{
    // console.log(arr2 [i]);
    
}
//4
//6
//3
//8
//****************************************** */
//for...of(Cleaner)  //same chiz in other style 

for(let value of arr2)
{
    // console.log(value);
    
}
//********************************************** */
//forEach()  //same chiz in other style 

arr2.forEach(function(value) {
    // console.log(value);
});
//arrow version  //same chiz in other style
// arr2.forEach(value => console.log(value));

//____________________________________________________________________________



//Important Search Methods

//a) includes()

// console.log(arr2.includes(3)); //true
// console.log(arr2.includes(5)); //false 

//b) indexOf()

// console.log(arr2.indexOf(4)); //0  //returns index of an element 
// console.log(arr2.indexOf(5));//-1 // since there is no 5 in arr2

//__________________________________________________________________________


//Slice() v/s splice()


//slice() => it copies the array , doesn't change the original array 
//basically behves like stack memory by this 

//syntax => slice(start,end)

//example 

let scores = [22,65,33,26];

let newScore1 = scores.slice(0,scores.length) // yahan end last index+1 hai 
let newScore2 = scores.slice(1,3) //end wala include nhi hota [V imp]
// console.log(newScore1); //[22,65,33,26]
// console.log(newScore2); //[65,33]

newScore2.push(31);
// console.log(newScore2);//[63,33,31]
// console.log(scores);//[22,65,33,26] //remains unchanged
//***********************************************

//splice() => it is used to remove and add elements
//it changes the original array //behave like heap memory 

//syntax => splice(startIndex , deleteCount , item1 , item2,..)

//deleting element using splice()

let arr3 = [43,82,34,54];
arr3.splice(1,2); //start index 1 (43), delete 2 elements(82,34)
// console.log(arr3);//[43,54] //changes the original array

//Adding elements using splice()
arr3.splice(1,0,47,56)
// console.log(arr3); //[43,47,56,54]  //added two new elements
//after starting element

//___________________________________________________________________________________________________

//concat() => join arrays

let a = [1,2];
let b = [3,4];

let c = a.concat(b);

// console.log(c); //[1,2,3,4]

//______________________________________________________________________________________________________

//join() => convert Array to String 

let String = ["Hello","Mridul"]
// console.log(String.join(" "));//Hello Mridul

//______________________________________________________________________________________________________

//reverse() => reverse the array 
let arr4 = [1,2,3];
arr4.reverse();
// console.log(arr4); //[3,2,1]


// More Array method in Array2.js 

























