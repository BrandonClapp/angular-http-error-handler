(function (angular) {
    'use strict'
    angular.module('HttpErrorHandler', [])
        .provider('HttpError', ['$httpProvider', function ($httpProvider) {

            var handler = function(rejection) {
                // generic/default error handler.
                alert(rejection.data);
            }

            this.useHandler = function (customHandler) {
                if(customHandler) {
                    handler = customHandler;
                }

                $httpProvider.interceptors.push(function ($q) {
                    return {
                        'responseError': function (rejection) {
                            handler(rejection);
                            return $q.reject(rejection);
                        }
                    }
                });
            }

            this.$get = function () {
                return {};
            }

            return this;
        }]);
})(angular);
