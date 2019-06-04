angular.module('booking-app').factory('Auth',Auth);
Auth.$inject = ['$http','Session'];
function Auth($http, Session){
	var authFactory = {};
  let loggedIn=false;
	authFactory.login=function(loginData){
		 $http.post('/login',loginData).then(function(data){
			// AuthToken.setToken(data.data.token);
      loggedIn =  true;
			console.log(data);
			return data;
		});
	};
  authFactory.register=function(loginData){
     $http.post('/register',loginData).then(function(data){
      console.log(data);
      return data;
    });
  };
	authFactory.getUser=function(loginData){
		 $http.get('/login',loginData).then(function(data){
			// AuthToken.setToken(data.data.token);
			console.log(data);
			return data;
		});
	};
	 authFactory.logout=function(){
    
    	Session.delete('tokenId');
    }
    authFactory.isLoggedIn=function(){
        if(loggedIn){
        return true
      }
     else{
      return false      
    //   if(Session.get('tokenId')){
    //    return true
    //  }
    //  else{
    //   return false
     }
  }
    authFactory.getToken=function(){
      return Session.get('tokenId');
    } 
 
    authFactory.setUser=function(data){
      console.log(data);
      Session.put('tokenId', data.token);
      Session.put('username', data.username);     
      Session.put('email', data.email);
 
    }
 
    authFactory.getUser=function(){
      return {
        'tokenId': Session.get('tokenId'),
        'username': Session.get('username'),
        'email': Session.get('email')
      };
    }
 
	

	return authFactory;
};