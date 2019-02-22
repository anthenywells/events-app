"use strict";
const searchCriteria = {
  templateUrl: "./app/searchCriteria/searchCriteria.html",
  controller: ["EventService", function(EventService) {
    const vm = this;
    vm.searchQuery = {
      keyword: "",
      city: "",
      startDate: "",
      endDate: ""
    }
    vm.search = (searchQuery) => {
      let start = searchQuery.startDate.toISOString();
      searchQuery.startDate = start.split("").splice(0, start.length - 5).join("");
      let end = searchQuery.endDate.toISOString();
      searchQuery.endDate = end.split("").splice(0, end.length - 5).join("");
      EventService.searchTM(searchQuery).then((data) => {
        vm.posts = data.data._embedded.events;

      });
    };
  }]
};

angular
  .module("eventsApp")
  .component("searchCriteria", searchCriteria);

  