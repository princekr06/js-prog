//singleton 
// jab constructor ka tarha object bana ga toh singleton bana ga oor jab literal 
//ka tarha bana ga toh singleton nahi bana ga 

 // object literals 

const mySym= symbol("key1")
const jsusers={
    name:"prince",
    [mySym]:"key1",
    age:20,
    location :"meghalaya",
    email:"princera@gmail.com",
    isloggedin:false,
    lastloggedin:["monday","saturday"]
} 

console.log(jsusers.email)
console.log(jsusers["email"])//more used as object key are stored as string and when the key is under "" the we cannot call by dot(.)

console.log(jsusers.mySym) // here it will call but not as symbol but as string so ..
console.log(jsusers[mySym]) // and mention the key in the object section as [mySym]

jsusers.email="prince@gmail.com" // it will upgrate the change 
Object.freeze(jsusers) // no more changes allowed after this 

console.log(jsusers)