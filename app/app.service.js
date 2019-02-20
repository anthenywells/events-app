"use strict";

function EventService($http, $location) {
  const self = this
  self.jsonPayload = null;
  self.searchTM = (searchQuery) => {
    return $http({
      method: "GET", 
      url: `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${searchQuery.keyword}&city=${searchQuery.city}&startDateTime=${searchQuery.startDate}Z&endDateTime=${searchQuery.endDate}Z&apikey=6EhVLwA0UxxUCJZAnAiS4PAHgS8GeEte` 
    }).then((data) => {
      self.jsonPayload = data;
      $location.path("/event-list")
      return self.jsonPayload;

    });
    
  };
  self.getData = () => {
    return self.jsonPayload;
}
}


angular
  .module("eventsApp")
  .service("EventService", EventService);
  