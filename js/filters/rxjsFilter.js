'use strict';

(function () {
	app.filter('rxjsFilter', function () {
		return function (input) {
			return input.map(function (i) {
				i.name = i.name.toUpperCase();
				return i;
			});
		};
	});
})();