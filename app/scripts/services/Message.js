(function() {
  function Message($firebaseArray) {
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

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
