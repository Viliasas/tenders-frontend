import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routes from './tenors.routes.js';
import tenorsList from './tenors-list/tenors-list.component';
import tenorsService from './tenors.service';

export default angular
    .module('app.tenors', [uiRouter])
    .config(routes)
    .component('tenorsList', tenorsList)
    .service('tenorsService', tenorsService)
    .name;
