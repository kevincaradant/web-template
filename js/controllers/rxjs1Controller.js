'use strict';

(function () {
	/**
  * @ngdoc controller
  * @name app.controller:rxjs1Controller
  * @description
  * Controller 1 for the observable demo
  */
	app.controller('rxjs1Controller', function ($scope, rxjsFactory) {
		/**
  * @ngdoc method
  * @name subscribe
  * @methodOf app.controller:rxjs1Controller
  * @description
  * The controller subscribes at the emit signal from the rxjsFactory.
  * If users changes, so $scope.users will be update
  */
		rxjsFactory.rxjsFactory$.subscribe(function (users) {
			$scope.users = users;
			console.log('tyty');
		});

		/**
  * @ngdoc method
  * @name getUsers
  * @methodOf app.controller:rxjs1Controller
  * @description
  * Call getUsers method so the observable tells everyone to update the users
  */
		rxjsFactory.getUsers();

		/**
  * @ngdoc method
  * @name addUser
  * @methodOf app.controller:rxjs1Controller
  * @description
  * Add a user
  */
		$scope.addUser = function () {
			rxjsFactory.addUser();
		};
	});
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ4anMxQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsWUFBTTs7Ozs7OztBQU9OLEtBQUksVUFBSixDQUFlLGlCQUFmLEVBQWtDLFVBQUMsTUFBRCxFQUFTLFdBQVQsRUFBeUI7Ozs7Ozs7OztBQVMxRCxjQUFZLFlBQVosQ0FBeUIsU0FBekIsQ0FBbUMsVUFBQyxLQUFELEVBQVc7QUFDN0MsVUFBTyxLQUFQLEdBQWUsS0FBZixDQUQ2QztBQUU3QyxXQUFRLEdBQVIsQ0FBWSxNQUFaLEVBRjZDO0dBQVgsQ0FBbkM7Ozs7Ozs7OztBQVQwRCxhQXFCMUQsQ0FBWSxRQUFaOzs7Ozs7Ozs7QUFyQjBELFFBOEIxRCxDQUFPLE9BQVAsR0FBaUIsWUFBTTtBQUN0QixlQUFZLE9BQVosR0FEc0I7R0FBTixDQTlCeUM7RUFBekIsQ0FBbEMsQ0FQTTtDQUFOLENBQUQiLCJmaWxlIjoicnhqczFDb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKCgpID0+IHtcblx0LyoqXG5cdCAqIEBuZ2RvYyBjb250cm9sbGVyXG5cdCAqIEBuYW1lIGFwcC5jb250cm9sbGVyOnJ4anMxQ29udHJvbGxlclxuXHQgKiBAZGVzY3JpcHRpb25cblx0ICogQ29udHJvbGxlciAxIGZvciB0aGUgb2JzZXJ2YWJsZSBkZW1vXG5cdCAqL1xuXHRhcHAuY29udHJvbGxlcigncnhqczFDb250cm9sbGVyJywgKCRzY29wZSwgcnhqc0ZhY3RvcnkpID0+IHtcblx0XHQvKipcblx0XHQqIEBuZ2RvYyBtZXRob2Rcblx0XHQqIEBuYW1lIHN1YnNjcmliZVxuXHRcdCogQG1ldGhvZE9mIGFwcC5jb250cm9sbGVyOnJ4anMxQ29udHJvbGxlclxuXHRcdCogQGRlc2NyaXB0aW9uXG5cdFx0KiBUaGUgY29udHJvbGxlciBzdWJzY3JpYmVzIGF0IHRoZSBlbWl0IHNpZ25hbCBmcm9tIHRoZSByeGpzRmFjdG9yeS5cblx0XHQqIElmIHVzZXJzIGNoYW5nZXMsIHNvICRzY29wZS51c2VycyB3aWxsIGJlIHVwZGF0ZVxuXHRcdCovXG5cdFx0cnhqc0ZhY3Rvcnkucnhqc0ZhY3RvcnkkLnN1YnNjcmliZSgodXNlcnMpID0+IHtcblx0XHRcdCRzY29wZS51c2VycyA9IHVzZXJzO1xuXHRcdFx0Y29uc29sZS5sb2coJ3R5dHknKTtcblx0XHR9KTtcblxuXHRcdC8qKlxuXHRcdCogQG5nZG9jIG1ldGhvZFxuXHRcdCogQG5hbWUgZ2V0VXNlcnNcblx0XHQqIEBtZXRob2RPZiBhcHAuY29udHJvbGxlcjpyeGpzMUNvbnRyb2xsZXJcblx0XHQqIEBkZXNjcmlwdGlvblxuXHRcdCogQ2FsbCBnZXRVc2VycyBtZXRob2Qgc28gdGhlIG9ic2VydmFibGUgdGVsbHMgZXZlcnlvbmUgdG8gdXBkYXRlIHRoZSB1c2Vyc1xuXHRcdCovXG5cdFx0cnhqc0ZhY3RvcnkuZ2V0VXNlcnMoKTtcblxuXHRcdC8qKlxuXHRcdCogQG5nZG9jIG1ldGhvZFxuXHRcdCogQG5hbWUgYWRkVXNlclxuXHRcdCogQG1ldGhvZE9mIGFwcC5jb250cm9sbGVyOnJ4anMxQ29udHJvbGxlclxuXHRcdCogQGRlc2NyaXB0aW9uXG5cdFx0KiBBZGQgYSB1c2VyXG5cdFx0Ki9cblx0XHQkc2NvcGUuYWRkVXNlciA9ICgpID0+IHtcblx0XHRcdHJ4anNGYWN0b3J5LmFkZFVzZXIoKTtcblx0XHR9O1xuXHR9KTtcbn0pKCk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
