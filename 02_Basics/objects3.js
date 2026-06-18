//Object Destructuring 

//Object Destructuring is a feature that allows you to extract properties from an object and store them directly into variables.

//makes the code shorter and more readable.

//syntax => const { propertyName:customised_name } = object;

const user = {
    username: "Mridul",
    age: 20
};

const { username:name, age } = user; 

console.log(name); // Mridul
console.log(age);  // 20


