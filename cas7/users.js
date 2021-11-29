async function getData () {
  let users = []
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    // JSON format = javascript object notation
    users = await response.json()
  } catch (err) {
    alert(err)
    users = []
  } finally {
    console.log(users.map(user => user.name ))
  }
  
}

getData()


