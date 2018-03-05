angular.module('galebWebui')
.factory("Manager", function ($resource, config) {
  return $resource(config.apiUrl + "/:path/:id", {path: '@path', id: '@id'}, {
    update: {
      method: 'PATCH'
    }
  });
})
.factory("ManagerSearch", function ($resource, config) {
  return $resource(config.apiUrl + "/:path/search/findByNameContaining?name=:search&page=0&sort=name", {path: '@path', search: '@search'});
})
.factory("ManagerSearchWithSize", function ($resource, config) {
  return $resource(config.apiUrl + "/:path/search/findFirst10ByNameContaining?name=:search&page=0&size=10&sort=name", {path: '@path', search: '@search'});
})
.factory("ManagerDashboard", function ($resource, config) {
  return $resource(config.apiUrl + "/:path/?page=0&size=1", {path: '@path'});
})
// New API
.factory("ManagerSearchAccount", function($resource, config){
  return $resource(config.apiUrl + "/:path/search/findByUsername?username=:search&page=0&sort=username", {path: '@path', search: '@search'});
})
.factory("ManagerSearchAllAccount", function($resource, config){
  return $resource(config.apiUrl + "/:path/", {path: '@path', search: '@search'});
})
