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
    
    $stateProvider
        .state('tender', {
            url: '/tenders/{tenderId}',
            template: require('./tender-details/tender-details.html'),
            resolve: {
                tender: ['tendersService', '$transition$', (tendersService, $transition$) => {
                    console.log($transition$.params());
                    return tendersService.getTender($transition$.params().tenderId);
                }],
            }
        });
}
