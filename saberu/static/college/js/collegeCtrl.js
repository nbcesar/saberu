var collegeApp = angular.module('collegeApp', ['ngAnimate', 'ui.grid', 'ui.grid.selection']);

collegeApp.config(function($interpolateProvider){
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
});

collegeApp.controller('collegeCtrl', ['$scope', '$http', '$log', 'modal',
	function($scope, $http, $log, modal) {

	var myModal = new modal();

	$scope.gridOptions = {
		enableFiltering: true,
		enableRowSelection: true, 
		enableRowHeaderSelection: false,
		multiSelect: false,

	};

	$scope.showModal = function(collegeDetail) {
		myModal.open(collegeDetail);
	};

	$scope.gridOptions.columnDefs = [
		{name: 'id', enableFiltering: false, displayName: '#', width: 35},
		{name: 'nick_name', field: 'nick_name', displayName: 'School' }, //cellTemplate: linkCellTemplate},
		{name: 'state', width: 75},
		{name: 'public_private', displayName: 'Type', width: 75},
		{name: 'opportunity_program', displayName: 'H/EOP', width: 80},
		{name: 'need_met', displayName: '% Need', width: 80},
		{name: 'test_optional', displayName: 'SAT/ACT', width: 85},
		{name: 'engineering', displayName: 'Eng', width: 75},
	];

	/*var linkCellTemplate = '<div class="ngCellText" ng-class="" >' +
                       	'<a href="[[COL_FIELD]]">[[COL_FIELD]]</a>' +
						'</div>';
	*/
	//var cellTemplate = '<a href="[[COL_FIELD]]">[[rowRenderIndex + 1]]</a>' 
	//var linkCellTemplate = '<a href ng-click="">[[COL_FIELD]]</a>'

	$http.get('api/v1/colleges')
		.success(function(data){
			$scope.gridOptions.data = data;
		});

	$scope.gridOptions.onRegisterApi = function(gridApi){
		//set gridApi on scope
		$scope.gridApi = gridApi;
		gridApi.selection.on.rowSelectionChanged($scope, function(row){
			//var msg = 'row selected ' + row.isSelected;
			//$log.log(msg);
			//$log.log(row);
			var collegeDetails = {};
			collegeDetails.previous = -1;
			collegeDetails.next = 0;

			collegeDetails.rows = $scope.gridApi.core.getVisibleRows($scope.gridApi.grid);
			//$log.log(rows[0] == row);
			//$log.log(rows);
			//$log.log(row);
			
			collegeDetails.detail = $scope.gridApi.selection.getSelectedRows()[0];

			//get row index
			collegeDetails.rowIndex = 0;
			for (var a = 0; a < collegeDetails.rows.length; a++) {
				if (row == collegeDetails.rows[a]) {
					collegeDetails.rowIndex = a;
					break;
				}
			}

			if (collegeDetails.rowIndex > 0) collegeDetails.previous = collegeDetails.rowIndex - 1;
			if (collegeDetails.rowIndex < collegeDetails.rows.length - 1) collegeDetails.next = collegeDetails.rowIndex + 1;
			
			$log.log(collegeDetails.rowIndex);
			$log.log(collegeDetails.rows.length);
			$log.log(collegeDetails.previous);
			$log.log(collegeDetails.next);

			//Open College Detail Modal
			$scope.showModal(collegeDetails);
			
		});

	};	
	
}]);

collegeApp.factory('modal', ['$compile', '$rootScope', 
	function($compile, $rootScope) {

		return function() {
			var elm;
			var modal = {
				open: function(collegeDetails) {
					$rootScope.collegeDetail = collegeDetails.detail;
					//console.log($rootScope)
					var html = '<div class="modal" ng-style="modalStyle">[[modalStyle]]'+
								  '<div class="modal-dialog">'+
								    '<div class="modal-content">'+
									  '<div class="modal-header">'+
									    '<h4>[[collegeDetail.nick_name]]</h4>'+ 
									    'State: [[collegeDetail.state]]'+
									  '</div>'+
									  '<div class="modal-body">'+
									     '<div class="row">'+ 
											'<div class="col-xs-4">'+
												'<div class="panel panel-default">'+
													'<div class="panel-heading">'+
														'<strong>State</strong>'+
													'</div>'+
													'<div class="panel-body">'+
														'[[ collegeDetail.state ]]'+
													'</div>'+
												'</div>'+
											'</div>'+
											'<div class="col-xs-4">'+
												'<div class="panel panel-default">'+
													'<div class="panel-heading">'+
														'<strong>Type</strong>'+
													'</div>'+
													'<div class="panel-body">'+
														'[[ collegeDetail.public_private ]]'+
													'</div>'+
												'</div>'+
											'</div>'+
											'<div class="col-xs-4">'+
												'<div class="panel panel-default">'+
													'<div class="panel-heading">'+
														'<strong>H/EOP</strong>'+
													'</div>'+
													'<div class="panel-body">'+
														'[[ collegeDetail.opportunity_program ]]'+
													'</div>'+
												'</div>'+
											'</div>'+
										'</div>'+

										'<div class="row">'+
											'<div class="col-xs-4">'+
												'<div class="panel panel-default">'+
													'<div class="panel-heading">'+
														'<strong>% of Need</strong>'+
													'</div>'+
													'<div class="panel-body">'+
														'[[ collegeDetail.need_met ]]'+
													'</div>'+
												'</div>'+
											'</div>'+
											'<div class="col-xs-4">'+
												'<div class="panel panel-default">'+
													'<div class="panel-heading">'+
														'<strong>Test Optional</strong>'+
													'</div>'+
													'<div class="panel-body">'+
														'[[ collegeDetail.test_optional ]]'+
													'</div>'+
												'</div>'+
											'</div>'+
											'<div class="col-xs-4">'+
												'<div class="panel panel-default">'+
													'<div class="panel-heading">'+
														'<strong>Engineering</strong>'+
													'</div>'+
													'<div class="panel-body">'+
														'[[ collegeDetail.engineering ]]'+
													'</div>'+
												'</div>'+
											'</div>'+
										'</div>'+
									  '</div>'+
									  '<div class="modal-footer">'+
									    '<button id="buttonClose" class="btn btn-primary" ng-click="close()">Close</button></div>'+
									  '</div>'+
									'</div>'+
								'</div>';
					elm = angular.element(html);
					angular.element(document.body).prepend(elm);

					$rootScope.close = function() {
						modal.close();
					};

					$rootScope.modalStyle = {"display": "block"};
					
					$compile(elm)($rootScope);
				},
				close: function() {
       				if (elm) {
          				elm.remove();
        			}
      			}
			};
			return modal;
		};
	}]);
/*collegeApp.controller('collegeCtrl', 
	function($scope, $http, uiGridConstants) {
		$scope.gridOptions = {
			enableFiltering: true,
			columnDefs: [
				{field: 'Nick Name'}
			]
		}
		$scope.collegeList = ""
		$http.get('api/v1/colleges').
			success(function(data){
				$scope.collegeList = data;
				console.log(data);
			}).
			error(function(data,status){
				console.log("calling /api/v1/colleges returned status " + status);
			});
}); */