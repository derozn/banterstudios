import { renderHook, cleanup } from 'react-hooks-testing-library'
import useLazyScroll from './use-lazy-scroll'

describe('use-lazy-scroll', () => {
  afterEach(cleanup)

  it('doesnt crash', () => {
    const { result } = renderHook(() => useLazyScroll())
    expect(result.current).toBeDefined()
  })
})
