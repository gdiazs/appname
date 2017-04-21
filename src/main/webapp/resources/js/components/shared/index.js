define(function(require){
	'use strict';
	
	var appModule = require('app.module');
	var navbarComponent = require('./navbar/navbar.component');
	var sidebarComponent = require('./sidebar/sidebar.component');
	
	
	appModule.component('shared',{
		template: "<navbar></navbar><sidebar></sidebar>", 
	});
	
	return "<shared></shared>";
	
});