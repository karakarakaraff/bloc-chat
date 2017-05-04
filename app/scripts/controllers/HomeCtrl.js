(function() {
  function HomeCtrl(Room, Message, $scope) {
    this.rooms = Room.all;

    $scope.activeRoom = null;
    this.changeRoom = function(room) {
      $scope.activeRoom = room;
      this.messages = Message.getByRoomId($scope.activeRoom.$id);
    };

  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$scope', HomeCtrl]);
})();
