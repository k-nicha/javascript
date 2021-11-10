// imame niza od random broevi, da se ispecatat site broevi sto se parni

const niza = [1, 5, 17, 90, 44, 67, 157]
// ispecati go prviot element od nizata ako e paren (delliv so dva)
if (niza[0] % 2 === 0) { console.log(niza[0]) }


// 0 ... < 7
let vkupno = 0;
for (let index = 0; index < niza.length; index++) {
  if (niza[index] % 2 === 0) {
    console.log(niza[index])
    vkupno++
  }
}
console.log(vkupno)

let nova = []
for (let index = 0; index < niza.length; index++) {
  if (niza[index] % 2 !== 0) {
    nova.push(niza[index])
  }
}
console.log(nova, nova.length)




const broevi = [89, 12, 55, 4, 12, 89, 89, 0, 0, 7, 7]
[89, 0, 7]

let nova = []
for (let index = 0; index < broevi.length; index++) {
  for (let pom = 0; pom < broevi.length; pom++) {
    if (index !== pom) {
      if (broevi[index] === broevi[pom]) {
        nova.push(broevi[index])
      }
    }
  }
}

console.log(nova)


