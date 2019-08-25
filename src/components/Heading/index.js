import React from 'react'

import { Title } from './styles'

export const Heading = (props) => {
  return (
    <div className="container">
      <Title>{props.children}</Title>
    </div>
  )
}