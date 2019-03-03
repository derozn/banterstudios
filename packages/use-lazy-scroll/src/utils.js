export function hasInnerScroll (el) {
  return el.clientHeight < el.scrollHeight
}

export function passiveEventsSupported () {
  if (!process.browser) {
    return false
  }

  let passiveSupported

  try {
    var options = {
      get passive () {
        passiveSupported = true
      }
    }

    window.addEventListener('test', options, options)
    window.removeEventListener('test', options, options)
  } catch (err) {
    passiveSupported = false
  }

  return passiveSupported
}

export function noop() {}
