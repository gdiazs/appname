define(function(require){
	
	'use strict';
	
	var React = require('react');
	var NavbarComponent = require('./navbar/NavbarComponent');
	
	var IndexComponent = React.createClass({
		
		render: function(){
			const element = React.createElement;
			
			var elements = [];
			
			elements.push(element(NavbarComponent, {key: '1', brandName: 'DOSHIPY'}));

			const indexView = element('div',{}, elements);
			
			return indexView;
		}
	});
	
	return IndexComponent;
});