"use strict";

/**
 * @ngdoc service
 * @name couchPotatoApp.TvConfig
 * @description
 * # TvConfig
 * Service in the couchPotatoApp.
 */
angular.module("couchPotatoApp")
	.service("TvConfig", ["$resource", function TvConfig($resource) {
		return $resource("http://localhost:8070/tvconfig/:id");
	}]);
