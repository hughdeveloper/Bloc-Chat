(function() {
  function HomeCtrl(Room, $uibModal) {
    this.Chat = Room.all;
    this.room = Room;

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
