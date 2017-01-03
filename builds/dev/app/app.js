;
(function(window, angular, undefined) {
    'use strict';
    angular.module('app', ['ui.router', 'app.localize', 'app.dashboard', 'app.templates'])
}(window, angular, undefined));




;
(function(window, angular, undefined) {
    'use strict';
    angular.module('app.localize', ['ngLocalize', 'ngLocalize.Config', 'ngLocalize.Events', 'ngLocalize.InstalledLanguages'])
}(window, angular, undefined));


;
(function(window, angular, undefined) {
    'use strict';
    angular.module('app.dashboard', [])
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular.module('app.localize', ['ngLocalize', 'ngLocalize.Config', 'ngLocalize.Events', 'ngLocalize.InstalledLanguages'])
}(window, angular, undefined));


;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app')
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('default', {
                    url: '/',
                    templateUrl: 'components/dashboard/dashboard.template.html',
                    controller: 'DashboardController as dashboard'
                })
        });
}(window, angular, undefined));

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

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.dashboard')
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('dashboard', {
                    url: '/dashboard',
                    templateUrl: 'app/dashboard/dashboard.template.html',
                    controller: 'DashboardController as dashboard'
                })
        });
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.localize')
        .value('localeConf', {
            basePath: 'assets/languages',
            defaultLocale: 'en-US',
            sharedDictionary: 'common',
            fileExtension: '.lang.json',
            persistSelection: true,
            cookieName: 'COOKIE_LOCALE_LANG',
            observableAttrs: new RegExp('^data-(?!ng-|i18n)'),
            delimiter: '::',
            validTokens: new RegExp('^[\\w\\.-]+\\.[\\w\\s\\.-]+\\w(:.*)?$')
        })
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.localize')
        .value('localeFallbacks', {
            'en': 'en-US',
            'fr': 'fr-FR'
        })
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.localize')
        .value('localeSupported', [
            'en-US',
            'fr-FR',
        ])
}(window, angular, undefined));
