"use strict";
const eventList = {
  templateUrl: "app/eventList/eventList.html",
  controller: ["EventService", function(EventService) {
    const vm = this;
    vm.info = EventService.getData()
    vm.posts = vm.info.data._embedded.events;
    vm.toggle = true;
    vm.saveFavorite = (index) => {
      EventService.setFavorite(index)
    }
  }]
};

angular
  .module("eventsApp")
  .component("eventList", eventList);