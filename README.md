# What is this?
This is an angular 1.x provider that provides catch-all error handling for ajax requests made through the build in `$http` service. Traditionally, handling errors for ajax requests involves providing a second function to the http promise through something like `$http.get('/mypath').then(successFunc, errorFunc)`, however, doing this is tedious and is required on every request.

Alternatively, this angular provider can be used at **config** time while the app is bootstrapping in order to catch all http errors and handle them in one centralized location.

# Usage

```js
var app = angular.module('MyApp', ['HttpErrorHandler']);

app.config(['HttpErrorProvider', function(HttpErrorProvider) {
  HttpErrorProvider.useHandler(function (rejection) {
    // ... something went pear shaped. log and notify accordingly.
  });
}]);
```

The function provided to `useHandler` can be used to handle your custom error logic and display a message to your user via a library of your choosing (i.e. toastr, SweetAlert, alertify, jQuery growl, etc).

# Installation

Todo: add to npm

# Dependencies

- Angular 1.x
