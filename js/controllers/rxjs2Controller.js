'use strict';

(function () {
	/**
  * @ngdoc controller
  * @name app.controller:rxjs2Controller
  * @description
  * Controller 2 for the observable demo
  */
	app.controller('rxjs2Controller', function ($scope, rxjsFactory) {
		/**
  * @ngdoc method
  * @name subscribe
  * @methodOf app.controller:rxjs2Controller
  * @description
  * The controller subscribes at the emit signal from the rxjsFactory.
  * If users changes, so $scope.users will be update
  */
		rxjsFactory.rxjsFactory$.subscribe(function (users) {
			$scope.users = users;
		});

		/**
  * @ngdoc method
  * @name getUsers
  * @methodOf app.controller:rxjs2Controller
  * @description
  * Call getUsers method so the observable tells everyone to update the users
  */
		rxjsFactory.getUsers();

		/**
  * @ngdoc method
  * @name addUser
  * @methodOf app.controller:rxjs2Controller
  * @description
  * Add a user
  */
		$scope.addUser = function () {
			rxjsFactory.addUser();
		};
	});
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ4anMyQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsWUFBTTs7Ozs7OztBQU9OLEtBQUksVUFBSixDQUFlLGlCQUFmLEVBQWtDLFVBQUMsTUFBRCxFQUFTLFdBQVQsRUFBeUI7Ozs7Ozs7OztBQVMxRCxjQUFZLFlBQVosQ0FBeUIsU0FBekIsQ0FBbUMsVUFBQyxLQUFELEVBQVc7QUFDN0MsVUFBTyxLQUFQLEdBQWUsS0FBZixDQUQ2QztHQUFYLENBQW5DOzs7Ozs7Ozs7QUFUMEQsYUFvQjFELENBQVksUUFBWjs7Ozs7Ozs7O0FBcEIwRCxRQTZCMUQsQ0FBTyxPQUFQLEdBQWlCLFlBQU07QUFDdEIsZUFBWSxPQUFaLEdBRHNCO0dBQU4sQ0E3QnlDO0VBQXpCLENBQWxDLENBUE07Q0FBTixDQUFEIiwiZmlsZSI6InJ4anMyQ29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIigoKSA9PiB7XG5cdC8qKlxuXHQgKiBAbmdkb2MgY29udHJvbGxlclxuXHQgKiBAbmFtZSBhcHAuY29udHJvbGxlcjpyeGpzMkNvbnRyb2xsZXJcblx0ICogQGRlc2NyaXB0aW9uXG5cdCAqIENvbnRyb2xsZXIgMiBmb3IgdGhlIG9ic2VydmFibGUgZGVtb1xuXHQgKi9cblx0YXBwLmNvbnRyb2xsZXIoJ3J4anMyQ29udHJvbGxlcicsICgkc2NvcGUsIHJ4anNGYWN0b3J5KSA9PiB7XG5cdFx0LyoqXG5cdFx0KiBAbmdkb2MgbWV0aG9kXG5cdFx0KiBAbmFtZSBzdWJzY3JpYmVcblx0XHQqIEBtZXRob2RPZiBhcHAuY29udHJvbGxlcjpyeGpzMkNvbnRyb2xsZXJcblx0XHQqIEBkZXNjcmlwdGlvblxuXHRcdCogVGhlIGNvbnRyb2xsZXIgc3Vic2NyaWJlcyBhdCB0aGUgZW1pdCBzaWduYWwgZnJvbSB0aGUgcnhqc0ZhY3RvcnkuXG5cdFx0KiBJZiB1c2VycyBjaGFuZ2VzLCBzbyAkc2NvcGUudXNlcnMgd2lsbCBiZSB1cGRhdGVcblx0XHQqL1xuXHRcdHJ4anNGYWN0b3J5LnJ4anNGYWN0b3J5JC5zdWJzY3JpYmUoKHVzZXJzKSA9PiB7XG5cdFx0XHQkc2NvcGUudXNlcnMgPSB1c2Vycztcblx0XHR9KTtcblxuXHRcdC8qKlxuXHRcdCogQG5nZG9jIG1ldGhvZFxuXHRcdCogQG5hbWUgZ2V0VXNlcnNcblx0XHQqIEBtZXRob2RPZiBhcHAuY29udHJvbGxlcjpyeGpzMkNvbnRyb2xsZXJcblx0XHQqIEBkZXNjcmlwdGlvblxuXHRcdCogQ2FsbCBnZXRVc2VycyBtZXRob2Qgc28gdGhlIG9ic2VydmFibGUgdGVsbHMgZXZlcnlvbmUgdG8gdXBkYXRlIHRoZSB1c2Vyc1xuXHRcdCovXG5cdFx0cnhqc0ZhY3RvcnkuZ2V0VXNlcnMoKTtcblxuXHRcdC8qKlxuXHRcdCogQG5nZG9jIG1ldGhvZFxuXHRcdCogQG5hbWUgYWRkVXNlclxuXHRcdCogQG1ldGhvZE9mIGFwcC5jb250cm9sbGVyOnJ4anMyQ29udHJvbGxlclxuXHRcdCogQGRlc2NyaXB0aW9uXG5cdFx0KiBBZGQgYSB1c2VyXG5cdFx0Ki9cblx0XHQkc2NvcGUuYWRkVXNlciA9ICgpID0+IHtcblx0XHRcdHJ4anNGYWN0b3J5LmFkZFVzZXIoKTtcblx0XHR9O1xuXHR9KTtcbn0pKCk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
