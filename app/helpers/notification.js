import { Notification } from 'electron';

/**
 * @description Push Notification class
 * @class PushNotification
 */
class PushNotification {
  /**
   * @description Creates the push notification
   *
   * @param {JSON} object
   * @returns {Notification} Notification || {boolean} false
   * @memberof PushNotification
   */
  notify(object) {
    if (!Notification.isSupported()) {
      return false;
    }
    return new Notification(object).show();
  }
}

export default PushNotification;
