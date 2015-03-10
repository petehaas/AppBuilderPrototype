'use strict';

angular.module('verascapeApp')
       .factory('verascapeApplicationService', ['$http', '$q', 'localStorageService',

    function ($http, $q, localStorageService) {


         var applicationFactory = {};
         var _maintainers = ['phaas@verascape.com','jmitchell@verascape.com'];
         var _platforms = ['Verascape','NewNet'];

         var _dialogs = [
            {
                id: 1,
                order: 1,
                dialogName: "Greeting!",
                fieldName: 'selection',
                nextDialog: 'NextOne',
                logEvents: [{id: 1,name: 'log 1',value: 'log data'},
                            {id: 2,name: 'log 2',value: 'log data'}
                           ],
                grammars: [{id: 1,name: 'grammar 1',file: 'grammar1.xml'},
                           {id: 2,name: 'grammar 2',file: 'grammar2.xml'}
                          ],
                variables: [],
                properties: [],
                prompts: [{id: 1,promptType: 'Field',tts: 'my text 1',audioFile:'test1.wav', recoCount: 'RecoCount == 0', bargeIn: true},
                          {id: 2,promptType: 'Field',tts: 'my text 2',audioFile:'test2.wav', recoCount: 'RecoCount == 1', bargeIn: true}
                         ],
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
                initial: {},
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
                initial: {},
                filled: {},
                maxReco: {},
                added: new Date()
            }
         ];

         var _getApplications = function(){

             var vxmlApps = [];

             vxmlApps.push({
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
                 dialogs: _dialogs,
                 globalAgentEvent: true,
                 transfer: false,
                 addedBy: "phaas",
                 added: '10/1/2001',
                 updatedBy: 'phaas',
                 updated: '10/22/2001'
             });

             vxmlApps.push({
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
                 dialogs: _dialogs,
                 globalAgentEvent: true,
                 transfer: false,
                 addedBy: "phaas",
                 added: '10/1/2001',
                 updatedBy: 'phaas',
                 updated: '10/22/2001'
             });


             return vxmlApps;
        };

        applicationFactory.getApplications = _getApplications;
        applicationFactory.maintainers = _maintainers;
        applicationFactory.platforms = _platforms;
        applicationFactory.prompts = _dialogs[0].prompts;
        applicationFactory.grammars = _dialogs[0].grammars;
        applicationFactory.logEvents = _dialogs[0].logEvents;
        return applicationFactory;


}]);