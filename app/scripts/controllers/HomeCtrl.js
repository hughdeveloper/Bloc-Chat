(function() {
  function HomeCtrl(Room) {
    this.Chat = Room.all;
    this.newRoom = Room.formstate;
  }




  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
