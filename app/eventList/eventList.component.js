"use strict";
const eventList = {
  templateUrl: "app/eventList/eventList.html",
  controller: ["EventService", function(EventService) {
    const vm = this;
    vm.info = EventService.getData()
    vm.posts = vm.info.data._embedded.events;
    console.log(vm.posts)
    vm.saveFavorite = (index) => {
      EventService.setFavorite(index)
      console.log(EventService.bucket)
    }
  }]
};

angular
  .module("eventsApp")
  .component("eventList", eventList);