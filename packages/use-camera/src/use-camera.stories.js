import React from 'react'
import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'

import readMe from '../README.md'
import useWindowResize from './index'

const stories = storiesOf('useWindowResize', module)

const Component = () => {
  const state = useWindowResize()
  return (
    <code>
      innerWidth: {innerWidth}
      innerHeight: {innerHeight}
      outerWidth: {outerWidth}
      outerHeight: {outerHeight}
    </code>
  )
}

const Multiple = () => (
  <>
    <Component />
    <Component />
  </>
)

stories.add('Single resize',
withReadme(readMe, () => (
  <Component />
)))

stories.add('Multiple resize',
withReadme(readMe, () => (
  <Multiple />
)))