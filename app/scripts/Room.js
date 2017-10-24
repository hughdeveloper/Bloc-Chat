(function () {
	function Room($firebaseArray) {
		var Room = {};
		var ref = firebase.database().ref().child("rooms");
		var rooms = $firebaseArray(ref);

		Room.all = rooms;
		
		
		console.log(Room);
	
		
		return Room;
	}

	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();