(function() {
  function HomeCtrl(Room, $uibModal) {
    this.Chat = Room.all;
this.Update = Room.changeRoom;
this.roomName = Room.$scope;

    this.open = function() {
      $uibModal.open({
        templateUrl: '/templates/createchatrooms.html',
        controller: 'AddCtrl as add',
        backdrop: "static",
      });
    };
  };






  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
