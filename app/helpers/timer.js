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
    const cronTime = '* * * * *';
    const wordPicker = new WordPicker();
    const randomWord = wordPicker.pickRandomWord();

    const notificationObj = {
      title: 'Word Of The Day',
      subtitle: randomWord.word,
      body: `(n) ${randomWord.meaning.noun[0].definition}`
    };

    const notification = new PushNotification();

    this.timer = new CronJob(cronTime, () => {
      notification.notify(notificationObj);
      console.log('running a task every minute');
    });
  }

  /**
   * @description Runs the schedule time
   *
   * @memberof Timer
   */
  runScheduledTime() {
    this.timer.start();
  }
}

export default Timer;
