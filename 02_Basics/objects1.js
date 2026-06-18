//objects are key:value pairs 
// its an non primitive data type 

//How to create Object 

//1) object literals (Most Used)

const mySym = Symbol("M");

const student = {
  name: "Mridul",
   mySym: "M",
  [mySym]: Symbol("M"), //isko bhi method 2 se hi access kar sakte
  "Full name": "Mridul Bisht", //isko method 2 se hi access kar sakte
  age: 20,
  course: "CSE",
  email:"s24cseu0208@bennett.edu.in",
  isloggedin: false,
  lastloginDays: ["Monday","Saturday"],
  blahblah: "hehehehe"

};
//____________________________________________________________________
//acessing object

//method1
console.log(student.course); //CSE
//method2 
console.log(student["email"]) //"s24cseu0208@bennett.edu.in"
console.log(student["Full name"]) //Mridul Bisht"
// Kab bracket use kare? => jab key dynamic ho ya space/special char ho
//[V Imp]


console.log(typeof student.mySym)//string //but its an symbol
//we need to write like this[mySym] in bracket so it recognise as symbol

console.log(student[mySym]);//symbol(M)
console.log(typeof student[mySym]) //Symbol
//________________________________________________________________

//adding property 
student.state = "Uttrakhand"
console.log(student.state)

//deleting property
delete student.blahblah;
console.log(student.blahblah); //undefined
//_______________________________________________________________
//Object Freeze
student.email = "bishtmridul520@gmail.com"//changed
student.age = 19; //changed

console.log(student.email,student.age)// "bishtmridul520@gmail.com 19

Object.freeze(student) //from this point no more changes happen in object student

student.course = "Mechanics" //will not change
console.log(student.course) //CSE


//____________________________________________________________________

const emp = {
    name:"Raj",
    Boss_name:"Mridul",
    department:"PA"
}

emp.greeting = function () {
    console.log(`Hello Boss, ${this.Boss_name}, sir me aapka sevak hu 🙏`);
};

emp.greeting()


//2) new Object() method //usually avoided as less readable

let car = new Object();
car.brand = "Toyota";
car.model = "Innova";
