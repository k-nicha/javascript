async function greeting (name) {
  console.log(`Hello ${name}!`)

  // await waits on the current command to be executed before continuing to the next one 
  // pseudo-code, this does nothing
  await server.request('www.google.com')

}

greeting('Koco')


// the anonymous function sent as a parameter is called a CALLBACK
const myInterval = setInterval(() => {console.log(`Great to have you here!`)}, 2000)


// setTimeout delays the callback execution defined by the amount of miliseconds passed as a second parameter
setTimeout(() => {
  clearInterval(myInterval)
}, 11000)