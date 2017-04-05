define(function(){
	'use strict';
	
	var Utils = function(){
		
		var self = this;
		
		var helloMessage = 'Hello There! :)';
		
		return {
			sayHello: function(){
				console.log(helloMessage);
			},
		}
	}
	
	return Utils();
	
	
	
});