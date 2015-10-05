



var commonModule = angular.module('common', ['ngRoute']);

commonModule.factory('vmHelper', function ($http, $q) {
    //console.log("test=" + TestApp.vmHelper);
    return TestApp.vmHelper($http, $q);
});

var appMainModule = angular.module('appMain', ['common']);

appMainModule.controller('ControllerNumber1', function ($scope, vmHelper) {

    var thisApp = this;

    //vmHelper.modelIsValid = true;
    //vmHelper.modelErrors = [];

    thisApp.messageText = 'the is a message from MainApps ControllerNumber1';

    thisApp.okClick = function () {
        alert('You clicked a button bound to ControllerNumber1');
    }
});

var subModule = angular.module('subApplication', ['common'])
    .config(function ($routeProvider, $locationProvider) {

        $routeProvider.when(TestApp.rootPath + 'home/index/subApp',
        { templateUrl: TestApp.rootPath + 'Templates/Template1.html', controller: 'ControllerNumber3' });
        $routeProvider.otherwise({ redirectTo: TestApp.rootPath + 'home/index' });

        $locationProvider.html5Mode({
            enabled: true
        });
    });

subModule.controller("ControllerNumber2", function ($scope, vmHelper) {

    console.log("controller2");

    $scope.vmHelper = vmHelper;
    //$scope.vmHelper.modelIsValid = false;


    $scope.messageText = "this is a message from subApplication ControllerNumber2";

    $scope.nextClick = function () {
        alert('You clicked a button bound to ControllerNumber2');
        window.location.href = 'http://localhost:58563/home/index/subApp';
    };
});

subModule.controller("ControllerNumber3", function ($scope, vmHelper) {

    console.log("controller3");

    //$scope.vmHelper.modelIsValid = false;

    console.log("3.1 vmHelper.modelIsValid=[" + $scope.vmHelper.modelIsValid + ']');

    vmHelper.modelIsValid = true;
    vmHelper.modelErrors = [];

    console.log("3.2 vmHelper.modelIsValid=[" + vmHelper.modelIsValid + ']');

    $scope.messageText = "this is a message from subApplication ControllerNumber3";

    $scope.nextClick = function () {
        //alert('You clicked a button bound to ControllerNumber3');
        window.location.href = 'http://localhost:58563';
    };

    $scope.makeErrors = function () {
        $scope.vmHelper.modelIsValid = false;
        $scope.vmHelper.modelErrors = ['one', 'two', 'three'];
    }

    $scope.clearErrors = function () {
        $scope.vmHelper.modelIsValid = true;
        $scope.vmHelper.modelErrors = [];
    }

});



