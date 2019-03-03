import React from 'react'
import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'

import readMe from '../README.md'
import useLazyScroll from './index'

const stories = storiesOf('useLazyScroll', module)

const generateItems = count => (
   Array(20)
  .fill()
  .map((_, index) => ({
      id: count + index,
      message: `Element: ${count + index}`
  }))
)

const withFakeRequest = WrappedComponent => () => {
  const [state, setState] = React.useState({
    list: [],
    hasMore: true,
    isFetching: false
  })

  const fetchItems = () => {
    setState(state => ({ ...state, isFetching: true }))

    setTimeout(() => {
      setState(state => {
        const newItems = generateItems(state.list.length)

        return {
          ...state,
          isFetching: false,
          hasMore: state.list.length + newItems.length < 200,
          list: [...state.list, ...newItems]
        }
      })
    }, 200)
  }

  return (
    <WrappedComponent
      list={state.list}
      canLoadMore={state.hasMore && !state.isFetching}
      fetchItems={fetchItems} />
  )
}

const LazyScroll = withFakeRequest(({ list, canLoadMore, fetchItems }) => {
  const { elRef } = useLazyScroll({ next: fetchItems, canLoadMore, listCount: list.length })

  return ( 
    <ul ref={elRef}>
      { list.map(({ id, message }) => <li key={id}>{message}</li>) }
    </ul>
  )
})

stories.add('Simple lazy scroll',
withReadme(readMe, () => (
  <LazyScroll />
)))
