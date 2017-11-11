(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    console.log(currentUser);

    // opens the template for the instruction to add a currentUser to there browser cookies
    // only opens when the username does not exsist
    if (!currentUser || currentUser === '') {
      console.log($cookies);
      $uibModal.open({
        templateUrl: '/templates/username.html',
        controller: 'BlocChatCookiesCtrl as cookies',
        backdrop: "static",
      })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
