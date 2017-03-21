'use strict';
// .......add company controller start ..............................///
app.controller('addcompanyCtrl', ["$scope","$location", "$http", "toaster","$localStorage",function($scope,$location,$http, toaster ,$localStorage){
  $scope.submit= function (){
    var short_name=$scope.short_name;
    var full_name=$scope.full_name;
    var address=$scope.address;
    var city=$scope.city;
    var state=$scope.state;
    var zip_code=$scope.zip_code;
    var country=$scope.country;
    var phone=$scope.phone;
    var fax=$scope.fax;
    var e_mail=$scope.e_mail;
    var website=$scope.website;
    var timezone=$scope.timezone;
    var admin_person_name=$scope.admin_person_name;
    var token=$localStorage.user_data.response.token;

    // console.log($localStorage.user_data.response.token);  
    var data= {"token":token ,"data":{
      "short_name":short_name,
      "full_name":full_name,
      "address":address,
      "city":city,
      "state":state,
      "zip_code":zip_code,
      "country":country,
      "phone":phone,
      "fax":fax,
      "e_mail":e_mail,
      "website":website,
      "timezone":timezone,
      "admin_person_name":admin_person_name
    }};

    $http.post($location.protocol()+"://"+$location.host()+"/medilixis_server/public/addCompany", data)
    .then(function(response) {
      // console.log(response.data);
      if(response.data.status=="success"){
        $scope.toaster = {
          type: 'success',
          title: 'Successful',
          text: 'Company Added Successfully'
        };
        $location.path('app/listcompany');
        return toaster.pop($scope.toaster.type, $scope.toaster.title,$scope.toaster.text);

       
      }else{
        $scope.toaster = {
          type: 'error',
          title: 'Unsuccessful',
          text: 'Error adding Company'
        };
        return toaster.pop($scope.toaster.type, $scope.toaster.title,$scope.toaster.text);
      } 
    }).catch(function(){
          console.log("erroe adding company");
    });
  }
}]);

// .......add company controller end ..............................///

// .......LIST company controller Start ..............................///

