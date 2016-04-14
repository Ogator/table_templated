/**
 * Created by neox-ltd on 14/04/2016.
 */
(function ()
{
  'use strict';

  angular
    .module('app.test-task.table', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
  {
    // State
    $stateProvider.state('app.test-task_table', {
      url      : '/test-task/table',
      views    : {
        'content@app': {
          templateUrl: 'app/main/test-task/test-table/test-table.html',
          controller : 'TestTableController as vm'
        }
      },
      resolve: {
        PeopleData: function (msApi)
        {
          return msApi.resolve('app.test-task_table@get');
        }
      }
    });

    // Translation
    $translatePartialLoaderProvider.addPart('app/main/test-task/test-table');

    // Api
    msApiProvider.register('app.test-task_table', ['app/data/test-task/table.json']);

    // Navigation
    msNavigationServiceProvider.saveItem('test-task.table', {
      title : 'TABLE',
      icon  : 'icon-table-large',
      state : 'app.test-task_table',
      translate: 'TABLE.NAV',
      weight: 2
    });
  }

})();
