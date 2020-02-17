"use strict";

class CountdownTimer {
  constructor({selector, targetDate}) {
    this.selector = selector;
    
    this.targetDate = targetDate;
  }
  start() {
      setInterval(() => {
      this.currentTime = Date.now();
      this.time = this.targetDate - this.currentTime;
      this.days = Math.floor(this.time / (1000 * 60 * 60 * 24));
      this.hours = pad(
        Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      this.mins = pad(Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60)));
      this.secs = pad(Math.floor((this.time % (1000 * 60)) / 1000));
      const days = document.querySelector('span[data-value="days"]');
      days.textContent = this.days;
      const hours = document.querySelector('span[data-value="hours"]');
      hours.textContent = this.hours;
      const mins = document.querySelector('span[data-value="mins"]');
      mins.textContent = this.mins;
      const secs = document.querySelector('span[data-value="secs"]');
      secs.textContent = this.secs;
    }, 1000);
  }
};

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2020'),
});

timer.start();

function pad(value) {
  return String(value).padStart(2, "0");
}
