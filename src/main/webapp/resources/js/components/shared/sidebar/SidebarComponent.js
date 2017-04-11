define(function(require) {
	'use strict';

	var React = require('react');

	var SidebarComponent = React.createClass({

		render : function() {
			const
			e = React.createElement;

			var sidebar = e('div', {
				className : 'container-fluid'
			}, e('div', {
				className : 'row'
			}, e('div', {
				className : 'col-sm-3 col-md-2 sidebar'
			})));

			return sidebar;
		}
	});

	return SidebarComponent;

})