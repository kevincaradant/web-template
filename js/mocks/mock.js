"use strict";

(function () {
	app.run(function ($httpBackend) {
		// $httpBackend.whenGET('URL_CUSTOM_TO_MOCK').respond({status:'success', data:'MY_JSON'});

		// allow to get languages on real $http
		$httpBackend.whenGET(/.json/).passThrough();

		// allow to get views on to real $http
		$httpBackend.whenGET(/\/views\//).passThrough();
	});
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLFlBQU07QUFDTixLQUFJLEdBQUosQ0FBUSxVQUFDLFlBQUQsRUFBa0I7Ozs7QUFJekIsZUFBYSxPQUFiLENBQXFCLE9BQXJCLEVBQThCLFdBQTlCOzs7QUFKeUIsY0FPekIsQ0FBYSxPQUFiLENBQXFCLFdBQXJCLEVBQWtDLFdBQWxDLEdBUHlCO0VBQWxCLENBQVIsQ0FETTtDQUFOLENBQUQiLCJmaWxlIjoibW9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbIigoKSA9PiB7XG5cdGFwcC5ydW4oKCRodHRwQmFja2VuZCkgPT4ge1xuXHRcdC8vICRodHRwQmFja2VuZC53aGVuR0VUKCdVUkxfQ1VTVE9NX1RPX01PQ0snKS5yZXNwb25kKHtzdGF0dXM6J3N1Y2Nlc3MnLCBkYXRhOidNWV9KU09OJ30pO1xuXG5cdFx0Ly8gYWxsb3cgdG8gZ2V0IGxhbmd1YWdlcyBvbiByZWFsICRodHRwXG5cdFx0JGh0dHBCYWNrZW5kLndoZW5HRVQoLy5qc29uLykucGFzc1Rocm91Z2goKTtcblxuXHRcdC8vIGFsbG93IHRvIGdldCB2aWV3cyBvbiB0byByZWFsICRodHRwXG5cdFx0JGh0dHBCYWNrZW5kLndoZW5HRVQoL1xcL3ZpZXdzXFwvLykucGFzc1Rocm91Z2goKTtcblx0fSk7XG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
