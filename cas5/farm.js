// Imame zivotni na farma. Imame niza od objekti, kade sto sekoj objekt e zivotno.
// Sekoe zivotno si ima svoe property broj na noze, i plus drugi svojstva
// So pomosh na posebna funkcija, farmerot treba da izbroi kolku vkupno noze ima vo farmata.

const myAnimals = [
  { type: 'Horse', numberOfLegs: 4 },
  { type: 'Sheep', numberOfLegs: 4 },
  { type: 'Chicken', numberOfLegs: 2 },
  { type: 'Fish', numberOfLegs: 0 },
  { type: 'Dog', age: 7, numberOfLegs: 4 },
  { type: 'Goat', numberOfLegs: 4}
]

const calculateLegs = (animals) => {
  let allLegs = 0
  // foreach kako parametar prima funkcija
  // taa funkcija se izvrsuva za sekoj element od iteracijata na nizata
  animals.forEach((animal) => {
    // sekoj poseben objekt od nizata e vo promenlivata animal
    allLegs = allLegs + (animal.numberOfLegs || 0)
  })

  return allLegs
}

const totalLegs = calculateLegs(myAnimals)
console.log(`Total of ${totalLegs} legs found`)

// Da se ispecati niza od site zivotni vo farmata sto imaat cetiri ili povekje noze

const getAllAnimalsWithMoreThan4Legs = (animals) => {
  const filteredAnimals = animals.filter((animal) => {
    return animal.numberOfLegs >= 4
  })

  const animalNames = filteredAnimals.map((animal) => {
    return animal.type
  })

  return animalNames
}

const fourLegged = getAllAnimalsWithMoreThan4Legs(myAnimals)

console.log(`Animals with 4 legs: ${fourLegged}`)


