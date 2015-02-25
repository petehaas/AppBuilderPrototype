
(function() {
    'use strict';

    var app = angular.module('verascapeApp');

    angular.module('verascapeApp')
        .controller('dialogController',dialogController);

    dialogController().$inject = ['$scope','$stateParams','verascapeApplicationService','$modal'];


    function dialogController ($scope, $stateParams, verascapeApplicationService, $modal) {



        $scope.platforms = verascapeApplicationService.platforms;
        $scope.vxmlApps = verascapeApplicationService.getApplications();
        $scope.prompts = verascapeApplicationService.prompts;
        $scope.grammars = verascapeApplicationService.grammars;
        $scope.logEvents = verascapeApplicationService.logEvents;
        $scope.maintainers = verascapeApplicationService.maintainers;
        $scope.modalItems = $scope.grammars;
        $scope.modalHeading = "";
        $scope.selectedDialog = $stateParams.dialogId;

        $scope.save = function () {
            alert('Saved!');
        };

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
                    heading: function () {
                        return item;
                    }
                }
            });
            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                console.log('a Modal dismissed');
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

    };



})();