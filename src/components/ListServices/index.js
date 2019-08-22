import React from 'react'

import { Service } from '../Service'
import { WrapServices, Column } from './styles'

export const ListServices = () => {
  return (
    <WrapServices>
      <div className="row">
        {
          [0, 1, 2, 3, 4, 5, 6].map(service => (
            <Column key={service}>
              <Service />
            </Column>
          ))
        }
      </div>
    </WrapServices>
  )
}