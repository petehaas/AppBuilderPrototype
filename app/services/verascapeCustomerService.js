'use strict';
//var app = angular.module('VerascapeCustomerModule', ['LocalStorageModule']);

app.factory('verascapeCustomerService', ['$http', '$q', 'localStorageService',

    function ($http, $q, localStorageService) {

         var customerFactory = {};

         var _getCustList = function(){
         var customerList = [];

             customerList.push({
                 name: 'Nordstrom',
                 value: '70'
             });

             customerList.push({
                 name: 'USPS',
                 value: '71'
             });

    };


        customerFactory.getCustList = _getCustList;

        return customerFactory;


}]);