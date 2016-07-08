'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('MainCtrl', ['$scope', 'communcationService', function($scope, communcationService) {

	  	$scope.testButtonClickMain = function(){
	          console.dir("we are in the MainCtrl::testButtonClickMain");
	          console.dir(communcationService.getAbc());
	    };  
  }]);
