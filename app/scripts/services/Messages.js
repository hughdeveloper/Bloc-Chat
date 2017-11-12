(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    Message.all = messages;



Message.$scope;
Message.roomId;

// function changes the $scope of the Message. Changes the id and only displays the messages that have the same roomId as the roomId that is selected
    Message.getByRoomId = function(input) {
      var id = input.substring(1);
      Message.roomId = id;
      console.log(Message.roomId);
      var mode = ref.orderByChild('roomId').equalTo(id);
      Message.$scope = $firebaseArray(mode);
      return [Message.$scope, Message.roomId];
    };




    Message.send = function (newMessage, room) {
      var currentUser = $cookies.get('blocChatCurrentUser');
      if (Message.roomId !== undefined) {
        this.sendInfo = newMessage;
        console.log(newMessage);
        var timestamp = Date.now();
        console.log(timestamp);
        var messageData = {
          username: currentUser,
          sentAt: timestamp,
          roomId: Message.roomId,
          content: newMessage,
        };
        console.log(messageData);
        messages.$add(messageData);
      }
    };



    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
