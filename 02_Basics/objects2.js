const user = {};
user.id = "123abc"
user.name = "Mridul"
user.isLoggedIn = false

// console.log(user);
//___________________________________________________
//nested object
const regularUser = {
    email: "xyz@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Mridul",
            lastname: "Bisht",
        }
    },
    address: {
        state:"Uttrakhand",
        city: "Nainital" 
    }
}

// console.log(regularUser.address.city);//Nainital
// console.log(regularUser.fullname.userfullname.firstname)//Mridul

//_________________________________________________

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {obj1,obj2} 
console.log(obj3);
//{obj1:{1: "a", 2: "b"}, obj2:{3: "a", 4: "b"}}

//better
const obj4 ={...obj1,...obj2};
console.log(obj4); 
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = Object.assign({},obj1,obj2)
console.log(obj5);
////{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//Object.assign() is a built-in JavaScript method used to copy properties from one or more source objects into a target object.

//Object.assign(target, source1, source2, source3, ...)



const user2 = [
    {
        id: 1,
        email: "xyz@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "k@gmail.com"
    },
]


console.log(user2[0].email);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

