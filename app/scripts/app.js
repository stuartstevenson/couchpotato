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
		"ngTouch",
		"emguo.poller"
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
			.when("/tvconfig", {
				templateUrl: "views/addedittvconfig.html",
				controller: "AddEditTvConfigCtrl"
			})
			.when("/tvconfig/:id", {
				templateUrl: "views/addedittvconfig.html",
				controller: "AddEditTvConfigCtrl"
			})
			.otherwise({
				redirectTo: "/"
			});
	});
