(function () {
	app.controller('testControllerOne', ['$scope', 'testFactory', function($scope, testFactory) {
		// subscribe to observable
		testFactory.testFactory$.subscribe(function(users) {
			$scope.users = users;
		});

		// call getUsers method so the observable tell everyone to update the users
		testFactory.getUsers();

		// add a user
		$scope.addUser = function() {
			testFactory.addUser();
		};
	}]);
})();
