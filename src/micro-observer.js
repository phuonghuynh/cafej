/**
 * Observer Pattern javascript implementation [Observer](http://en.wikipedia.org/wiki/Observer_pattern)
 *
 * @class MicroObserver
 * @license MIT
 * @author Phuong Huynh <phuonghqh@gmail.com>
 * @copyright Phuong Huynh & contributors 2014
 */
(function () {

  var MicroObserver = function () {};

  MicroObserver.prototype = {

    /**
     * Register event by notify
     *
     * @method on
     * @param notify {string} Name of the notification
     * @param handler {function} Handler of the notification
     * @param able {function} Able to receive notification
     *  - return undefined or true - handler is invoked when notification coming
     *  - return false - handler is not invoked when notification coming
     * @example
     *  MicroObserver.on("Say text", handler, able)
     */
    on: function (notify, handler, able) {
      var self = this;
      self.notifications = this.notifications || {};
      self.notifications[notify] = self.notifications[notify] || [];
      self.notifications[notify].push({handler: handler, able: able});
    },

    /**
     * Unregister event by notify
     *
     * @method off
     * @param {string} notify - Name of the notification
     * @param {function} handler - Handler of the notification
     * @example
     *  MicroObserver.off("Say text", handler)
     */
    off: function (notify, handler) {
      var self = this;
      var n = arguments.length;
      if (n === 0) return delete self.notifications;
      if (n === 1) return delete self.notifications[notify];

      self.notifications = self.notifications || {};
      var notifies = self.notifications[notify] || [];
      $.each(notifies, function (i, nf) {
        if (nf.handler === handler) {
          self.notifications[notify].splice(i, 1);
          return false;
        }
      });
    },

    /**
     * Send will send event by notify
     *
     * @method send
     * @param {string} notify - Name of the notification
     * @param {*} arguments is passed to registered handler
     * @example
     *  MicroObserver.send("Say text", "tell me", "something", "to someone")
     */
    send: function (notify /* , args... */) {
      var self = this;
      self.notifications = self.notifications || {};
      self.notifications[notify] = self.notifications[notify] || [];
      var notifies = self.notifications[notify];
      var args = Array.prototype.slice.call(arguments, 1);
      $.each(notifies, function (i, nf) {
        var ok = nf.able === undefined || nf.able.apply(null, args);
        ok && nf.handler.apply(null, args);
      });
    }
  }

  var observers = {}
  $.microObserver = {
    create: function (name) {
      observers[name] = new MicroObserver();
      return observers[name];
    },
    get: function (name) {
      var self = this;
      return observers[name] || self.create(name);
    }
  }
})();