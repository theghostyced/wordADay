import { CronJob } from 'cron';
/**
 * Timer class that pops up a push notification everyday
 *
 * @class Timer
 */
class Timer {
  constructor() {
    const cronTime = '* * * * *';

    this.timer = new CronJob(cronTime, () => {
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
