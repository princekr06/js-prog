//const tinder_user = new Object()

const tinderuser={}

tinderuser.id= "13467"
tinderuser.name ="prince"
tinderuser.isloggedin=false

console.log(tinderuser)

const regularuser={
    email:"peince@gmail.com",
    fullname:{
        userfullname:{
            firstname: "prince",
            lastname:"ram"
        }   
    }
}

console.log(regularuser.fullname.userfullname.lastname)

const obj1 = { a:1, b: 2,c:3}
const obj2 = { d:1, e: 2,f:3}
const obj3 = { g:1, h: 2,i:3}
 
console.log( obj1 , obj2)

//const obj4 = Object.assign(obj1,obj3)
//console.log(obj4)

const obj4 = { ...obj1,...obj2}
console.log(obj4)

const user=[
    {
        id: "123",
        email:"prince.con"
    },
     {
        id: "123",
        email:"prince.con"
    },
     {
        id: "123",
        email:"prince,con"
    },
] 

console.log(user[1].email)
console.log(tinderuser )

console.log(Object.keys(tinderuser));// it will  return all the keys in a form of array 
console.log(Object.values(tinderuser));// it will  return all the values in a form of array 

const course={
    course:"js in english",
    price:"999",
    courseinstructor:"prince "
}

console.log(course.courseinstructor)

const {courseinstructor } = course
console.log(courseinstructor)

const {courseinstructor:instructor } = course// call by instructor (object reconstructure)
console.log(instructor)