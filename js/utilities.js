/**
 * Fades out an element in after a period of time
 * @param {Node} element - The element that will be faded out
 * @param {Number} [startFadingOutAfter = 2000] - The time that fading out will be started after
 * @param {Number} [speed = 1] - The speed of fading out, speed must be greater than zero.
 */
const fadeOut = function (element, startFadingOutAfter = 2000, speed = 1) {
  // speed must be greater than zero
  speed = speed <= 0 ? 1 : speed;

  setTimeout(function () {
    const timerId = setInterval(function () {
      const opacity = element.style.opacity;
      if (opacity == 0) {
        clearInterval(timerId);
      } else {
        element.style.opacity = opacity - 0.05;
      }
    }, 100 / speed);
  }, startFadingOutAfter);

  element.style.opacity = 1;
};
