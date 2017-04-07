'use strict';
// .......add company controller start ..............................///
app.controller('addqaCtrl', ["$scope","$location","$http","$localStorage","toaster",function($scope,$location,$http,$localStorage,toaster){
	
    //................................http post request for getting doctor list start here........................
        // var datas=[];
        var param={'token' :$localStorage.user_data.response.token};
        $http.post($location.protocol()+"://"+$location.host()+"/medilixis_server/public/getdoctor", param)
        .then(function(response) {
          // console.log(response.data);
          if(response.data.status=="success"){
           
            $scope.doctors=response.data.data;
            console.log($scope.doctors);
            
          }else{
           
          } 
        }).catch(function(){
              console.log("error adding doctor");
        }); 
    //.............................http post request for getting doctor list end here...............................
    
    $scope.access_right=[
        {
            "name": "Add Company",
            "status": 1,
            "column_name":"add_company",
            "parent_column_name": "company"
        },{
            "name": "List Company",
            "status": 1,
            "column_name":"list_company",
            "parent_column_name": "company"
        },{
            "name": "Add Tranco Admin",
            "status": 1,
            "column_name":"add_trancoadmin",
            "parent_column_name": "tranco_admin"
        },{
            "name": "List Tranco Admin",
            "status": 1,
            "column_name":"list_trancoadmin",
            "parent_column_name": "tranco_admin"
        },{
            "name": "Add Transcriber",
            "status": 1,
            "column_name":"add_transcriber",
            "parent_column_name": "transcriber"
        },{
            "name": "List Transcriber",
            "status": 1,
            "column_name":"list_transcriber",
            "parent_column_name": "transcriber"
        },{
            "name": "Add QA",
            "status": 1,
            "column_name":"add_QA",
            "parent_column_name": "quality_assurance"
        },{
            "name": "List QA",
            "status": 1,
            "column_name":"list_QA",
            "parent_column_name": "quality_assurance"
        },{
            "name": "Add Doctor",
            "status": 1,
            "column_name":"add_doctor",
            "parent_column_name": "doctor"
        },{
            "name": "List Doctor",
            "status": 1,
            "column_name":"list_doctor",
            "parent_column_name": "doctor"
        },{
            "name": "Add Nurse",
            "status": 1,
            "column_name":"add_nurse",
            "parent_column_name": "nurse"
        },{
            "name": "List Nurse",
            "status": 1,
            "column_name":"list_nurse",
            "parent_column_name": "nurse"
        },{
            "name": "Add Practice Admin",
            "status": 1,
            "column_name":"add_practiceadmin",
            "parent_column_name": "practice_admin"
        },{
            "name": "List Practice Admin",
            "status": 1,
            "column_name":"list_practiceadmin",
            "parent_column_name": "practice_admin"
        },{
            "name": "Add Appoinment",
            "status": 1,
            "column_name":"add_appoinment",
            "parent_column_name": "appoinment"
        },{
            "name": "List Appoinment",
            "status": 1,
            "column_name":"list_appoinment",
            "parent_column_name": "appoinment"
        },{
            "name": "Add Receptionist",
            "status": 1,
            "column_name":"add_receptionist",
            "parent_column_name": "receptionist"
        },{
            "name": "List Receptionist",
            "status": 1,
            "column_name":"list_receptionist",
            "parent_column_name": "receptionist"
        },{
            "name": "Add Patient",
            "status": 1,
            "column_name":"add_patient",
            "parent_column_name": "patient"
        },{
            "name": "List Patient",
            "status": 1,
            "column_name":"list_patient",
            "parent_column_name": "patient"
        }
    ];

    $scope.submit= function(){
        var first_name=$scope.first_name;
        var last_name=$scope.last_name;
        var email=$scope.email;
        var password=$scope.password;
        var address=$scope.address;
        var phone_number=$scope.phone_number;
        var access_rights=$scope.access_rights;
        var associate_doctors=$scope.associate_doctors;
        var state=$scope.state;
        var country=$scope.country;
        var city=$scope.city;
        var token=$localStorage.user_data.response.token;

        var param= {"token":token ,
          "username":first_name,
          "last_name":last_name,
          "email":email,
          "password":password,
          "address":address,
          "phone_number":phone_number,
          "access_rights":access_rights,
          "associate_doctors":associate_doctors,
          "state":state,
          "country":country,
          "city":city,
          "role_id":5
        };

        console.log(param);


        $http.post($location.protocol()+"://"+$location.host()+"/medilixis_server/public/addqa", param)
        .then(function(response) {
          // console.log(response.data);
           if(response.data.status=="success"){
                $scope.toaster = {
                  type: 'success',
                  title: 'Successful',
                  text: 'Quality Assurance Added Successfully'
                };
                $location.path('app/listqa');
                return toaster.pop($scope.toaster.type, $scope.toaster.title,$scope.toaster.text);
            }else{
                $scope.toaster = {
                  type: 'error',
                  title: 'Unsuccessful',
                  text: 'Error adding Quality Assurance'
                };
                return toaster.pop($scope.toaster.type, $scope.toaster.title,$scope.toaster.text);
            }
        }).catch(function(){
              console.log("Error adding Quality Assurance");
        }); 
    } 
}]);

// .......add company controller end ..............................///

// .......LIST company controller Start ..............................///

