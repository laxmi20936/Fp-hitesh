const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// const a = marvel_heros.push(dc_heros)
const b = marvel_heros.concat(1)
// console.log(b,marvel_heros, dc_heros);

const data = [...marvel_heros, ...dc_heros, "lll"]
// console.log(data);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// console.log(another_array.flat(Infinity));

const abc = Array.isArray([1,2,3])
const abc1 = Array.isArray("laxmi")
// console.log(abc1);


const abcd = Array.from("1")
// console.log(abcd);

console.log(Array.of({name:"laxm", age:19}))
