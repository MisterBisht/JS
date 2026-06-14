//Primitive Values Copy (Simple Copy)
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
//stored in Stack Memory [V imp]
//makes  copies //Change in one does NOT affect other

let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20

//Non Primitive values (reference type)
//// Array, Objects, Functions

//stored in Heap Memory [V imp]
//Yahan copy nahi hui.
//Dono same object ko point kar rahe hain.

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1); // [1,2,3,4]
console.log(arr2); // [1,2,3,4]

//________________________________________________________________________________________________________________________________________________

//Shallow vs deep Copy 
//these are copying methods 
//*********************************
//shallow copy 
// Naya object/array banta hai.

// Top level copy hoti hai.

// Nested objects shared rehte hain.

// it has functions like spread , Array.from(),slice(),concat(),object.assign()

// shallow copy  (copy that share same reference point)

let obj1 = {
    name: "Mridul",
    address: {
        city: "Delhi"
    }
};

let obj2 = { ...obj1 };

obj2.address.city = "Mumbai";

console.log(obj1.address.city); //Mumbai 
//

//🧠 2. Deep Copy
// 📌 Meaning:
// Full independent copy
// Nested objects bhi alag

let obj2 = structuredClone(obj1);

obj2.address.city = "Mumbai";

console.log(obj1.address.city); // Delhi