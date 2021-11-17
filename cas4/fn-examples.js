// da se napise funkcija koja sto kako parametar prima zborce
// i presmetuva i vrakja kolku karakteri ima vo zborot

function stringLength (zbor) {
  // zbor = "Stefan"
  // return "Stefan".length
  // 6
  return zbor.length
}

const ime = "Stefan"
const len = stringLength(ime)
console.log(`Dolzinata na zborot e: ${len}`)


// da se napravi funkcija koja sto ke go prima momentalniot datum
// kako parametar (const date = new Date()) i ni go vrakja
// reformatiran kako DD/MM/YYYY
const today = new Date()

function formatDate (date) {
  if (!date || !(date instanceof Date)) {
    // guard clause
    return "Nevaliden datum"
  }
  const month = date.getMonth() + 1
  const day = date.getDate()
  const year = date.getFullYear() 
  const formattedDate = `${day}/${month}/${year}`
  return formattedDate
}

const formattedDate = formatDate(today)

console.log(formattedDate)
