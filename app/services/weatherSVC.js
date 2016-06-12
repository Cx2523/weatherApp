angular.module('weatherApp').service('weatherSVC',function($http){
  this.getWeather = function(city){
    //console.log("This is the city passed into the weatherSVC: ");
    //console.log(city);
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',USA&units=imperial&APPID=e60a91d360feac99086ba48ebf2580b2';
    console.log(url);
    return $http({
      method: 'GET',
      url: url
    }).then(function(response){
      //console.log(response);
      return response;
    });
  };
  //this.getWeather();

});

//api.openweathermap.org/data/2.5/weather?q={city name},{country code}
//api key: e60a91d360feac99086ba48ebf2580b2
