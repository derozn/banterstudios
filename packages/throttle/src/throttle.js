/**
 *  @name throttle
 *  @param  {Function} func
 *  @param  {Number} delay
 *  @return {Function}
 */
const throttle = (func, delay = 100) => {
  let resizeTimeout

  const throttled = (...props) => {
    if (!resizeTimeout) {
      resizeTimeout = window,setTimeout(() => {
        resizeTimeout = null
        func(...props)
      }, delay)
    }
  }
  
  throttled.cancel = () => window.clearTimeout(resizeTimeout)

  return throttled
}

export default throttle
