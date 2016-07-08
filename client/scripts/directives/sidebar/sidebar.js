'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

angular.module('sbAdminApp')
  .directive('sidebar',['$location','$rootScope','communcationService', function($location, $rootScope, communcationService) {
    return {
      templateUrl:'scripts/directives/sidebar/sidebar.html',
      restrict: 'E',
      replace: true,
      scope: {
      },
      controller:function($scope){
        $scope.selectedMenu = 'dashboard';
        $scope.collapseVar = 0;
        $scope.multiCollapseVar = 0;
        $scope.service = communcationService;
        
        $scope.testButtonClick = function(x){
          console.dir("we are in the sidebar::testButtonClick");
          var genRandom = Math.random(); 
          console.dir("we generated Random number as :::" + genRandom);
          console.dir(communcationService.sayHello(genRandom));
        };  

        $scope.testTableClick = function(tableName){
          console.dir("we are in the sidebar::testTableClick");
          communcationService.tableName = tableName;
          communcationService.testRootScopeEmit();
          
        };  
        

        $scope.check = function(x){
          
          if(x==$scope.collapseVar)
            $scope.collapseVar = 0;
          else
            $scope.collapseVar = x;
        };
        
        $scope.multiCheck = function(y){
          
          if(y==$scope.multiCollapseVar)
            $scope.multiCollapseVar = 0;
          else
            $scope.multiCollapseVar = y;
        };

      //   $scope.$watch('service.getData()', function(newVal) {
      //     console.dir('**DEAR TABLE NAME IS CHNAGED**');  
      //     console.dir(newVal);
      //     // $scope.controllerData = newVal;
      // });

          $rootScope.$on('tableName', function (event, data) {
            console.dir('we caputred the emit transmission&&&&&&&&&&&&**');
            console.dir(data); // 'Some data'
          });
      }
    }
  }]);
