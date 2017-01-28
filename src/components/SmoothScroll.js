// http://blog.greweb.fr/2012/02/bezier-curve-based-easing-functions-from-concept-to-implementation/
function easeInOutCubic(t) {
  return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1;
}

function getTop(el, start) {
  if(el.nodeName === 'HTML') return -start
  return el.getBoundingClientRect().top + start
}

function calculateNextYOffset(start, end, elapsed, duration) {
  if (elapsed > duration) { return end; }
  return start + (end - start) * easeInOutCubic(elapsed / duration);
}

var requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function(fn) { window.setTimeout(fn, 15); };

function smoothScroll(el, options){
  let { duration, callback, offset } = options;
  duration = duration || 250;
  offset = offset || 0; // there is a fixed sized navigator, skip it

  let start = window.pageYOffset,
      end = getTop(el, start) + offset,
      now = Date.now();

  function step() {
    let elapsed = Date.now() - now;
    window.scroll(0, calculateNextYOffset(start, end, elapsed, duration));

    if (elapsed > duration) {
      if (typeof callback === 'function') {
        callback(el);
      }
    } else {
      requestAnimationFrame(step);
    }
  }
  step();
}

export { smoothScroll };
