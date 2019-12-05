function getWeather(searchQuery) {
  var url = "https://api.openweathermap.org/data/2.5/weather?q="+searchQuery+"&units=imperial&APPID="+apiKey;

  $(".city").text("");
  $(".country").text("");
  $(".conditions").text("");
  $(".temp").text("");
  $(".pressure").text("");
  $(".wind").text("");
  

  $.ajax(url,{success: function(data){
    $(".city").text("City: "+data.name);
    $(".country").text("Country ID: "+data.sys.country);
    $(".conditions").text("Conditions: "+data.weather.main);
    $(".temp").text("Temperature: "+data.main.temp+" *F");
    $(".pressure").text("Pressure: "+data.main.pressure+" hPa");
    $(".wind").text("Wind Speed: "+data.wind.speed+" m/h");
  }, error: function(error){
    $(".error-message").text("Please check for spelling errors and try again");
  }})
}

function searchWeather(){
  var searchQuery = $(".search").val();
  getWeather(searchQuery);
}

