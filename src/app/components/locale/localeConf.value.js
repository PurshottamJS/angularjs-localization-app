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
