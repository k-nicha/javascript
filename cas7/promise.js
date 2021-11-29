// eventual execution

// mock request
function connect () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Could not connect')
    }, 3000)
  })
}

async function greeting (name) {
  console.log(`Welcome ${name}!`)

  console.log('Connecting...')

  try {
    const response = await connect()
    console.log(response)
    console.log('Here you can browse our courses')
  } catch (err) {
    console.log(err)
  } finally {
    // this block is executed no matter the outcome of the try-catch
  }

}

greeting('Koco')

// promise chaining
connect()
  .then((response) => { console.log(response) })
  .catch(err => { console.log(err) })
