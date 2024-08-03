upload.config(function($routeProvider, $locationProvider) {
    $routeProvider

        .when('/home', { templateUrl: 'content-admin-panel/page/layout-center.html', controller: 'Load_Data_Controller' })
        .when('/', { templateUrl: 'content-admin-panel/page/layout-center.html', controller: 'Load_Data_Controller' })
        .when('/posts-demo', { templateUrl: 'content-admin-panel/page/content-posts.html', controller: 'Load_Data_Controller' })



    .otherwise({ redirectTo: '/' })

    $locationProvider.html5Mode(true);


});