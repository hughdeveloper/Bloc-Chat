(function() {
  function AddCtrl(Room, $uibModalInstance) {
    this.add(room);
  }




  angular
    .module('blocChat')
    .controller('AddCtrl', ['Room', '$uibModalInstance', AddCtrl]);
})();
