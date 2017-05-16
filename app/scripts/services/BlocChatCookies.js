(function() {
  function BlocChatCookies($cookies, $uibModal) {
    /**
     * @desc Sets the currentUser variable to whatever is stored in the cookies
     * @type {Object}
     */
    var currentUser = $cookies.get('blocChatCurrentUser');

    /**
     * @desc If nothing was stored in the cookies, opens the username modal requiring the user to enter a username, which will then be stored in the cookies
     * @type {Object}
     */
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: '/templates/username.html',
        controller: 'UsernameCtrl as username',
        size: 'sm',
        backdrop: 'static',
        keyboard: false
      })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
