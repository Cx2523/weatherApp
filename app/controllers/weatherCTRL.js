angular.module('weatherApp').controller('weatherCTRL',function($scope,locationSVC,weatherSVC){
  //$scope.test="This is a $scope test";

$scope.showNewCity = false;

  $scope.submitNewCity = function(){
    city = $scope.input;
    weatherSVC.getWeather(city).then(function(weather){
      console.log(weather);
      $scope.inputCityWeather = weather;
      $scope.showNewCity = true;
    });
  };



locationSVC.apiCall().then(function(data){
    //console.log(data);
    $scope.ipAddress = data.data.ip;
    $scope.city = data.data.city;
    return $scope.city;
  }).then(function(city){
    console.log("This is city in the second then in the controller: ");
    console.log(city);
    weatherSVC.getWeather(city).then(function(weather){
      console.log(weather);
      $scope.weather = weather;
    });
  });
  //what if I want to do stuff to $scope.ipAddress outside of the then?
  //how can I get a variable out of the then.
  //console.log($scope.ipAddress);


  });
