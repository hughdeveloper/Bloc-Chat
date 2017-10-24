(function() {
    function RoomCtrl(Room) {
		this.Chat = Room.all;
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();