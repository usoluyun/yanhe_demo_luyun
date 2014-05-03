'use strict';

angular.module('yanheDemoLuyunApp')
  .controller('ProductsCtrl', function ($scope) {
	angular.element(document).ready(function () {
	//$(document).ready(function () {
		$('#navbar').waypoint(function(direction) {
			if(direction === 'down') {
			  $('#navbar').addClass('navbar-fixed-top');
			}
			else
			{
			  $('#navbar').removeClass('navbar-fixed-top');
			}
		});
	});
});

