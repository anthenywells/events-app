"use strict";
const eventList = {
  bindings: {
    posts: "<"
  },
  templateUrl: "app/eventList/eventList.html"
};

angular
  .module("eventsApp")
  .component("eventList", eventList);