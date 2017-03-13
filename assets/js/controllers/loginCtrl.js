'use strict';
/**
 * controller for Validation Form example
 */


app.controller('loginCtrl', ["$scope","$http","$location","toaster","userdataSession", function ($scope,$http,$location,toaster,userdataSession) {

    $scope.submitto=function(){

        var username=$scope.username;
        var password=$scope.password;
        var data= {"email":username,
            "password":password};

        // this function is build up in main.js file
        userdataSession.addUser(data,$scope);

        //console.log(data)
    };

}]);
