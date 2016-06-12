angular.module('weatherApp').factory('locationSVC',function($http){
var returnIP = {};

returnIP.apiCall = function(){
  return $http({
      method: 'GET',
      url: 'http://ipinfo.io/'
  }).then(function(response){
    return response;
  });
};

return returnIP;

});
