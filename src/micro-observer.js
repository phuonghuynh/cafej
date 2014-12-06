/**
 * micro-observer.js
 * Copyright (c) 2014 Phuong Huynh & contributors
 *
 * Licensed under the MIT License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Phuong Huynh <phuonghqh@gmail.com>
 */
(function() {
  var MicroObserver = function () {};

  MicroObserver.prototype = {
    /**
     * on will register event by notify
     *
     * - ex: MicroObserver.on("Say text", handler, able)
     *
     * @param {notify} name of the notification
     * @param {handler} handler function of the notification
     * @param {able} function
     *  - Is undefined or return True => {handler} is invoked when notification coming
     *  - Return false => {handler} is not invoked when notification coming
     */
    on: function (notify, handler, able) {
      var self = this;
      self.notifications = this.notifications || {};
      self.notifications[notify] = self.notifications[notify] || [];
      self.notifications[notify].push({handler: handler, able: able});
    },

    /**
     * off will unregister event by notify
     *
     * - ex: MicroObserver.off("Say text", handler)
     *
     * @param {notify} name of the notification
     * @param {handler} handler function of the notification
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
     * send will send event by notify
     *
     * - ex: MicroObserver.send("Say text", "tell me", "something")
     *
     * @param {notify} name of the notification
     * @param {args} arguments is passed to registered {handler}, @see on
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
    create: function(name) {
      observers[name] = new MicroObserver();
      return observers[name];
    },
    get: function(name) {
      var self = this;
      return observers[name] || self.create(name);
    }
  }
})();
