'use strict';

/**
 * @ngdoc function
 * @name webAppApp.controller:AdministrationCtrl
 * @description
 * # AdministrationCtrl
 * Controller of the webAppApp
 */
angular.module('webAppApp')
    .controller('AdministrationCtrl', function ($scope, api) {

        $scope.progress = false;

        $scope.rebuildSchema = function () {

            $scope.progress = true;

            api.rebuildSchema().then(function () {

                $scope.progress = false;
                $scope.status = 'Database schema updated successfully';
            });
        };

        $scope.restart = function () {

            $scope.progress = true;

            api.restart().then(function () {

                $scope.progress = false;
                $scope.status = 'Web application restarted successfully';
            });
        };


        $scope.refreshPage = function () {
            location.reload();
        }
    });
