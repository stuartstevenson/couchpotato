"use strict";

/**
 * @ngdoc overview
 * @name monitorApp
 * @description
 * # monitorApp
 *
 * Main module of the application.
 */
angular
	.module("monitorApp", [
		"ngAnimate",
		"ngCookies",
		"ngResource",
		"ngRoute",
		"ngSanitize",
		"ngTouch"
	])
	.config(function ($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl: "views/main.html",
				controller: "MainCtrl"
			})
			.otherwise({
				redirectTo: "/"
			});
	});
