const arr = [1,2,3,4]
// console.log(arr);

const arr2 = new Array(11,12)
// console.log(arr2);

const arr1= [1,3,4,5]
// arr1.push(3,4)
const abc = arr1.shift()
// console.log(arr1);

// console.log(arr1.includes(4));

const abcd = [2,3,4,5,2]
// const ala = abcd.indexOf(5)
// const ala = abcd.join("")
// console.log(ala, abcd);


// slice, splice

const data = [11,2,45,64, 78, 9]
// const data2 = data.slice(-1)
// console.log(data, data2);

const d = [1,3,4,5,7,8]
const f = d.splice(0,5)
// console.log(f);

let arr22 = ['apple', 'banana', 'cherry', 'date' ,"0"]
const m = arr22.splice(1,1)
arr22.splice(1,1,"orange", "kiwi")
arr22.splice(4,0,"mango")
arr22.splice(1,0,"mango00")
console.log(arr22, m);


