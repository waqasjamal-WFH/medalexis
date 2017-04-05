'use strict';
// .......add company controller start ..............................///
app.controller('adddocCtrl', ["$scope","$location","$http","$localStorage","toaster",function($scope,$location,$http,$localStorage,toaster){
	// $scope.name="hello Doctor";
 //    $scope.access_right=[
 //    "Add Company",
 //    "List Company",
 //    "Add Tranco Admin",
 //    "List Tranco Admin",
 //    "Add Transcriber",
 //    "List Transcriber",
 //    "Add QA",
 //    "List QA",
 //    "Add Doctor",
 //    "List Doctor",
 //    "Add Nurse",
 //    "List Nurse",
 //    "Add Practice Admin",
 //    "List Practice Admin",
 //    "Add Appoinment",
 //    "List Appoinment",
 //    "Add Receptionist",
 //    "List Receptionist",
 //    "Add Patient",
 //    "List Patient"
 //    ];

 //    $scope.companies=[
 //    "Company 1",
 //    "Company 2",
 //    "Company 3",
 //    "Company 4",
 //    "Company 5",
 //    "Company 6",
 //    "Company 7",
 //    "Company 8",
 //    "Company 9",
 //    "Company 10",
 //    "Company 11",
 //    "Company 12",
    
 //    "Company 13"
 //    ];


    $scope.submit= function(){
        var first_name=$scope.first_name;
        var last_name=$scope.last_name;
        var email=$scope.email;
        var password=$scope.password;
        var address=$scope.address;
        var phone_number=$scope.phone_number;
        // var access_rights=$scope.access_rights;
        // var associate_company=$scope.associate_company;
        var state=$scope.state;
        var country=$scope.country;
        var city=$scope.city;
        var npi=$scope.npi;
        var token=$localStorage.user_data.response.token;

        var param= {"token":token ,
          "username":first_name,
          "last_name":last_name,
          "email":email,
          "password":password,
          "address":address,
          "phone_number":phone_number,
          // "access_rights":access_rights,
          // "associate_company":associate_company,
          "state":state,
          "country":country,
          "city":city,
          "npi":npi,
          "role_id":3
        };


        $http.post($location.protocol()+"://"+$location.host()+"/medilixis_server/public/adddoctor", param)
        .then(function(response) {
           if(response.data.status=="success"){
                $scope.toaster = {
                  type: 'success',
                  title: 'Successful',
                  text: 'Doctor Added Successfully'
                };
                $location.path('app/listdoctor');
                return toaster.pop($scope.toaster.type, $scope.toaster.title,$scope.toaster.text);
            }else{
                $scope.toaster = {
                  type: 'error',
                  title: 'Unsuccessful',
                  text: 'Error adding Doctor'
                };
                return toaster.pop($scope.toaster.type, $scope.toaster.title,$scope.toaster.text);
            }
        }).catch(function(){
              console.log("Error adding Tranco Admin");
        }); 
    }
}]);

// .......add company controller end ..............................///

// .......LIST company controller Start ..............................///

