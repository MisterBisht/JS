function greet()
{
    console.log("hello duniya !!");
    
}

greet();

function greet2(name)
{
    console.log(`hello ${name}`);
    
}

greet2("Mridul")


//multiple parameters
function add(a, b) {
    console.log(a + b);
}

add(10, 20);

//difference between console.log() and return function 

function addtwonumbers(num1,num2)
{
    console.log(num1+num2);
}


const result  = addtwonumbers(3,5)

                                // 8
console.log("Result: ",result); // Result: undefined 


function addtwonumbers2(num1,num2)
{
    let result = num1+num2
    return result
    console.log("hello"); //yeh execute hi nhi hoga //return ke baad function me koi code kaam nhi karta
}

const result2 = addtwonumbers2(3,7)
console.log("Result: ",result2); //Result:  10

function loginuserMessage(username) {
    if (username === undefined) {
        return "Please enter a username bitch!";
    }

    return `${username} just logged in`;
}

console.log(loginuserMessage("Mridul"));
console.log(loginuserMessage());