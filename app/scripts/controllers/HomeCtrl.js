(function() {
    function HomeCtrl(Room) {
		this.Chat = Room.all;
    }
	

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room',HomeCtrl]);
})();