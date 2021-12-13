class Book {
  constructor(isbn, name, author, year) {
      this.isbn = isbn
      this.name = name
      this.author = author
      this.year = year
    }
}

const addNewBook = () => {
  // gi zemame vrednostite od HTML formata 
  // instancirame objekt od klasata Book so vrednostite sto sme gi zemale
  // objektot od tip Book go zacuvuvame vo local storage

  const isbnElement = document.getElementById('isbn')
  const nameElement = document.getElementById('name')
  const authorElement = document.getElementById('author')
  const yearElement = document.getElementById('year')

  const isbn = isbnElement.value
  const name = nameElement.value
  const author = authorElement.value
  const year = yearElement.value

  const NewBook = new Book(isbn, name, author, year)
  
  const books = JSON.parse(localStorage.getItem('books'))

  if (checkIfExists(isbn)) {
    // the book already exists
    return
  }

  let newBooks = []

  if (books) {
    newBooks = [...books, NewBook]
  } else {
    newBooks = [NewBook]
  }

  localStorage.setItem('books', JSON.stringify(newBooks))

  isbnElement.value = ''
  nameElement.value = ''
  authorElement.value = ''
  yearElement.value = ''

  displayTableRows()
}
  

const checkIfExists = (isbn) => {
  const books = JSON.parse(localStorage.getItem('books'))
  if (books && books.filter(book => book.isbn === isbn).length) {
    console.log('error - the book already exists')
    alert('The book already exists!')
    return true
  }

  return false
}