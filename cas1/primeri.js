let a = 1, zbir = 0

while (a < 11) {
  zbir = zbir + a
  a++
}

console.log(zbir)


for (let pocetok = 1, kraj = 10; pocetok <= 10; pocetok++) {
  console.log(`${pocetok} + ${kraj} = ${pocetok + kraj}`);
  kraj--;
}


let rezultat = 1;
for (let n = 6; n >= 1; n--) {
  rezultat = rezultat * n;
  console.log(n, " ", rezultat)
}

console.log(rezultat)