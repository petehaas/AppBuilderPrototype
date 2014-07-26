'use strict';
var app = angular.module('testApp',['ngRoute','LocalStorageModule','angular-loading-bar','ui.tree','ngAnimate']);

app.controller('testController', ['$scope','$routeParams', function ($scope,$routeParams) {


    $scope.customerList = [];
    $scope.customerList.push({
        name: 'Nordstrom',
        value: '70'
    });
    $scope.customerList.push({
        name: 'USPS',
        value: '71'
    });

    $scope.maintainers = ['phaas@verascape.com','jmitchell@verascape.com'];
    $scope.platforms = ['Verascape','NewNet'];

    var dialogs = [
        {
        id: 1,
        order: 1,
        dialogName: "Greeting!",
        fieldName: 'selection',
        nextDialog: 'NextOne',
        logEvents: [],
        grammars: [],
        variables: [],
        properties: [],
        prompts: [],
        initial: {},
        filled: {},
        maxReco: {},
        added: new Date()
    },
        {
            id: 2,
            order: 2,
            dialogName: "ReadyForSurvey",
            fieldName: 'selection',
            nextDialog: 'NextOnetwo',
            logEvents: [],
            grammars: [],
            variables: [],
            properties: [],
            prompts: [],
            initital: {},
            filled: {},
            maxReco: {},
            added: new Date()
        },
        {
            id: 3,
            order: 3,
            dialogName: "Question1",
            fieldName: 'selection',
            nextDialog: 'NextOnetwo',
            logEvents: [],
            grammars: [],
            variables: [],
            properties: [],
            prompts: [],
            initital: {},
            filled: {},
            maxReco: {},
            added: new Date()
        }
    ];

    $scope.vxmlApps = [];

    $scope.vxmlApps.push({
        id: 1,
        speechPlatform: 'Verascape',
        maintainer: 'jmitchell@verascape.com',
        customer: 'Nordstrom',
        applicationStartPage: 'LiveSurveys/LiveSurveyMain.aspx',
        applicationName: 'Nordstrom Agent Survey',
        applicationDescription: 'My description too',
        applicationNumber: 800,
        subApplicationNumber: 1,
        audioDirectory: 'LiveAgent/Survey/',
        vxmlVariables: [],
        vxmlProperties: [],
        dialogs: dialogs,
        globalAgentEvent: true,
        transfer: false,
        addedBy: "phaas",
        added: '10/1/2001',
        updatedBy: 'phaas',
        updated: '10/22/2001'
    });

    $scope.vxmlApps.push({
        id: 2,
        speechPlatform: 'Verascape',
        maintainer: 'jmitchell@verascape.com',
        customer: 'USPS Survey',
        applicationStartPage: 'LiveSurveys/LiveSurveyMain.aspx',
        applicationName: 'USPS',
        applicationDescription: 'My description too',
        applicationNumber: 800,
        subApplicationNumber: 1,
        audioDirectory: 'LiveAgent/Survey/',
        vxmlVariables: [],
        vxmlProperties: [],
        dialogs: dialogs,
        globalAgentEvent: true,
        transfer: false,
        addedBy: "phaas",
        added: '10/1/2001',
        updatedBy: 'phaas',
        updated: '10/22/2001'
    });

    if ($routeParams.applicationId)
        $scope.selectedApplication = $routeParams.applicationId;
    else
        $scope.selectedApplication = 1;

    //$scope.vxmlApp =   $scope.vxmlApps[0];//$scope.vxmlApps.filter(isSelected);
    $scope.vxmlApp =   $scope.vxmlApps.filter(isSelected)[0];
    $scope.selectedDialog = $routeParams.dialogId;


   // console.log($scope.selectedDialog);
    //console.log('selectedApplication: ' + $scope.selectedApplication);
    //console.log('vxmlApp: ' + $scope.vxmlApp.applicationName);
    //console.log($scope.vxmlApps.find(isApplication));

    $scope.save = function(){
      alert('Saved!');
    };

    function isSelected(element) {

        //console.log(element.id  ===parseInt($scope.selectedApplication));
        //console.log(1 == 1);
          return (element.id === parseInt($scope.selectedApplication));

    }

}]);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.
        when('/application/:applicationId', {
           templateUrl: 'app/views/application.html',
           controller: 'testController'
        }).
        when('/dialog/:dialogId', {
            templateUrl: 'app/views/dialog.html',
            controller: 'testController'
        }).
        otherwise({redirectTo: '/'});
}]);

