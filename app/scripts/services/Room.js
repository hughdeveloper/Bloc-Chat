(function() {
    function Room($firebaseArray) {
      var Room = {};
      var ref = firebase.database().ref().child("rooms");
      var rooms = $firebaseArray(ref);

      Room.all = rooms;


      /* ------------------ ADD ROOM ---------------------------*/

      // rooms that is being inputted into this function is the new room that we are trying to add to the array
      Room.add = function(room) {
        //Use the firebase method $add here
        rooms.$add(room);
      };


Room.$scope;


      Room.changeRoom = function(active) {
        Room.$scope = active;
        return Room.$scope, Room.$id;
      };





    return Room;
  }

  angular
  .module('blocChat')
  .factory('Room', ['$firebaseArray', Room]);
})();
