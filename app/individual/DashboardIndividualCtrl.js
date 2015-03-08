(function(window) {
    'use strict';

    var angular = window.angular;

    angular.module('pttr.individual').controller('DashboardIndividualCtrl', ['$scope', '$http', function($scope, $http) {
        $http.get('js/animalinfo.json').success(function(data) {
            // $scope.animals = data;
        });
        $scope.liked = false;
        $scope.animals = [{
            name: "Great Dane",
            type: "dog",
            description: "Found abandoned in an old house"
        }, {
            name: "Beagle",
            type: "dog",
            description: "lost puppy found on the street"
        }, {
            name: "Beagle",
            type: "dog",
            description: "rescued from an abandoned home"
        }, {
            name: "Tabby Cat",
            type: "cat",
            description: "found roaming the streets"
        }, {
            name: "Chartreux",
            type: "cat",
            description: "rescued from an abusive home"
        }, {
            name: "Beagle",
            type: "dog",
            description: "rescued from an abandoned home"
        }, {
            name: "Tabby Cat",
            type: "cat",
            description: "found roaming the streets"
        }, {
            name: "Chartreux",
            type: "cat",
            description: "rescued from an abusive home"
        }, {
            name: "Beagle",
            type: "dog",
            description: "rescued from an abandoned home"
        }, {
            name: "Tabby Cat",
            type: "cat",
            description: "found roaming the streets"
        }, {
            name: "Chartreux",
            type: "cat",
            description: "rescued from an abusive home"
        }, {
            name: "Beagle",
            type: "dog",
            description: "rescued from an abandoned home"
        }, {
            name: "Tabby Cat",
            type: "cat",
            description: "found roaming the streets"
        }, {
            name: "Chartreux",
            type: "cat",
            description: "rescued from an abusive home"
        }, {
            name: "Beagle",
            type: "dog",
            description: "rescued from an abandoned home"
        }, {
            name: "Tabby Cat",
            type: "cat",
            description: "found roaming the streets"
        }, {
            name: "Chartreux",
            type: "cat",
            description: "rescued from an abusive home"
        }, {
            name: "Beagle",
            type: "dog",
            description: "rescued from an abandoned home"
        }, {
            name: "Tabby Cat",
            type: "cat",
            description: "found roaming the streets"
        }, {
            name: "Chartreux",
            type: "cat",
            description: "rescued from an abusive home"
        }, {
            name: "Beagle",
            type: "dog",
            description: "rescued from an abandoned home"
        }, {
            name: "Tabby Cat",
            type: "cat",
            description: "found roaming the streets"
        }, {
            name: "Chartreux",
            type: "cat",
            description: "rescued from an abusive home"
        }]
        
            // var viewAnimal = function(name,type){

        // };
    }]);

}(window));
