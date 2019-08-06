

$(document).ready( startApp );

function startApp(){
getNameData();
getFoodData();
}


function getNameData(){
  var settings = {
    method: 'GET',
    dataType: 'json',
    success: handleNameDataFromServer
  }
  $.ajax(settings)
}

function getFoodData() {
  var settings = {
    url: 'http://localhost:3001/food',
    method: 'GET',
    dataType: 'json',
    success: handleNameDataFromServer
  }
  $.ajax(settings)
}

function handleNameDataFromServer( response ){
  console.log( response );
  for (var index = 0; index < response.length; index++){
    var nameDiv = $('<div>').text( response[index].name );
    $('body').append(nameDiv);
  }
}

function handleFavFoodDataFromServer(response) {
  console.log(response);
}
