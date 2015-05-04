angular.module('tip-calc', ['ngRoute'])

.value('earnings', [])

.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl : '/index.html',
    })
    .when('/meal', {
        templateUrl : './meal.html',
        controller : 'mealCtrl',
    })
    .when('/earnings', {
        templateUrl : './earnings.html',
        controller : 'earningsCtrl',
    })
    .otherwise({ redirectTo : '/index.html' });
})

.controller('mealCtrl', function($scope, earnings) {
    function init() {
        $scope.meal = {};
        $scope.earnings = {};
        $scope.total = {};
        $scope.meal.tip = 0;
        $scope.meal.tax = 0;
        $scope.meal.meal_total = 0;
        $scope.meal.total = 0;
    }

    init();

    $scope.submit = function() {
        if ($scope.mealForm.$valid) {
            console.log('submitting');
            compute();
            addEarnings();
            $scope.meal.tip_percent = "";
            $scope.meal.meal_price = "";
            $scope.meal.tax_rate = "";
        }
    };

    $scope.reset = function() {
        $scope.meal = {};
    };

    $scope.clear = function() {
        console.log('clear');
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
        // $scope.earnings.tips += $scope.meal.tip;
        // $scope.earnings.meal_count++;
        // $scope.earnings.average = $scope.earnings.tips / $scope.earnings.meal_count;
    }

    function addEarnings() {
        earnings.push({'tip': $scope.meal.tip, 'meal_total': $scope.meal.meal_total, 'tax': $scope.meal.tax});
    }

})
.controller('earningsCtrl', function($scope, earnings) {

    function init() {
        $scope.tip_total = 0;
        $scope.meal_count = 0;
        $scope.average = 0;
    }

    init(); 
    
    console.log(earnings);
    for (var meal in earnings) {
        console.log('meal tip: ' + earnings[meal].tip, 'meal_total: ' + earnings[meal].meal_total);
        $scope.tip_total += earnings[meal].tip;
        console.log($scope.tip_total);
        $scope.meal_count++;
        console.log($scope.meal_count);
        $scope.average = $scope.tip_total / $scope.meal_count;
    }

});