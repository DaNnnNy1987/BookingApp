angular.module('booking-app').factory('Session',function($cookies){
	let Session = {};
	Session.put = function(key, value){
      $cookies.put(key, value);
    }
	Session.get = function(key){
      return $cookies.get(key);
    };
 
    Session.getToken = function(key){
      return $cookies.get('tokenId');
    };
 
    Session.delete = function(key){
      $cookies.remove(key);
    }

	return Session;
})