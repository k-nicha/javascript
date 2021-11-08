// SCOPE - OPSEG
// LOOPS - CIKLUSI - JAMKI
// novi tipovi na promenlivi


// global scope
// your code goes here


let a = 1 // do 10
while (a <= 10) {
  // local scope
  // code
  
  if (a % 2 !== 0) {
    console.log(a)
  }
  
  a = a + 1
}


let b = 20;
do {
  // ovoj scope garantira barem edno izvrsuvanje
  console.log(b)
  b = b + 1
} while (b <= 10)

for (let c = 1; c <= 10; c++) {
  // iteration
  console.log(c)
}


