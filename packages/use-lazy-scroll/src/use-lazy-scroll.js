import React from 'react'
import throttle from '@banterstudiosuk/throttle'
import {
  passiveEventsSupported,
  noop
} from './utils'

const windowEvents = new Set()

const handleScroll = () => windowEvents.forEach(fn => fn())

const useLazyLoad = ({
  next = noop,
  threshold = 150,
  throttleAmount = 100,
  canLoadMore,
  listCount
}) => {
  const scrollConfig = React.useRef()
  const elRef = React.useRef()
  const cachedcanLoadMore = React.useRef()

  const checkIfAtThreshold = () => {
    const { top } = elRef.current.getBoundingClientRect()
    const { scrollHeight } = elRef.current
    const { innerHeight, pageYOffset } = window

    return (pageYOffset + innerHeight) > ((top + scrollHeight) + pageYOffset) - threshold
  }

  const handleLazyLoad = () => {
    if (checkIfAtThreshold() && cachedcanLoadMore.current) {
      cachedcanLoadMore.current = false
      next()
    }
  }

  const throttledHandleLazyLoad = throttle(handleLazyLoad, throttleAmount)

  React.useEffect(() => {
    if (!windowEvents.size) {
      scrollConfig.current = passiveEventsSupported() ? { passive: true } : false
      window.addEventListener('scroll', throttledHandleLazyLoad, scrollConfig.current)
      window.addEventListener('resize', throttledHandleLazyLoad, false)
    }

    windowEvents.add(handleScroll)

    return () => {
      windowEvents.delete(handleScroll)

     if (!windowEvents.size) {
        window.removeEventListener('scroll', throttledHandleLazyLoad, scrollConfig.current)
        window.removeEventListener('resize', throttledHandleLazyLoad, false)
     }
    }
  }, [])

  React.useEffect(() => {
    cachedcanLoadMore.current = canLoadMore
    handleLazyLoad()
  }, [canLoadMore, listCount])

  return {
    elRef
  }
}

export default useLazyLoad
