/**
 * Created by neox-ltd on 14/04/2016.
 */
(function ()
{
  'use strict';

  angular
    .module('app.test-task.chart', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
  {
    // State
    $stateProvider.state('app.test-task_chart', {
      url      : '/test-task/chart',
      views    : {
        'content@app': {
          templateUrl: 'app/main/test-task/test-chart/test-chart.html',
          controller : 'TestChartController as vm'
        }
      },
      resolve: {
        ChartData: function (msApi)
        {
          return msApi.resolve('app.test-task_chart@get');
        }
      }
    });

    // Translation
    $translatePartialLoaderProvider.addPart('app/main/test-task/test-chart');

    // Api
    msApiProvider.register('app.test-task_chart', ['app/data/test-task/chart.json']);

    // Navigation
    msNavigationServiceProvider.saveItem('test-task.chart', {
      title : 'CHART',
      icon  : 'icon-poll',
      state : 'app.test-task_chart',
      translate: 'CHART.NAV',
      weight: 2
    });
  }

})();
