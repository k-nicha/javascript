const animals = ['Dog', 'Cat', 'Camel']
const numbers = [5, 6, 7, 8 ,9 ]

// animals.pop()
// animals.push('Elephant')
// animals.shift()

console.log(numbers.slice(1, 3))

numbers.splice(1, 1, 200, 300, 400, 500)
console.log(numbers)

// spread operator
console.log(...animals)

const nova = [...animals, ...numbers] // Dog, cat, camel, 5, 6, 7, 8, 9

const moreAnimals = ['Zebra', ...animals, 'Parrot']

let [first, second, ...elements] = moreAnimals
console.log(first, second)
console.log(elements)