app.controller('listqaCtrl', ["$scope", "$filter", "ngTableParams","$uibModal", "$log", "$localStorage","$location","$http","toaster","$rootScope","$timeout", function ($scope, $filter, ngTableParams, $uibModal, $log, $localStorage, $location ,$http, toaster, $rootScope, $timeout ) {
    var static_data = [{
        "username": 'No data',
        "last_name": "No data",
        "email": "No data",
        "address": "No data",
        "city": "No data",
        "state": "No data",
        "country": "No data",
        "phone_number": "No data",
        "permission": "No data",
        "doctor": "No data"
    }];


    //................................http post request for getting qa list start here........................
        // var datas=[];
        var param={'token' :$localStorage.user_data.response.token};
        $http.post($location.protocol()+"://"+$location.host()+"/medilixis_server/public/getqa", param)
        .then(function(response) {
          // console.log(response.data);
          if(response.data.status=="success"){
           
            var datas=response.data.data;
            // console.log(datas);
            datas.forEach(function(datas){
                if(datas.doctors){
                    var com= datas.doctors.replace(/>>/g, " , ");
                    datas.doctor=com;
                };
            });
            datas.forEach(function(datas){
                if(datas.permission){
                    var per= datas.permission.replace(/>>>/g, " , ");
                    datas.permission=per;
                };
            });
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
              console.log("error adding company");
        }); 
    //.............................http post request for getting qa list end here...............................


    $scope.editId = -1;

    $scope.setEditId = function (pid) {
        $scope.editId = pid;
    };

    // ...............model open function for assigning qa and transcriber start here..............//
    $scope.openmodel = function () {
      // $scope.taskid=taskId
      // console.log(taskId);
    
      var modalInstance = $uibModal.open({

        templateUrl: 'myModalContent1.html',
        controller: 'ModalUiCtrl',
        scope : $scope,
        size: 'lg',
        backdrop: 'static',
        resolve: {
          items: function () {
            // return $scope.taskid;
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
    };

    // ...............model open function for assigning qa and transcriber end here..............//
}]);

// .......LIST company controller end ..............................///

// EDIT model controller start here.............................////


app.controller('ModalUiCtrl', ["$scope", "$rootScope", "$uibModalInstance", "items","$http","$location","PDFKit","$sce","$localStorage", function ($scope, $rootScope, $uibModalInstance, items,$http, $location,PDFKit,$sce,$localStorage) {
  
    $scope.access_right=[
    "Add Company",
    "List Company",
    "Add Tranco Admin",
    "List Tranco Admin",
    "Add Transcriber",
    "List Transcriber",
    "Add QA",
    "List QA",
    "Add Doctor",
    "List Doctor",
    "Add Nurse",
    "List Nurse",
    "Add Practice Admin",
    "List Practice Admin",
    "Add Appoinment",
    "List Appoinment",
    "Add Receptionist",
    "List Receptionist",
    "Add Patient",
    "List Patient"
    ];

    $scope.doctors=[
    "Doctor 1",
    "Doctor 2",
    "Doctor 3",
    "Doctor 4",
    "Doctor 5",
    "Doctor 6",
    "Doctor 7",
    "Doctor 8",
    "Doctor 9",
    "Doctor 10",
    "Doctor 11",
    "Doctor 12",
    
    "Doctor 13"
    ];


    $scope.selectOptionsObjects = [
        {
            id: 0,
            name: "Apples"
        },
        {
            id: 1,
            name: "Bananas"
        },
        {
            id: 2,
            name: "Peaches"
        }
    ];





 // ...............http call for list of transcriber and qa start here....................//
    // var qatranlist;
  //   $http.post($location.protocol()+"://"+$location.host()+"/muapp-new/muapp/qatranlist")
  //   .then(function(response,data) {

  //     //console.log(response);
  //     if(response.data.result=="success"){
  //       console.log(response.data.data);
  //       $scope.list=response.data.data
  //        // qatranlist=response.data.data
  //     }else{
  //      $scope.list=response.data.data
  //     }
  //   }).catch(function(){
  //   // console.log(userdata);
  // });  

    // ...............http call for list of transcriber and qa end here....................//
  $scope.items = items;
  $scope.selected = {
    item: $scope.list
  };
//.........................get selected transcriber and qa for a selected task START here.....................//
   // $http.get(
   //  $location.protocol()+"://"+$location.host()+"/muapp-new/muapp/gettask",
   //  {params:{"task_ID":$scope.taskid}})
   //  .then(function(response,data) {
   //    console.log(response.data);
   //    $scope.assignedQA=response.data.result[1].username;
   //    $scope.assignedtrans=response.data.result[0].username;

   //    $scope.assignedQAID=response.data.result[1].id;
   //    $scope.assignedtransID=response.data.result[0].id;
   //    console.log( "hello "+$scope.assignedQAID);
   //    console.log( "hello "+$scope.assignedtransID);
   //    $scope.qa=response.data.result[1].id;
   //    $scope.transcriber=response.data.result[0].id;
   //  })

  //.........................get selected transcriber and qa for a selected task END here.....................//
  
  

  //....................on click ok button on assigning qa and transcriber model id inserted to mysql table task_ permission START....////
  $scope.ok = function () {

    
  };

  //....................on click ok button on assigning qa and transcriber model id inserted to mysql table task_ permission END....////


  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };  
}]);

/// EDIT model controller end here ..............................//