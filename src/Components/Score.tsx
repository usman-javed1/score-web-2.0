import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import TimerLine from './TimerLine'
import Form from './Form'

const score = () => {
  return (
    <div>
      <Header/>
      <Navigation />
      <TimerLine />
      <Form />
    </div>
  )
}

export default score
