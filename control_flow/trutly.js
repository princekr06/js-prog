
const user_email=[]

if(user_email){
    console.log("ok")
} else {
    console.log("not ok")
}
 const another_user_email= ""

 if (another_user_email){
    console.log("ok")
 } else{
    console.log("not ok")
 }

 // falsy value

 // false,0,-0,BigInt 0n, "",null,undefine,NaN


 if(user_email.length ===0){
    console.log("it is an empty array")
 } 

 const obj_no={}

 if (Object.keys(obj_no).length===0){
    console.log("empty object")
 }

 //  nullish coalescing operatoe (??) : null or undefine

 let vel1 , vel2;

 vel1= 5 ?? 10;
 vel2 = null ?? 10

 console.log( `vel1 is ${vel1} , vel2 is ${vel2}`)

 //ternary operator 

// condition ? true :false
 
const isteaprice =100

isteaprice>=80 ? console.log("true") : console.log ("false") 