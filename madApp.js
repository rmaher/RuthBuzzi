angular.module('madApp',['ngAnimate'])
    .controller('MyCtrl', ['$scope', function($scope) {


      $scope.sex = '';
      $scope.femalename = "",
      $scope.jobtitle = "",
      $scope.tedtask = "",
      $scope.dirtytask = "",
      $scope.celebrity = "",
      $scope.uselessskill = "",
      $scope.adjective = "",
      $scope.obnoxiuousceleb = "",
      $scope.hugenumber = "";
      $scope.pronoun ={"female" :"she", "male" :"he"}
      $scope.pospronoun ={"female" :"her", "male" :"his"}



    }]); 



