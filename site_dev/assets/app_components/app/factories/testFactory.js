(function () {
	// factory to try rxjs
	app.factory('testFactory', ['rx', function (rx) {
		// save the observer of the factory
		var testFactoryObserver;

		// create the observable
		var testFactory$ = new rx.Observable.create(function (observer) {
			testFactoryObserver = observer;
		})
		.share();

		// define the data like a private variable (outside object returned)
		var data = {
			users: [
				{name: 'John Rambo', isVisible: true, age: 32},
				{name: 'Pablo Picasso', isVisible: true, age: 64}
			]
		};

		return {
			// share the observable so eeryone can subscribe to it
			testFactory$: testFactory$,

			getUsers: function () {
				// tell everyone to update users
				testFactoryObserver.next(data.users);
			},

			addUser: function () {
				// push a new user
				data.users.push({name: 'John Kennedy', isVisible: true, age: 87});

				// tell everyone to update users
				testFactoryObserver.next(data.users);
			}
		};
	}]);
})();
