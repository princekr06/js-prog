// array

const myary=[1,2,3,4,true,"hitesh"]
console.log(myary[2])

const new_ary= new Array(1,2,3,4)

// method array
 
new_ary.push(6)
new_ary.pop()
new_ary.unshift(8)
new_ary.shift()

console.log(new_ary.indexOf(3));
console.log(new_ary.includes(3));

console.log(new_ary)
  

const ath_ary= new_ary.join()
console.log(ath_ary)
