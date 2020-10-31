routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('tenors', {
            url: '/',
            template: require('./tenors.html'),
            resolve: {
                tenors: ['tenorsService', (tenorsService) => {
                    return tenorsService.getTenors();
                }],
            }
        });
}
