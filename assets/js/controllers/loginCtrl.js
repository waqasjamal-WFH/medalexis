'use strict';
/**
 * controller for Validation Form example
 */

//factory for setting session
//app.factory('Session', function($http) {
//    var data= {"email":username,
//        "password":password};
//    var Session = {
//
//        saveSession: function() {
//            $http.post($location.protocol()+"://"+$location.host()+"/muapp-new/api/login", data)
//                .then(function(r) { return Session.data = r.data;})
//        },
//
//    };
//    Session.saveSession();
//    return Session;
//});


app.controller('loginCtrl', ["$scope","$http","$location","toaster","userdataSession", function ($scope,$http,$location,toaster,userdataSession) {

    $scope.submitto=function(){

        var username=$scope.username;
        var password=$scope.password;
        var data= {"email":username,
            "password":password};
        userdataSession.addUser(data,$scope);

        //console.log(data)
    };

}]);
