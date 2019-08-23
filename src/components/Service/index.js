import React, { Component } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter
} from './styles'

export class Service extends Component {
  handleRemove = (id) => {
    this.props.removeService(id)
  }

  render() {
    let { id, name, description, category } = this.props
    return (
      <Card>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <p>{description}</p>
        </CardHeader>
        <CardFooter>
          <button type="button" onClick={() => this.handleEdit(id)}>Editar</button>
          <button type="button" onClick={() => this.handleRemove(id)}>Eliminar</button>
        </CardFooter>
      </Card>
    )
  }
}