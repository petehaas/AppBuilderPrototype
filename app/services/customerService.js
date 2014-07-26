
'use strict';
app.factory('customerService', ['$http', '$q', 'localStorageService', function ($http, $q, localStorageService) {



    var _fillCustomers = function () {

        var customerData = localStorageService.get('customerData');
        if (customerData)
        {

          //  _authentication.isAuth = true;
          //  _authentication.userName = authData.userName;
        }

    }



    return authServiceFactory;
}]);