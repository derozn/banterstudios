import React, { useState, useEffect } from 'react'
import throttle from '@banterstudios/throttle'

const windowEvents = new Set()
const handleResize = () => windowEvents.forEach(fn => fn())
const getSizes = () => ({
  innerWidth: window.innerWidth,
  innerHeight: window.innerHeight,
  outerWidth: window.outerWidth,
  outerHeight: window.outerHeight
})

const useWindowSize = ({ throttleAmount = 100 } = {}) => {
  const [size, setSize] = useState(getSizes())

  const throttledResize = throttle(() => {
    setSize(getSizes())
  }, throttleAmount)

  useEffect(() => {
    if (!windowEvents.size) {
      window.addEventListener('resize', handleResize, true)
    }

    windowEvents.add(throttledResize)

    return () => {
      windowEvents.delete(throttledResize)

      if (!windowEvents.size) {
        window.removeEventListener('resize', handleResize, true)
      }
    }
  }, [])

  const Comp = () => <div />
  return size
}

export default useWindowSize