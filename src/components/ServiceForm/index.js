import React, { Component } from 'react'

import {
  FormWrap,
  Field,
  FormFields,
  FormAction,
  PrimaryButton,
  SecondaryButton
} from './styles'

export class ServiceForm extends Component {
  state = this.props.setInputs

  componentWillReceiveProps(nextProps) {
    let { name, description, category } = nextProps.setInputs
    this.setState({ name, description, category })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.addService(this.state)
  }

  handleChange = (ev) => {
    this.setState({
      [ev.target.id]: ev.target.value
    })
  }

  reset = () => {
    this.props.resetForm()
  }

  render () {
    const { name, description, category } = this.state

    return (
      <FormWrap onSubmit={this.handleSubmit}>
        <FormFields>
          <h5>Servicio</h5>
          <Field>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </Field>
          <Field>
            <label htmlFor="description">Descripción</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={this.handleChange}
              required
            />
          </Field>
          <Field>
            <label htmlFor="category">Categoría</label>
            <select
              id="category"
              value={category}
              onChange={this.handleChange}
              required
            >
              <option value="Autos">Autos</option>
              <option value="Salud">Salud</option>
              <option value="Hogar">Hogar</option>
            </select>
          </Field>
        </FormFields>
        <FormAction>
          <PrimaryButton type="submit">Grabar</PrimaryButton>
          <SecondaryButton type="button" onClick={this.reset}>Cancelar</SecondaryButton>
        </FormAction>
      </FormWrap>
    )
  }
}