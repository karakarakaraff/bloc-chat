(function() {
  function ModalCtrl($uibModal, Room) {

    this.open = function() {
      var modalInstance = $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalInstanceCtrl as modal',
        size: 'sm'
      });

      modalInstance.result.then(function(name) {
        this.room = name;
        Room.add(this.room);
      });
    };
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl]);
})();
