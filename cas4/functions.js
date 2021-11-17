// So funkcii go delime kodot na razlicni logicki edinici
// So funkciite mozeme da kreirame re-usable kod
// Funkciite moze da gi povikuvame po potreba

// Definicija / deklaracija (definition / declaration)
function helloWorld () {
  // scope na f-jata
  let greeting = 'HELLO WORLD!'
  console.log(greeting)
}

const helloWorld2 = () => {
  let greeting = 'HELLO WORLD!'
  console.log(greeting)
}


// Povik / izvrsuvanje (function call / function execution)
helloWorld()
helloWorld2()

const a = helloWorld
a()

// parametri na f-ja i povratna vrednost na f-ja
function sum (param1, param2) {
  // param1 = 6
  // param2 = 7
  // return 6 + 7
  const result = param1 + param2
  return result
}

// koga f-jata se povikuva, treba da dademe vrednost za sekoj od parametrite
// ako za nekoj parametar ne ispratime vrednost, toj ke bide undefined
const res = sum(6, 7)
console.log(res)



