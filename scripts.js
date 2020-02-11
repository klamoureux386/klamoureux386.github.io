var request = new XMLHttpRequest()

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      console.log(movie.title)
    })
  } else {
    console.log('error')
  }
}

request.send()








/*
fetch('https://ghibliapi.herokuapp.com/films')
  .then(response => {
    return response.json()
  })
 
  .then(data => {
    // Work with JSON data here
    
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
  data.forEach(movie => {
    console.log(movie.title)
  })
  } 
  else {
    console.log('error')
  }
    
    console.log(data)
  })
  .catch(err => {
    // Do something for an error here
  })
  */
