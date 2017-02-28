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

	$scope.open = function (filepath) {
		console.log(filepath);
		var fpath = $location.protocol() + "://" + $location.host() + "/muapp-new/" + filepath;
		$rootScope.filess = fpath;
		var modalInstance = $uibModal.open({

			templateUrl: 'myModalContent.html',
			controller: 'ModalUiCtrl2',
			size: 'lg',
			backdrop: 'static',
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

app.controller('ModalUiCtrl', ["$scope", "$rootScope", "$uibModalInstance", "items","$http","$location", function ($scope, $rootScope, $uibModalInstance, items,$http, $location) {
  
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
    console.log($scope.hpi);
    console.log($scope.ros);
    console.log($scope.cc);
    console.log($scope.hx);
    console.log($scope.plan);
    // if($scope.qa!="undefined" || $scope.transcriber!="undefined"){
      
    //   $http.get(
    //   $location.protocol()+"://"+$location.host()+"/muapp-new/muapp/assigntask",
    //   {params:{"qaid":$scope.qa,"tranID":$scope.transcriber,"taskID":$scope.taskid}})
    //   .then(function(response,data) {
    //     console.log(response);
    //   })
    // }else{
    //   console.log("undefined both")
    // }  
    // console.log($scope.qa);
    // console.log($scope.transcriber);
  };

  //....................on click ok button on assigning qa and transcriber model id inserted to mysql table task_ permission END....////


  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };  
}]);

// ......................popup model controller for myModalContent1 id end here .................//



app.controller('ModalUiCtrl2', ["$scope", "$rootScope", "$uibModalInstance", "items", function ($scope, $rootScope, $uibModalInstance, items) {
	$scope.items = items;
	$scope.selected = {
		item: $scope.items[0]
	};

	$scope.ok = function () {

   console.log($scope.myHtml);
		// $uibModalInstance.close($scope.selected.item);
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