app.controller('listdocCtrl', ["$scope", "$filter", "ngTableParams","$uibModal", "$log" ,"$localStorage","$location","$http","toaster","$rootScope","$timeout", function ($scope, $filter, ngTableParams,$uibModal,$log, $localStorage, $location ,$http, toaster, $rootScope, $timeout) {
    
    if($rootScope.opentoasttranco== "1"){
      
      $timeout(function () {

       $scope.toaster = {
          type: 'success',
          title: 'Successful',
          text: 'Doctor Edit Successfully'
        };
        
         toaster.pop($scope.toaster.type, $scope.toaster.title,$scope.toaster.text);
         $rootScope.opentoasttranco== "";
       }, 1000);   
    };

    var static_data = [{
        "username": 'No data',
        "last_name": "No data",
        "email": "No data",
        "address": "No data",
        "city": "No data",
        "state": "No data",
        "country": "No data",
        "phone_number": "No data",
        "npi": "No data"
        // "permission": "No data",
        // "companies": "No data"
       
    }];


    //................................http post request for getting doctor list start here........................
        // var datas=[];
        var param={'token' :$localStorage.user_data.response.token};
        $http.post($location.protocol()+"://"+$location.host()+"/medilixis_server/public/getdoctor", param)
        .then(function(response) {
          // console.log(response.data);
          if(response.data.status=="success"){
           
            var datas=response.data.data;
            // console.log(datas);
           
            
            $scope.tableParams = new ngTableParams({
               page: 1, // show first page
               count: 5, // count per page
               sorting: {
                   title: 'desc' // initial sorting
               },
               filter: {
                   name: 'M' // initial filter
               }
            }, {

               total: datas.length, // length of data
                getData: function ($defer, params) {
              
                  var orderedData = params.sorting() ? $filter('orderBy')(datas, params.orderBy()) : datas;
                  $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                }
            });
          }else{
            var datas=static_data;
            // console.log(datas);
            $scope.tableParams = new ngTableParams({
               page: 1, // show first page
               count: 5, // count per page
               sorting: {
                   title: 'desc' // initial sorting
               },
               filter: {
                   name: 'M' // initial filter
               }
            }, {

               total: datas.length, // length of data
                getData: function ($defer, params) {
              
                  var orderedData = params.sorting() ? $filter('orderBy')(datas, params.orderBy()) : datas;
                  $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                }
            });
          } 
        }).catch(function(){
              console.log("error getting doctor");
        }); 
    //.............................http post request for getting company list end here...............................

    // $scope.tableParams = new ngTableParams({
    //     page: 1, // show first page
    //     count: 5, // count per page
    //     sorting: {
    //         title: 'desc' // initial sorting
    //     },
    //     filter: {
    //         name: 'M' // initial filter
    //     }
    //     }, {
    //             total: data.length, // length of data
    //             getData: function ($defer, params) {
    //             // use build-in angular filter
    //             var orderedData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;
    //             $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
    //         }
    // });


   
    $scope.editId = -1;

    $scope.setEditId = function (pid) {
        $scope.editId = pid;
    };

     // ...............model open function for assigning qa and transcriber start here..............//
    $scope.openmodel = function (uid) {
      // $scope.taskid=taskId
      // console.log(uid);
     $scope.userid= uid;
      var modalInstance = $uibModal.open({

        templateUrl: 'myModalContent1.html',
        controller: 'ModalUiCtrl',
        scope : $scope,
        size: 'lg',
        backdrop: 'static',
        resolve: {
          items: function () {
            return $scope.userid;
            // $scope.list=qatranlist;
            // console.log(qatranlist);
          }
        }
      });

      modalInstance.result.then(function (selectedItem) { 
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
      $scope.showLoader = true;
      $scope.showform = false;
    };

    // ...............model open function for assigning qa and transcriber end here..............//
}]);

// .......LIST company controller end ..............................///

// EDIT model controller start here.............................////


app.controller('ModalUiCtrl', ["$scope", "$rootScope", "$uibModalInstance", "items","$http","$location","PDFKit","$sce","$localStorage","toaster","$state", "$stateParams", function ($scope, $rootScope, $uibModalInstance, items,$http, $location,PDFKit,$sce,$localStorage, toaster, $state , $stateParams) {
  
    
  
    //................................http call for get selected doctor data start here..................................
  var param={
            'token' :$localStorage.user_data.response.token,
            'uid': $scope.userid
    };

    $http.post($location.protocol()+"://"+$location.host()+"/medilixis_server/public/getselecteddoctor", param)
    .then(function(response) {
      if(response.data.status=="success"){
        var selected_access=[];
        $scope.showLoader = false;
        $scope.showform = true;
        // console.log(response.data.data[0].address);
        
        // $scope.onecompany=response.data.data;
      
        $scope.first_name=response.data.data[0].username;
        $scope.last_name=response.data.data[0].last_name;
        $scope.email=response.data.data[0].email;
        // $scope.date=$scope.onecompany[0].date;
        $scope.address=response.data.data[0].address;
        $scope.phone_number=response.data.data[0].phone_number;
        $scope.city=response.data.data[0].city;
        $scope.state=response.data.data[0].state;
        $scope.country=response.data.data[0].country;
        $scope.npi=response.data.data[0].npi;
        
       
      }else{
              
      } 
    });

  //................................http call for get selected doctor data start here..................................

  $scope.items = items;
  $scope.selected = {
    item: $scope.list
  };

  

  //....................on click ok button on assigning qa and transcriber model id inserted to mysql table task_ permission START....////
    $scope.ok = function () {
        var data= {"token":$localStorage.user_data.response.token , "userID":$scope.userid ,
          "first_name":$scope.first_name,
          "last_name":$scope.last_name,
          "email":$scope.email,
          "address":$scope.address,
          "phone_number":$scope.phone_number,
          "city":$scope.city,
          "state":$scope.state,
          "country":$scope.country,
          "npi":$scope.npi
        };

        console.log(data);

        $http.post($location.protocol()+"://"+$location.host()+"/medilixis_server/public/editselecteddoctor", data)
        .then(function(response) {

           if(response.data.status=="success"){
                $rootScope.opentoasttranco= "1";
            
                $uibModalInstance.dismiss('cancel');
            
                $state.go('app.listdoc', {}, { reload: true });
            }else{
                $scope.toaster = {
                  type: 'error',
                  title: 'Unsuccessful',
                  text: 'Error editing Doctor'
                };
                return toaster.pop($scope.toaster.type, $scope.toaster.title,$scope.toaster.text);
            }
        }).catch(function(){
              console.log("Error Editing doctor");
        }); 
    };

  //....................on click ok button on assigning qa and transcriber model id inserted to mysql table task_ permission END....////


  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };  
}]);

/// EDIT model controller end here ..............................//