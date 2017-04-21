define(function(require){
	'use strict'
	
	var commonsHelper = function(){
		var self = this;
		
		var STATIC_RESOURCE_URL = '/resources/js/components';
		
		
		
		return {
			
			getTemplate : function (templateName){
				return STATIC_RESOURCE_URL + "/" + templateName;
			},
			
			
		}
		
	};
	
	return commonsHelper();
	
});