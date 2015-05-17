angular.module('tipApp', [])
    .controller('MyCtrl', ['$scope', function($scope) {

       $scope.basemeal = "";
       $scope.taxrate = "";
       $scope.tippercent = "";
       $scope.earnings = "";
       $scope.tipeval = function() {
          $scope.tiptotal = $scope.basemeal * $scope.tippercent/100;
       };
       $scope.calctax = function() {
          $scope.taxtotal = $scope.basemeal * $scope.taxrate/100 + $scope.basemeal;
       };
       $scope.calctotal = function() {
          $scope.mealtotal = $scope.taxtotal + $scope.tiptotal;
       };
       $scope.clearfields = function() {
          $scope.basemeal = "";
          $scope.taxrate = "";
          $scope.tippercent = "";
       };

       $scope.grandtiptotal = function() {
          $scope.fulltiptotalarr = [];
          for(i = 0; i < $scope.tipeval; i++){
            $scope.tiptotal.push($scope.fulltiptotalarr);
          };
          $scope.fulltiptotal=0;
          $.each(fulltiptotalarr,function() {
            $scope.fulltiptotal += this;
          });
       };

       $scope.averagetip = function () {
          $scope.avgtip = $scope.fulltiptotal/$scope.mealcount;
       };

    }]); 


