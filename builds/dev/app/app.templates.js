(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/dashboard/dashboard.template.html',
    '<div class="container">\n' +
    '    <div class="page-header">\n' +
    '        <h1>Angular Localization Example</h1>\n' +
    '    </div>\n' +
    '    <div>\n' +
    '        <form>\n' +
    '            <div class="form-group">\n' +
    '                <label for="exampleInputEmail1" data-i18n="common.emailAddress"></label>\n' +
    '                <input type="email" class="form-control" id="exampleInputEmail1" data-i18n-attr="{placeholder: \'common.emailPlaceholder\'}"> </div>\n' +
    '            <div class="form-group">\n' +
    '                <label for="exampleInputPassword1" data-i18n="common.password"></label>\n' +
    '                <input type="password" class="form-control" data-i18n-attr="{placeholder: \'common.passwordPlaceholder\'}"> </div>\n' +
    '            <div class="form-group">\n' +
    '                <label for="exampleInputFile" data-i18n="common.fileInput"></label>\n' +
    '                <input type="file" id="exampleInputFile">\n' +
    '            </div>\n' +
    '            <div class="checkbox">\n' +
    '                <label>\n' +
    '                    <input type="checkbox"> {{ \'common.rememberMe\' | i18n }} </label>\n' +
    '            </div>\n' +
    '            <button type="submit" class="btn btn-primary" data-i18n="common.submit"></button>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<footer class="footer navbar-fixed-bottom">\n' +
    '    <div class="container">\n' +
    '        <p class="">\n' +
    '            <form class="form-horizontal">\n' +
    '                <div class="form-group">\n' +
    '                    <label for="inputEmail3" class="col-sm-5 control-label">Choose Default Language</label>\n' +
    '                    <div class="col-sm-6">\n' +
    '                        <select class="form-control pull-right" ng-model="dashboard.language" ng-options="lang.label for lang in dashboard.supportedLanguages" ng-change="dashboard.updateLocale(dashboard.language)"></select>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </form>\n' +
    '        </p>\n' +
    '    </div>\n' +
    '</footer>\n' +
    '');
}]);
})();
