/*
Imame klasa produkt koj sto e definiran so ime i cena
i klasa shopping cart koja sto sodrzi lista(niza) od produkti

Klasata shopping cart treba da sodrzi metod koj sto ke ni 
ja presmeta vkupnata cena na site produkti koi gi sodrzi 


*/

class Product {
  constructor (name, price) {
    this.name = name
    this.price = price
  }
}

class ShoppingCart {
  constructor (products) {
    this.products = products
  }

  get totalPrice () {
    const total = this.products.reduce((prev, curr) => {
      return prev + curr.price
    }, 0)

    return total
  }
}

const Milk = new Product('milk', 40)
const Bread = new Product('bread', 20)

const Breakfast = new ShoppingCart([Milk, Bread])

console.log(Breakfast.totalPrice)

