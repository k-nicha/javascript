const displayTableRows = () => {
  const books = JSON.parse(localStorage.getItem('books'))
  const allBooks = document.getElementById('allBooks')
  let html = ''

  books.forEach((book, index) => {
    html += `<tr>
      <td>${book.isbn}</td>
      <td>${book.name}</td>
      <td>${book.author}</td>
      <td>${book.year}</td>
      <td>
        <button id="edit" class="btn btn-primary" onclick="${() => editRow(book, index)}">
          Edit
        </button>
        <button id="delete" class="btn btn-danger" onclick="${() => deleteRow(book, index)}">
          Delete
        </button>
      </td>
    </tr>`
  })

  allBooks.innerHTML = html
}

const editRow = (book, i) => {
  console.log('This edits: ' + book, i)
}

const deleteRow = (book, i) => {
  console.log('This deletes: ' + book, i)
}


displayTableRows()