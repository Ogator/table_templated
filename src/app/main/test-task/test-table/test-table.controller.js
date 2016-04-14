/**
 * Created by neox-ltd on 14/04/2016.
 */
(function ()
{
  'use strict';

  angular
    .module('app.test-task.table')
    .config(function($mdDateLocaleProvider) {
      $mdDateLocaleProvider.months = ['Январь', 'Февраль', 'Март',  'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сеньтябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
      $mdDateLocaleProvider.shortMonths = ['Янв.', 'Фев.', 'Март',  'Апр.', 'Май', 'Июнь', 'Июль', 'Авг.', 'Сент.', 'Окт.', 'Но.', 'Дек.'];
      $mdDateLocaleProvider.days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Субота', 'Воскресенье'];
      $mdDateLocaleProvider.shortDays = ['Пн.', 'Вт.', 'Ср.', 'Чт.', 'Пт.', 'Сб.', 'Вс.'];
      $mdDateLocaleProvider.firstDayOfWeek = 1;
    })
    .controller('TestTableController', TestTableController);

  /** @ngInject */
  function TestTableController(PeopleData, $scope, $log)
  {
    var vm = this;
    vm.people = PeopleData.data;
    vm.filtered_people = [];
    vm.filterResetDisabled = true;
    vm.filters = {
      firstNameFilter: null,
      lastNameFilter: null,
      emailFilter: null,
      genderFilter: null,
      registeredFilter: null
    };

    vm.dtOptions = {
      dom: '<"top">rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
      pagingType: 'simple',
      autoWidth: false,
      responsive: true,
      "language": {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Russian.json"
      }
    };


    // Methods
    $scope.addFilter = function() {
      $log.debug(JSON.stringify(vm.filters));
      vm.filterResetDisabled = false;
      vm.filtered_people = PeopleData.data;
      if(vm.filters.firstNameFilter != null) vm.filtered_people = vm.filtered_people.filter(filterFirstName, vm.filters.firstNameFilter);
      if(vm.filters.lastNameFilter != null) vm.filtered_people = vm.filtered_people.filter(filterLastName, vm.filters.lastNameFilter);
      if(vm.filters.emailFilter != null) vm.filtered_people = vm.filtered_people.filter(filterEmail, vm.filters.emailFilter);
      if(vm.filters.genderFilter != null) vm.filtered_people = vm.filtered_people.filter(filterGender, vm.filters.genderFilter);
      if(vm.filters.registeredFilter != null) vm.filtered_people = vm.filtered_people.filter(filterDate, vm.filters.registeredFilter);
      vm.people = vm.filtered_people;
      vm.filtered_people = [];
    };
    $scope.resetFilter = function() {
      vm.filterResetDisabled = true;
      vm.people = PeopleData.data;
      vm.filters = {};
    };

    var filterFirstName = function (value) {
      return value.firstName.indexOf(this) > -1;
    };

    var filterLastName = function (value) {
      return value.lastName.indexOf(this) > -1;
    };

    var filterEmail = function (value) {
      return value.email.indexOf(this) > -1;
    };

    var filterGender = function (value) {
      return value.gender.localeCompare(this) == 0;
    };

    var filterDate = function(value) {
      return new Date(value.registered) > new Date(this);
    };
    //////////
  }
})();
