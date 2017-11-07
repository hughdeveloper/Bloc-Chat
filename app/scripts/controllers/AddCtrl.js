(function() {
  function AddCtrl($ubiModal, $uibModalInstance, Room) {


    console.log($uibModalInstance);


    this.ok = function () {
    $uibModalInstance.close(Room);
  };

  this.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

  }

  angular
    .module('blocChat')
    .controller('AddCtrl', ['Room','$uibModal', AddCtrl]);
})();
