const arr = ['koco', 'alek', 'ace', 'stefan']

arr.sort((curr, next) => {
  if (curr < next) return -1
  else if (next < curr) return 1
  else return 0
})


console.log(arr)
// 0, 1, -1