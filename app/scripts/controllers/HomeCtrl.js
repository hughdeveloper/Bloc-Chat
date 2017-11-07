(function() {
  function HomeCtrl(Room, $uibModal, $uibModalInstance) {
    this.Chat = Room.all;

console.log($uibModal);

    this.open = function(size) {
      $uibModal.open({
        templateUrl: '../templates/createchatrooms.html',
        controller: 'AddCtrl as add',
        backdrop: "static",
        size: size,
      });

    };
  };



  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room','$uibModal', HomeCtrl]);
})();
