'use strict';
var app = angular.module('verascapeApp',
    ['ngRoute','LocalStorageModule','angular-loading-bar','ui.tree','ngAnimate','ui.bootstrap']);

app.controller('verascapeController', ['$scope','$routeParams','verascapeCustomerService','verascapeApplicationService','$modal',
    function ($scope,$routeParams,verascapeCustomerService,verascapeApplicationService,$modal) {

    $scope.customerList = verascapeCustomerService.getCustList();
    $scope.maintainers = verascapeApplicationService.maintainers;
    $scope.platforms = verascapeApplicationService.platforms;
    $scope.vxmlApps = verascapeApplicationService.getApplications();
    $scope.prompts = verascapeApplicationService.prompts;
    $scope.grammars = verascapeApplicationService.grammars;
    $scope.logEvents = verascapeApplicationService.logEvents;
    $scope.modalItems = $scope.grammars;
    $scope.modalHeading = "";


    if ($routeParams.applicationId)
        $scope.selectedApplication = $routeParams.applicationId;
    else
        $scope.selectedApplication = 1;

    $scope.vxmlApp =   $scope.vxmlApps.filter(isSelectedApplication)[0];
    $scope.selectedDialog = $routeParams.dialogId;

    $scope.save = function(){
      alert('Saved!');
    };

    function isSelectedApplication(element) {

          return (element.id === parseInt($scope.selectedApplication));

    }

        $scope.openModal = function (item) {

            var modalInstance = $modal.open({
                templateUrl: 'promptsModal.html',
                controller: verascapeInstanceController,
                size: 'lg',
                resolve: {
                    items: function () {

                        $scope.modalHeading = item;
                        if (item === 'grammars')
                            return $scope.grammars;
                        else if (item === 'prompts')
                            return $scope.prompts;
                        else
                            return $scope.logEvents;
                    },
                    heading: function() { return item;}
                }
            });
            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                console.log('Modal dismissed');
            });
        }

        var verascapeInstanceController = function ($scope, $modalInstance, items, heading) {

            $scope.modalHeading = heading
            $scope.modalItems = items;
            $scope.selected = {
                item: $scope.modalItems[0]
            };

            $scope.ok = function () {
                $modalInstance.close($scope.selected.item);
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        };

}]);

app.config(['$routeProvider', function ($routeProvider) {

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

