/*
 * Observer Pattern javascript implementation [Observer](http://en.wikipedia.org/wiki/Observer_pattern)
 * @author Phuong Huynh <phuonghqh@gmail.com>
 * */
(function () {

  /**
   * @class MicroObserver
   */
  var MicroObserver = function () {};

  MicroObserver.prototype = {

    /**
     * Register event by notify
     *
     * @func on
     * @param {string} notify - name of the notification
     * @param {MicroObserver~handler} handler - handler of the notification
     * @param {MicroObserver~able} able - able to receive notification
     * @example
     *  ```js
     *  MicroObserver.on("Say text", handler, able)
     *  ```
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
     * @func off
     * @param {string} notify - Name of the notification
     * @param {MicroObserver~handler} handler - Handler of the notification
     * @example
     *  ```js
     *  MicroObserver.off("Say text", handler)
     *  ```
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
     * @func send
     * @param {string} notify - Name of the notification
     * @param {...any} arguments is passed to registered {MicroObserver~handler}
     * @example
     *  ```js
     *  MicroObserver.send("Say text", "tell me", "something", "to someone")
     *  ```
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
/**
 * Handler of the notification
 *
 * @callback MicroObserver~handler
 * @param {...any}
 */
/**
 * Able to receive notification
 *
 * @callback MicroObserver~able
 * @returns {undefined | true} handler is invoked when notification coming <br/>
 * @returns {false} handler is not invoked when notification coming
 */
