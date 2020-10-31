routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('tenders', {
            url: '/',
            template: require('./tenders.html'),
            resolve: {
                tenders: ['tendersService', (tendersService) => {
                    return tendersService.getTenders();
                }],
            }
        });
}
