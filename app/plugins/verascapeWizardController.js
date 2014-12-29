// define controller for wizard
var verascapeWizardController = ['$scope', '$q', '$timeout',
    function ($scope, $q, $timeout) {

        $scope.app = {};

        $scope.saveState = function() {
            var deferred = $q.defer();

            $timeout(function() {
                deferred.resolve();
            }, 5000);

            return deferred.promise;
        };

        $scope.completeWizard = function() {
            alert('Completed!');
        }
    }];
