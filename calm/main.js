const b = document.querySelector('#box');
const c = document.querySelector('#circle');

c.style.height = `${window.innerHeight}px`;
c.style.width = `${window.innerHeight}px`;

let rot = 0;

document.addEventListener('mousemove', (evt) => {
  const delta = Math.abs(evt.movementX) + Math.abs(evt.movementY);
  rot += delta;
  if (rot >= 360) {
    rot = 0;
  }
  b.style.background = `linear-gradient(${rot+180}deg, #f0f, #6fb)`;
  c.style.background = `linear-gradient(${-rot}deg, #6fb, #f0f)`;
});
