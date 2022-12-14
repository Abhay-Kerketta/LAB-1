
    var techAppModule = angular.module("techApp", []);
     techAppModule.controller("techCtrl", function ($scope,$http){
       $http.get('tech.json').success(function(data){
        $scope.tech = data;
       }).error(function(data,status){
       console.error('Fail to load data', status, data);
       $scope.tech = { };
      });
     });
