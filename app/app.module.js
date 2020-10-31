import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './app.routes';
import tenors from './tenors';

angular
    .module('app', [
        uiRouter,
        tenors,
    ])
    .config(routes);
