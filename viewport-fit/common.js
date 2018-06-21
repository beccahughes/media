/**
 * Viewport Fit shared JS.
 */

document.addEventListener('DOMContentLoaded', () => {
  const viewport = document.getElementsByTagName('meta')[0];
  const label = document.getElementById('value');
  const links = document.getElementsByTagName('a');
  const defaultValue = viewport.getAttribute('content');

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', (e) => {
      e.preventDefault();

      const value = links[i].dataset.value;
      if (value == 'fullscreen') {
        if (document.webkitIsFullScreen) {
          document.webkitExitFullscreen();
        } else {
          document.documentElement.webkitRequestFullScreen();
        }
      } else if (value) {
        viewport.setAttribute('content', defaultValue + ', viewport-fit=' + value);
        label.innerHTML = value;
      } else {
        viewport.setAttribute('content', defaultValue);
        label.innerHTML = 'not set';
      }
    });
  }

}, { once: true });
