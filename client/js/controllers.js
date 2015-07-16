// CONTROLLERS HERE
/**
 * 
 * linkedInLoginCtrl
 */
linkedInLoginApp.controller('linkedInLoginCtrl',
  ['$scope', '$location', '$rootScope',
    function ($scope, $location, $rootScope) {
      
       /**
       * @function getMyLinkedInData
       * @description Retrieve my personal data from linkedIn
       */
      $scope.getMyLinkedInData = function () {
        
        var v_fields = ["id", "firstName", "lastName", "pictureUrl", "publicProfileUrl"];
        
        var f_populate_result_to_main = function(result) {
          $rootScope.$apply(function () {
              
            var userprofile = result.values[0];
            $rootScope.userprofile = userprofile;
            $rootScope.loggedUser = true;

            $location.path("/main");
          });
        };
        
        var f_err = function (err) {
          $scope.error = err;
        };
          

        if (!$scope.hasOwnProperty("userprofile")) {
          
          IN.API.Profile("me")
            .fields(v_fields)
            .result(f_populate_result_to_main)
            .error(f_err);
    
        }
      }; // getMyLinkedInData
      
      /**
       * @function logoutLinkedIn
       * @description Calling this function logouts user from LinkedIn's session.
       */
      $scope.logoutLinkedIn = function () {
       
        var f_clean_then_return_to_login = function() {
          delete $rootScope.profile;
          $rootScope.loggedUser = false;
          $location.path("/login");
        };
          
        IN.User.logout();
        f_clean_then_return_to_login();
          
      }; // logoutLinkedIn
      
      /**
       * @function getCustomers
       * @description Extract Customer from API GET /v1/customers
       */
      $scope.getCustomers = function() {
        
        var f_populate_customers_to_main = function(result) {
          $rootScope.$apply(function () {

            $rootScope.customers = result;
            $location.path("/main");
            
          });
        };
        
        $.get( "/v1/customers", f_populate_customers_to_main);

      }; // getCustomers
      
      /**
       * @function displayCustomerEmpHistory
       * @description Display Customer Employment History using linkedInUrl
       */
      $scope.displayCustomerEmpHistory = function (linkedInUrl) {
        var v_fields = ["id", "firstName", "lastName", "pictureUrl", "publicProfileUrl", "positions"];
        
        var f_populate_result_to_main = function(result) {
          $rootScope.$apply(function () {
              
            var profile = result.values[0];
            $rootScope.profile = profile;
            $rootScope.positions = profile.positions;

            $location.path("/main");

          });
        };
        
        var f_err = function (err) {
          $scope.error = err;
        };
          
        if (!$scope.hasOwnProperty("profile")) {
          
          IN.API.Profile(linkedInUrl)
            .fields(v_fields)
            .result(f_populate_result_to_main)
            .error(f_err);
    
        }
      }; // displayCustomerEmpHistory
      
      
    }
  ]);

