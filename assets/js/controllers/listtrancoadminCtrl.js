'use strict';
// .......add company controller start ..............................///
app.controller('addadminCtrl', ["$scope","$location","$http","$localStorage","toaster",function($scope,$location,$http,$localStorage,toaster){
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

}]);

// .......add company controller end ..............................///

// .......LIST company controller Start ..............................///

app.controller('listadminCtrl', ["$scope", "$filter", "ngTableParams","$uibModal", "$log","$localStorage","$location","$http", function ($scope, $filter, ngTableParams,$uibModal, $log, $localStorage, $location ,$http) {
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
    
    // var data = [{
    //     "id": 1,
    //     "lm": 138661285100,
    
    //     "dc": "CEO",
    //     "em": "j.smith@company.com",
    //     "ph": "617-321-4567",
    //     "ac": true,
    //     "dl": false
    // }, {
    //     "id": 2,
    //     "lm": 138661285200,
    //     "ln": "Taylor",
    //     "fn": "Lisa",
    //     "dc": "VP of Marketing",
    //     "em": "l.taylor@company.com",
    //     "ph": "617-522-5588",
    //     "ac": true,
    //     "dl": false
    // }, {
    //     "id": 3,
    //     "lm": 138661285300,
    //     "ln": "Jones",
    //     "fn": "James",
    //     "dc": "VP of Sales",
    //     "em": "j.jones@company.com",
    //     "ph": "617-589-9977",
    //     "ac": true,
    //     "dl": false
    // }, {
    //     "id": 4,
    //     "lm": 138661285400,
    //     "ln": "Wong",
    //     "fn": "Paul",
    //     "dc": "VP of Engineering",
    //     "em": "p.wong@company.com",
    //     "ph": "617-245-9785",
    //     "ac": true,
    //     "dl": false
    // }, {
    //     "id": 5,
    //     "lm": 138661285500,
    //     "ln": "King",
    //     "fn": "Alice",
    //     "dc": "Architect",
    //     "em": "a.king@company.com",
    //     "ph": "617-244-1177",
    //     "ac": true,
    //     "dl": false
    // }, {
    //     "id": 6,
    //     "lm": 138661285600,
    //     "ln": "Brown",
    //     "fn": "Jan",
    //     "dc": "Software Engineer",
    //     "em": "j.brown@company.com",
    //     "ph": "617-568-9863",
    //     "ac": true,
    //     "dl": false
    // }, {
    //     "id": 7,
    //     "lm": 138661285700,
    //     "ln": "Garcia",
    //     "fn": "Ami",
    //     "dc": "Software Engineer",
    //     "em": "a.garcia@company.com",
    //     "ph": "617-327-9966",
    //     "ac": true,
    //     "dl": false
    // }, {
    //     "id": 8,
    //     "lm": 138661285800,
    //     "ln": "Green",
    //     "fn": "Jack",
    //     "dc": "Software Engineer",
    //     "em": "j.green@company.com",
    //     "ph": "617-565-9966",
    //     "ac": true,
    //     "dl": false
    // }, {
    //     "id": 9,
    //     "lm": 138661285900,
    //     "ln": "Liesen",
    //     "fn": "Abraham",
    //     "dc": "Plumber",
    //     "em": "a.liesen@company.com",
    //     "ph": "617-523-4468",
    //     "ac": true,
    //     "dl": false
    // }, {
    //     "id": 10,
    //     "lm": 138661286000,
    //     "ln": "Bower",
    //     "fn": "Angela",
    //     "dc": "Product Manager",
    //     "em": "a.bower@company.com",
    //     "ph": "617-877-3434",
    //     "ac": true,
    //     "dl": false
    // }, {
    //     "id": 11,
    //     "lm": 138661286100,
    //     "ln": "Davidoff",
    //     "fn": "Fjodor",
    //     "dc": "Database Admin",
    //     "em": "f.davidoff@company.com",
    //     "ph": "617-446-9999",
    //     "ac": true,
    //     "dl": false
    // }, {
    //     "id": 12,
    //     "lm": 138661286200,
    //     "ln": "Vitrovic",
    //     "fn": "Biljana",
    //     "dc": "Director of Communications",
    //     "em": "b.vitrovic@company.com",
    //     "ph": "617-111-1111",
    //     "ac": true,
    //     "dl": false
    // }, {
    //     "id": 13,
    //     "lm": 138661286300,
    //     "ln": "Valet",
    //     "fn": "Guillaume",
    //     "dc": "Software Engineer",
    //     "em": "g.valet@company.com",
    //     "ph": "617-565-4412",
    //     "ac": true,
    //     "dl": false
    // }, {
    //     "id": 14,
    //     "lm": 138661286400,
    //     "ln": "Tran",
    //     "fn": "Min",
    //     "dc": "Gui Designer",
    //     "em": "m.tran@company.com",
    //     "ph": "617-866-2554",
    //     "ac": true,
    //     "dl": false
    // }];

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


    // $scope.tableParams = new ngTableParams({
    //     page: 1,
    //     count: 10
    // }, {
    //     total: data.length,
    //     getData: function ($defer, params) {
    //         var orderedData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;
    //         $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
    //     }
    // });

    $scope.editId = -1;

    $scope.setEditId = function (pid) {
        $scope.editId = pid;
    };


    // ...............model open function for assigning qa and transcriber start here..............//
    $scope.openmodel = function (uid) {
      // $scope.taskid=taskId
      console.log(uid);
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


app.controller('ModalUiCtrl', ["$scope", "$rootScope", "$uibModalInstance", "items","$http","$location","PDFKit","$sce","$localStorage", function ($scope, $rootScope, $uibModalInstance, items,$http, $location,PDFKit,$sce,$localStorage) {
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
        // console.log($scope.companies);
        
      }else{
       
      } 
    }).catch(function(){
          console.log("error adding company");
    }); 
  //.............................http post request for getting company list end here...............................

//

  $scope.items = items;
  $scope.selected = {
    item: $scope.list
  };

  //................................http call for get selected user data start here..................................
  var param={
            'token' :$localStorage.user_data.response.token,
            'uid': $scope.userid
    };

    $http.post($location.protocol()+"://"+$location.host()+"/medilixis_server/public/getselectedtrancoadmin", param)
    .then(function(response) {
      if(response.data.status=="success"){
        var selected_access=[];
        $scope.showLoader = false;
        $scope.showform = true;
        console.log(response.data.data[0].address);
        
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
        var array=[];
        var selected_access=response.data.data[0]['permission'][0];
        console.log(selected_access);

        angular.forEach(selected_access, function(value, key) {
            if(value =="1"){
                var access_right_dataa= $scope.access_right;
                angular.forEach(access_right_dataa, function(value, key) {
                // access_right_dataa.forEach(function(datas){
                    if(value.column_name==key){
                        this.push(value);
                        
                    };
                }, array);

                // this.push({[key] :  value});
                // console.log(key + " value is " + value);
            }
            // console.log(key + " value is " + value);
        });
        console.log(array);
        // for each (var item in selected_access) {
        //   console.log(item. + "value is " + property.value);
        // }

        // for (var property in selected_access) {
        //     // if (selected_access.property=="1") {
        //         console.log(property + "value is " + property.value);
        //     // }
        // };
        



        // $scope.selected_access_right=[
        // {
        //     "name": "Add Company",
        //     "status": 1,
        //     "column_name":"add_company",
        //     "parent_column_name": "company"
        // },{
        //     "name": "List Company",
        //     "status": 1,
        //     "column_name":"list_company",
        //     "parent_column_name": "company"
        // }];
      }else{
              
      } 
    });

  //................................http call for get selected user data start here..................................

  //....................on click ok button on assigning qa and transcriber model id inserted to mysql table task_ permission START....////
  $scope.ok = function () {

    
  };

  //....................on click ok button on assigning qa and transcriber model id inserted to mysql table task_ permission END....////


  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };  
}]);

/// EDIT model controller end here ..............................//