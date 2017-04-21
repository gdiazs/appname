// Vendors
var webjars = {
	versions : {
		'jquery' : '2.2.4',
		'angularjs': '1.6.4',
		'bootstrap': '3.3.6',
	},

	path : function(webjarid, path) {
		var scriptToLoad = '../../webjars/' + webjarid + '/'+ webjars.versions[webjarid] + '/' + path;
		console.log(scriptToLoad)
		return scriptToLoad;
	}
};


require.config({
	baseUrl : "/resources/js/",

	paths : {
		'jquery' : webjars.path('jquery', 'jquery.min'),
		'angular' : webjars.path('angularjs', 'angular.min'),
		'bootstrap' : webjars.path('bootstrap', 'js/bootstrap.min'),
	},

	shim : {
		'jquery' : {
			exports : 'jquery',
		},
		'angular' : {
			exports: 'angular',
		},
		
		'bootstrap' : {
			deps: 'jquery',
		},


	}

});

define(function(require){
	var appModule = require('app.module');
	
	var sharedIndex = require('components/shared/index');
	
	appModule.component('mainApp', {
		template: sharedIndex,
		controller: function(){
			
		},
		
	});
})
