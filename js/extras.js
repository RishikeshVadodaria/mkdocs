document.getElementById('menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    const navMenu = document.querySelector('.Nav ul');
    navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
  });


// Set the target date (May 1, 2025, 00:00:00 UTC)
const targetDate = new Date('2025-05-01T00:00:00Z').getTime();

function CountdownTracker(label, query) {
  const el = document.querySelector(query);
  this.el = el;
  const top = el.querySelector('.card__top');
  const bottom = el.querySelector('.card__bottom');
  const back = el.querySelector('.card__back');
  const backBottom = el.querySelector('.card__back .card__bottom');

  this.update = function (val) {
    val = ('0' + val).slice(-2);
    if (val !== this.currentValue) {
      if (this.currentValue >= 0) {
        back.setAttribute('data-value', this.currentValue);
        bottom.setAttribute('data-value', val);
        el.classList.add('flipping');
        setTimeout(() => el.classList.remove('flipping'), 600);
      }
      top.setAttribute('data-value', val);
      this.currentValue = val;
    }
  };
}

const days = new CountdownTracker('Days', '.flip-clock__piece:nth-child(1)');
const hours = new CountdownTracker('Hours', '.flip-clock__piece:nth-child(2)');
const minutes = new CountdownTracker('Minutes', '.flip-clock__piece:nth-child(3)');
const seconds = new CountdownTracker('Seconds', '.flip-clock__piece:nth-child(4)');

function updateClock() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    clearInterval(interval);
    days.update(0);
    hours.update(0);
    minutes.update(0);
    seconds.update(0);
    return;
  }

  days.update(Math.floor(distance / (1000 * 60 * 60 * 24)));
  hours.update(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  minutes.update(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
  seconds.update(Math.floor((distance % (1000 * 60)) / 1000));
}

const interval = setInterval(updateClock, 1000);
updateClock(); // Initial call