(function() {
  function HomeCtrl(Room, $uibModal, Message) {
    this.Chat = Room.all;
    this.room = Room;
    this.message = Message;
    console.log(this.message);


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
    .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
})();
