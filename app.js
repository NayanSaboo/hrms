app = angular.module('myApp', []);

app.controller('myAppCtrl', function ($scope, $window, ) {  
    $scope.row = [{}];
    $scope.addRow = function () {
        $scope.row.push({});      
    }
    $scope.checkAll = function () {        
        if ($scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.row, function (x) {
            x.cgt_status = $scope.selectedAll;           
        });

    }
    $scope.remove = function () {
        var newDataList = [];
        $scope.selectedAll = false;
        angular.forEach($scope.row, function (checked) {
            if (!checked.checked) {
                newDataList.push(checked);
            }
        });
        // debugger
        $scope.row = newDataList;
    };

    $scope.isAll = false;
    $scope.selectAll = function () {
        if ($scope.isAll === false) {
            angular.forEach($scope.row, function (x) {

                x.checked = true;
            });
            $scope.isAll = true;
        } else {
            angular.forEach($scope.row, function (x) {
                x.checked = false;
            });
            $scope.isAll = false;
        }
    };




});