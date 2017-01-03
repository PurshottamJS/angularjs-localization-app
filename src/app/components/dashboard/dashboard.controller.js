;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);
    DashboardController.$inject = ['locale'];

    function DashboardController(locale) {
        //Languages
        var vm = this;
        vm.supportedLanguages = [
            { label: 'English', value: 'en-US' },
            { label: 'France', value: 'fr-FR' }
        ];
        vm.language = _.first(vm.supportedLanguages);
        vm.updateLocale = function(lang) {
            locale.setLocale(lang.value);
        };
    }
}(window, angular, undefined));
