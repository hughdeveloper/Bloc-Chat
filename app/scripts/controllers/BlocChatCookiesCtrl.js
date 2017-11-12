(function() {
  function BlocChatCookiesCtrl($uibModalInstance, $cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');



    this.setUsername = function() {
      var username = this.username;
      console.log(username);

      // if the currentUser exsists it will close the username form
      if (username) {
        $uibModalInstance.close();
      }

      //updates the browser cookies to set blocChatCurrentUser to the username
      $cookies.put('blocChatCurrentUser', username);
    };
  }

  angular
    .module('blocChat')
    .controller('BlocChatCookiesCtrl', ['$uibModalInstance', '$cookies', '$uibModal', BlocChatCookiesCtrl]);
})();
