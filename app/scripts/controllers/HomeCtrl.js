(function() {
  function HomeCtrl(Room, Message, $cookies) {
    this.rooms = Room.all;
    this.activeRoom = null;
    this.currentUser = $cookies.get('blocChatCurrentUser');

    this.changeRoom = function(room) {
      this.activeRoom = room;
      this.messages = Message.getByRoomId(this.activeRoom.$id);
    };

    this.sendMessage = function() {
      Message.send(this.newMessage, this.activeRoom);
      this.newMessage = '';
    };

  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$cookies', HomeCtrl]);
})();
