'use strict';
// .......add company controller start ..............................///
app.controller('addadminCtrl', ["$scope","$location","$http","$localStorage","toaster","$state", "$stateParams",function($scope,$location,$http,$localStorage,toaster,$state,$stateParams){
    if($localStorage.user_data['user_permission'][0].add_trancoadmin== 1){
        //................................http post request for getting company list start here........................
            // var datas=[];
            var param={'token' :$localStorage.user_data.response.token};
            $http.post($location.protocol()+"://"+$location.host()+"/medilixis_server/public/getCompany", param)
            .then(function(response) {
              // console.log(response.data);
              if(response.data.status=="success"){
               
                $scope.companies=response.data.data;
                console.log($scope.companies);
                
              }else{
               
              } 
            }).catch(function(){
                  console.log("error adding company");
            }); 
        //.............................http post request for getting company list end here...............................
        

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
            var associate_company=$scope.associate_company;
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
              "associate_company":associate_company,
              "state":state,
              "country":country,
              "city":city,
              "role_id":9
            };


            $http.post($location.protocol()+"://"+$location.host()+"/medilixis_server/public/addtrancoadmin", param)
            .then(function(response) {
              // console.log(response.data);
               if(response.data.status=="success"){
                    $scope.toaster = {
                      type: 'success',
                      title: 'Successful',
                      text: 'Tranco Admin Added Successfully'
                    };
                    $location.path('app/listadmin');
                    return toaster.pop($scope.toaster.type, $scope.toaster.title,$scope.toaster.text);
                }else{
                    $scope.toaster = {
                      type: 'error',
                      title: 'Unsuccessful',
                      text: 'Error adding Tranco Admin'
                    };
                    return toaster.pop($scope.toaster.type, $scope.toaster.title,$scope.toaster.text);
                }
            }).catch(function(){
                  console.log("Error adding Tranco Admin");
            }); 
        }   
    }else{
    $state.go('app.dashboard', {}, { reload: true });
    };
}]);

// .......add company controller end ..............................///

// .......LIST company controller Start ..............................///

