(function() {
    function HomeCtrl(Room) {
		this.Chat = Room.all;
        this.state = Room.state;
    }
	

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room',HomeCtrl]);
})();