'use strict';
/**
 * controllers used for the dashboard
 */

var data = [{"role_id":3,"roles_title":"doctor","role_uri":"doctor","company_id":1,"company_name":"hospital1","company_add":"address1","company_phone":"phone1","company_email":"email1","user_id":9,"user_username":"doctor1","user_roleid":3,"user_companyid":1,"task_id":1,"task_title":"task 1","task_created_date":"2016-05-01 22:00:00","task_modified_date":"2016-05-17 00:00:00","task_priorty":"Normal","task_status":"Un-assigned","task_createdby_id":9,"task_files":[{"id":1,"task_id":1,"filename":"file 1","filepath":"storage\/uploads\/sound.mp3","created_date":"2016-05-03 22:00:00","type":"audio"}]},{"role_id":3,"roles_title":"doctor","role_uri":"doctor","company_id":2,"company_name":"hospital2","company_add":"address2","company_phone":"phone2","company_email":"email2","user_id":10,"user_username":"doctor2","user_roleid":3,"user_companyid":2,"task_id":2,"task_title":"task 2","task_created_date":"2016-05-11 22:00:00","task_modified_date":"2016-05-27 00:00:00","task_priorty":"Normal","task_status":"Un-assigned","task_createdby_id":10,"task_files":[{"id":2,"task_id":2,"filename":"file 2","filepath":"upload\/file","created_date":"2016-05-23 22:00:00","type":"text"},{"id":3,"task_id":2,"filename":"asdasdasd","filepath":"asdasdasd","created_date":"2016-06-02 17:50:37","type":"text"}]},{"role_id":3,"roles_title":"doctor","role_uri":"doctor","company_id":2,"company_name":"hospital2","company_add":"address2","company_phone":"phone2","company_email":"email2","user_id":10,"user_username":"doctor2","user_roleid":3,"user_companyid":2,"task_id":3,"task_title":"xsa","task_created_date":"2016-06-02 16:28:40","task_modified_date":"2016-06-02 18:28:40","task_priorty":"Low","task_status":"Assigned to Q\/A 1","task_createdby_id":10,"task_files":[]},{"role_id":3,"roles_title":"doctor","role_uri":"doctor","company_id":1,"company_name":"hospital1","company_add":"address1","company_phone":"phone1","company_email":"email1","user_id":9,"user_username":"doctor1","user_roleid":3,"user_companyid":1,"task_id":1,"task_title":"task 1","task_created_date":"2016-05-01 22:00:00","task_modified_date":"2016-05-17 00:00:00","task_priorty":"Normal","task_status":"Un-assigned","task_createdby_id":9,"task_files":[{"id":1,"task_id":1,"filename":"file 1","filepath":"storage\/uploads\/sound.mp3","created_date":"2016-05-03 22:00:00","type":"audio"}]},{"role_id":3,"roles_title":"doctor","role_uri":"doctor","company_id":2,"company_name":"hospital2","company_add":"address2","company_phone":"phone2","company_email":"email2","user_id":10,"user_username":"doctor2","user_roleid":3,"user_companyid":2,"task_id":2,"task_title":"task 2","task_created_date":"2016-05-11 22:00:00","task_modified_date":"2016-05-27 00:00:00","task_priorty":"Normal","task_status":"Un-assigned","task_createdby_id":10,"task_files":[{"id":2,"task_id":2,"filename":"file 2","filepath":"upload\/file","created_date":"2016-05-23 22:00:00","type":"text"},{"id":3,"task_id":2,"filename":"asdasdasd","filepath":"asdasdasd","created_date":"2016-06-02 17:50:37","type":"text"}]},{"role_id":3,"roles_title":"doctor","role_uri":"doctor","company_id":2,"company_name":"hospital2","company_add":"address2","company_phone":"phone2","company_email":"email2","user_id":10,"user_username":"doctor2","user_roleid":3,"user_companyid":2,"task_id":3,"task_title":"xsa","task_created_date":"2016-06-02 16:28:40","task_modified_date":"2016-06-02 18:28:40","task_priorty":"Low","task_status":"Assigned to Q\/A 1","task_createdby_id":10,"task_files":[]},{"role_id":3,"roles_title":"doctor","role_uri":"doctor","company_id":1,"company_name":"hospital1","company_add":"address1","company_phone":"phone1","company_email":"email1","user_id":9,"user_username":"doctor1","user_roleid":3,"user_companyid":1,"task_id":1,"task_title":"task 1","task_created_date":"2016-05-01 22:00:00","task_modified_date":"2016-05-17 00:00:00","task_priorty":"Normal","task_status":"Un-assigned","task_createdby_id":9,"task_files":[{"id":1,"task_id":1,"filename":"file 1","filepath":"storage\/uploads\/sound.mp3","created_date":"2016-05-03 22:00:00","type":"audio"}]},{"role_id":3,"roles_title":"doctor","role_uri":"doctor","company_id":2,"company_name":"hospital2","company_add":"address2","company_phone":"phone2","company_email":"email2","user_id":10,"user_username":"doctor2","user_roleid":3,"user_companyid":2,"task_id":2,"task_title":"task 2","task_created_date":"2016-05-11 22:00:00","task_modified_date":"2016-05-27 00:00:00","task_priorty":"Normal","task_status":"Un-assigned","task_createdby_id":10,"task_files":[{"id":2,"task_id":2,"filename":"file 2","filepath":"upload\/file","created_date":"2016-05-23 22:00:00","type":"text"},{"id":3,"task_id":2,"filename":"asdasdasd","filepath":"asdasdasd","created_date":"2016-06-02 17:50:37","type":"text"}]},{"role_id":3,"roles_title":"doctor","role_uri":"doctor","company_id":2,"company_name":"hospital2","company_add":"address2","company_phone":"phone2","company_email":"email2","user_id":10,"user_username":"doctor2","user_roleid":3,"user_companyid":2,"task_id":3,"task_title":"xsa","task_created_date":"2016-06-02 16:28:40","task_modified_date":"2016-06-02 18:28:40","task_priorty":"Low","task_status":"Assigned to Q\/A 1","task_createdby_id":10,"task_files":[]},{"role_id":3,"roles_title":"doctor","role_uri":"doctor","company_id":1,"company_name":"hospital1","company_add":"address1","company_phone":"phone1","company_email":"email1","user_id":9,"user_username":"doctor1","user_roleid":3,"user_companyid":1,"task_id":1,"task_title":"task 1","task_created_date":"2016-05-01 22:00:00","task_modified_date":"2016-05-17 00:00:00","task_priorty":"Normal","task_status":"Un-assigned","task_createdby_id":9,"task_files":[{"id":1,"task_id":1,"filename":"file 1","filepath":"storage\/uploads\/sound.mp3","created_date":"2016-05-03 22:00:00","type":"audio"}]},{"role_id":3,"roles_title":"doctor","role_uri":"doctor","company_id":2,"company_name":"hospital2","company_add":"address2","company_phone":"phone2","company_email":"email2","user_id":10,"user_username":"doctor2","user_roleid":3,"user_companyid":2,"task_id":2,"task_title":"task 2","task_created_date":"2016-05-11 22:00:00","task_modified_date":"2016-05-27 00:00:00","task_priorty":"Normal","task_status":"Un-assigned","task_createdby_id":10,"task_files":[{"id":2,"task_id":2,"filename":"file 2","filepath":"upload\/file","created_date":"2016-05-23 22:00:00","type":"text"},{"id":3,"task_id":2,"filename":"asdasdasd","filepath":"asdasdasd","created_date":"2016-06-02 17:50:37","type":"text"}]},{"role_id":3,"roles_title":"doctor","role_uri":"doctor","company_id":2,"company_name":"hospital2","company_add":"address2","company_phone":"phone2","company_email":"email2","user_id":10,"user_username":"doctor2","user_roleid":3,"user_companyid":2,"task_id":3,"task_title":"xsa","task_created_date":"2016-06-02 16:28:40","task_modified_date":"2016-06-02 18:28:40","task_priorty":"Low","task_status":"Assigned to Q\/A 1","task_createdby_id":10,"task_files":[]},{"role_id":3,"roles_title":"doctor","role_uri":"doctor","company_id":1,"company_name":"hospital1","company_add":"address1","company_phone":"phone1","company_email":"email1","user_id":9,"user_username":"doctor1","user_roleid":3,"user_companyid":1,"task_id":1,"task_title":"task 1","task_created_date":"2016-05-01 22:00:00","task_modified_date":"2016-05-17 00:00:00","task_priorty":"Normal","task_status":"Un-assigned","task_createdby_id":9,"task_files":[{"id":1,"task_id":1,"filename":"file 1","filepath":"storage\/uploads\/sound.mp3","created_date":"2016-05-03 22:00:00","type":"audio"}]},{"role_id":3,"roles_title":"doctor","role_uri":"doctor","company_id":2,"company_name":"hospital2","company_add":"address2","company_phone":"phone2","company_email":"email2","user_id":10,"user_username":"doctor2","user_roleid":3,"user_companyid":2,"task_id":2,"task_title":"task 2","task_created_date":"2016-05-11 22:00:00","task_modified_date":"2016-05-27 00:00:00","task_priorty":"Normal","task_status":"Un-assigned","task_createdby_id":10,"task_files":[{"id":2,"task_id":2,"filename":"file 2","filepath":"upload\/file","created_date":"2016-05-23 22:00:00","type":"text"},{"id":3,"task_id":2,"filename":"asdasdasd","filepath":"asdasdasd","created_date":"2016-06-02 17:50:37","type":"text"}]},{"role_id":3,"roles_title":"doctor","role_uri":"doctor","company_id":2,"company_name":"hospital2","company_add":"address2","company_phone":"phone2","company_email":"email2","user_id":10,"user_username":"doctor2","user_roleid":3,"user_companyid":2,"task_id":3,"task_title":"xsa","task_created_date":"2016-06-02 16:28:40","task_modified_date":"2016-06-02 18:28:40","task_priorty":"Low","task_status":"Assigned to Q\/A 1","task_createdby_id":10,"task_files":[]}];




