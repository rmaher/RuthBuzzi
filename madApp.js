angular.module('madApp', [])
    .controller('MyCtrl', ['$scope', function($scope) {
      $scope.femalename = "Female Name",
      $scope.jobtitle = "Job Title",
      $scope.tedtask = "Tedious Task",
      $scope.dirtytask = "Dirty Task",
      $scope.celebrity = "Celebrity",
      $scope.uselessskill = "Useless Skill",
      $scope.adjective = "Adjective",
      $scope.obnoxiuousceleb = "Obnoxious Celeb",
      $scope.hugenumber = "Huge Number";

    }]); 