angular.module('tipApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
        .when('/', {
          templateUrl : 'home.html',
          controller : 'MainCtrl'
        })
        .when('sites/:new-meal', {
          templateUrl : 'new-meal.html',
          controller : 'NewMealCtrl'
        })
        .when('sites/:my-earnings', {
          templateUrl : 'my-earnings.html',
          controller : 'MyCtrl'
        })
        .when('/error', {
          template : '<p>Error - Page Not Found</p>'
        });

      })
      .controller('MainCtrl', function($route, $routeParams) {
           
      })
      .controller('HomeCtrl', function($routeParams) {
        
      
      })

      .controller('NewMealCtrl', function($routeParams) {
    

      })
      .controller('MyCtrl', function($scope) {
         $scope.submitForm = function() {

               $scope.tiptotal = $scope.basemeal * $scope.tippercent/100;

               $scope.taxtotal = $scope.basemeal * $scope.taxrate/100 + $scope.basemeal;

               $scope.mealtotal = $scope.taxtotal + $scope.tiptotal;

               $scope.fulltiptotal = $scope.fulltiptotal + $scope.tiptotal;

               $scope.mealcount = $scope.mealcount + 1;

               $scope.avgtip = $scope.fulltiptotal/$scope.mealcount;

         };

         $scope.clearfields = function() {
                  $scope.basemeal = "";
                  $scope.taxrate = "";
                  $scope.tippercent = "";
         };

      }); 


