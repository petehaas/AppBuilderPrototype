angular.module('verascapeApp')

   .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {


        $stateProvider
            .state('applications', {
               url: '/applications',
               templateUrl: 'app/views/applicationList.html'
            })
            .state('application', {
                url: '/application/:applicationId',
                templateUrl: 'app/views/application.html',
                controller: 'verascapeController'
            })
            .state('dialog', {
                url: '/dialog/:dialogId',
                templateUrl: 'app/views/dialog.html',
                controller: 'verascapeController'
            })
            .state('/', {
              url: '/',
              templateUrl: 'app/views/applicationList.html'
            })

        ;

    }]);


   /*
    .config(['$routeProvider', function ($routeProvider) {

    $routeProvider.
        when('/application/:applicationId', {
            templateUrl: 'app/views/application.html',
            controller: 'verascapeController'
        }).
        when('/dialog/:dialogId', {
            templateUrl: 'app/views/dialog.html',
            controller: 'verascapeController'
        }).

        otherwise({redirectTo: '/'});
}]);
*/
