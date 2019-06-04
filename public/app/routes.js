angular.module('appRoutes',['ngRoute'])
.config(function($routeProvider ,$locationProvider) {
	$routeProvider
	.when('/' , {
		templateUrl : "/public/components/register.html"
	})
	// .when('/users', {
		// templateUrl: "public/components/home.html",
		// controller :'homeCtrl'
		
	// })
	.when('/dashboard', {
		templateUrl: "/public/components/dashboard.html",
		controller : "dashCtrl"
	})
	.when('/profile', {
		templateUrl:'/public/components/profile.html'
		
		})
	.when('/recover', {
		templateUrl : "/public/components/recover.html",
		controller :'recoverCtrl'
	})
	.when('/login', {
		templateUrl : "/public/components/login.html",
		controller : "loginCtrl"
	})
	.when('/logout', {
		templateUrl : "/public/components/login.html"
	})
	
	.otherwise({redirectTo: '/'
	});

	$locationProvider.html5Mode({
		enabled:true,
		requireBase: false
	});
});
	
	