app.controller('listadminCtrl', ["$scope", "$filter", "ngTableParams","$uibModal", "$log","$localStorage","$location","$http","toaster","$rootScope","$timeout" ,"$state", "$stateParams", function ($scope, $filter, ngTableParams,$uibModal, $log, $localStorage, $location ,$http, toaster, $rootScope, $timeout, $state,$stateParams) {
    if($localStorage.user_data['user_permission'][0].list_trancoadmin== 1){
        
        if($rootScope.opentoasttranco== "1"){
          
          $timeout(function () {

           $scope.toaster = {
              type: 'success',
              title: 'Successful',
              text: 'Tranco Admin Edit Successfully'
            };
            
             toaster.pop($scope.toaster.type, $scope.toaster.title,$scope.toaster.text);
             $rootScope.opentoasttranco= "";
           }, 1000);   
        };

        if($rootScope.opentoasttrancodelete== "1"){
          
          $timeout(function () {

           $scope.toaster = {
              type: 'success',
              title: 'Successful',
              text: 'Tranco Admin delete Successfully'
            };
            
             toaster.pop($scope.toaster.type, $scope.toaster.title,$scope.toaster.text);
             $rootScope.opentoasttrancodelete= "";
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
            "permission": "No data",
            "companies": "No data"
           
        }];
        
        

        //................................http post request for getting company list start here........................
            // var datas=[];
            var param={'token' :$localStorage.user_data.response.token};
            $http.post($location.protocol()+"://"+$location.host()+"/medilixis_server/public/gettrancoadmin", param)
            .then(function(response) {
              // console.log(response.data);
              if(response.data.status=="success"){
               
                var datas=response.data.data;
                // console.log(datas);
                datas.forEach(function(datas){
                    if(datas.companies){
                        var com= datas.companies.replace(/>>/g, " , ");
                        datas.companies=com;
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
        //.............................http post request for getting company list end here...............................

        

        $scope.editId = -1;

        $scope.setEditId = function (pid) {
            $scope.editId = pid;
        };


        // ...............model open function for assigning qa and transcriber start here..............//
        $scope.openmodeltranco = function (uid) {
          // $scope.taskid=taskId
          // console.log(uid);
         $scope.trancouserid= uid;
          var modalInstance = $uibModal.open({

            templateUrl: 'myModalContenttrancoadmin.html',
            controller: 'ModalUiCtrltrancoadmin',
            scope : $scope,
            size: 'lg',
            backdrop: 'static',
            resolve: {
              items: function () {
                return $scope.trancouserid;
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

        // ...............model open function for assigning qa and transcriber start here..............//
        $scope.openmodeldelete = function (uid) {
          // $scope.taskid=taskId
          // console.log(uid);
         $scope.trancouserid= uid;
          var modalInstance = $uibModal.open({

            templateUrl: 'myModalContentdeletetranco.html',
            controller: 'ModalUiCtrltrancoadmindelete',
            scope : $scope,
            size: 'sm',
            backdrop: 'static',
            resolve: {
              items: function () {
                return $scope.trancouserid;
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
    }else{
    $state.go('app.dashboard', {}, { reload: true });
    };    
}]);

// .......LIST company controller end ..............................///



// EDIT model controller start here.............................////


app.controller('ModalUiCtrltrancoadmin', ["$scope", "$rootScope", "$uibModalInstance", "items","$http","$location","PDFKit","$sce","$localStorage","toaster","$state", "$stateParams", function ($scope, $rootScope, $uibModalInstance, items,$http, $location,PDFKit,$sce,$localStorage, toaster, $state , $stateParams) {
  // console.log("user id in model controller "+ $scope.userid);
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

    //................................http post request for getting company list start here........................
    // var datas=[];
    var param={'token' :$localStorage.user_data.response.token};
    $http.post($location.protocol()+"://"+$location.host()+"/medilixis_server/public/getCompany", param)
    .then(function(response) {
      // console.log(response.data);
      if(response.data.status=="success"){
       
        $scope.companies=response.data.data;
        $scope.newcompanies=response.data.data;
        
        console.log($scope.companies);
        
      }else{
       
      } 
    }).catch(function(){
          console.log("error adding company");
    }); 
  //.............................http post request for getting company list end here...............................



  $scope.items = items;
  $scope.selected = {
    item: $scope.list
  };

  //................................http call for get selected user data start here..................................
  setTimeout(function(){
  var param={
            'token' :$localStorage.user_data.response.token,
            'uid': $scope.trancouserid
    };

    $http.post($location.protocol()+"://"+$location.host()+"/medilixis_server/public/getselectedtrancoadmin", param)
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
        
        var selected_rights_array=[];
        var selected_access=response.data.data[0]['permission'][0];

        angular.forEach(selected_access, function(value, key) {
            if(value =="1"){
                var access_right_dataa= $scope.access_right;
                angular.forEach(access_right_dataa, function(values, keys) {
                    // console.log(values)
                // access_right_dataa.forEach(function(datas){
                    if(values.column_name==key){
                        this.push(values);
                        
                    };
                }, selected_rights_array);
            }
        });
        // console.log(selected_rights_array);
        $scope.selected_access_right=selected_rights_array;
        
        var selected_associate_companies=response.data.data[0]['comapanies'];
        var new_companies_selected_array=[];

        angular.forEach(selected_associate_companies, function(valuess, keyss) {
            
            if(valuess.company_short_name){

                var all_companies= $scope.newcompanies;
                // console.log(all_companies);
                angular.forEach(all_companies, function(valu, ke) {
                    // console.log(valu.id);
                    // console.log(valuess.company_id);
                    if(valu.id==valuess.company_id){
                        this.push(valu);
                        
                    };
                }, new_companies_selected_array);
                // valuess.short_name=valuess.company_short_name;
                // delete valuess.company_short_name;
            };
        });
        $scope.selected_associate_company=new_companies_selected_array;
      }else{
              
      } 
    }) }, 2000);

  //................................http call for get selected user data start here..................................

  //....................on click ok button on assigning qa and transcriber model id inserted to mysql table task_ permission START....////
  $scope.ok = function () {
    var data= {"token":$localStorage.user_data.response.token , "userID":$scope.trancouserid ,
      "first_name":$scope.first_name,
      "last_name":$scope.last_name,
      "email":$scope.email,
      "address":$scope.address,
      "phone_number":$scope.phone_number,
      "city":$scope.city,
      "state":$scope.state,
      "country":$scope.country,
      "selected_associate_company":$scope.selected_associate_company,
      "selected_access_right":$scope.selected_access_right
    };

    $http.post($location.protocol()+"://"+$location.host()+"/medilixis_server/public/editselectedtrancoadmin", data)
    .then(function(response) {

       if(response.data.status=="success"){
            $rootScope.opentoasttranco= "1";
        
            $uibModalInstance.dismiss('cancel');
        
            $state.go('app.listtrancoadmin', {}, { reload: true });
        }else{
            $scope.toaster = {
              type: 'error',
              title: 'Unsuccessful',
              text: 'Error editing Tranco Admin'
            };
            return toaster.pop($scope.toaster.type, $scope.toaster.title,$scope.toaster.text);
        }
    }).catch(function(){
          console.log("Error Editing Tranco Admin");
    }); 
  };

  //....................on click ok button on assigning qa and transcriber model id inserted to mysql table task_ permission END....////


  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };  
}]);

/// EDIT model controller end here ..............................//








// DELETE model controller start here.............................////


app.controller('ModalUiCtrltrancoadmindelete', ["$scope", "$rootScope", "$uibModalInstance", "items","$http","$location","PDFKit","$sce","$localStorage","toaster","$state", "$stateParams", function ($scope, $rootScope, $uibModalInstance, items,$http, $location,PDFKit,$sce,$localStorage, toaster, $state , $stateParams) {
  

  


  //....................on click ok button on assigning qa and transcriber model id inserted to mysql table task_ permission START....////
  $scope.ok = function () {
    console.log($scope.trancouserid);
    var data= {"token":$localStorage.user_data.response.token , "uid":$scope.trancouserid 
      
    };
    $http.post($location.protocol()+"://"+$location.host()+"/medilixis_server/public/deleteuser", data)
    .then(function(response) {
      console.log(response);
       if(response.data.status=="success"){
            $rootScope.opentoasttrancodelete= "1";
        
            $uibModalInstance.dismiss('cancel');
        
            $state.go('app.listtrancoadmin', {}, { reload: true });
        }else{
            $scope.toaster = {
              type: 'error',
              title: 'Unsuccessful',
              text: 'Error deleting Tranco Admin'
            };
            return toaster.pop($scope.toaster.type, $scope.toaster.title,$scope.toaster.text);
        }
    }).catch(function(){
          console.log("Error deleting Tranco Admin");
    });
  };

  //....................on click ok button on assigning qa and transcriber model id inserted to mysql table task_ permission END....////


  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };  
}]);

/// DELETE model controller end here ..............................//