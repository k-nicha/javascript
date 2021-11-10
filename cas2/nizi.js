// NIZI - ARRAY - LIST(java)

const a = 5
const b = 6


const broevi = [a, b] // console.log() = [5, 6]

const denovi = [
  "ponedelnik", // pozicija(index) 0
  "vtornik", // pozicija(index) 1
  "sreda" // pozicija(index) 2
]


denovi[3] = "cetvrtok"
denovi[4] = "petok"
denovi[5] = "sabota"
denovi[6] = "nedela"

denovi.push("nedela")

const izbrisan = denovi.pop()

denovi.shift()
denovi.unshift("Poceten")


console.log(denovi)