import './styles.css';

const displayOfTimerValuesEl = document.querySelectorAll('.value');

class CountdownTimer {
  constructor({ selektor, targetDate }) {
    this.selektor = selektor;
    this.targetDate = targetDate;
  }

  getTimer = setInterval(() => {
    const takingAwayTime = this.targetDate - Date.now();
    const getTime = this.getTime(takingAwayTime);
    this.getDrawgingNumbers(getTime);
    this.clearsTheTimerAtTheEnd(takingAwayTime);
  }, 1000);
  getTime(time) {
    const days = this.AddZero(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.AddZero(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.AddZero(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    );
    const secs = this.AddZero(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }

  AddZero(value) {
    return String(value).padStart(2, '0');
  }
  getDrawgingNumbers({ days, hours, mins, secs }) {
    displayOfTimerValuesEl[0].textContent = days;
    displayOfTimerValuesEl[1].textContent = hours;
    displayOfTimerValuesEl[2].textContent = mins;
    displayOfTimerValuesEl[3].textContent = secs;
  }
  clearsTheTimerAtTheEnd(time) {
    if (time === 0) {
      clearInterval(this.getTimer);
    }
  }
}
const a = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('November 18, 2021'),
});

// const time = document.querySelectorAll('.value');

// class CountdownTimer {
//   constructor(selektor) {
//     this.selektor = selektor;
//   }
//   dateSubtraction() {
//     return this.selektor.targetDate - Date.now();
//   }
//   getDays() {
//     return Math.floor(this.dateSubtraction() / (1000 * 60 * 60 * 24));
//   }
//   getHours() {
//     return Math.floor(
//       (this.dateSubtraction() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
//     );
//   }
//   getMins() {
//     return Math.floor(
//       (this.dateSubtraction() % (1000 * 60 * 60)) / (1000 * 60),
//     );
//   }
//   getSecs() {
//     return Math.floor((this.dateSubtraction() % (1000 * 60)) / 1000);
//   }
//   getStart() {
//     setInterval(() => {
//       time[0].textContent = `${this.getDays()}`;
//       time[1].textContent = `${this.getHours()}`;
//       time[2].textContent = `${this.getMins()}`;
//       time[3].textContent = `${this.getSecs()}`;
//     }, 1000);
//   }
// }

// const a = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('November 18, 2021'),
// });

// a.getStart();

// -------------------------------------------
