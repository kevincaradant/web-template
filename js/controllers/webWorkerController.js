'use strict';

(function () {
	/**
  * @ngdoc controller
  * @name app.controller:webWorkerController
  * @description
  * Controller to show how to use ngWorker
  */
	app.controller('webWorkerController', ["$scope", "$interval", "$timeout", "Webworker", function ($scope, $interval, $timeout, Webworker) {
		$scope.fibonacciIndex = 43;

		// function that will become a worker
		function fibonacci(n) {
			return n < 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
		}

		// with web-workers
		$scope.secFibWithWW = -1;
		$scope.rsltFibWithWW = -1;

		/**
  * @ngdoc method
  * @name fibWithWW
  * @methodOf app.controller:webWorkerController
  * @description
  * Launch fibonacci using web-workers so the UI does not freeze while calculating.
  */
		$scope.fibWithWW = function () {
			$scope.secFibWithWW = 0;
			$scope.rsltFibWithWW = -1;
			var fibWorker = Webworker.create(fibonacci);

			var interval = $interval(function () {
				$scope.secFibWithWW++;
			}, 1000);

			fibWorker.run($scope.fibonacciIndex).then(function (result) {
				$interval.cancel(interval);
				$scope.rsltFibWithWW = result;
			});
		};

		// -------------------------------------------------

		// without web-workers
		$scope.secFibWithoutWW = -1;
		$scope.rsltFibWithoutWW = -1;

		/**
  * @ngdoc method
  * @name fibWithoutWW
  * @methodOf app.controller:webWorkerController
  * @description
  * Launch fibonacci without using web-workers to demonstrate the UI freeze.
  */
		$scope.fibWithoutWW = function () {
			$scope.secFibWithoutWW = 0;
			$scope.rsltFibWithoutWW = -1;

			var secFibWithoutWW = Date.now();

			$timeout(function () {
				$scope.rsltFibWithoutWW = fibonacci($scope.fibonacciIndex);

				$scope.secFibWithoutWW = Math.ceil((Date.now() - secFibWithoutWW) / 1000);
			}, 100);
		};
	}]);
})();