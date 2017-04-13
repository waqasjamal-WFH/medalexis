'use strict';
// .......add company controller start ..............................///
app.controller('addpatientCtrl', ["$scope","$location","$http","$localStorage","toaster",function($scope,$location,$http,$localStorage,toaster){
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

    $scope.submit= function(){
        var first_name=$scope.first_name;
        var last_name=$scope.last_name;
        var dob=$scope.dob;
        var address=$scope.address;
        var phone_number=$scope.phone_number;
        var associate_doctors=$scope.associate_doctors;
        var state=$scope.state;
        var country=$scope.country;
        var city=$scope.city;
        var token=$localStorage.user_data.response.token;

        var param= {"token":token ,
          "username":first_name,
          "last_name":last_name,
          "dob":dob,
          
          "address":address,
          "phone_number":phone_number,
          "associate_doctors":associate_doctors,
          "state":state,
          "country":country,
          "city":city,
          "role_id":10
        };

        $http.post($location.protocol()+"://"+$location.host()+"/medilixis_server/public/addpatient", param)
        .then(function(response) {
          // console.log(response.data);
           if(response.data.status=="success"){
                $scope.toaster = {
                  type: 'success',
                  title: 'Successful',
                  text: 'Patient Added Successfully'
                };
                $location.path('app/listpatient');
                return toaster.pop($scope.toaster.type, $scope.toaster.title,$scope.toaster.text);
            }else{
                $scope.toaster = {
                  type: 'error',
                  title: 'Unsuccessful',
                  text: 'Error adding Patient'
                };
                return toaster.pop($scope.toaster.type, $scope.toaster.title,$scope.toaster.text);
            }
        }).catch(function(){
              console.log("Error adding Patient");
        }); 
    }
}]);

// .......add company controller end ..............................///

// .......LIST company controller Start ..............................///

app.controller('listpatientCtrl', ["$scope", "$filter", "ngTableParams", "$uibModal", "$log" , "$localStorage","$location","$http","toaster","$rootScope","$timeout", function ($scope, $filter, ngTableParams, $uibModal, $log, $localStorage, $location ,$http, toaster, $rootScope, $timeout) {
    var static_data = [{
        "first_name": 'No data',
        "last_name": "No data",
        "address": "No data",
        "city": "No data",
        "state": "No data",
        "country": "No data",
        "phone_number": "No data",
        "doctor": "No data"
    }];

    //................................http post request for getting company list start here........................
        // var datas=[];
        var param={'token' :$localStorage.user_data.response.token};
        $http.post($location.protocol()+"://"+$location.host()+"/medilixis_server/public/getpatient", param)
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
    $scope.openmodelpatient = function (uid) {
      $scope.patientid= uid;
    
      var modalInstance = $uibModal.open({

        templateUrl: 'myModalContentpatient.html',
        controller: 'ModalUiCtrlpatient',
        scope : $scope,
        size: 'lg',
        backdrop: 'static',
        resolve: {
          items: function () {
            return $scope.patientid;
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


app.controller('ModalUiCtrlpatient', ["$scope", "$rootScope", "$uibModalInstance", "items","$http","$location","PDFKit","$sce","$localStorage" ,"toaster","$state", "$stateParams", function ($scope, $rootScope, $uibModalInstance, items,$http, $location,PDFKit,$sce,$localStorage , toaster, $state , $stateParams) {
  
  //................................http post request for getting doctor list start here........................
        // var datas=[];
        var param={'token' :$localStorage.user_data.response.token};
        $http.post($location.protocol()+"://"+$location.host()+"/medilixis_server/public/getdoctor", param)
        .then(function(response) {
          // console.log(response.data);
          if(response.data.status=="success"){
           
            $scope.doctors=response.data.data;
            $scope.newcompanies=response.data.data;
            // console.log($scope.doctors);
            
          }else{
           
          } 
        }).catch(function(){
              console.log("error getting doctor");
        }); 
  //.............................http post request for getting doctor list end here...............................

  //................................http call for get selected user data start here..................................
  setTimeout(function(){
  var param={
            'token' :$localStorage.user_data.response.token,
            'uid': $scope.patientid
    };

    $http.post($location.protocol()+"://"+$location.host()+"/medilixis_server/public/getselectedpatient", param)
    .then(function(response) {
      if(response.data.status=="success"){
        var selected_access=[];
        $scope.showLoader = false;
        $scope.showform = true;
        

        
        // $scope.onecompany=response.data.data;
      
        $scope.first_name=response.data.data[0].first_name;
        $scope.last_name=response.data.data[0].last_name;
        var d = new Date($scope.onecompany[0].date_of_birth);

        var curr_date = d.getDate();

        var curr_month = d.getMonth();

        var curr_year = d.getFullYear();

        curr_year = curr_year.toString().substr(2,2);

        var newdate= curr_date+"-"+curr_month+"-"+curr_year;
        console.log(newdate);
        // $scope.dob=newdate;
        $scope.addresss=response.data.data[0].address;
        $scope.phone__number=response.data.data[0].phone;
        $scope.ci_ty=response.data.data[0].city;
        $scope.st_ate=response.data.data[0].state;
        $scope.co_untry=response.data.data[0].country;
        
        
        
        var selected_associate_companies=response.data.data[0]['doctor'];
        var new_companies_selected_array=[];

        angular.forEach(selected_associate_companies, function(valuess, keyss) {
            
            if(valuess.doctor_name){

                var all_companies= $scope.newcompanies;
                // console.log(all_companies);
                angular.forEach(all_companies, function(valu, ke) {
                    // console.log(valu.id);
                    // console.log(valuess.company_id);
                    if(valu.id==valuess.doctor_id){
                        this.push(valu);
                        
                    };
                }, new_companies_selected_array);
                // valuess.short_name=valuess.company_short_name;
                // delete valuess.company_short_name;
            };
        });
        $scope.selected_associate_doctors=new_companies_selected_array;
      }else{
              
      } 
    }) }, 2000);

  //................................http call for get selected user data start here..................................
    
  $scope.items = items;
  $scope.selected = {
    item: $scope.list
  };

  
  

  //....................on click ok button on assigning qa and transcriber model id inserted to mysql table task_ permission START....////
  $scope.ok = function () {

    
  };

  //....................on click ok button on assigning qa and transcriber model id inserted to mysql table task_ permission END....////


  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };  
}]);

/// EDIT model controller end here ..............................//