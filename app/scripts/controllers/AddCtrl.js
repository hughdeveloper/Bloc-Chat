(function() {
  function AddCtrl(Room, $scope, $uibModalInstance, $uibModal) {
    this.add = Room.add();

    $scope.ok = function (room) {
      this.add = Room.add(room);
        $modalInstance.close($scope.selected.item);
    };





    $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
};

  }




  angular
    .module('blocChat')
    .controller('AddCtrl', ['Room', '$uibModal', AddCtrl]);
})();
