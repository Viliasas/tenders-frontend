import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routes from './tenders.routes.js';
import tendersList from './tenders-list/tenders-list.component';
import tenderDetails from './tender-details/tender-details.component'
import tendersService from './tenders.service';

export default angular
    .module('app.tenders', [uiRouter])
    .config(routes)
    .component('tendersList', tendersList)
    .component('tenderDetails', tenderDetails)
    .service('tendersService', tendersService)
    .name;
