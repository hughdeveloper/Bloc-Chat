(function() {
    function Message($firebaseArray) {
      var Message = {};
      var ref = firebase.database().ref().child("messages");
      var messages = $firebaseArray(ref);


Message.all = messages;
console.log(messages);

console.log(ref);


/*
Message.getByRoomId = function(roomId) {
       for () {

       }
   };
*/

      return Message;
    }

  angular
  .module('blocChat')
  .factory('Message', ['$firebaseArray', Message]);
})();
