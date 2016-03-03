'use strict';

(function () {
	/**
  * @ngdoc controller
  * @name app.controller:generalController
  * @description
  * A It contains by default the active tab view and the language selected
  */
	app.controller('generalController', function ($scope, $location, $state, $translate, langFactory) {
		$scope.$on('$stateChangeStart', function (event, toState, toParams) {
			$translate.use(toParams.lang);

			langFactory.setLang(toParams.lang);
		});

		/**
  * @ngdoc method
  * @name isActive
  * @methodOf app.controller:generalController
  * @description
  * Return the location url of the open tab .
  * @returns {Object} return the location path of the active tab
  */
		$scope.isActive = function (viewLocation) {
			return $location.path().indexOf(viewLocation) > -1;
		};

		/**
  * @ngdoc method
  * @name changeLanguageTo
  * @methodOf app.controller:generalController
  * @description
  * Set the language in function of the lang
  * @param {string} lang language
  */
		$scope.changeLanguageTo = function (lang) {
			$translate.use(lang);

			langFactory.setLang(lang);

			$state.go($state.current.name);

			$scope.navCollapsed = !$scope.navCollapsed;
		};

		/**
  * @ngdoc method
  * @name getLanguage
  * @methodOf app.controller:generalController
  * @description
  * Get the language
  * @returns {string} lang
  */
		$scope.getLanguage = function () {
			return $translate.use();
		};
	});
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYWxDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBQyxZQUFNOzs7Ozs7O0FBT04sS0FBSSxVQUFKLENBQWUsbUJBQWYsRUFBb0MsVUFBQyxNQUFELEVBQVMsU0FBVCxFQUFvQixNQUFwQixFQUE0QixVQUE1QixFQUF3QyxXQUF4QyxFQUF3RDtBQUMzRixTQUFPLEdBQVAsQ0FBVyxtQkFBWCxFQUFnQyxVQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLFFBQWpCLEVBQThCO0FBQzdELGNBQVcsR0FBWCxDQUFlLFNBQVMsSUFBVCxDQUFmLENBRDZEOztBQUc3RCxlQUFZLE9BQVosQ0FBb0IsU0FBUyxJQUFULENBQXBCLENBSDZEO0dBQTlCLENBQWhDOzs7Ozs7Ozs7O0FBRDJGLFFBZTNGLENBQU8sUUFBUCxHQUFrQixVQUFDLFlBQUQsRUFBa0I7QUFDbkMsVUFBTyxVQUFVLElBQVYsR0FBaUIsT0FBakIsQ0FBeUIsWUFBekIsSUFBeUMsQ0FBQyxDQUFELENBRGI7R0FBbEI7Ozs7Ozs7Ozs7QUFmeUUsUUEyQjNGLENBQU8sZ0JBQVAsR0FBMEIsVUFBQyxJQUFELEVBQVU7QUFDbkMsY0FBVyxHQUFYLENBQWUsSUFBZixFQURtQzs7QUFHbkMsZUFBWSxPQUFaLENBQW9CLElBQXBCLEVBSG1DOztBQUtuQyxVQUFPLEVBQVAsQ0FBVSxPQUFPLE9BQVAsQ0FBZSxJQUFmLENBQVYsQ0FMbUM7O0FBT25DLFVBQU8sWUFBUCxHQUFzQixDQUFDLE9BQU8sWUFBUCxDQVBZO0dBQVY7Ozs7Ozs7Ozs7QUEzQmlFLFFBNkMzRixDQUFPLFdBQVAsR0FBcUIsWUFBTTtBQUMxQixVQUFPLFdBQVcsR0FBWCxFQUFQLENBRDBCO0dBQU4sQ0E3Q3NFO0VBQXhELENBQXBDLENBUE07Q0FBTixDQUFEIiwiZmlsZSI6ImdlbmVyYWxDb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKCgpID0+IHtcblx0LyoqXG5cdCAqIEBuZ2RvYyBjb250cm9sbGVyXG5cdCAqIEBuYW1lIGFwcC5jb250cm9sbGVyOmdlbmVyYWxDb250cm9sbGVyXG5cdCAqIEBkZXNjcmlwdGlvblxuXHQgKiBBIEl0IGNvbnRhaW5zIGJ5IGRlZmF1bHQgdGhlIGFjdGl2ZSB0YWIgdmlldyBhbmQgdGhlIGxhbmd1YWdlIHNlbGVjdGVkXG5cdCAqL1xuXHRhcHAuY29udHJvbGxlcignZ2VuZXJhbENvbnRyb2xsZXInLCAoJHNjb3BlLCAkbG9jYXRpb24sICRzdGF0ZSwgJHRyYW5zbGF0ZSwgbGFuZ0ZhY3RvcnkpID0+IHtcblx0XHQkc2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIChldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMpID0+IHtcblx0XHRcdCR0cmFuc2xhdGUudXNlKHRvUGFyYW1zLmxhbmcpO1xuXG5cdFx0XHRsYW5nRmFjdG9yeS5zZXRMYW5nKHRvUGFyYW1zLmxhbmcpO1xuXHRcdH0pO1xuXHRcdFxuXHRcdC8qKlxuXHRcdCogQG5nZG9jIG1ldGhvZFxuXHRcdCogQG5hbWUgaXNBY3RpdmVcblx0XHQqIEBtZXRob2RPZiBhcHAuY29udHJvbGxlcjpnZW5lcmFsQ29udHJvbGxlclxuXHRcdCogQGRlc2NyaXB0aW9uXG5cdFx0KiBSZXR1cm4gdGhlIGxvY2F0aW9uIHVybCBvZiB0aGUgb3BlbiB0YWIgLlxuXHRcdCogQHJldHVybnMge09iamVjdH0gcmV0dXJuIHRoZSBsb2NhdGlvbiBwYXRoIG9mIHRoZSBhY3RpdmUgdGFiXG5cdFx0Ki9cblx0XHQkc2NvcGUuaXNBY3RpdmUgPSAodmlld0xvY2F0aW9uKSA9PiB7XG5cdFx0XHRyZXR1cm4gJGxvY2F0aW9uLnBhdGgoKS5pbmRleE9mKHZpZXdMb2NhdGlvbikgPiAtMTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0KiBAbmdkb2MgbWV0aG9kXG5cdFx0KiBAbmFtZSBjaGFuZ2VMYW5ndWFnZVRvXG5cdFx0KiBAbWV0aG9kT2YgYXBwLmNvbnRyb2xsZXI6Z2VuZXJhbENvbnRyb2xsZXJcblx0XHQqIEBkZXNjcmlwdGlvblxuXHRcdCogU2V0IHRoZSBsYW5ndWFnZSBpbiBmdW5jdGlvbiBvZiB0aGUgbGFuZ1xuXHRcdCogQHBhcmFtIHtzdHJpbmd9IGxhbmcgbGFuZ3VhZ2Vcblx0XHQqL1xuXHRcdCRzY29wZS5jaGFuZ2VMYW5ndWFnZVRvID0gKGxhbmcpID0+IHtcblx0XHRcdCR0cmFuc2xhdGUudXNlKGxhbmcpO1xuXG5cdFx0XHRsYW5nRmFjdG9yeS5zZXRMYW5nKGxhbmcpO1xuXG5cdFx0XHQkc3RhdGUuZ28oJHN0YXRlLmN1cnJlbnQubmFtZSk7XG5cblx0XHRcdCRzY29wZS5uYXZDb2xsYXBzZWQgPSAhJHNjb3BlLm5hdkNvbGxhcHNlZDtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0KiBAbmdkb2MgbWV0aG9kXG5cdFx0KiBAbmFtZSBnZXRMYW5ndWFnZVxuXHRcdCogQG1ldGhvZE9mIGFwcC5jb250cm9sbGVyOmdlbmVyYWxDb250cm9sbGVyXG5cdFx0KiBAZGVzY3JpcHRpb25cblx0XHQqIEdldCB0aGUgbGFuZ3VhZ2Vcblx0XHQqIEByZXR1cm5zIHtzdHJpbmd9IGxhbmdcblx0XHQqL1xuXHRcdCRzY29wZS5nZXRMYW5ndWFnZSA9ICgpID0+IHtcblx0XHRcdHJldHVybiAkdHJhbnNsYXRlLnVzZSgpO1xuXHRcdH07XG5cdH0pO1xufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
