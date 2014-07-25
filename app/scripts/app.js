"use strict";

/**
 * @ngdoc overview
 * @name couchPotatoApp
 * @description
 * # couchPotatoApp
 *
 * Main module of the application.
 */
angular
	.module("couchPotatoApp", [
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
			.when("/tvguide", {
				templateUrl: "views/tvguide.html",
				controller: "TvGuideCtrl"
			})
			.otherwise({
				redirectTo: "/"
			});
	});
