"use strict";

function EventFactory($http) {
  let jsonPayload = null;
  const searchTM = (searchQuery) => {
    let start = searchQuery.startDate.toISOString();
    let newStart = start.split("").splice(0, start.length - 5).join("");
    let end = searchQuery.endDate.toISOString();
    let newEnd = end.split("").splice(0, end.length - 5).join("");
    return $http({
      method: "GET", 
      url: `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${searchQuery.keyword}&city=${searchQuery.city}&startDateTime=${newStart}Z&endDateTime=${newEnd}Z&apikey=6EhVLwA0UxxUCJZAnAiS4PAHgS8GeEte` 
    }).then((data) => {
      jsonPayload = data;
      console.log(data);
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
  