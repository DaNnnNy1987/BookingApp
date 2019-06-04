dashCtrl.$inject = ['$scope','Auth','$location','$rootScope' ]
angular.module('booking-app').controller('dashCtrl',dashCtrl);

function dashCtrl($scope, Auth, $location, $rootScope){
  console.log('dashCtrl ');
$scope.userdash='';
    Auth.getUser().then(function(data) {
              // $location.path('/dashboard')
              Auth.setUser(data);
              console.log("Users : ");
              console.log(data);
             $scope.users = data; 
              console.log(data)
            }).
            error(function(data, status, headers, config) {
              console.log(status);
            });
}



