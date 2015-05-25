angular.module('tipApp', [])
    .controller('MyCtrl', ['$scope', function($scope) {
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

    }]); 


