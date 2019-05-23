import { Notification } from 'electron';
import WordPicker from './wordPicker';

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

  /**
   * @description Constructs the object for our push notification
   *
   * @param {*} object
   * @memberof PushNotification
   *
   * @returns {object} Push notifiation object
   */
  constructPushNotificationObj(randomObject) {
    const wordPicker = new WordPicker();

    return {
      title: 'Word Of The Day',
      subtitle: randomObject.word,
      body: wordPicker.getSingleMeaning(randomObject)
    };
  }
}

export default PushNotification;
