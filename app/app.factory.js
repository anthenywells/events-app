"use strict";
// Defining the factory
function EventFactory($http) {
  let jsonPayload = null;
  // This function will make an HTTP request to Reddit
  const searchTM = (keyword) => {
    // This returns the value of the $http function (which is a promise)
    return $http({
      method: "GET", // Defines the method
      url: `https://app.ticketmaster.com/discovery/v1/events.json?keyword=${keyword}&apikey=6EhVLwA0UxxUCJZAnAiS4PAHgS8GeEte` // Defines the URL
    }).then((data) => {
      // This method is what is used to get data from the promise once it has been resolved
      // console.log(data)
      jsonPayload = data;
      // Returns the jsonPayload variable
      return jsonPayload;
    });
  };
  // Factories must return a value
  // This value is an object literal that contains the functions we want to use in our controllers
  return {
    searchTM
  };
}

// Defining the factory
angular
  .module("eventsApp")
  .factory("EventFactory", EventFactory);