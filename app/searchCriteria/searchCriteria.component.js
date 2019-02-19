"use strict";
const searchCriteria = {
  templateUrl: "app/searchCriteria/searchCriteria.html",
  controller: ["EventFactory", function(EventFactory) {
    const vm = this;
    vm.searchQuery = {
      keyword: "",
      city: "",
      startDate: "",
      endDate: ""
    }
    vm.search = (searchQuery) => {
      console.log(searchQuery);
      EventFactory.searchTM(searchQuery).then((data) => {
        console.log(data);
        vm.posts = data.data._embedded.events;

      });
    };
  }]
};

angular
  .module("eventsApp")
  .component("searchCriteria", searchCriteria);

  