// var data=[]; uncooment it when uncommenting http post get grid function
//controller for ngtable start
app.controller('ngTableCtrl2', ["$scope", "$rootScope", "$http", "$location", "$localStorage", "$filter", "ngTableParams", "$uibModal", "$log", function ($scope, $rootScope, $http, $location, $localStorage, $filter, ngTableParams, $uibModal, $log) {

	// getting data from database for grid

	// $http.post($location.protocol()+"://"+$location.host()+"/muapp-new/muapp/getGrid")
	// 	.then(function(response,data) {

	// 		//console.log(response);
	// 		if(response.data.result=="success"){
	// 			console.log(response.data.data);
	// 			$scope.datas=response.data.data;
 //        data=response.data.data;

	// 			$scope.tableParams = new ngTableParams({
	// 				page: 1, // show first page
	// 				count: 5, // count per page
	// 				sorting: {
	// 					title: 'desc' // initial sorting
	// 				},
	// 				filter: {
	// 					name: 'M' // initial filter
	// 				}
	// 			}, {
	// 				total: data.length, // length of data
	// 				getData: function ($defer, params) {
	// 					// use build-in angular filter
	// 					var orderedData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;
	// 					$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
	// 				}
	// 			});

	// 			$scope.saved = $localStorage.columnName;
	// 			$scope.todos = ($localStorage.columnName!=null) ? $scope.saved : $scope.columns;
	// 			$localStorage.columnName = $scope.todos;


	// 		}else{
	// 			//console.log("no data");
	// 			$scope.saved = $localStorage.columnName;
	// 			$scope.todos = ($localStorage.columnName!=null) ? $scope.saved : $scope.columns;
	// 			$localStorage.columnName = $scope.todos;
	// 		}
	// 	}).catch(function(){
	// 	// console.log(userdata);
	// });

  // function to set visible true when checkbox click
	$scope.func=function(t,e){


		angular.forEach($scope.columns, function(item){
			if(t.column.title==item.title) {
				if (e == true) {
					item['visible'] = true;
				} else {
					item['visible'] = false;
					//item['visible']=false;

				}
			}

		});

		$scope.new=$localStorage.columnName;
		// console.log($localStorage.columnName);


	};



//this will remove when http post request is uncomment START


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
         total: data.length, // length of data
         getData: function ($defer, params) {
           // use build-in angular filter
           var orderedData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;
           $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
         }
       });

       $scope.saved = $localStorage.columnName;
       $scope.todos = ($localStorage.columnName!=null) ? $scope.saved : $scope.columns;
       $localStorage.columnName = $scope.todos;


//this will remove when http post request is uncomment END




	// $scope.columns = [
	// 	{ title: 'Name', field: 'name',sortable: "name",visible:true},
	// 	{ title: 'Alies', field: 'alias',sortable: "alias",visible:true },
	// 	{ title: 'Publisher', field: 'publisher',sortable: "publisher" ,visible:true},
	// 	{ title: 'Gender', field: 'gender',sortable: "gender",visible:true}
	// 	//{ title: 'Action',  visible: true, }
	// ];




  $scope.columns = [
    { title: 'Name', field: 'task_title',sortable: "task_title",visible:true},
    { title: 'date', field: 'task_created_date',sortable: "task_created_date",visible:true },
    { title: 'priorty', field: 'task_priorty',sortable: "task_priorty" ,visible:true},
    { title: 'status', field: 'task_status',sortable: "task_status",visible:true},
    { title: 'Client', field: 'company_name',sortable: "company_name",visible:true},
    { title: 'Clinician', field: 'user_username',sortable: "user_username",visible:true},
    // { title: 'Transcription ID', field: 'transcription_id',sortable: "transcription_id",visible:true},
    // { title: 'Assign To', field: 'assignto',sortable: "assignto",visible:true},
    // { title: 'Hours Old', field: 'hours_old',sortable: "hours_old",visible:true},
    { title: 'Modified Date', field: 'task_modified_date',sortable: "task_modified_date",visible:true},
    { title: 'File Name', field: 'filename',sortable: "filename",visible:true},
    { title: 'File Path', field: 'filepath',sortable: "filepath",visible:true},
    { title: 'File Type', field: 'type',sortable: "type",visible:true}
    //{ title: 'Action',  visible: true, }
  ];




	//modal action button
	$scope.items = ['item1', 'item2', 'item3'];

	$scope.open = function () {
		// var fpath = $location.protocol() + "://" + $location.host() + "/muapp-new/" + filepath;
		// $rootScope.filess = fpath;
		var modalInstance = $uibModal.open({

			templateUrl: 'myModalContent.html',
			controller: 'ModalUiCtrl2',
			// size: 'lg',
			backdrop: 'static',
      windowClass: 'app-modal-window',
			resolve: {
				items: function () {
					return $scope.items;
				}
			}


		});

		modalInstance.result.then(function (selectedItem) {
			$scope.selected = selectedItem;
		}, function () {
			$log.info('Modal dismissed at: ' + new Date());
		});
	};

	$scope.todos = $scope.columns;
  
  
  // $scope.sortableOptions = {
    
  //   update: function(e, ui) {
     
      
  //     var logEntry = $scope.columns.map(function(i){
  //       return i.value;
  //     }).join(', ');
      
  //   },
    
  // };

         $scope.editId = -1;


    $scope.setEditId = function (pid) {
      console.log(pid);
      
        $scope.editId = pid;
      
      
        
    };


    // ...............model open function for assigning qa and transcriber start here..............//
    $scope.openmodel = function (taskId) {
      $scope.taskid=taskId
      console.log(taskId);
    
      var modalInstance = $uibModal.open({

        templateUrl: 'myModalContent1.html',
        controller: 'ModalUiCtrl',
        scope : $scope,
        size: 'lg',
        backdrop: 'static',
        resolve: {
          items: function () {
            return $scope.taskid;
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

// directives for drag column table start===================================


app.directive('droppable', ['$parse',
  function($parse) {
    return {

      link: function(scope, element, attr) {

        function onDragOver(e) {
// console.log(e);
          if (e.preventDefault) {
            e.preventDefault();
          }

          if (e.stopPropagation) {
            e.stopPropagation();
          }
          e.dataTransfer.dropEffect = 'move';
          return false;
        }

        function onDrop(e) {
          if (e.preventDefault) {
            e.preventDefault();
          }
          if (e.stopPropagation) {
            e.stopPropagation();
          }
          var data = e.dataTransfer.getData("Text");
          
          data = angular.fromJson(data);
          console.log("asdasdasdsaddas");

          var dropfn = attr.drop;
          var fn = $parse(attr.drop);
          scope.$apply(function() {

            scope[dropfn](data, e.target);
          });

        }



        element.bind("dragover", onDragOver);
        element.bind("drop", onDrop);




      }
    };


  }
]);

app.directive('draggable', function() {

  return {

    link: function(scope, elem, attr) {

      elem.attr("draggable", true);
      var dragDataVal='';
      var draggedGhostImgElemId='';
      attr.$observe('dragdata',function(newVal){
        dragDataVal=newVal;

        // console.log(dragDataVal);
      });
      
      attr.$observe('dragimage',function(newVal){
        draggedGhostImgElemId=newVal;

        // console.log(draggedGhostImgElemId);
      });

      elem.bind("dragstart", function(e) {
        var sendData = angular.toJson(dragDataVal);
        e.dataTransfer.setData("Text", sendData);
         // window.clipboardData.setData("Text", sendData);
        console.log(dragDataVal);
        if (attr.dragimage !== 'undefined') {
          e.dataTransfer.setDragImage(
            document.getElementById(draggedGhostImgElemId), 0, 0
          );

        }

        var dragFn = attr.drag;
        if (dragFn !== 'undefined') {
          scope.$apply(function() {
            scope[dragFn](sendData);
          })

        }
        // console.log(e)

      });


    }


  };


});

app.directive('angTable', ['$compile',
  function($compile) {
    return {
      restrict: 'E',
      templateUrl: 'public/admin/assets/views/admin_table.html',
      replace: true,

      // scope: {
      //   conf: "="

      // },
      controller: function($scope) {

        $scope.dragHead = '';
        $scope.dragImageId = "dragtable";


        $scope.handleDrop = function(draggedData,
          targetElem) {

          var swapArrayElements = function(array_object, index_a, index_b) {
            var temp = array_object[index_a];
            array_object[index_a] = array_object[index_b];
            array_object[index_b] = temp;
          };

          var srcInd = $scope.todos.indexOf(draggedData);
          var destInd = $scope.todos.indexOf(targetElem.textContent);
          swapArrayElements($scope.todos, srcInd, destInd);
          console.log(srcInd);
                console.log(destInd);
                console.log(draggedData);
                
    
        };

        $scope.handleDrag = function(columnName) {

          $scope.dragHead = columnName.replace(/["']/g, "");

        };



      },
      compile: function(elem) {
        return function(ielem, $scope) {

          $compile(ielem)($scope);


        };


      }




    };


  }
]);


// directives for drag column table end=====================================




// ......................popup model controller for myModalContent1 id start here .................//

app.controller('ModalUiCtrl', ["$scope", "$rootScope", "$uibModalInstance", "items","$http","$location","PDFKit","$sce","$localStorage", function ($scope, $rootScope, $uibModalInstance, items,$http, $location,PDFKit,$sce,$localStorage) {
  
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

// ......................popup model controller for myModalContent1 id end here .................//



app.controller('ModalUiCtrl2', ["$scope", "$rootScope", "$uibModalInstance", "items","$http","$location","PDFKit","$sce","$localStorage", function ($scope, $rootScope, $uibModalInstance, items,$http, $location,PDFKit,$sce,$localStorage) {
	$scope.items = items;
	$scope.selected = {
		item: $scope.items[0]
	};

	
    var doc = new PDFKit();

  
    var stream = doc.pipe(new blobStream());

    var imgData = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAZAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8AAEQgAQgEtAwERAAIRAQMRAf/EAMcAAQACAgMAAwEAAAAAAAAAAAAJCgcIBQYLAQIEAwEBAAAHAQEBAAAAAAAAAAAAAAECAwQFCAkHBgoQAAAGAgEDAgMEBQkFCQAAAAECAwQFBgAHCBESCRMUITEKQVEiFdIjU5MWYXGRMpbWGBlZocGXWNiBUpLCMyQmFxoRAAIBAwMDAgIFBwYKCgMAAAECAwARBBIFBiETBzEIUSJBYZEyFHGBQlIjFQmh0UPTlBfwsXIzU5MkNNRXwfGC0nPjVCU1FpVWGP/aAAwDAQACEQMRAD8Av8YpTFKYpTFKYpTFKYpTFKYpTFKYpTFKYpTFKYpTFKYpTFKYpWiHMXyYcI+BsYLjkvvqpU2xLNCvIvXEWovbNpTaKhiERVjdfVpKSshWa5jgBXbhFuxDoImWKACIKmVWbooqsPyT+sAiGziQiOI3E55LokM4SY3vkBaSxCKvYfsQcl1zQjyDpRFUgCcAUsDdQAEAEgD1AF6qiA/pGoZ9r/UxeWzZay35Luah6cj1TGEI3VOpKagVIg934CSt+aX6eKHQ3TqDoDdADoID8RhepxCg9bmtPJTzN+VWYdpvXfPPkSkqiqVZIkXcgg2gHKU5CgoxhGMeycpdpx6pqpqJmHoIlEwAIL1N20+FZg1t9QJ5c9Zv2ztnzAs9zbIHKZWI2ZT9d3qPekKUCek6Wl6oMyQglD4ig7ROIiI93d8QXqBiT4VNxxM+ryuzB/G1/mzxvgbBDKGTQebK49O3cHOMU/VIUz19rW6S0nGTRwRExlPaTcf8S/gRHr0BeqbQfqmrdXEDnpxN53Ukbzxg3JWdjNWiCKthrKaykRfqcosIEK3uFFlyM7NXzGW6kTVWbg2cCAiiqqXoYY1RKlejCxrcDFQpilcNJj+sSL9xBH/xG6f+XLvGHyk/XVhln5gPqrjMuatK/sgsKChVA+PT4GD/ALxR+YZI6B10mqkchjcMPSuyFMBylMUepTAAgP8AIOY8gg2PrWVBBFx6V9shUaYpTFKYpTFKYpTFKYpTFKYpTFKYpTFKYpTFKYpTFKYpTFKYpTFKYpTFK4Kz2it0muzdvuM/D1aq1mLezdislhkmkPBwcPGoHdP5SWlH6qDKPYMmyZjqqqnKQhQEREAxSqK/ld+pt2LsKyzvHLxnO5KrVM0gNXkuSTeKO62LfpQz4zEzPSUGsg6NW4GQOBU2ssu3Umn3qgZqixEpFVVV0iFtT+n+HrWlnDr6bLyHc2HqO5OTllV411S6rBYJKzboNNXrf1uB96K4yq9AXkm0szdvk1TCJ7HKxrwogAi3OAh1hapjKq9FF6sh6K+lb8ZWsmTQ+009yci51P0zvHV32C8pleVWKBRMDKu6vSqLlu1MoUR9Nw/eG6D2icwdesapGVz9VSH1/wAKHijrTNFjG8E9CLJIm7yKzlbdWd8YQHqALSdlkZaRcED7CnVMUPuxUut/ia65efBV4ltgxh4yX4RalhymSUSI+ow2fXssl6nT9aWTpNhgXaixOn4DKGP2fZ0xUe4/xNQ98pvpG+Lt1jZGY4jb12Zoy39FV2NV2b7Pbmr3RylOZGOKumhXNh18F1BKQz08nMgiQO4GipuoCtU4mYetiKp9c6PF5zU8dU+mw5LaldRlNkZIYusblpbo9w01bnRgMZBvF3Nq1anhZR2VM5kYycaxEuqRMxytRTDvGFV1dW9PWtTtMbu27x12NXtuaM2La9W7IqzkjmFttPlV4uSQADkOqydlIJmktDvQIBHTF2muydpCJFkjkESiqJAYWPpXoR+F76hmkc3HFd418tDV3VvK1cG0VTrQyD8r13v50VFUfSikTh7Wk7FVIgHfEKK+zklTdY4wHODFKNW0kZXqPu1aAxVKuvvj9zk/3EApP6A6j/tHL+AWjH11jMhryn6ulfjyrVCmKVy0c4+aBh+8yYj/AEmL/vD/ALctchP0x+er3Fl/oj+b+auWy1q9pilMUpilMUpilMUpilMUpilMUpilMUpilMUpilMUpilMUpilMUpilMUrz9/PP5RNreQHkaz8YvCJvP3HXELsFtR7OShGcPJTkRuaOdqN3NdZrR7oWz3WNCfgIdFABs5ftVX6xxbN2yhRq4jQKNbetT7+G7wQ6Z8e1RrW390wlc2vzOk2acjKXB6ilM1nTSjxH41XVLd0kLdCTZIqCk+sHZ752qKhG50Wg9hwqnI+o2H3asI4qnTFKYpTFKYpXUr5QaPtKnWPXmyqjW77Q7hFOoO1U63w0fYa1YYd6T03UbMQ0og6YSDNYvzIomYOoAIfEAHFK8+/zffTxSvEOMtPLThLHT1v4ysBeTW0dPqqv7DdOP8AG9TOHNpr0g4Udy9007HFE3vTODKy1bQKDhwo8YA5dR63wq5jlv8AK3r8aqnNHbpi6aSEe7csnzJw3esH7Fwq1eM3jVUi7V4zdtzprtnTZYhTpqpmKchygYogIAOQqtXod/T4+cRXl1DRXDPlhZ0TcnanCgnqu/yRlCON+1GAjFFnzKbcn7kVdr1mPZGXcnESGm2QGcAUXCLkykR8xCj1P81z9gBJ+qrWZO2C/wCgP+kgAfnJAH1m1WiTmE5jHH5mMJh/nEeuZMCwsKwLHUxY+pNfXI1CvnFKAIlEDFHoYogICH2CHxAcEAix9KiCVNx6iuyoLAukVQPgI/AwfcYPmH83+7Mc6aGK1lo3EiBhX9skqemKUxSmKUxSmKUxSmKUxSq0/Knyn72a70u8Nx+vMTCatrL0lbg1v4TqdgGxO4gDITVlCRmoqUXOzlJUVStPSUKidikioBQOc4j0n8V+1rgs3BsHN5/gyz8oyk70g788XZWTrHDojdBqSPSZNQLCVnW5VVtxO9wXvy8q4PlndNn8R7pBi8I26b8LGfwuLP8AiJICVnn7k8MraXm1rFoYIYUjcKGZiZwOJHI6B5RaTrOzIwG7Sc7PyK+QKJh/+PXaMbtxmGKZTKKqBHuwXTeMTGMJzsnKQn6Kd5S6R+WvHOf4v5rk8ZytT4N+7iyn+lxnJ7bHoBrWxjkAFhIj2utieovt98zbR518Y4POdu0R7iR2c6AH/d82NV70drk6G1LLCSSTDJGWs2pRsxnmle2VqzyV5i6Q4sw3utiWMHdodt/Xgte10W8lc5oD+oCLgsaK6KUREmOicBfPlG7XqQSEOdXtTN6j428P838o5na47jadsRrS5ct0x4/S412Jkk6j9lEHfqCQq3YeE+a/cZ4v8D7X+K5pmht6kTVBgY+mTMnvexEWoCKIlSO9M0cVwVVmeyGIfS/Prlpy15T0+k0iai9Va2fSoylggIev12xGhqBXx/Mp95MWayQ7l4rJvWKXtAcpAzQK4cJ9iJR+e3PNPAnibxL4szN73uGXdeSJFoilkllhEmVL8kSxwwyKoRWPcKN3GKI13P0c8PF/u19wPuJ8/wC28X4pkQbBwZ5zNkY8WPj5JjwMf9pO02TkQu5llUCBZIxDGsksemMHqcj8t/Lr/DE7La/4zR8NNrxTlZhJ7TnUhkoVV2gJSLkp0MQ6SMmggsBie+dGM3VEoikiomJFjfOeJfaP+9MCHkHkuSaCOVQ6YMR0SBT1ByJLEoSLHtIA63s7qwKD7P3D/wARGPje75PDvCMGNm5WM7RzbnkAyY+tTpZcOFSomCkEDIkbtMReOOWMrIdW+Nm6/JVy3uslA673bJx7KKTRf2m0y0VWIyqVps7UMRskr+X1Nyoo+eikf2zRukZRQEzmHtTIc5fUfJPC/bZ4k2WLO5Dskck8pKwQRyTPPMVF2I1zgBVuNcjMALgdWIU+B+EvJvvb9xXJ8jbeH8pmx8PHAkysqWHGixMZXJCLaPEYmR7N24o1JbSxJVFZxIh/he8mH/PLAf2UT/uvmvX96Htq/wD0ef8A15/rq3K/uH96/wDzWx/7Ev8AUV3rWujebGvrpD3refMqOsep6gEhY7tBx8AzjVJKJiIx4+FBy/c15um0jCuEUzvDAcpxalUAglMIGDBcl5x4V5Bss2x8H4bJjcrzNEONK0rOEkkdVuqCUlnsSIxYjWVJBAIr63gvir3L8Q5Rjcp8peSo8/gO3iTIzMdMZIu7HHE7APKYV0RK4V5Te5jVlFibiIPYHlh5Wyt4tkhQ7lGVmlOp6TUqcCrTKnIOIyve6ULEtnb6QiXTt09BkUgrHOce5UTdOhegBt1x/wBqHirF2PEx9+w5cne1x0E8oyZ0Dy6R3Cqo6qq6rhQB9217m5rnPzL+IP55zuV7jlcP3DGw+KvmS/g4WwsaR0xg5EId5I3dpDGFZyWPzlrWFgN++PEj5Q+ROq4PbUNvzV1QgrK4kywrC00CILKPWEa9VjjSoJxtHeoJs3TxssVHqfuORPv6dpiiPgfkPG9sPjzlM/E8zYd0zM7GVO48GXJoV3UPou+SpLKrLq6WBNvUGtvfDmb75vMXAMPyFgcs2Hbtsz2l7MWTt8XdaOORou6RHhsoV2RinUkqA3owrT3kDzc8hfG/aU9qi97UqbqchEo94WQg6RTHUTJxsszSfR75ko5rLR0UiqKvaciqRDpqFMUQEAAR9g8f+Evb55H4vByvYtry0wZy66JcnIWRHjYq6sBMy9CLgqxBBB+oa2+YvdH7wvCfPMrgHKt822XcsZI5FkgwsRopYpVDxuhbHRxcEqysqlWVh1FmONLx5deQN31RKcc5iepWvdmb9P8A/W9U5GtWCkShpqqrI/mm5NtWeBScKMn5KBqVjMPmB2QMzlmfZJ9pvU7ieN+f/btxbgmzR8g4XNl/iZJWBw3PeHaijeaeZJLK6JBGt37hcHUoDAkA7Lez/wB5fOvLnJJ+H+TMTb/w0ECMNyhvj/t55o8fFxZIDrSSXKmkKxGExEBHJjKqzLC1wPtC2qNoynLzQMAx1bDnrrzU/FaFmq1WLNPUfQMc5VafxjLup+IkyOtq7kelcys7MgHunAv10iKA0WKiX6L27+3Pi/JuGf8A3HyFiPkncGvhw9yWIR46kjvHtOjM07XKhiQIlUgfOa+K95/vT55wXyV/dl4c3CPC/dCW3PJ7GPkGbMkCt+FUZEcqLHippDlVDNO7KSO0L2K9D+RTf9R03yb5f8l9nfm2huNWsJWVNCjVaRBDedoy5EmtFpLCRia9GPlHknJLJNgTSXIIOnzTv/Acc+e9zXAfEvjTZMPbOK7cIeVZ0usMcjJkMePH99tEkzreRyqKWU9BJbqtx9h7F/LPuF84cl3Pfuf702VwHa4BF2xiYUInzZuqL3IceN7QRBpHCsPmeDVdWINVVf6oHy4LLrLJbO1EzSVVVVTaJaPpaqTVM5zHI2TVXSUXVIgUQKBjmMYwB1ERHNLb1097KfXV5Dw1be5e8iOCuuOQ/M6zQ05sbdj2XvdOjoKlQtHaV/U7lRKPoxF4+GSIR87srWPVmiOVDCJmck3IAF7B6xqg4UNZfSpU8VJVdTzDfUBas8csw90Hp6rR27uVpopq/lISRfLtNb6lbSrYXMU52C+jVSSsxYHjY6bhGCZHbqi2UKq4dNgMkVVVVIi3U+lVTdc+Zfzo87uRlS1FoXfswhsbZ0wpFVPXWsaNrOqVKHappKvpB87ezFalHcfX6/GN1XLyQkn7g6LdIxjKGHoUYVV7cai59KsyQ3A76k88TGnlfMdpyKkjMWwvY1DQGtp5Fi59IvqtSTTrQbBzK+ib8IrqIpnVEO4Q6j1GNz/gBVK8P6p+01yyfAf6jRZRNF/5nNRmYqnIm9KTjHqhyczM5gK5KRu50gVuuYyImACKCBDD8DfDrjrUNUX6v8pqur9QH4Vw4H2eM5P8eY6Rk+L+xn7GJucYVsQymntpPUSEV9wVkkm0Z0bYr8irqP8ATTQaxkgoePTImgZiQYGqsUmr5T61W8plytmurfV7/Q7DKVK7UmfirTUrRCOjspiv2KDeoyETLxrpMQOi7ZPECHKPxAenQQEoiAxVmVg6Ehwbg/Aj0NVXRJEMcgDRsCCD6EHoR/1dR6g3r01/Hb5uuNvJDgU55N8ldo0DSd80inH07krHTUilGoEuYsjqQlmpUCUVpmcj9qNWijqLj2CLpyV8R0xTBQzYTDlEIli76ALEPvdflQ/C56hT6x+pa/bBeRWv81NGcfI/COWeVuqdLtIvxAHQsvUS2sq27rCOJ1tqGXmx5H/Mtal6d42YqwcIODMZNqx9w53bLguzZ+xUYx4RJ2w0zWjqHI1FYyageiyUOuUCgD2Tjj9zM9MMZFvH0iP6bAEt9B7cbdLXv87/AA6GNxoasY48dtORd8gf0SsVCH1HelXre2m0cfx6iaMiRcqeXHmNcfDj4/KTStS752dtHlfuK4NKxRtub6n2G0r8dtAgym9n7JeQtgYq1NpFR8aDaKZxzWOJHNXUwkb0lDkOc1SWURxago6fKoPW5PUs1tOrSoN9IVQ7R/IFJBpY2McnJ0MzWI1uRcWUdFVLliupyLai7GNZR3CyqRWu4qea7ze8uOR2meNeueUbM1t3FfIaoNHgaH0K4RgoxyqZ1ZbU+RDW5O6NqVZaPJJz+IOqDUwB8RDLeLIlmkEQWIXvc6L6QASzWv10qC1vptYdTV7PgYuNC07NO2kdF7ltTEhUS+nprcqt/ovc9AalZ8z/ANQZyf4e8mrJwy4ltanCyemYWnx20d17EqzC22i3XSdqUHaDp1utqCzqEJFNYuZbmcrKM3B3LxZUqJG6SRPUhmuO7pCBSbN69FDgOqr8QFZbk9SegA0kvHa4CcfuO5dQSl7WLNGxjd2+BZ1YBQLADVqbUFjiD1b9RB5ctkbBq1Fl+aGldTMbRKJRJ9hbP0nQWOv6ys4KcGry1yNW1hbJqLiFHIESUdJx66bfvBRXsSKdQtnWSMSAXsTVlXXGoPqdJuWodof84uBdt1lJS9Xm5N9VIWJkkLJRXEgxeSa1clGPHJJo9CWgDKC0XScEIcTlMVQoD3AqleL4GrQGRqlTFKYpTFKYpTFK0Q8ivIlPj3xvs7iMeERvWxE3FCpKQGKLhBxLtVE5yeImJTj2QEIdVQhxASA7UblN/Xz3X28eO28heR8WLKQtsW3kZWSfoKxsO3Ef/Fk0qR69sSEfdrVf3ieZf7mfC2fuG3y9vle63wMCx+ZZZlbuzjobfh4BJIpIt3e0p+9VVCz6d2LUdfUHalgrrxnR9mmmS1KeP+JB+vBv149+gsH/AKjZcyrcyiQHAPWSATkEQA3TqltfMeObxyHcOK7fkI++bZ2+/F9KiVQykfQwAIDW+63ytYkX4Dcg8X834xwrZvIe84UkXE9/734Sf1DGF2RlcW/Zs4UyQhv89EDJHqVWttP49uWSnFvdLc9ierk1PsP2Vd2G3KB1kontXMEHdkm6YGVOvWHLlT1wIBzqR7hwBSKKgiAeW+4PxOvlHhjDbkU8s2/VNiHoDJ0/a4xJ6WmAGm9gJUjJZVL3959nHuEbwT5LVd8lYePt50Y+evUiEgnsZoUdb47MwkC3LY8kwCPIIwJO90eR3Z+6JKx644NVJ+6j4KPev7lvqwxftomuQDFs7dSc5GtJhAsbWops0amULIzJRXVKRQiDH1fSVHWPhntz4xwvGxuSecctEyJ5FXH2uF9Uk0rFQkTtGdczsxAMWP8AKpKs8+nUo3v8je8nnXk/cMzhHtV26SbHxYmfM37JQJj4sCKzSTxicCKCNVUsJ8u8jhXWLELhHqvNYJ6dtE1J2CzTcpZJ+WdKO5WempB5LSso7N0KZ29kX6qzx2qcpQDuUMJu0AD5B0zoVt+Bg7XhRbftkEWNgRIFSKNFREX9VUUBVH1AWvXGnet53fkG6z7zv2XPnbvkSF5Z5pHlllb01PJIS7EgDqxvawqSPUcJJ8euBG3+QiZFYy78hJ9honXsp2im7jqKY7x5dpOMcEMCiX8QhDvWYm/CZM7Ahyj8uut3Ls3F8hee9o8fMRLsnHsdtzy09VfKsq4yOPQ9ruRSW6giVlP01vF442rP8Me0LkfmNA0HKuZZUeybfLYh4sEs5y5I2FmU5HayEBB6GCKRT6VGJmztaFVaD0lw/wByV7iFpinaW3Ghoa3WPptPadnaVoZqwWKUtEWkvDV8XCckwI1j4CJdpN1Sj6gqKNkzF7Px9/MHm3l7h24+Xd53nmmztv20Y/8AsODC03aihSByJJbFGLPLIrOvpYOwN/l096PGPt18j7B7deNcT8ackTiXJMn/ANz3TKTEXKnyJsqIMmPqMsaqkEbJExGot2I9JUa9fI/4OOd3+oVYP7CH/vDlv/fD4K/5e4/9q/8AJq6//nT3V/8AOPL/APxcf/E1gHnPdNj8XuJQaPve75nc23N62SQSlLPKNyxh4jW0amyGWYRMams7FkzeKpN2ZzKqGO4966EogCZSk++8G7Lx3yf5a/8Au+xbJDs3EdixkKQo2sSZjlu20jkLqZQXkGkAJ2ogRdiT5L7reV8y8E+3MeMeU8nyeSeRuV5kySZckawFNuTR+ISKJCwSMr2sdgzs0hyJ3DAAIkE2rNeTm2tkUfWVbL1mrzZ4etMlRSOsky/M3iSDmTdJpiU4sYloKjpwICHagiceodM3p5TyHC4lxvO5NuJ/2PBxZJmFwC2hSVRSf0pGsi/FmArkx494XunkbnG1cF2b/wCR3XOix1bSWEYkcB5WA66Ik1SufoRGP0VdyrsLTNL60h4Bu5Z12ia1qLOOK+k3Ddo0jYCtxhETv5J4cEW5BK2aiquqPaBjiYw/POJu45u88z5LNnyK+Rvu5ZbPpQFmeWZydKKLk/M2lVF7Cwr9RGz7ZxzxzwzG2jHeLC4rsu3pEHkZUSLHxoguuRzZQFRNTubC92NU4uXm6EOQPIrZu0o8V/yKbmk2VZI5KKaxazAMWsFCHOiJjego7Yx5XBydfwqLGzsR4i4ZJwDx3tnF8jT+PghLTW6jvSs0sgv9IVnKA/SFFfm39yPk6Dy/5p33nOAWOzZGSIsXUCCcXHRYIW0nqvcWPulT1VpCD1qOLlNpO72vUpbj/wC4hK/tDZ+vOIlFf9O1zLvLoR5tze0hFkBQrhGPhNXUxig6eAUUhVXK2AwidQC+GedN/h5DzTG8S7W5bkG8Jj4DFT/uuHkSrlbhK3weaCGCNR6iNJS1gy6tsfafxDI4X4uzfcRv8YTiHHJc3d0Vxb8fuWHjvgbPAt/vRYuVk5czk9DPLAFuyPo2FhoVuybRFcr0f6TRk3j4KCimaXUU2rVJGPjGDZFIvUxipJkTKUodRHNsMfHwNo2+PExlWDbMWFUQeixxRKFUfABUUfZXPDMzN35NvUu4ZzSZW/bhlNJI3VnmyJ5Czm3qWkkc2H0k2FY5+oS3M647ab4x+LapuFGjthAxvJ7k88aHFNOxbBta0mxo9UcKpkRF4wqiTJ2uIG701QJHn6AohnGzzJz6TyR5BzuRqT+7Q/Zxgf0ceK6xm30F+srD6GkYV+mP20eI4PCvh7aeFsq/vkRd/NYfp5k4Dzdf0hGbQISL9uJKr38GuMUzzN5d8feMMIqdspt7Y0PATUgmYoKxFMYlXsF+nEgMJQUWg6RDyDshAHuOZECh8RDPLq96Y6VJr2KalVYCi1WtUmqRjWEq1Pr8NVq3DMkwSZxMBX45tEw8Y0SKAFTbMI9omkmUPgBSAGRqxrHXIvbrHQGgN3bzkm4PGOntT7B2Y4ZCJgB+WkVSVsZWHUn4gF8pHAkHT7T4oOptXjUbP2Zc90bIvm3tjTLiw37Z9vsF8uM26N3LSVitMm5mJRx0/qpI+6dmKkmXoRJIpSFAClAAhV8BYWFXOPpu/H3s6wcDOWfKXU9+gtJ8j+STqR0Fx33jM1JO8utSa7o8g1bbEt9chkpWGWCbtNucvmaYHckKi8rbFyciqRDIqxFW8zfOB9AIv/h+SpIf8p7zVf68V7/4Et/784qXUn6v8prfzx/cKOcXGi+Xm8cwvJFfOZELI1NCCpdIk6YzodTqj5SRJITlsliFmJpxMyxWbFFsy/WIotkVXJjlUMdMU1SsVPoLfnqO3yeeWeh8hU9keMPgFolr5Dd/bcr09rvYiUUgeZ0Pq2NfkNHSUvP21i8Zx8xNVR+ZNcHST9jDwz1Eiq8kDhAWoupIUW1E29QP5TYD85sKmChVMrkhAL+hJ/MACT9QAJP0VQs5m8M94cCt8TvHTkDExkdfIKFrdiRf1984l6tZK/Z4tJ/HTdYm3DGNNLxxHIOGKyoIkBN+ycJfNPqM80RhfQSGFgQRexB6XGoKehBU3A6qRVTGyEyou6gZbMVKtp1KRY2bSzrcqVYWYjSyn6bDhOIV70hrLk5pC9clNZNNxaFrmwoJ9tTXb5xIotpupGVO0kHhkI1w2VlVq6V0EiSPUMLaSFr7RcBRXUAYQmJJleYAxgm9xe1wRqt11aSQ2j0fTpPQ1HJTIlxnixWKzsBax03IIOnVcaC4BTuA3j1ax1UV7Buul6G/oVGd6pCtBrGQqlef66/g1qwYVA1KkYtq8rKtaZxaaMY0g1ohdE7ciJCplSEOgBmSfUpPc6uOh639Onr9It6W6Wtbpavm00sqiIWjPUC2n169QfQ3PzA9dV9XW9eYR57Ocv8Ajf8AIRsh7WJgZLTmghcaJ1ICC4qRr9pUpJ0W8XFoUqh26o3C8GdqJOCAHrxrZn169gZZ5bXl7Q+7Hdf+1+mfh6jQCPvIiGs3tsWjG7x+/NZvrCW/Zr6A/dPcKnqrySCpwPpNuC/x255B7zD/ACCS0ToQz1uPx6+0e7cujD1SdDAHRnBNnCY9QEJJIR+eVcZNMRlP3nNh/kqQSfr1OAoI6jtuD0arXcZi0646/cjGpv8ALYEKPW40xksQRYiaNh1Wsv8A1H3ho2Fv2bW5+cVarIXXYkZWY2E5C6krrFV/abhCVdoVlX9nUiKaJKPJ+wwUGkRhLRyQHcuWLVus2IZRFYik00JmAMfWZRa30uL9APi63sF/TUBVs6qskmHlrjEpMbYzNfV6CNrdS3wja2pm/o31O90dmiohOWzlk5csnrZwzeM11mjxm7QVbOmjpuoZFw1dNlyEWbuEFSCQ6ZylOQwCAgAhmP8A8dZz1Fx6EX/KD6EfUfoP01Yd8Hnmy3DwU2tQOPO2LFI33hxsC2xVYfV2efGcvdGyFok2kaneqBJvBUWjazHu3ALy0IJwj1UBWcIFRdCZRVVKSMMLj71emlkataYpTFKYpTFKYpUTnNzgdufl5t6r2EuxKNWdXVKMYQsXBuP4hXsJEXjtN7bJkUUolSKGWfG6JIF9b0xSao95gETdNrvCfnbhviLiOVt527OyeUZcrSPKO0IiVUrBHcyB+2vVmOm+p3sCAK0D90PtS8j+4vyBt25ne9tweA7bCkUeORO2QO46tmT2EZi70gCpGC+nTFHcgs9bz7F426v2RolTj1KwxGdDbVuMr1fIyKmDysngWibavTEUocolLJxJ0CKAYwCC34yqAYihwHw7jvkfk/G+dDyDiTF9+bJeWUtfTN3WLSxyAfoSAkED7vQrYqpG0/MfDXBOa+LW8Q7niKnEVwo8aBUAD43YQJjywMQdMsGlWVuuqxVwysymGzTvhdsJLs7c702FCKUKMegeOjderv1Zy1tyOREick+mIlijWmyrcgeqCJHawicSkMmIApm43MPedgNsqR8G26Yb9KnzvlhO1ASOuhY3YzEG+ksY16AsrXK1zZ8b/wAMvcIeUy5HlXesaXiUEv7KLb+4J8tAxt3nljUYqlQNaR99zqKpKhAkMnm6uKRZPjPN8dONxaXpuLsijCPmXakdImItXSK+6mCHcx5jycjNTKjZFuu5dnWMq0OsQwiJiiGsfC/KhxfJcHkXyOc3ecrG1PGodLiW1oyA/wAiRx3Z1SMKA4QgdDfevyV4IXP8IZfhnw1+7eNYGaqQyP2nK/hyQcgHR+0lmyFURSSyszMjyFmLWqJcnhK2yJygpuvXZUxMXvMSEspzlJ1DuEhTEIUxgD5AIgAj9oZtifevxSx07JuGq3S8sNc81/he841DXynaQl+tsbIJt9NhqFz9Vx+Wpbt48MKLtzjBC8a4x8apR1LZVw1FnUWRXv5RN1lmsxbyL9gC7X8wLLNnjojz9aVQ5nR1AMJwDrqXwfzNvvEvJ03knJQZeTmvN+KiLae5HMwZkVrNo0MqGPoQNCrbTXQ3yn7beJ+RvBuP4TxZDt+37dDjDAnVBIYJsRO3HI6Er3BIjSJMNSswldgwezCGhz4WeRRF1SNdj6ecNynEEllX9wbqKE+wx0Aqa4JGH7Q7zdPvzcmP3oeO2QGXbt4WS3UBccgH8vfF/sFc0pv4Y/mBZWWDfOOvCD0YvlqSPiV/CtY/VqP5a2rgeIvlLrMJE1yE5cU9lDQUc0iYpmMxOO/ZxzBAjZm0K4e68culE2zdMpC95zCBSgHX4Z5Vn+W/a5uebLuObxLMfMnkaR27ca6nY3ZrLlhQSSSbAC5rYXafb778Nj2vH2bbPIm2R7biQpFEhaVyscahUXXJtzO2lQACzE2A61kKicY/JWS5VlTYvL+KUoqUyxWtaNZeOFbA6g0Viqv2cQD2gMmib14iQUiKKKAVIT9/Q3b2j89vvkz21ts2SvHeISjfTCwgMwAiWUiytJpymYqp+YgKS1tPS9x9nxHwr714uUYE3NPIuK/E0yo2y0xheeSBWDSRxa8CNVaQDt6y40atYuVCnqXMvx0cguVW7ZbY5dna1iau1jY2uUmAkj2w7yHr8ekKpyvPbQjhqL+Rl3Tl0sZM5g6qgTqIEDMv4b9xPAPFfCouOHbNym3R5XmyZU7AWSVzYabyBtKRqiKCP0SbAsa+X9y/s08sef8AydNzNd+2bF2GLHixsLHkGUXhgjBZtZWIoZJJnlkYr6BlS5CA1gKheJDlRq+1xd41/vrWlVtsL738qnoz+KyvmP5iwdRb70DL1ddIPcxz1VE3Uo/gUEM+9373a+LeUbVLsfINh3LK2mbTrifsaW0Orre0wPR1Vh19QK8j4h/Dy868C5BByrh/L9mwOQ4wcRTxrla07kbRPp1QEfNG7KenoxrJmyPHrz/27CFrWyOXVbtleBYrg8I/lLihFOFkxAUlHrCPrDNs/MiYOqfrlU9M3xL0HPmuN+4PwFxHN/eXHOI5OJuGmwlVMcyAH1Cs8zMl/Q6SLjob19zzX2f+7XyJtP7i5n5GxM/ZiwZoHfMWJyDcdxI4FWTSRdQ4YKeosetdg0R4aKLV5NlP73vauxTs1knBaZVmjqv1ddRMQN6UvMOFzTss0MYPimiSPEQDoYTAIlzH8795O+7pjPgcFwBtyuCPxE7LLOAfpjjA7UbfWxl+qx61lPE/8NXh/H86Pd/Ku6vvckbBhh4yNjYpI+iaQsZ5lv8AQn4cH0bUCRXX/IlwH2VyN3VxFoGm0aFTtXa0gOQOx1U5NOQiYhhcvyHVGsa1GoNYKGfNWSbKnzLkrECk71ex0JunaAm8f8PeSON8L50vPuZjcc/er5JLIEkLPNGqLIWllRi51zayfQBLEktbZL3H+FuZ+T/E8niPxs+zbTxxvwKqshliVYsaZpWhSOCB1WJe1jCMD1JkDABVLfh4q+JrYGrN50nZG37Nrux1SkvFLC2g646nnrx/ZWCYnrhnKUrXo1r7GOkxI7P+sETHbkL2iUw57x5U92Gwcp4Pm8b4hjbjjbrmoImlmWJVWFj+2sUldtTpeMdOgcm4IFameAf4fXKvH3lTbOb+RM/Z87Y9rkOQkGO07s+Ug/2YsJceNdEUhE19V9caCxBNYK84HgVlPJXd6ryK0Jsir665A16ox+v7HB7EJLE19sKqxEhJSME5Wmq/HTMzWLPBHmHKQLFYvkHrYyaZyomRKobRGusMcmjofSoKdZfS6+WnS9+q209TchuMWvNjUmTJM1O51TbG3ImfgZIiSrcXLB830oU5PWauFEVSG7k1kFDpqFMmcxRhVQyoRY3tUkn+Xp9Un/qdae/t1M/9MGRuak/YfA/y/wA9S8cC+FHN5hxo5Kag8qPJpHk9Pb/ZzWvG7CqzAvqzTdSzNNfVyWSiZFzr6guyWqxO7A8O4OoyXTQI0aCmoI+oXFSMVvdB0qsJs36QfltHXKbQ05yY4/2fXnv3Rqy/2Ihf6jcixArGFg3n4uv1S3QoySDcQIqq2dikqconKRMDemWFqqifp1HWtsOOPhT+oF4ia9V1Pxu8jWjtVa2Vm5GxlpsTM2mahmk1LgkEq9ik7doawrwv5koiCqyTNRBFRwJlhIKpznNH0qVnjc3ZTf8ALb/FWbx8cn1O3aPb5XtTAIB8O+XnRDr0+Hy49iI/H+UMj1+qpdUP0q35j/Of56kT5HeMvnrym1dqjjff/JPN1Dj9B1evwu+3ND12ulvvkVJC1ScXl3a9oKWaMiIaBm5hVwlHw7KGTjmscZNN6nJCmAZCoKwXrp61IhxK4ScYeBur2uoOMOr4WgwXa3Vsk6BAkbteZRBIE/zm8290U0xY5M/URAFTg2bFMKbZJFLomF1BH/SH81WOXOW/Zg/l/mqNrzOeGqI8qkLpqZq+xa/pjcmopGaiyXudqz+zsbHrWwoC6fU+SZRMlEvTLxllbIPY9Yyp024LOydnVwIhXkjSVAjEqQ1wQob1FmBBZPWyEHV8ukgD5yRb4+RJjSmRFV1ZNLKWKdVN0YEJJ93U4I0jVrBLfIoMCH/4/N1f88Wpv+Dd0/vjlH8JH/pH/wBUv9fV5+9Jf9BH/r2/4arDHHTg/wA6OK3i52HwmqHIrVezd4Rtbt1C437el4y50SH1tSLsRJsDOfOct4l3sjroknKLQB26XpAQWbUxE02/qDeRaUVLOe6gNmK26j/NmytISUJ/IVREsBdqxeQxmldmiXsSMpZFfVcE/tgCyRACUD6yHkkk1E6VFWsPpJPIGPQo724mF6/AVBsu0lTh1+aggbWZRUOHz+Ih3D9uWf4FQtllT06fK/8ANWV/e5Z9T48lievzxf8AeqzfyS4K88NZcKeKHDrxObp1nx1T0s0aNNlbOuk3KV6yWtvFwahF0IptFaz2G0XUvl3mpCdml1CtVQcJIEIJynUAL020kQsiWIC6kD2RQR6FHXUxszNYHUGIvra2KRrvry0kl1BmbRIY7yMwN9QkjfQg1Ki3I0lQQO2t42P8vX6ob/VH07/b2x/9MuSft/8ATQf2eP8AqarasH/02V/a5f8Aiajm2x9MJ5YN5bFt23Nt8iuJl62Te5Q85b7dMbA2anJz8sdBFsZ89CP0QzZgsZBsQoiRIodC9enXr1oy47SuZJJkMhA/QYegAAsqgAAAAAAAAVdQZ8WPGsEOPKsIJ9ZEa1yWJJaRmJJJJJJJJ9a3T4JfSbSOvtrUfafNbfFKu9epU3GWcumdORVgXibXJxDpvIxsfab/AGltAPCVwHqAe7aNIgFXqIdgOEQObpj7EevrWSae4+T0NXWcjVCmKUxSmKUxSmKUxSmKUxSmKUxSmKUxSmKUxSmKUxSmKUxSvgSlEwGEoCYoCBTCAdxQN07gAfmAG6B1+/pilfOKUxSmKUxSmKUxSmKUxSvyulVCE7UU1DqGD+sUhjFIH39QAQ7vuDKsSqxu5AX8tUZndRZASx+r0rgxQcCPUUVhEfiIimfqI/0Zea0+I+2sf25T+i32Gnt1/wBir+7P+jkdafEfbUO3J+q32Gnt1/2Kv7';

    doc.image(imgData, 15, 15, {width: 130, height: 50});
   
    doc.fontSize(15).font('Times-Roman')
     .text("Company name",150, 15)
     .text("Company Address",150, 35)
     .text("Company Phone",150, 55);
   
   doc.fontSize(20).font('Times-Bold')
   .text("Chart Note",230,150,{underline:true});
   
   doc.fontSize(18).font('Times-Bold')
   .text("History of Prsent Illness:",15,190,{underline:true});
   
   doc.fontSize(14).font('Times-Roman')
   .text("This is a test which has been dictated and transcribed by the transcriptionist This is a test which has been dictated and transcribed by the transcriptionist This is a test which has been dictated and transcribed by the transcriptionist This is a test which has been dictated and transcribed by the transcriptionist This is a test which has been dictated and transcribed by the transcriptionist This is a test which has been dictated and transcribed by the transcriptionist"); 

    doc.fontSize(18).font('Times-Bold')
   .text("Review Of Systems:",15,330,{underline:true});
   
   doc.fontSize(14).font('Times-Roman')
   .text("This is a test which has been dictated and transcribed by the transcriptionist This is a test which has been dictated and transcribed by the transcriptionist This is a test which has been dictated and transcribed by the transcriptionist This is a test which has been dictated and transcribed by the transcriptionist This is a test which has been dictated and transcribed by the transcriptionist This is a test which has been dictated and transcribed by the transcriptionist");

    doc.fontSize(18).font('Times-Bold')
   .text("Family History:",15,470,{underline:true});
   
    doc.fontSize(14).font('Times-Roman')
   .text("This is a test which has been dictated and transcribed by the transcriptionist This is a test which has been dictated and transcribed by the transcriptionist This is a test which has been dictated and transcribed by the transcriptionist This is a test which has been dictated and transcribed by the transcriptionist This is a test which has been dictated and transcribed by the transcriptionist This is a test which has been dictated and transcribed by the transcriptionist");

    doc.fontSize(18).font('Times-Bold')
   .text("Assessment:",15,610,{underline:true});
   
    doc.fontSize(14).font('Times-Roman')
   .text("This is a test which has been dictated and transcribed by the transcriptionist This is a test which has been dictated and transcribed by the transcriptionist This is a test which has been dictated and transcribed by the transcriptionist This is a test which has been dictated and transcribed by the transcriptionist This is a test which has been dictated and transcribed by the transcriptionist This is a test which has been dictated and transcribed by the transcriptionist");

    doc.fontSize(18).font('Times-Bold')
   .text("Plan:",15,110,{underline:true});
   
    doc.fontSize(14).font('Times-Roman')
   .text("This is a test which has been dictated and transcribed by the transcriptionist This is a test which has been dictated and transcribed by the transcriptionist This is a test which has been dictated and transcribed by the transcriptionist This is a test which has been dictated and transcribed by the transcriptionist This is a test which has been dictated and transcribed by the transcriptionist This is a test which has been dictated and transcribed by the transcriptionist");
   
     
   
    doc.end();
    stream.on('finish', function() {

      var sblob= stream.toBlob('application/pdf');
      var fileURL = URL.createObjectURL(sblob);

      $scope.url = $sce.trustAsResourceUrl(fileURL);
      $scope.$digest();

     //   //  var reader = new FileReader();
     //   //  var urll= reader.readAsDataURL(sblob);
     //   //  var base64data; 

     //   // reader.onloadend = function(base64data) {
     //   //    base64data = reader.result;                
     //   //    console.log(base64data);

     //   //    $localStorage.aaaa=base64data;
     //   //    var fileURL = URL.createObjectURL(sblob);

     //   //    $scope.url = $sce.trustAsResourceUrl(fileURL);
     //   //    $scope.$digest();
     //   //  };

     //  // console.log(sblob);
     //  // console.log(base64data);
    });
   
	// };

  $scope.ok = function () {

    
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };  
}]);

// ......................popup model controller for myModalContent1 id end here .................//





// app.controller('ModalUiCtrl', ["$scope", "$rootScope", "$uibModalInstance", "items", function ($scope, $rootScope, $uibModalInstance, items) {
// 	$scope.items = items;
// 	$scope.selected = {
// 		item: $scope.items[0]
// 	};

// 	$scope.ok = function () {
// 		$uibModalInstance.close($scope.selected.item);
// 	};

// 	$scope.cancel = function () {
// 		$uibModalInstance.dismiss('cancel');
// 	};
// 	$scope.pathi = $rootScope.filess;

// 	//console.log('in modal controller='+$rootScope.filess);
// }]);


//controller for ngtable end

//app.controller('ngTableCtrl2', ["$scope", "$filter", "ngTableParams", function ($scope, $filter, ngTableParams) {
//	$scope.tableParams = new ngTableParams({
//		page: 1, // show first page
//		count: 5, // count per page
//		sorting: {
//			name: 'asc' // initial sorting
//		}
//	}, {
//		total: data.length, // length of data
//		getData: function ($defer, params) {
//			// use build-in angular filter
//			var orderedData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;
//			$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
//		}
//	});
//}]);

app.controller('navCtrl', ["$scope","userdataSession", function ($scope,userdataSession) {
	userdataSession.getUser(function(data) {
		//console.log(data);
		$scope.name = data;
	});
}]);




