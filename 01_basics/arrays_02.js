const marvel_heroes = ["Ironman", "Thor", "CaptainAmerica"]
const dc_heroes = ["Batman", "Superman", "Flash"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);

const allHeroes = marvel_heroes.concat(dc_heroes)

// console.log(allHeroes);


const all_new_heros = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6, [7, 8, 9, [1, 12, 22, 23, 12]]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Kuldeep"));
console.log(Array.from("Kuldeep"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));