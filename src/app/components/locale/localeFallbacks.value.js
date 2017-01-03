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
