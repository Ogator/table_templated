/**
 * Created by neox-ltd on 14/04/2016.
 */
(function ()
{
  'use strict';

  angular
    .module('app.test-task', [
      'app.test-task.chart',
      'app.test-task.table'
    ])
    .config(config);

  /** @ngInject */
  function config(msNavigationServiceProvider, $translatePartialLoaderProvider)
  {
    // Translation
    $translatePartialLoaderProvider.addPart('app/main/test-task');

    // Navigation
    msNavigationServiceProvider.saveItem('test-task', {
      title : 'TEST TASK',
      group : true,
      translate : 'TEST_TASK.NAV',
      weight: 1
    });
  }
})();