app.controller('listcompanyCtrl', ["$scope", "$filter", "ngTableParams","$uibModal", "$log","$http","$localStorage","$location","toaster","$rootScope","$timeout", function ($scope, $filter, ngTableParams,$uibModal,$log,$http, $localStorage,$location,toaster,$rootScope,$timeout) {
    if($rootScope.opentoast== "1"){
      $scope.showLoaderr = true;
      $scope.showlist = false;
      $timeout(function () {

       $scope.toaster = {
          type: 'success',
          title: 'Successful',
          text: 'Company Edit Successfully'
        };
        
         toaster.pop($scope.toaster.type, $scope.toaster.title,$scope.toaster.text);
         $rootScope.opentoast== "";
       }, 1000);   
    };
    
    var static_data = [{
        "short_name": 'No data',
        "full_name": "No data",
        "address": "No data",
        "date": "No data",
        "city": "No data",
        "state": "No data",
        "zip_code": "No data",
        "country": "No data",
        "phone": "No data",
        "fax": "No data",
        "e_mail": "No data",
        "web_address": "No data",
        "time_zone": "No data",
        "admin_person_name": "No data"
    }];

    //................................http post request for getting company list start here........................
        // var datas=[];
        var param={'token' :$localStorage.user_data.response.token};
        $http.post($location.protocol()+"://"+$location.host()+"/medilixis_server/public/getCompany", param)
        .then(function(response) {
          // console.log(response.data);
          if(response.data.status=="success"){
            $scope.showLoaderr = false;
            $scope.showlist = true;
            
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
              console.log("error adding company");
        }); 
      //.............................http post request for getting company list end here...............................

    $scope.editId = -1;

    $scope.setEditId = function (pid) {
        $scope.editId = pid;
    };

    // ...............model open function for assigning qa and transcriber start here..............//
    $scope.openmodel = function (companyId) {

      // $scope.taskid=taskId
      // console.log(companyId);
      
      $scope.companyId= companyId;
      var modalInstance = $uibModal.open({

        templateUrl: 'myModalContent1.html',
        controller: 'ModalUiCtrl',
        scope : $scope,
        size: 'lg',
        backdrop: 'static',
        resolve: {
          items: function () {
            return $scope.companyId;
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

// .......LIST company controller end ..............................//


// EDIT model controller start here.............................////


app.controller('ModalUiCtrl', ["$scope", "$rootScope", "$uibModalInstance", "items","$http","$location","PDFKit","$sce","$localStorage","toaster","$state", "$stateParams", function ($scope, $rootScope, $uibModalInstance, items,$http, $location,PDFKit,$sce,$localStorage,toaster,$state, $stateParams) {
  
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

    $scope.companies=[
    "Company 1",
    "Company 2",
    "Company 3",
    "Company 4",
    "Company 5",
    "Company 6",
    "Company 7",
    "Company 8",
    "Company 9",
    "Company 10",
    "Company 11",
    "Company 12",
    
    "Company 13"
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


    var param={
            'token' :$localStorage.user_data.response.token,
            'companyid': $scope.companyId
    };

    $http.post($location.protocol()+"://"+$location.host()+"/medilixis_server/public/getselectedCompany", param)
    .then(function(response) {
      if(response.data.status=="success"){
        $scope.showLoader = false;
        $scope.showform = true;
        console.log(response.data.data);
        $scope.onecompany=response.data.data;
      
        $scope.short_name=$scope.onecompany[0].short_name;
        $scope.full_name=$scope.onecompany[0].full_name;
        $scope.address=$scope.onecompany[0].address;
        // $scope.date=$scope.onecompany[0].date;
        $scope.city=$scope.onecompany[0].city;
        $scope.state=$scope.onecompany[0].state;
        $scope.zip_code=$scope.onecompany[0].zip_code;
        $scope.country=$scope.onecompany[0].country;
        $scope.phone=$scope.onecompany[0].phone;
        $scope.fax=$scope.onecompany[0].fax;
        $scope.e_mail=$scope.onecompany[0].e_mail;
        $scope.website=$scope.onecompany[0].web_address;
        $scope.timezone=$scope.onecompany[0].time_zone;
        $scope.admin_person_name=$scope.onecompany[0].admin_person_name;
      }else{
              
      } 
    }).catch(function(){
          console.log("error adding company");
    });
  
  //....................on click ok button on assigning qa and transcriber model id inserted to mysql table task_ permission START....////
  $scope.ok = function () {
    var short_name=$scope.short_name;
    var full_name=$scope.full_name;
    var address=$scope.address;
    var city=$scope.city;
    var state=$scope.state;
    var zip_code=$scope.zip_code;
    var country=$scope.country;
    var phone=$scope.phone;
    var fax=$scope.fax;
    var e_mail=$scope.e_mail;
    var website=$scope.website;
    var timezone=$scope.timezone;
    var admin_person_name=$scope.admin_person_name;
    var token=$localStorage.user_data.response.token;
    var companyId=$scope.companyId;
    // console.log($localStorage.user_data.response.token);  
    var data= {"token":token,"companyid": companyId,"data":{
      "short_name":short_name,
      "full_name":full_name,
      "address":address,
      "city":city,
      "state":state,
      "zip_code":zip_code,
      "country":country,
      "phone":phone,
      "fax":fax,
      "e_mail":e_mail,
      "website":website,
      "timezone":timezone,
      "admin_person_name":admin_person_name
    }};


    $http.post($location.protocol()+"://"+$location.host()+"/medilixis_server/public/editselectedCompany", data)
    .then(function(response) {
      if(response.data.status=="success"){
        
        $rootScope.opentoast= "1";
        
        $uibModalInstance.dismiss('cancel');
        
        $state.go('app.listcompany', {}, { reload: true });
      }else{
          $scope.toaster = {
          type: 'error',
          title: 'Unsuccessful',
          text: 'Error Editing Company'
        };
        return toaster.pop($scope.toaster.type, $scope.toaster.title,$scope.toaster.text);    
      } 
    }).catch(function(){
          console.log("error adding company");
    });
    
  };

  //....................on click ok button on assigning qa and transcriber model id inserted to mysql table task_ permission END....////


  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };  
}]);

/// EDIT model controller end here ..............................//