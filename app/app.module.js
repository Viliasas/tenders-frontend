import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './app.routes';
import tenders from './tenders';

import '../styles/app.scss';

angular
    .module('app', [
        uiRouter,
        tenders,
    ])
    .config(routes);
