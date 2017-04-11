'use strict';

define(function(require) {

	//imports
	var React = require('react');
	var ReacDOM = require('reactDOM');
	var IndexComponent = require('components/shared/Index');

	ReacDOM.render(React.createElement(IndexComponent), document
			.getElementById('root'));
	
	
});
