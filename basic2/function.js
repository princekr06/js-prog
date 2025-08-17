//function

function saymyname(){
   console.log("p") ;   
   console.log("r");
   console.log("i");
   console.log("n");
   console.log("c") ;
   console.log("e") ;   

}

//saymyname()// imortant to give "()" of else it will not call the function
//console.log(saymyname)

//function add(num1,num2){
//     console.log(num1+num2)
//}

//add(4,7)

//console.log("result" , add(8,6)) // it will pass undefine as the function is not returning any value 
 // for that we will
  
 function add(num1,num2){
     result =num1+num2;
     return result
}
console.log("result" , add(8,6)) 


function  loginusermessage(username){
    if (username===undefined){
        console.log("enter a username ")
        return
    }
    return`${username} just logged in`
}

console.log(loginusermessage("prince"))
console.log(loginusermessage())

function calcardprice(...n1){
    return n1
}

console.log(calcardprice(12,354,77,800))

const another_user={
    name:"prince",
    email:"prince.com"
}

function handleobject(anyobject){
    console.log(`user name is ${anyobject.name} and his email is ${anyobject.email}`)

}

//handleobject(another_user) // it will call from another_user because of anyobject

handleobject({
    name:"hitesh",
    email:"hitesh.com"
})//object kabhi bhe bana ker bhe call kiya ja saktsa  ha 

const mynewarray=[200,400,30,50]

function returnsecvalue (getarray){
    return getarray[1]
}

console.log(returnsecvalue(mynewarray))
console.log(returnsecvalue([2,4,5,8]))
