(function () {
    function Room($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        Room.all = rooms;
        
        
        
        var showState = true;

        Room.change = function (showState) {
            if (showState=false) {
                showState=true;
            }
            else {
                showState = false;
            }
            
            console.log(showState);
            return showState;
        };
        
        Room.state = showState;


        return Room;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();