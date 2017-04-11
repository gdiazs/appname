define(function(require) {

    'use strict';

    var React = require('react');

    var NavbarComponent = React.createClass({

        componentWillMount: function() {
            console.log("componentWillMount");
        },

        render: function() {
            const
                e = React.createElement;

            var navbar = e('nav', {
                className: 'navbar navbar-default navbar-fixed-top'
            }, e('div', {
                className: 'container-fluid'
            }, e('div', {
                className: 'navbar-header'
            }), e('button', {
                    type: "button",
                    className: "navbar-toggle collapsed",
                    'data-toggle': "collapse",
                    'data-target': "#navbar",
                    'aria-expanded': "false",
                    'aria-controls': "navbar",

                }, e('span', {
                    className: 'sr-only',
                }, 'Toggle navigation'), e('span', {
                    className: 'icon-bar',
                }), e('span', {
                    className: 'icon-bar',
                }), e('span', {
                    className: 'icon-bar',
                })

            ), e('a', {

                className: 'navbar-brand'

            }, this.props.brandName)));

            return navbar;
        },

    });

    return NavbarComponent;

});