// Koga ke se klikne Login buttonot,
// Da se zemat vnesenite vrednosti za username i password

// cretes the header element
const header = document.createElement('h1')
const body = document.getElementsByTagName('body')[0] // vrakja niza od site pronajdeni elementi so zadadeniot tag name
const form = document.getElementById('form')
const logoutButton = document.createElement('button')
logoutButton.innerText = 'Logout'
logoutButton.onclick = logout

const usernameErr = document.createElement('p')
    usernameErr.innerText = 'Username is a mandatory field'
    usernameErr.style = "color: red;"

const passwordErr = document.createElement('p')
    passwordErr.innerText = 'Password is a mandatory field'
    passwordErr.style = "color: red;"

const usernameEl = document.getElementById('username')
const passwordEl = document.getElementById('password')

function login () {
  // DOM variable
  const username = usernameEl.value
  const password = passwordEl.value

  sessionStorage.setItem('username', username)
  sessionStorage.setItem('password', password)

  if (!username) {
    usernameEl.insertAdjacentElement('afterend', usernameErr)
    return
  }
  if (!password) {
    passwordEl.insertAdjacentElement('afterend', passwordErr)
    return
  }

  window.location.href = "./home.html"
  // remove the form if the user is logged in
  body.removeChild(form)

  body.append(logoutButton)
}

function logout () {
  body.removeChild(header)
  body.removeChild(logoutButton)
  body.appendChild(form)
  document.getElementById('username').value = ""
  document.getElementById('password').value = ""
}


function disablePageReload (event) {
  // the default onsubmit form handler reloads the whole page
  // with preventDefault() we can disable that behaviour
  event.preventDefault()
}

function usernameChanged (event) {
  if (event.target.value && usernameErr !== null) {
    form.removeChild(usernameErr)
  }
}

function passwordChanged (event) {
  const { value } = event.target
  if (!value.includes('!') || !value.includes('.')) {
    passwordErr.innerText = 'Password format is invalid (! .)'
    passwordEl.insertAdjacentElement('afterend', passwordErr)
  } else {
    form.removeChild(passwordErr)
  }
}
