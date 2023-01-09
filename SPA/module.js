
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "menu.html",
    })
    .when("/car", {
        templateUrl : "views/car.html",
        controller : "carCtrl"
    })
    .when("/movie", {
        templateUrl : "views/movie.html",
        controller : "movieCtrl"
    })
    .when("/science", {
        templateUrl : "views/science.html",
        controller : "scienceCtrl"
    })
    .when("/sports", {
        templateUrl : "views/sports.html",
        controller : "sportsCtrl"
    });
});


app.controller("carCtrl", ['$scope','$http',function ($scope, $http) {
    $scope.msg = "Difficulty : Medium";
    $http.get('./car.json').then(function(response) {
        $scope.cardata = response.data;
    })
}]);
app.controller("movieCtrl", ['$scope','$http',function ($scope, $http) {
    $scope.msg = "Difficulty : Medium";
    $http.get('./movie.json').then(function(response) {
        $scope.moviedata = response.data;
    })
}]);
app.controller("scienceCtrl", ['$scope','$http',function ($scope, $http) {
    $scope.msg = "Difficulty : Medium";
    $http.get('./science.json').then(function(response) {
        $scope.sciencedata = response.data;
    })
}]);
app.controller("sportsCtrl", ['$scope','$http',function ($scope, $http) {
    $scope.msg = "Difficulty : Medium";
    $http.get('./sports.json').then(function(response) {
        $scope.sportsdata = response.data;
    })
}]);
