

function getDogImage(number) {
  if (typeof number === Number) {
    fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
      .then(response => response.json())
      .then(responseJson => 
        displayResults(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
  } else {
    fetch('https://dog.ceo/api/breeds/image/random/3')
      .then(response => response.json())
      .then(responseJson => 
        displayResults(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
  }
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  responseJson.forEach()
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  );
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let dogNumber = Number($(event.currentTarget).find('#dogNumber').val());
    console.log(dogNumber);
    getDogImage(dogNumber);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});