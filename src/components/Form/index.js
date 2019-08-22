import React from 'react'

import {
  FormWrap,
  Field,
  FormFields,
  FormAction
} from './styles'

export const Form = () => {
  return (
    <FormWrap>
      <FormFields>
        <h5>Servicio</h5>
        <Field>
          <label htmlFor="">Nombre</label>
          <input type="text"/>
        </Field>
        <Field>
          <label htmlFor="">Descripción</label>
          <input type="text"/>
        </Field>
        <Field>
          <label htmlFor="">Categoría</label>
          <select name="" id="">
            <option value="">Elegir categoría</option>
            <option value="">Autos</option>
            <option value="">Salud</option>
            <option value="">Hogar</option>
          </select>
        </Field>
      </FormFields>
      <FormAction>
        <button type="submit">Grabar</button>
        <button type="button">Cancelar</button>
      </FormAction>
    </FormWrap>
  )
}