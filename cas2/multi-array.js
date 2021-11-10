const animals = ["Dog", "Parrot", "Turtle", "Giraffe", "Elephant"]
const foods = ["Meat", "Seeds", 'Leaves']

const result = [
  'Dog', 'Meat',
  'Parrot', 'Seeds',
  'Turtle', 'Leaves'
]

// animals[0], foods[0], animals[1], foods[1] .....

const res = []

const arrayToIterate = (animals.length > foods.length) ? animals: foods

for (let i = 0; i < arrayToIterate.length; i++) {
  if (animals[i]) {
    res.push(animals[i])
  }
  if (foods[i]) {
    res.push(foods[i])
  }
  // res.push(animals[i], foods[i])
}

console.log(res)

// da se najde prosecnata temperatura vo ovie 6 dena
// ZA DOMA: 
// da se najde natopliot i najstudeniot den
const temp = [12, 13, 20, 31, 41, 17]

let sum = 0
let average = 0
for (let index = 0; index < temp.length; index++) {
  sum = sum + temp[index]
}
average = sum / temp.length
console.log(average)

