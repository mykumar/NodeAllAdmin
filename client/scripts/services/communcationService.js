angular.module('sbAdminApp').service('communcationService', function() {
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

});
