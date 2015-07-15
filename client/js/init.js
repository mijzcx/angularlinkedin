// INITILIZATION HERE

// Initialization of module
linkedInLoginApp.run([function() {
    var script = document.createElement("script");
    script.type = "text/javascript", 
    script.async = false, 
    script.src = "https://platform.linkedin.com/in.js?async=true";
    
    // Initialize LinkedIn In.js
    script.onload = function(){
      IN.init({
        api_key: '77d5iyptmksza9',
        authorize: true,
        onLoad: $.onLinkedInLoad(),
        scope: "r_basicprofile w_share"
      });
      
    };
    
    var script0 = document.getElementsByTagName("script")[0];
    script0.parentNode.insertBefore(script, script0);

}]);

// LinkedIn Events
(function ($) {
  $.onLinkedInLoad = function () {
    IN.Event.on(IN, "auth", function () {
     $.onLinkedInLogin();
    });
    IN.Event.on(IN, "logout", function () {
      $.onLinkedInLogout();
    });
  };

  $.onLinkedInLogout = function () {
    location.reload(true);
  };

  $.onLinkedInLogin = function () {
    angular.element($("#appBody")).scope()
     .$apply(
        function ($scope) {
          $scope.getCustomers();
        }
    );
  };
})(jQuery);


