function getWeather(searchQuery) {
  var url = "https://api.openweathermap.org/data/2.5/weather?q="+searchQuery+"&units=imperial&APPID="+apiKey;

  $(".city").text("");
  $(".temp").text("");
  $(".pressure").text("");
    $(".wind").text("");

  $.ajax(url,{success: function(data){
    $(".city").text("City: "+data.name);
    $(".temp").text("Temperature: "+data.main.temp+" *F");
    $(".pressure").text("Pressure: "+data.main.pressure+" hPa");
    $(".wind").text("Wind Speed: "+data.wind.speed+" m/h");
  }, error: function(error){
    $(".error-message").text("An error occured");
  }})
}

function searchWeather(){
  var searchQuery = $(".search").val();
  getWeather(searchQuery);
}

