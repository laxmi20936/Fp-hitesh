const a = {name: "laxmi", ab:{age:901}}
const b = {age:90}
const c = {city: "Mumbai"}

const d = {...a,...b,...c}
// console.log(d.ab.age, "1")
d.ab.age = "klklkllkuuuu"
// console.log(a,d)

const a1 = {name: "laxmi", ab:{age:901}}
const b1 = {age:90}
const c1 = {city: "Mumbai"}

const d1 = Object.assign({}, a1,b1,c1)
// console.log(d1,a1)
d1.ab.age="op"
// console.log(d1, a1)


const a2 = {name: "laxmi", ab:{age:901}}
const b2 = {age:90}
const c2 = {city: "Mumbai"}

const d2 = structuredClone(a2)
console.log(d2)
// d1.ab.age="op"
// console.log(d1, a1)