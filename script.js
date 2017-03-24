// Malin Svensson 
var app = angular.module('myAdressBook', []); //initalize the app

// Controller dataCtrl to handle data *
app.controller('dataCtrl', function($scope, $http) {

  //initiate what to display, default listView show, detailedView hide
  $scope.listView = true;
  $scope.detailedView = true;

//get user data from API
$http.get('https://randomuser.me/api/?results=20&seed=abc&inc=gender,name,location,email,dob, phone, cell, id, picture, info, nat&nat=gb')
    .success(function(data) {
    $scope.users= data.results; 
}); 

//  //format dob correctly if wrong format
$scope.getUserById= function(user) {
       $scope.oneUser = user; 
      var str =  $scope.oneUser.dob;
      if(str.length > 10){
        $scope.oneUser.dob= str.substr(0,str.indexOf(' '))
      }
}
// set order of listed users
$scope.orderBy = function(x) {
        $scope.thisOrderBy = x;
}
    
    //  toggle-function - if clicked - toggle views
    $scope.toggle = function() {
          $scope.listView = !$scope.listView;
          $scope.detailedView = !$scope.detailedView;
    }  //end toggle function

}); //end app.controller   - END of script