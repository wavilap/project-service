import React, { Fragment } from 'react'

import { Heading } from './styles'

import { Filter } from '../Filter'
import { ListServices } from '../ListServices'
import { Form } from '../Form'

export const Layout = () => {
  return (
    <Fragment>
      <Heading>
        <h1>Servicios</h1>
      </Heading>
      <main>
        <div className="container">
          <Filter />
          <div className="row">
            <ListServices />
            <Form />
          </div>
        </div>
      </main>
    </Fragment>
  )
}