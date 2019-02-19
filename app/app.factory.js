"use strict";

function EventFactory($http) {
  let jsonPayload = null;
  const searchTM = (keyword, city) => {
    return $http({
      method: "GET", 
      url: `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&city=${city}&apikey=6EhVLwA0UxxUCJZAnAiS4PAHgS8GeEte` 
    }).then((data) => {
      jsonPayload = data;
      return jsonPayload;
    });
  };
  return {
    searchTM
  };
}


angular
  .module("eventsApp")
  .factory("EventFactory", EventFactory);