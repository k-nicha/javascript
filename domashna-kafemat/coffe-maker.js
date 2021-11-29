class CoffeMaker {
  // konstanti
  MIN_WATER = 100
  MIN_MILK = 20
  MIN_COFFEE = 7

  constructor(water, milk, coffee, totalMade) {
    this.water = water
    this.milk = milk
    this.coffee = coffee
    this.totalMade = totalMade
  }

  makeCoffe() {
    // since these are constants, we can deconstruct the object and redeclare them as variables
    // and we can omit writing "this." each time we want to use any of them
    const { MIN_WATER, MIN_MILK, MIN_COFFEE } = this

    // guard clauses in case of error
    if (this.water <= 0) {
      console.log(`Not enough water, missing ${MIN_WATER - this.water} grams`)
      return
    }
    if (this.milk <= 0) {
      console.log(`Not enough milk, missing ${MIN_MILK - this.milk} grams`)
      return
    }
    if (this.coffee <= 0) {
      console.log(`Not enough cofee, missing ${MIN_COFFEE - this.coffee} grams`)
      return
    }

    this.water -= MIN_WATER
    this.milk -= MIN_MILK
    this.coffee -= MIN_COFFEE
    this.totalMade++
    console.log(`Done! Enjoy your coffee! Total cups made today: (${this.totalMade})`)
  }
}

const CM = new CoffeMaker(300, 60, 50, 0)

CM.makeCoffe()
CM.makeCoffe()
CM.makeCoffe()
CM.makeCoffe()