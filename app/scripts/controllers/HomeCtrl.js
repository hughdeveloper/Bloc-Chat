(function() {
  function HomeCtrl(Room, $uibModal, Message) {
    this.Chat = Room.all;
    this.room = Room;
    this.message = Message.all;
    this.messageSort = Message;


    this.submit = function(username) {

      console.log(username);
      $uibModalInstance.close();
    };

    this.open = function() {
      $uibModal.open({
        templateUrl: '/templates/createchatrooms.html',
        controller: 'AddCtrl as add',
        backdrop: "true",
      });
    };
  };




  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
})();
