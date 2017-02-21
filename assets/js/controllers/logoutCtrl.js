'use strict';

app.controller('logoutCtrl', ['$scope','$http','$window','$location','$state',
function($scope,$http,$window,$location,$state) {
		var loc=$location.protocol()+"://"+$location.host()+"/muapp-new/muapp/muapplogout";
		$http.post(loc).then(function(data){
			//console.log("outer return="+data.data);
			var a=data.data;
			if(a=='1'){
				localStorage.removeItem('PacketLtr4columnName');	
				$window.location.href=$location.protocol()+"://"+$location.host()+"/muapp-new/";
			}
	});
}

]);