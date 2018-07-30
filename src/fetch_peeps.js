function seePeeps() {
fetch('https://chitter-backend-api.herokuapp.com/peeps')
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log(response)
  })
  };
