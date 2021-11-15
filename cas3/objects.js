// kluch : vrednost parovi
const covek = { pol: "Maski", visina: 170, tezina: 80, rasa: '' }

console.log(covek.pol)

const mojPol = covek.pol

covek.pol = 'Zenski'
covek.visina = 160

covek.rasa = "Bela"
delete(covek.rasa)

const covek2 = { ...covek, tezina: 60, rasa: 'crna', mbr: 12353246237 }


console.log(covek)
console.log(covek2)
const arrayOfKeys = Object.keys(covek2)
console.log(arrayOfKeys)


const student = {
  index: 12353464,
  name: 'Koco',
  year: 2010,
  grades: {
    math: 10,
    physics: 9,
    chemistry: 8
  }
}

console.log(student.grades.math) // 10

const { grades } = student
const { math } = student.grades

