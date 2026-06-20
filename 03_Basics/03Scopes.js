/*
Scope determines where a variable can be accessed in your code.
Think of scope as the visibility area of a variable. */

//{} = scope 

//Basics 

if (true){
    let a = 10
    const b = 20
    var c = 30 //has problem with scope //hence can't use 
    console.log("INNER: ",a); //"INNER: 10"
}

//console.log(a); as 'a,b' block scoped hai 
// console.log(b);
// both return reference error 

console.log(c);
//30 //yeh output dega since var hai 
//var block scoped nhi hota 





//1). Global Scope

//A variable declared outside all functions and blocks is in the global scope.

let username = "Mridul"; //global scope

function greet()
{
    console.log(username);
}
greet() //Mridul
console.log(username);//Mridul

//Accessible everywhere.
//__________________________________________________________________
//2) Function Scope

//Variables declared inside a function can only be used inside that function.

function login() {
    let password = "12345"; //Function scope

    console.log(password);
}

login(); // 12345

// console.log(password); //ReferenceError: password is not defined

//____________________________________________________________________

//3) Block scope 
// {  //block }

//Variables declared using let and const are block-scoped.

{
    let c = 110;
    const d = 220;

    console.log(c); //110 
    console.log(d); //220
}

// console.log(c)
// console.log(d) //both will return error since block scoped 

//only var is not block scoped 


//________________________________________________________________________

//4) Nested Scope 

//Functions can access variables from outer scopes.
//Inner function can access outer variables.

let globaluser = "Mridul";

function one() {
    let website = "YouTube";

    function two() {
        // console.log(globaluser); //Mridul
        // console.log(website); //Youtube 
    }

    two();
}

one();

//child scope cannot be accesed outside 

/*
function one() {
    let username = "Mridul";

    function two() {
        let secret = "123";

        console.log(username); 
    }
     console.log(secret); //yeh dikkat de rha 
     two(); 

    
}

one(); //reference error 
 */

//_____________________________________________________________________

//Lexical Scope 

//Scope depends on where functions are written, not where they are called.

function outer() {
    let username = "Mridul";

    function inner() {
        console.log(username);
    }

    inner();
}

outer(); //Mridul


//inner() remembers the scope in which it was created.

