(function(app) {

  'use strict';

  app.factory('NotificationService', ['$translate', '$ionicPopup', function($translate, $ionicPopup) {

    var self;
    var NotificationService = function() {
      self = this;
    };

    NotificationService.prototype.showAlert = function(options) {
      if (!_.isObject(options)) {
        options = {
          template: options
        }
      }

      return $translate ([options.title, options.subTitle, options.template]).then(function(translations) {
        options.title = translations[options.title];
        options.subTitle = translations[options.subTitle];
        options.template = translations[options.template];
        return $ionicPopup.alert(options);
      });
    };

    NotificationService.prototype.showConfirm = function(options) {
      return $translate ([options.title, options.subTitle, options.template, options.okText, options.cancelText]).then(function(translations) {
        options.title = translations[options.title];
        options.subTitle = translations[options.subTitle];
        options.template = translations[options.template];
        options.okText = translations[options.okText];
        options.cancelText = translations[options.cancelText];
        return $ionicPopup.confirm(options);
      });
    };

    return new NotificationService ();

  }]);

}) (app);
