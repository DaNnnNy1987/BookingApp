loginCtrl.$inject = ['$scope','Auth']
angular.module('booking-app').controller('loginCtrl',loginCtrl);

function loginCtrl($scope, Auth){
  console.log('loginCtrl ')
$scope.user = {}

  $scope.login() = function() {
    console.log('login')
      
      Auth.login(user).
        success(function(data, status, headers, config) {
          $location.path('/dashboard')
          Auth.getUser(user);
          console.log(Auth.getUser(user));
        }).
        error(function(data, status, headers, config) {
          console.log(status);
        });
    };
};
