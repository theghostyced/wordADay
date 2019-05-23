import { CronJob } from 'cron';
import PushNotification from './notification';
import WordPicker from './wordPicker';

/**
 * Timer class that pops up a push notification everyday
 *
 * @class Timer
 */
class Timer {
  constructor() {
    this.cronTime = '* * * * *';
    this.wordPicker = new WordPicker();
    this.notification = new PushNotification();
  }

  /**
   * @description Runs the schedule time
   *
   * @memberof Timer
   */
  runScheduledTime() {
    const randomWord = this.wordPicker.pickRandomWord();

    this.timer = new CronJob(this.cronTime, () => {
      const constructedObject = this.notification.constructPushNotificationObj(
        randomWord
      );
      this.notification.notify(constructedObject);
      console.log('running a task every minute');
    });

    this.timer.start();
  }
}

export default Timer;
