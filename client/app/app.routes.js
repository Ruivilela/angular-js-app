routes.$inject = [
  '$urlRouterProvider',
  '$locationProvider'
];

export default function routes($urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
  // to remove #! in front of the url
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}
