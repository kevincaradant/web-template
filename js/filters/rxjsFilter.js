'use strict';

(function () {
	app.filter('rxjsFilter', function () {
		return function (input) {
			return input.map(function (i) {
				i.name = i.name.toUpperCase();return i;
			});
		};
	});
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ4anNGaWx0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLFlBQU07QUFDTixLQUFJLE1BQUosQ0FBVyxZQUFYLEVBQXlCLFlBQU07QUFDOUIsU0FBTyxVQUFDLEtBQUQsRUFBVztBQUNqQixVQUFPLE1BQU0sR0FBTixDQUFVLGFBQUs7QUFBRSxNQUFFLElBQUYsR0FBUyxFQUFFLElBQUYsQ0FBTyxXQUFQLEVBQVQsQ0FBRixPQUF3QyxDQUFQLENBQWpDO0lBQUwsQ0FBakIsQ0FEaUI7R0FBWCxDQUR1QjtFQUFOLENBQXpCLENBRE07Q0FBTixDQUFEIiwiZmlsZSI6InJ4anNGaWx0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoKCkgPT4ge1xuXHRhcHAuZmlsdGVyKCdyeGpzRmlsdGVyJywgKCkgPT4ge1xuXHRcdHJldHVybiAoaW5wdXQpID0+IHtcblx0XHRcdHJldHVybiBpbnB1dC5tYXAoaSA9PiB7IGkubmFtZSA9IGkubmFtZS50b1VwcGVyQ2FzZSgpOyByZXR1cm4gaTsgfSk7XG5cdFx0fTtcblx0fSk7XG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
