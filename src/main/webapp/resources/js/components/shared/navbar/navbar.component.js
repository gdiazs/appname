define(function (require){
	'use strict';
		
	var appModule = require('app.module');
	var template = require('commons/templates.helper').getTemplate;
	
	
	return appModule.component('navbar', {
		templateUrl:  template('shared/navbar/navbar.component.html'),
		bindings: {
			name: "@"
			
		},
		
		controller: function(){		
		},

		

	});
	
	 
});