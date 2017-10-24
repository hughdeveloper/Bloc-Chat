(function() {
    function RoomCtrl(Room) {
		this.Chat = Room;
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();