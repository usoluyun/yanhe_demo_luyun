'use strict';

angular.module('yanheDemoLuyunApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    angular.element(document).ready(function () {
			$('#navbar').waypoint(function(direction) {
			  	$('#navbar').removeClass('navbar-fixed-top');
			});
		});
  });

