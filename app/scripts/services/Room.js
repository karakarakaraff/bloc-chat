(function() {
  function Room($firebaseArray) {
    var Room = {};

    /**
     * @desc References the Firebase database and queries the "rooms" data
     * @type {Object}
     */
    var ref = firebase.database().ref().child('rooms');

    /**
     * @desc Creates an array of the "rooms" data queried above
     * @type {Array}
     */
    var rooms = $firebaseArray(ref);

    /**
     * @function Room.add (included in return statement)
     * @desc Creates a new chat room by adding it to the database's "rooms" data
     * @param {Object} newRoom
     */
    return {
      all: rooms,
      add: function(newRoom) {
        rooms.$add(newRoom);
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
