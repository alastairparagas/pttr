(function (window) {
    'use strict';
    
    var angular = window.angular;
    
    angular.module('pttr.shelter').controller('DashboardShelterCtrl', ['$scope', function ($scope) {
        $scope.animals = [
        	{
        		name: "Great Dane",
        		type: "dog",
        		description: "Found abandoned in an old house"
        	},
        	{
        		name: "Beagle",
        		type: "dog",
        		description: "lost puppy found on the street"
        	},
        	{
        		name: "Beagle",
        		type: "dog",
        		description: "rescued from an abandoned home"
        	},
        	{
        		name: "Tabby Cat",
        		type: "cat",
        		description: "found roaming the streets"
        	},
        	{
        		name: "Chartreux",
        		type: "cat",
        		description: "rescued from an abusive home"
        	} ,
        	{
        		name: "Beagle",
        		type: "dog",
        		description: "rescued from an abandoned home"
        	},
        	{
        		name: "Tabby Cat",
        		type: "cat",
        		description: "found roaming the streets"
        	},
        	{
        		name: "Chartreux",
        		type: "cat",
        		description: "rescued from an abusive home"
        	} ,
        	{
        		name: "Beagle",
        		type: "dog",
        		description: "rescued from an abandoned home"
        	},
        	{
        		name: "Tabby Cat",
        		type: "cat",
        		description: "found roaming the streets"
        	},
        	{
        		name: "Chartreux",
        		type: "cat",
        		description: "rescued from an abusive home"
        	} ,
        	{
        		name: "Beagle",
        		type: "dog",
        		description: "rescued from an abandoned home"
        	},
        	{
        		name: "Tabby Cat",
        		type: "cat",
        		description: "found roaming the streets"
        	},
        	{
        		name: "Chartreux",
        		type: "cat",
        		description: "rescued from an abusive home"
        	} ,
        	{
        		name: "Beagle",
        		type: "dog",
        		description: "rescued from an abandoned home"
        	},
        	{
        		name: "Tabby Cat",
        		type: "cat",
        		description: "found roaming the streets"
        	},
        	{
        		name: "Chartreux",
        		type: "cat",
        		description: "rescued from an abusive home"
        	} ,
        	{
        		name: "Beagle",
        		type: "dog",
        		description: "rescued from an abandoned home"
        	},
        	{
        		name: "Tabby Cat",
        		type: "cat",
        		description: "found roaming the streets"
        	},
        	{
        		name: "Chartreux",
        		type: "cat",
        		description: "rescued from an abusive home"
        	} ,
        	{
        		name: "Beagle",
        		type: "dog",
        		description: "rescued from an abandoned home"
        	},
        	{
        		name: "Tabby Cat",
        		type: "cat",
        		description: "found roaming the streets"
        	},
        	{
        		name: "Chartreux",
        		type: "cat",
        		description: "rescued from an abusive home"
        	} 
        ] 
        $scope.pledgeusers = [
                {
                    username: "Sandra Walice",
                    pledgetype: "cash",
                    pledgeamount: "$40"
                }, {
                    username: "James brown",
                    pledgetype: "cash",
                    pledgeamount: "$40"
                }, {
                    username: "SomeOrg ",
                    pledgetype: "sponsor",
                    pledgeamount: "$10,000"
                }
            ]
        $scope.adopterusers = [
                {
                    username: "Sandra Walice",
                    animalName: "beagle",
                    animalType: "dog"
                }, {
                    username: "James brown",
                    animalName: "Akita",
                    animalType: "dog"
                }, {
                    username: "Lisa smith",
                    animalName: "ragdoll",
                    animalType: "cat"
                }
            ]
        
    }]);
    
}(window));