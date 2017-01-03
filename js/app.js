var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.DateOfBirth = (new Date('dd/mm/yyyy'));
    $scope.date = (new Date());
    
    $scope.diffDate = function(dateOut1, dateOut2){
          var dateOut1 =  $scope.DateOfBirth; // it will work if date1 is in ISO format
           var dateOut2 = $scope.date;

          var timeDiff = Math.abs(dateOut1.getTime() - dateOut2.getTime());
          var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
          var livedWeeks = parseInt(diffDays / 7);
          return parseInt(livedWeeks - livedWeeks/364);
    };
    
    $scope.diffDatePerMonth = function(dateOut1, dateOut2){
          var dateOut1 =  $scope.DateOfBirth; // it will work if date1 is in ISO format
           var dateOut2 = $scope.date;

          var timeDiff = Math.abs(dateOut1.getTime() - dateOut2.getTime());
          var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
          var livedMonths = parseInt(diffDays / 30.41);
          return livedMonths;
    };

    $scope.yrs = 90;
    $scope.yrsMths = 30;
    $scope.weeks = 52;
    $scope.months = 36;
    $scope.getNumber = function(num) {
        return new Array(num);   
    }

});
