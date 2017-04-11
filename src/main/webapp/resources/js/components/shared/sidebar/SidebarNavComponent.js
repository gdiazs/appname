define(function(require){
	
	var React = require('react');
	
	var SidebarNav = React.createClass({
		
		render: function(){
			const e = React.createElement;
			
			var sidebarNav = e('ul', {className: 'nav nav-sidebar'});
			
			return sidebarNav;
		}
	});
	
	
	return SidebarNav;
})