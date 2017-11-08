(function() {
  function AddCtrl($uibModalInstance, Room) {


    console.log($uibModalInstance);


    this.submit = function(room) {

      var room = document.getElementById('room').value;
      console.log(room);
      Room.add(room);
      $uibModalInstance.close();
    };


    this.cancel = function() {
      $uibModalInstance.close();
    };

  }

  angular
    .module('blocChat')
    .controller('AddCtrl', ['$uibModalInstance', 'Room', AddCtrl]);
})();
