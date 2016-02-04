(function () {
	app.filter('testFilter', function() {
		return function(input, nameToFilter) {
			var output = [];

			for (var i=0; i<input.length; i++) {
				// display only if name input contains the search
				if (input[i].name.indexOf(nameToFilter) > -1) {
					output.push(input[i]);
				}
			}

			return output;
		}
	});
})();
