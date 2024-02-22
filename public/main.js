const genericSearchDisplay = document.querySelector('.generic-search')
const genericForm = document.querySelector('#generic-form')
const userInput = document.querySelector('#user-input')

// Fetch data from API
const fetch = async (param) => {
  const url = `/?i=${param}`

  const res = await fetch(url)
  const data = await res.json()

  if (data.cod === '404') {
    alert('Page not found')
    return
  }

  if (data.cod === 401) {
    alert('Invalid API Key')
    return
  }

  const displayData = {
  //  city: data.name,
  }

  // addToDOM(displayData)
}

// Add display data to DOM
const addResponseToDOM = (data) => {
//   genericSearchDisplay.innerHTML = `
//     <h1>Weather in ${data.city}</h1>
//     <h2>${data.temp} &deg;F</h2>
//   `
    userInput.value = ''
}

// Event listener for form submission
genericForm.addEventListener('submit', (e) => {
  e.preventDefault()

  if (userInput.value === '') {
    alert('Please enter a search query')
  } else {
    fetch(userInput.value)
  }
})

// Initial fetch
fetch('Whatever')