"use strict";
const searchCriteria = {
  templateUrl: "app/searchCriteria/searchCriteria.html",
  controller: ["EventFactory", function(EventFactory) {
    const vm = this;
    vm.search = (keyword, city) => {
      console.log(city)

      EventFactory.searchTM(keyword, city).then((data) => {
        vm.posts = data.data._embedded.events;
        console.log(vm.posts)
      });
    };
  }]
};

angular
  .module("eventsApp")
  .component("searchCriteria", searchCriteria);