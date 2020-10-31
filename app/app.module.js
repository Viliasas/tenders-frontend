import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './app.routes';

angular.module('app', [uiRouter])
    .config(routes);
