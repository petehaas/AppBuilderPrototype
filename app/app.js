'use strict';
var app = angular.module('verascapeApp',
    ['ngRoute',
        'LocalStorageModule',
        'angular-loading-bar',
        'ui.tree',
        'ngAnimate',
        'ui.bootstrap',
        'app.core',
        'ui.router',
        'app.layout'
        ]);




/*
var app = angular.module('AngularAuthApp',['ngRoute','LocalStorageModule','angular-loading-bar']);

app.config(function($routeProvider) {

    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "/app/views/home.html"
    });

    $routeProvider.when("/login", {
        controller: "loginController",
        templateUrl: "/app/views/login.html"
    });

    $routeProvider.when("/signup", {
        controller: "signupController",
        templateUrl: "/app/views/signup.html"
    });

    $routeProvider.otherwise({ redirectTo: "/home" });

});

    app.config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptorService');
    });

    app.run(['authService', function (authService) {
        authService.fillAuthData();
    }]);
*/