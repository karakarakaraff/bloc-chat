(function() {
  function Message($firebaseArray, $cookies, $filter) {
    var Message = {};

    /**
     * @desc References the Firebase database and queries the "messages" data
     * @type {Object}
     */
    var ref = firebase.database().ref().child('messages');

    /**
     * @desc Creates an array of the "messages" data queried above
     * @type {Array}
     */
    var messages = $firebaseArray(ref);

    /**
     * @function Message.getByRoomId
     * @desc Get all messages for a given room
     * @param {Object} roomId
     */
    Message.getByRoomId = function(roomId) {
      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    };

    /**
     * @function Message.send
     * @desc Sends a new message to the database with all necessary properties
     * @param {Object} newMessage
     */
    Message.send = function(newMessage, activeRoom) {
      var date = new Date();
      messages.$add({
        content: newMessage,
        roomId: activeRoom.$id,
        sentAt: $filter('date')(date, 'EEEE @ h:mma (M/d/yy)'),
        username: $cookies.get('blocChatCurrentUser')
      });
    };


    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', '$filter', Message]);
})();
