$(document).ready(function () {
    console.log("dom is ready!");
    
});

angular.module('tip-calc', [])
    .controller('myCtrl', function($scope) {

        $scope.submit = function() {
            if ($scope.mealForm.$valid) {
                console.log($scope.meal.meal_price);
                $scope.meal.tip = $scope.meal.tip_percent / 100 * $scope.meal.meal_price;
                $scope.meal.tax = $scope.meal.tax_rate / 100 * $scope.meal.meal_price;
                $scope.meal.meal_total = $scope.meal.meal_price + $scope.meal.tax;
                $scope.meal.total = $scope.meal.meal_total + $scope.meal.tip;
                console.log($scope.meal.total);
            }
        };

        $scope.reset = function() {
            $scope.meal_price = null;
            $scope.tax_rate = null;
            $scope.tip = null;
           
        };
    });