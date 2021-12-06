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

  const isbn = document.getElementById('isbn').value
  const name = document.getElementById('name').value
  const author = document.getElementById('author').value
  const year = document.getElementById('year').value

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

  displayTableRows()
}
  

const checkIfExists = (isbn) => {
  const books = JSON.parse(localStorage.getItem('books'))
  if (books && books.filter(book => book.isbn === isbn).length) {
    console.log('error - the book already exists')
    return
  }

  return false
}