angular.module('rcForm', [])
    .directive(rcSubmitDirective);

// define module for app
angular.module('verascapeWizardApp', ['rcWizard', 'rcForm', 'rcDisabledBootstrap']);
