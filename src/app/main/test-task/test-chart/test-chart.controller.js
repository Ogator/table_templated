/**
 * Created by neox-ltd on 14/04/2016.
 */
(function ()
{
  'use strict';

  angular
    .module('app.test-task.chart')
    .controller('TestChartController', TestChartController);

  /** @ngInject */
  function TestChartController(ChartData)
  {
    var vm = this;

    // Data
    vm.helloChart = ChartData.data.helloChart;

    // Methods

    //////////
  }
})();
