import React, { Component } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter
} from './styles'

export class Service extends Component {
  getDoc = (id) => {
    this.props.getService(id)
  }
  handleRemove = (id) => {
    this.props.removeService(id)
  }

  render() {
    let { services, activeCategory } = this.props
    return (
      <div className="row">
        {
          services.map(service => {
            if (service.category.indexOf(activeCategory) < 0 && activeCategory !== 'Todos') return null
            return (
              <div className="one-third" key={service.id}>
                <Card>
                  <CardHeader>
                    <CardTitle>{service.name}</CardTitle>
                    <p>{service.description}</p>
                    <span>Cat. {service.category}</span>
                  </CardHeader>
                  <CardFooter>
                    <button type="button" onClick={() => this.getDoc(service.id)}>Editar</button>
                    <button type="button" onClick={() => this.handleRemove(service.id)}>Eliminar</button>
                  </CardFooter>
                </Card>
              </div>
            )
          })
        }
      </div>      
    )
  }
}