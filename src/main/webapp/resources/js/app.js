'use strict';

define(function(require) {

	//imports
	var React = require('react');
	var ReacDOM = require('reactDOM');
	var HomeComponent = require('components/home/HomeComponent');

	ReacDOM.render(React.createElement(HomeComponent), document
			.getElementById('root'));
});
