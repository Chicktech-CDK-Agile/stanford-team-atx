/**
 * Created by hensleym on 1/13/16.
 */
angular.module('myApp.controllers')
    .controller('ThankYouCtrl', function($scope, navService){
        navService.setActiveTab("thankyou");
    });