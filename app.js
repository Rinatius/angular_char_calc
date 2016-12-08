(function (){
    'use strict';
    
    angular.module('myFirstApp', [])
    
    .controller('MyFirstController', function ($scope) {
        $scope.name = "";
        $scope.numericValue = 0;
        
        $scope.displayNumericValue = function () {
            $scope.numericValue = calculateNumericValue($scope.name);
        };
        
        function calculateNumericValue (string) {
            var numericValue = 0;
            for (var i = 0; i < string.length; i++) {
                numericValue += string.charCodeAt(i);
            };
            $scope.debugNumericValue = "calculateNumericValue";
            return numericValue;
        };
    });
    
})();