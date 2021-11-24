class Book {
  // klasite sodrzat fields, properties i methods

  constructor (isbn, name, author, year) {
    // isbn is a field
    // isbn is private, cannot be changed
    let ISBN = isbn
    this.getIsbn = () => { return ISBN }
    this.setIsbn = (newIsbn) => { ISBN = newIsbn }
    // property binding
    this.name = name
    this.author = author
    this.year = year
  }

  getName () {
    return this.name
  }
}


// objektot kniga e instanca od klasata BOOK
const Kniga1 = new Book(
  100,
  'Crime and punishment',
  'Fyodor Dostoyevsky',
  1786)

console.log(Kniga1)
console.log(Kniga1.name)
console.log(Kniga1.getName())
Kniga1.year = 2000
console.log(Kniga1.year)

Kniga1.setIsbn(200)
console.log(Kniga1.getIsbn())


class Rectangle {
  constructor (width, height) {
    this.width = width
    this.height = height
  }

  // getter
  get area () {
    return this.width * this.height
  }

}

const Rect1 = new Rectangle(30, 21)
const area = Rect1.area

console.log(area)
