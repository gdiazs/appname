define(function(require){
	'use strict';
	
	var appModule = require('app.module');
	var template = require('commons/templates.helper').getTemplate;
	 
	
	appModule.component('sidebar', {
		
		bindings: {
		},
		
		templateUrl: template("shared/sidebar/sidebar.component.html"),
		
		controller: function(){
			
		},
		
	});

})