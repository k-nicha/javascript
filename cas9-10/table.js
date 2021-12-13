const displayTableRows = () => {
  const books = JSON.parse(localStorage.getItem('books'))
  if (!books) {
    return
  }

  const booksTable = document.getElementById('booksTable')
  const tableBody = booksTable.querySelector('tbody#allBooks')
  if (tableBody) {
    booksTable.removeChild(tableBody)
  }

  const allBooks = document.createElement('tbody')
  allBooks.id = 'allBooks'
  booksTable.appendChild(allBooks)

  books.forEach((book, index) => {

    const row = document.createElement('tr')
    const cell1 = document.createElement('td')
    cell1.innerText = book.isbn

    const cell2 = document.createElement('td')
    cell2.innerText = book.name

    const cell3 = document.createElement('td')
    cell3.innerText = book.author

    const cell4 = document.createElement('td')
    cell4.innerText = book.year

    const editButton = document.createElement('button')
    editButton.innerText = 'Edit'
    editButton.addEventListener('click', () => editRow(book, index))

    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete'
    deleteButton.addEventListener('click', () => deleteRow(book))

    row.appendChild(cell1)
    row.appendChild(cell2)
    row.appendChild(cell3)
    row.appendChild(cell4)
    row.appendChild(editButton)
    row.appendChild(deleteButton)
    allBooks.appendChild(row)
  })

  const buttons = document.querySelectorAll('button')
  buttons.forEach(btn => {
    if (!btn.className) {
      btn.className = 'btn btn-secondary'
      btn.style = "background-color: #6c757d !important"
    }
  })

}

const editRow = (book, index) => {
  const isbnInput = document.getElementById('isbn')
  const nameInput = document.getElementById('name')
  const authorInput = document.getElementById('author')
  const yearInput = document.getElementById('year')

  const { isbn, name, author, year } = book

  isbnInput.value = isbn
  nameInput.value = name
  authorInput.value = author
  yearInput.value = year

  const saveButton = document.getElementById('create')

  saveButton.innerText = 'Save'
  saveButton.onclick = () => saveEdit(index)
}

const deleteRow = (book) => {
  // generated in runtime
  const books = JSON.parse(localStorage.getItem('books'))
  const newArray = books.filter(b => b.isbn !== book.isbn)
  localStorage.setItem('books', JSON.stringify(newArray))
  displayTableRows()
}


const saveEdit = (index) => {
  const books = JSON.parse(localStorage.getItem('books'))

  const isbn = document.getElementById('isbn').value
  const name = document.getElementById('name').value
  const author = document.getElementById('author').value
  const year = document.getElementById('year').value

  books[index] = { isbn, name, author, year, available: true }

  localStorage.setItem('books', JSON.stringify(books))
  displayTableRows()
}

displayTableRows()