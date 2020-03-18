"use strict";

const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]')
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    refs.timer = document.querySelector(selector);
    this.targetDate = targetDate;
  }
  createTimer() {
    setInterval(() => {
      let currentDate = new Date();
      let time = this.targetDate - currentDate;

      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);
      this.changeInterface(days, hours, mins, secs);
    }, 1000);
  }
  changeInterface(days, hours, mins, secs) {
    refs.days.textContent = pad(days);
    refs.hours.textContent = pad(hours);
    refs.mins.textContent = pad(mins);
    refs.secs.textContent = pad(secs);
  }
}

function pad(value) {
  return String(value).padStart(2, "0");
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Sept 19, 2020")
});

document.addEventListener("load", timer.createTimer());
