# useScrolledPast

Use this hook to build links in navigation

## Install

```
npm i use-scrolled-past
```

## Usage

```javascript
import React from 'react'
import useScrolledPast from 'use-scrolled-past'

function App() {
  const block1 = React.useRef()
  const block2 = React.useRef()
  const block3 = React.useRef()

  const scrolledPastBlock1 = useScrolledPast(block1)
  const scrolledPastBlock2 = useScrolledPast(block2)
  const scrolledPastBlock3 = useScrolledPast(block3)

  const activeBlock = scrolledPastBlock3 || scrolledPastBlock2 || scrolledPastBlock1

  return (
    <div>
      <header className='header'>Active block: {activeBlock.current.name}</header>
      <div className='block' ref={block1} name='first' />
      <div className='block' ref={block2} name='second' />
      <div className='block' ref={block3} name='third' />
    </div>
  )
}
```

## Api

yes.

### useScrolledPast(reactRef): false | reactRef

Returns false if not scrolled past, or `reactRef` else.

`reactRef` must be ref to html dom element (e.g. <div />, <p />)