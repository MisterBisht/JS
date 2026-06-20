
//add to cart basic code 
let cart = [];

function addToCart(itemName, price) {
    cart.push({
        name: itemName,
        price: price
    });

    // console.log(`${itemName} added to cart - ₹${price}`);
}

addToCart("Laptop", 50000);
addToCart("Mouse", 1000);
addToCart("Keyboard", 2000);

// console.log("\nCart Items:");
// console.log(cart);

let totalPrice = 0;

for (let item of cart) {
    totalPrice += item.price;
}

// console.log(`\nTotal Price: ₹${totalPrice}`);

//_________________________________________________________________________

//Tut by chai and code 

function calculateCartPrice(...num1)
{
    return num1
}

console.log(calculateCartPrice(200,400,500)) //200 (without Rest Operator)
//[ 200, 400, 500 ] (with rest operator)



// function calculateCartPrice2(val1,val2,...num1,)
// {
//     return num1
// }
// console.log(calculateCartPrice2(200,400,500,2000))
// //[500,2000] //since 200 = val1 and 400 = val2

const user = {
    username: "Mridul",
    price: 10000000
}

function handleobject(anyobject)  //anyobject is a parameter 
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleobject(user)

handleobject({
    username: "Raj",  //parameter me new object banake daal diya
    price: 10

})


const myNewArray = [200,300,100,400]
function returnSecondValue(getArray) //getArray is a parameter 
{
    return getArray[1]
}

console.log(returnSecondValue(myNewArray)); //300
console.log(returnSecondValue([2000,3223,393,44]));//3223
//parameter me new array banake daal diya

