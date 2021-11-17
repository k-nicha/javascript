const animal = {
  type: "Dog",
  race: "Pitbull",
  age: "10"
}

for (let property in animal) {
  console.log(animal[property]) 
  // animal["type"], animal["race"], animal["age"]
  // animal.type, animal.race, animal.age
}

const books = [
  {
    isbn: 10,
    name: 'Crime and punishment',
    author: 'Fyodor Dostoyevsky',
    year: '1866',
    available: true
  },
  {
    isbn: 20,
    name: 'Harry Potter',
    author: 'J.K. Rowling',
    year: '1997',
    available: false
  },
  {
    isbn: 30,
    name: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: '1937',
    available: false
  },
  {
    isbn: 40,
    name: 'Dune',
    author: 'Frank Herbert',
    year: '1965',
    available: true,
    numberOfpages: function () {
      
    }
  }
]

let availableBooks = 'Momentalno na zaliha: \n'
let nonAvailableBooks = 'Momentalno ne se na zaliha: \n'
// `TEXT ${promenliva}` = 'TEXT ' + promenliva
for (const book of books) {
  const bookTitle = `${book.author} - ${book.name}, \n`
  if (book.available) {
    availableBooks += bookTitle
  } else {
    nonAvailableBooks += bookTitle
  }

  // Namesto so IF statement moze da se napise i vaka:
  // book.available ? availableBooks += bookTitle : nonAvailableBooks += bookTitle
}

console.log(availableBooks)
console.log(nonAvailableBooks)

// 1 Momentalno na zaliha: ime_na_kniga + avtor, ime_kniga + avtor
// 2 Ne se na zaliha: ime_na_kniga + avtor

