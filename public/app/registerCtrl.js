registerCtrl.$inject = ['$scope','$location','$rootScope' ]
angular.module('booking-app').controller('registerCtrl',registerCtrl);
function registerCtrl($scope, $location, $rootScope){
  console.log('registerCtrl ')
$scope.register() = function() {
    console.log('login')
      
      Auth.register(user).
        success(function(data, status, headers, config) {
          $location.path('/login')
        }).
        error(function(data, status, headers, config) {
          console.log(status);
        });
    };
 }
