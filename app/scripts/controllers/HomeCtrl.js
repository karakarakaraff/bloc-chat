(function() {
  function HomeCtrl(Room, Message) {
    this.rooms = Room.all;

    this.activeRoom = null;
    this.changeRoom = function(room) {
      this.activeRoom = room;
      this.messages = Message.getByRoomId(this.activeRoom.$id);
    };

  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();
