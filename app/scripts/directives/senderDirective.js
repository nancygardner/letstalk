/**
 * Created by Nathan on 11/24/2015.
 */
angular.module('letstalk').directive('senderMsg',function(){
    return {
        restrict: 'AE',
        templateUrl : 'views/chat/senderMsg.html',
        scope:{
            message:'@message',
            Id:'@id'
        },
        link: function (scope, iElement, iAttrs) {

        }
    }
});