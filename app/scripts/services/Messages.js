(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.all = messages;




Message.$scope;


// function changes the $scope of the Message. Changes the id and only displays the messages that have the same roomId as the roomId that is selected
    Message.getByRoomId = function(input) {
      var id = input.substring(1);
      console.log(id);
      var mode = ref.orderByChild('roomId').equalTo(id);
      Message.$scope = $firebaseArray(mode);
      return Message.$scope;
    };







    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
