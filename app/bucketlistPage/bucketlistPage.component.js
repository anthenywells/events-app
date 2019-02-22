"use strict";
const bucketList = {
    templateUrl: "./app/bucketListPage/bucketListPage.html",
    controller: ["EventService", function(EventService) {
        const vm = this
        vm.toggle = true;
        vm.removeFavorite = (index) => {
            EventService.deleteFavorite(index)
          }
        vm.favorites = EventService.getFavorite()
    }],


}

angular
    .module("eventsApp")
    .component("bucketList", bucketList);