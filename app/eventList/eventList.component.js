"use strict";
const eventsList = {
  templateUrl: "app/eventList/eventList.html",
  // Injecting the Factory into the controller
  controller: ["EventFactory", function(EventFactory) {
    const vm = this;
    vm.search = (keyword) => {
      // The search method will call this function, which returns a promise
      EventFactory.searchTM(keyword).then((data) => {
        // Assigning the data from the promise to vm.posts (so it can be ngRepeated)
        vm.posts = data.data._embedded.events;
        console.log(data.data._embedded.events)
      });
    };
  }]
};

// Defining the component
angular
  .module("eventsApp")
  .component("eventsList", eventsList);