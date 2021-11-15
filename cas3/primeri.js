let mixedArray = [
  "Orange",
  300,
  "Banana",
  100, "Kale", "Chocolate", 60, 50
]

let products = []
let prices = []

for (element of mixedArray) {
  if (typeof element === "string") {
    products = [...products, element]
  } else if (typeof element === "number") {
    prices = [...prices, element]
  }
}

console.log(products, prices)


let niza = [
  ['a', 'b'],
  ['c', 'd'],
  ['e', 'f', 'g'],
  ['h']
]

let rezultat = []

for (let el of niza) {
  if (el instanceof Array) rezultat = [...rezultat, ...el]
  else rezultat = [...rezultat, el]
}

console.log(rezultat)

// da ispecatat korisnickite iminja na onie korisnici
// koi nemaat validna email adresa
const users = [
  { username: 'koco', password: 123, email: 'koco@text.com' },
  { username: 'stefan', password: 456, email: '' },
  { username: 'nikola', password: 789, email: 'n@test.com' },
  { username: 'aleksandar', password: 000, email: '' }
]

for (let user of users) {
  const { email, username } = user
  if (!email) {
    console.log(username + ' nema validna email adresa')
  }
}


const student1 = {
  index: 12353464,
  name: 'Koco',
  year: 2010,
  grades: {
    math: 10,
    physics: 9,
    chemistry: 8
  }
}

const student2 = {
  index: 78976,
  name: 'Alek',
  year: 2011,
  grades: {
    math: 8,
    physics: 6,
    chemistry: 7
  }
}

const student3 = {
  index: 0990,
  name: 'Angela',
  year: 2009,
  grades: {
    math: 10,
    physics: 6,
    chemistry: 10
  }
}

// Da se najdat prosecnite ocenki od sekoj od trite predmeti
const students = [student1, student2, student3]

let mathTotal = 0;
let physTotal = 0;
let chemTotal = 0;
const { length } = students

for (let i = 0; i < length; i++) {
  const student = students[i]
  const { math, physics, chemistry } = student.grades
  mathTotal += math
  physTotal += physics
  chemTotal += chemistry
}

console.log('Math average: ' + (mathTotal / length) )
console.log('Physics average: ' + (physTotal / length) )
console.log('Chemistry average: ' + (chemTotal / length) )
