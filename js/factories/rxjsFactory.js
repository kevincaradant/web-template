'use strict';

(function () {
	/**
 * @ngdoc service
 * @name app.rxjsFactory
 **/
	app.factory('rxjsFactory', function (rx) {
		/**
  * @ngdoc property
  * @name .#rxjsFactoryObserver
  * @private
  */
		var rxjsFactoryObserver = undefined;

		/**
  * @ngdoc method
  * @name rx.Observable.create
  * @methodOf app.rxjsFactory
  * @param {object} observer To will watch and share with the controllers which subscribe it
  * @private
  */
		var rxjsFactory$ = new rx.Observable.create(function (observer) {
			rxjsFactoryObserver = observer;
		}).share();

		/**
  * @ngdoc property
  * @name .#data
  * @private
  */
		var data = {
			users: [{ name: 'John Rambo', isVisible: true, age: 32 }, { name: 'Pablo Picasso', isVisible: true, age: 64 }]
		};

		return {
			/**
   * @ngdoc property
   * @name .#rxjsFactory
   */
			rxjsFactory$: rxjsFactory$,

			/**
   * @ngdoc method
   * @name rx.Observable.getUsers
   * @methodOf app.rxjsFactory
   * @description Emit the signal to update data array and the subscribe controller will be update and get the users
   */
			getUsers: function getUsers() {
				// tell everyone to update users
				rxjsFactoryObserver.next(data.users);
			},

			/**
   * @ngdoc method
   * @name rx.Observable.addUser
   * @methodOf app.rxjsFactory
   * @description Add a user and emit the signal at the controllers to be update
   */
			addUser: function addUser() {
				data.users.push({ name: 'John Kennedy', isVisible: true, age: 87 });
				rxjsFactoryObserver.next(data.users);
			}
		};
	});
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ4anNGYWN0b3J5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBQyxZQUFNOzs7OztBQUtOLEtBQUksT0FBSixDQUFZLGFBQVosRUFBMkIsVUFBQyxFQUFELEVBQVE7Ozs7OztBQU1sQyxNQUFJLCtCQUFKOzs7Ozs7Ozs7QUFOa0MsTUFlOUIsZUFBZSxJQUFJLEdBQUcsVUFBSCxDQUFjLE1BQWQsQ0FBcUIsVUFBQyxRQUFELEVBQWM7QUFDekQseUJBQXNCLFFBQXRCLENBRHlEO0dBQWQsQ0FBekIsQ0FHbEIsS0FIa0IsRUFBZjs7Ozs7OztBQWY4QixNQXlCOUIsT0FBTztBQUNWLFVBQU8sQ0FDTixFQUFDLE1BQU0sWUFBTixFQUFvQixXQUFXLElBQVgsRUFBaUIsS0FBSyxFQUFMLEVBRGhDLEVBRU4sRUFBQyxNQUFNLGVBQU4sRUFBdUIsV0FBVyxJQUFYLEVBQWlCLEtBQUssRUFBTCxFQUZuQyxDQUFQO0dBREcsQ0F6QjhCOztBQWdDbEMsU0FBTzs7Ozs7QUFLTixpQkFBYyxZQUFkOzs7Ozs7OztBQVFBLGFBQVUsb0JBQU07O0FBRWYsd0JBQW9CLElBQXBCLENBQXlCLEtBQUssS0FBTCxDQUF6QixDQUZlO0lBQU47Ozs7Ozs7O0FBV1YsWUFBUyxtQkFBTTtBQUNkLFNBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsRUFBQyxNQUFNLGNBQU4sRUFBc0IsV0FBVyxJQUFYLEVBQWlCLEtBQUssRUFBTCxFQUF4RCxFQURjO0FBRWQsd0JBQW9CLElBQXBCLENBQXlCLEtBQUssS0FBTCxDQUF6QixDQUZjO0lBQU47R0F4QlYsQ0FoQ2tDO0VBQVIsQ0FBM0IsQ0FMTTtDQUFOLENBQUQiLCJmaWxlIjoicnhqc0ZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoKCkgPT4ge1xuXHQvKipcblx0KiBAbmdkb2Mgc2VydmljZVxuXHQqIEBuYW1lIGFwcC5yeGpzRmFjdG9yeVxuXHQqKi9cblx0YXBwLmZhY3RvcnkoJ3J4anNGYWN0b3J5JywgKHJ4KSA9PiB7XG5cdFx0LyoqXG5cdFx0KiBAbmdkb2MgcHJvcGVydHlcblx0XHQqIEBuYW1lIC4jcnhqc0ZhY3RvcnlPYnNlcnZlclxuXHRcdCogQHByaXZhdGVcblx0XHQqL1xuXHRcdGxldCByeGpzRmFjdG9yeU9ic2VydmVyO1xuXG5cdFx0LyoqXG5cdFx0KiBAbmdkb2MgbWV0aG9kXG5cdFx0KiBAbmFtZSByeC5PYnNlcnZhYmxlLmNyZWF0ZVxuXHRcdCogQG1ldGhvZE9mIGFwcC5yeGpzRmFjdG9yeVxuXHRcdCogQHBhcmFtIHtvYmplY3R9IG9ic2VydmVyIFRvIHdpbGwgd2F0Y2ggYW5kIHNoYXJlIHdpdGggdGhlIGNvbnRyb2xsZXJzIHdoaWNoIHN1YnNjcmliZSBpdFxuXHRcdCogQHByaXZhdGVcblx0XHQqL1xuXHRcdGxldCByeGpzRmFjdG9yeSQgPSBuZXcgcnguT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG5cdFx0XHRyeGpzRmFjdG9yeU9ic2VydmVyID0gb2JzZXJ2ZXI7XG5cdFx0fSlcblx0XHQuc2hhcmUoKTtcblxuXHRcdC8qKlxuXHRcdCogQG5nZG9jIHByb3BlcnR5XG5cdFx0KiBAbmFtZSAuI2RhdGFcblx0XHQqIEBwcml2YXRlXG5cdFx0Ki9cblx0XHRsZXQgZGF0YSA9IHtcblx0XHRcdHVzZXJzOiBbXG5cdFx0XHRcdHtuYW1lOiAnSm9obiBSYW1ibycsIGlzVmlzaWJsZTogdHJ1ZSwgYWdlOiAzMn0sXG5cdFx0XHRcdHtuYW1lOiAnUGFibG8gUGljYXNzbycsIGlzVmlzaWJsZTogdHJ1ZSwgYWdlOiA2NH1cblx0XHRcdF1cblx0XHR9O1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdC8qKlxuXHRcdFx0KiBAbmdkb2MgcHJvcGVydHlcblx0XHRcdCogQG5hbWUgLiNyeGpzRmFjdG9yeVxuXHRcdFx0Ki9cblx0XHRcdHJ4anNGYWN0b3J5JDogcnhqc0ZhY3RvcnkkLFxuXG5cdFx0XHQvKipcblx0XHRcdCogQG5nZG9jIG1ldGhvZFxuXHRcdFx0KiBAbmFtZSByeC5PYnNlcnZhYmxlLmdldFVzZXJzXG5cdFx0XHQqIEBtZXRob2RPZiBhcHAucnhqc0ZhY3Rvcnlcblx0XHRcdCogQGRlc2NyaXB0aW9uIEVtaXQgdGhlIHNpZ25hbCB0byB1cGRhdGUgZGF0YSBhcnJheSBhbmQgdGhlIHN1YnNjcmliZSBjb250cm9sbGVyIHdpbGwgYmUgdXBkYXRlIGFuZCBnZXQgdGhlIHVzZXJzXG5cdFx0XHQqL1xuXHRcdFx0Z2V0VXNlcnM6ICgpID0+IHtcblx0XHRcdFx0Ly8gdGVsbCBldmVyeW9uZSB0byB1cGRhdGUgdXNlcnNcblx0XHRcdFx0cnhqc0ZhY3RvcnlPYnNlcnZlci5uZXh0KGRhdGEudXNlcnMpO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQqIEBuZ2RvYyBtZXRob2Rcblx0XHRcdCogQG5hbWUgcnguT2JzZXJ2YWJsZS5hZGRVc2VyXG5cdFx0XHQqIEBtZXRob2RPZiBhcHAucnhqc0ZhY3Rvcnlcblx0XHRcdCogQGRlc2NyaXB0aW9uIEFkZCBhIHVzZXIgYW5kIGVtaXQgdGhlIHNpZ25hbCBhdCB0aGUgY29udHJvbGxlcnMgdG8gYmUgdXBkYXRlXG5cdFx0XHQqL1xuXHRcdFx0YWRkVXNlcjogKCkgPT4ge1xuXHRcdFx0XHRkYXRhLnVzZXJzLnB1c2goe25hbWU6ICdKb2huIEtlbm5lZHknLCBpc1Zpc2libGU6IHRydWUsIGFnZTogODd9KTtcblx0XHRcdFx0cnhqc0ZhY3RvcnlPYnNlcnZlci5uZXh0KGRhdGEudXNlcnMpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH0pO1xufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
