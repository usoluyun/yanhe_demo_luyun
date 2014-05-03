'use strict';

angular.module('yanheDemoLuyunApp')
	.controller('AboutCtrl', function ($scope) {
		angular.element(document).ready(function () {
			$('#navbar').waypoint(function(direction) {
				if(direction === 'down') {
			  	$('#navbar').addClass('navbar-fixed-top');
				}
				else
				{
			  	$('#navbar').removeClass('navbar-fixed-top');
				}
			});

			new WOW().init();
		});
	});
