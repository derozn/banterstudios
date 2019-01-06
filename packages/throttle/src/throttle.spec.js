import throttle from './throttle'

jest.useFakeTimers()

describe('throttle', () => {
  describe('Given this module', () => {
    describe('When called with defaults', () => {
      it('invokes callback after default time', () => {
        const throttleCb = jest.fn()
        const throttled = throttle(throttleCb)

        throttled()

        jest.advanceTimersByTime(100)

        expect(throttleCb).toBeCalledTimes(1)
      })
    })

    describe('When called with a custom delay', () => {
      it('invokes callback after a specified time', () => {
        const throttleCb = jest.fn()
        const throttled = throttle(throttleCb, 300)

        throttled()

        jest.advanceTimersByTime(300)

        expect(throttleCb).toBeCalledTimes(1)
      })
    })

    describe('When props are passed to the throttled instance', () => {
      it('passes props back to given callback', () => {
        const throttleCb = jest.fn()
        const throttled = throttle(throttleCb, 150)

        throttled('test')

        jest.advanceTimersByTime(150)

        expect(throttleCb).toBeCalledTimes(1)
        expect(throttleCb).toBeCalledWith('test')
      })
    })

    describe('When the user cancels', () => {
      it('does not invoke callback', () => {
        const throttleCb = jest.fn()
        const throttled = throttle(throttleCb, 150)

        throttled()
        throttled.cancel()

        jest.advanceTimersByTime(150)

        expect(throttleCb).toBeCalledTimes(0)
      })
    })

    describe('When called multiple times', () => {
      it('invokes only when specified time is matched', () => {
        const throttleCb = jest.fn()
        const throttled = throttle(throttleCb, 150)

        throttled('test')

        jest.advanceTimersByTime(50)

        throttled('test')

        jest.advanceTimersByTime(100)

        expect(throttleCb).toBeCalledTimes(1)
        expect(throttleCb).toBeCalledWith('test')
      })
    })
  })
})
