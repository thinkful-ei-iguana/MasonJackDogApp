

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
  console.log( responseJson);
  //replace the existing image with the new one
  let finalString = '';
  console.log(responseJson.message.length);
  for(let i = 0; i < responseJson.message.length; i++){
    console.log('test');
    //console.log(responseJson.message[i]);
    finalString += `<img src="${responseJson.message[i]}" class="results-img">`;
  }
  console.log(finalString);
  $('.dogTown').html(finalString);
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