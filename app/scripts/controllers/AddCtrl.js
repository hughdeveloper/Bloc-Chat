(function() {
  function AddCtrl($uibModalInstance, Room) {


    console.log($uibModalInstance);


    this.ok = function (room) {
    Room.add(room);
    $uibModalInstance.close(Room);
  };

  this.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

  }

  angular
    .module('blocChat')
    .controller('AddCtrl', ['$uibModalInstance', 'Room', AddCtrl]);
})();
