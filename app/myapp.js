angular.module('tip-calc', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl : './index.html',
            controller : 'myCtrl'
        })
        .when('/meal', {
            templateUrl : './meal.html',
            controller : 'mealCtrl',
        })
        .when('/earnings', {
            templateUrl : './earnings.html',
            controller : 'earningsCtrl',
        });
    })
    .controller('myCtrl', function($scope) {
        function init() {
            $scope.meal = {};
            $scope.earnings = {};
            $scope.total = {};
            $scope.meal.tip = 0;
            $scope.meal.tax = 0;
            $scope.meal.meal_total = 0;
            $scope.meal.total = 0;
            $scope.earnings.tips = 0;
            $scope.earnings.meal_count = 0;
            $scope.earnings.average = 0;
        }

        init();

        $scope.submit = function() {
            if ($scope.mealForm.$valid) {
               compute();
               $scope.meal.tip_percent = "";
               $scope.meal.meal_price = "";
               $scope.meal.tax_rate = "";
            }
        };

        $scope.reset = function() {
            $scope.meal = {};
        };

        $scope.clear = function() {
            init();
        };

        function compute() {
            console.log($scope.meal.meal_price);
            $scope.meal.tip = $scope.meal.tip_percent / 100 * $scope.meal.meal_price;
            $scope.meal.tax = $scope.meal.tax_rate / 100 * $scope.meal.meal_price;
            $scope.meal.meal_total = $scope.meal.meal_price + $scope.meal.tax;
            $scope.meal.total = $scope.meal.meal_total + $scope.meal.tip;
            console.log($scope.meal.total);

            // totals
            $scope.earnings.tips += $scope.meal.tip;
            $scope.earnings.meal_count++;
            $scope.earnings.average = $scope.earnings.tips / $scope.earnings.meal_count;
        }
    })
    .controller('mealCtrl', function($scope) {

    })
    .controller('earningsCtrl', function($scope) {

    });