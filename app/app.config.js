"use strict";
angular
  .module("eventsApp", ["ngRoute"])
  .config(["$routeProvider", ($routeProvider) => {
    $routeProvider
      .when("/search", {
        template: "<search-criteria></search-criteria>"
      })
      .when("/event-list", {
        template: "<event-list></event-list>"
      })
      .when("/favorites", {
        template: "<bucketlist-page></bucketlist-page>"
      })
      .when("/",{
        template: "<search-criteria></search-criteria>"

      });
  }]);
