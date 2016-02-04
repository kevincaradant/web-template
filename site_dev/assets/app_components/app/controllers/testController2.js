(function () {
	app.controller('testControllerTwo', ['$scope', 'testFactory', function ($scope, testFactory) {
		testFactory.testFactory$.subscribe(function(users) {
			$scope.users = users;
		});

		testFactory.getUsers();

		$scope.addUser = function() {
			testFactory.addUser();
		};
	}]);
})();
