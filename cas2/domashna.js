const temperatures = [14, 15, 20, 23, 30, 31]

let highest = temperatures[0]
let lowest = temperatures[0]

for(let temp of temperatures) { // for (let i = 0; i < temperatures.length; i++) { temp = temperatures[i]}
  if (temp > highest) {
    highest = temp
  }
  if (temp < lowest) {
    lowest = temp
  }
  console.log("Position: ", temperatures.indexOf(temp))
}

console.log(highest, lowest)