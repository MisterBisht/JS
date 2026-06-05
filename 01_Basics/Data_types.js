"use strict";

// =============================
//  JAVASCRIPT DATATYPES NOTES
// =============================


// =============================
// A) PRIMITIVE DATATYPES
// =============================

// 1. Number
let age = 20;
let price = 22.5;

// 2. String
let name = "Adolf Hitler";

// 3. Boolean
let isLoggedIn = true;

// 4. Undefined
let x; // value not assigned

// 5. Null (intentional empty value)
let y = null;

// IMPORTANT:
// typeof null => "object" (JS bug)

// 6. BigInt (large numbers)
let big = 12345678901234567890n;

// 7. Symbol (unique identifier)
let id = Symbol("id");


// =============================
// DEBUG TABLE (Primitive types)
// =============================
console.table({
  age: { value: age, type: typeof age },
  price: { value: price, type: typeof price },
  name: { value: name, type: typeof name },
  isLoggedIn: { value: isLoggedIn, type: typeof isLoggedIn },
  x: { value: x, type: typeof x },
  y: { value: y, type: typeof y },
  big: { value: big, type: typeof big },
  id: { value: id, type: typeof id }
});


// =============================
// B) NON-PRIMITIVE DATATYPES
// =============================


// 1. Array
let values = [1, 2, 3, 4, 5];
console.log("Array type:", typeof values); 
// object (important trick)

// 2. Object
let user = {
  name: "Amit",
  age: 21
};

console.log("User:", user);
console.log("User type:", typeof user);

// 3. Function
function greet() {
  console.log("Namaste 🙏");
}

console.log("Function type:", typeof greet);
greet();