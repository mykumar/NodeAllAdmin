angular.module('sbAdminApp').service('communcationService', ['$rootScope', function($rootScope) {
    this.tableName = "";
	this.abc = 0;
    this.sayHello = function(jo) {
    	console.dir("communcationService::myFunction");
    	console.dir("Setting abc value as ::" +  jo);
    	this.abc = jo;
        return "Hello, World!236"
    };
    this.getAbc = function() {
    	console.dir("communcationService::getAbc");
    	return this.abc;
    };	

    this.testRootScopeEmit = function() {
        console.dir("%%%%%%%communcationService::testRootScopeEmit%%%%%%%");
        var obj = {tablename:this.tableName};    
        $rootScope.$broadcast('tableName', obj );
    };    

    this.getData = function() {
        var obj = {tablename:this.tableName};    
        return obj;
    };    
}]);
