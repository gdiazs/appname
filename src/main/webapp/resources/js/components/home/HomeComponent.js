define(function(require) {
	'use strict';
	
	//imports
	var React = require('react');
	var Utils = require('Utils');
	var HomeHelper = require("./HomeHelper")

	Utils.sayHello();
	
	
	//Component module
	var HomeComponent = React.createClass({

		render : function() {
			
			HomeHelper.test();
			
			const
			e = React.createElement;

			return (e('div', null, 'Home Component'));
		}
	});

	//Make Public Component
	return HomeComponent;
});
