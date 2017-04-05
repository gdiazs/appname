// Vendors
var webjars = {
	versions : {
		'jquery' : '2.2.4',
		'react' : '15.3.2',

	},

	path : function(webjarid, path) {
		var scriptToLoad = '../../webjars/' + webjarid + '/'+ webjars.versions[webjarid] + '/' + path;
		console.log("loading: " + scriptToLoad + ".js")
		return scriptToLoad;
	}
};

//Components
var components = {

	path : function(componentName, scriptName) {
		var scriptToLoad = 'components/' + componentName + '/'
				+ scriptName;
		console.log("loading component: " + scriptToLoad + ".js")
		return scriptToLoad;
	}
};

require.config({
	baseUrl : "/resources/js/",

	paths : {

		/* Vendors */
		'jquery' : webjars.path('jquery', 'jquery.min'),
		'react' : webjars.path('react', 'react'),
		'reactDOM' : webjars.path('react', 'react-dom'),

		/* Components */

	},

	shim : {
		'jquery' : {
			exports : 'jquery',
		},


	}

});

//Boots the app
require([ 'app' ]);