angular.module('galebWebui')
.service('AuthService', function ($http, $localStorage, config) {

  var self = {
    'loginPath': 'login',
    'logoutPath': 'logout',
    'homePath':'/',
    'isLogging': false,
    'errorMsg': '',
    'localReset': function() {
      $localStorage.$reset();
    },
    'logIn': function(credentials, callback) {
      var headers = credentials && credentials.username ? {
        Authorization : "Basic "
        + btoa(credentials.username + ":"
        + credentials.password)
      } : {};

      $http.get(config.apiUrl + "/", {
        headers : headers
      }).then(function(response) {
        if (response.data) {
          $localStorage.token = true;
          $localStorage.account = response.data.account;
          $localStorage.admin = true;
          $localStorage.email = response.data.email;
          $localStorage.hasTeam = response.data.hasTeam;
          self.isLogging = true;
          callback && callback(true);
        } else {
          self.localReset();
          self.isLogging = false;
          callback && callback(false);
        }
      }, function(response) {
        if (response.status === 401) {
          self.errorMsg = 'Please enter the correct username and password!';
        } else if (response.status === -1) {
          self.errorMsg = 'There was a problem with Galeb API, please contact administrator!';
        }
        self.localReset();
        self.isLogging = false;
        callback && callback(false);
      });
    },
    'logOut': function() {
      self.localReset();
    },
    'isLoggedIn': function() {
      if ($localStorage.token) {
        return true;
      } else {
        self.localReset();
        return false;
      }
    },
    'isAdmin': function() { return $localStorage.admin ? true : false; },
    'account': function() { return $localStorage.account; },
    'email': function() { return $localStorage.email; },
    'hasTeam': function() { return $localStorage.hasTeam; }

  };

  return self;
});
