import React, { Component } from 'react'

import {
  FormWrap,
  Field,
  FormFields,
  FormAction
} from './styles'

export class ServiceForm extends Component {
  state = {
    name: '',
    description: '',
    category: 'Autos'
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    const { name, description, category } = this.state
    let data = {
      name,
      description,
      category
    }

    this.props.addService(data)
  }

  handleChange = (ev) => {
    this.setState({
      [ev.target.id]: ev.target.value
    })
  }

  reset = () => {
    this.setState({
      name: '',
      description: '',
      category: 'Autos'
    })
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
          <button type="submit">Grabar</button>
          <button type="button" onClick={this.reset}>Cancelar</button>
        </FormAction>
      </FormWrap>
    )
  }
}



// const useInputValue = (initialState) => {
//   const [value, setValue] = useState(initialState)
//   const onChange = e => setValue(e.target.value)
//   const reset = () => setValue('')

//   return { value, reset, onChange }
// }

// export const ServiceForm = () => {
//   const name = useInputValue('')
//   const description = useInputValue('')
//   // const [description, setDescription ] = useState('')

//   const handleSubmit = (ev) => {
//     ev.preventDefault()
//     let data = {
//       name,
//       description
//     }

//     console.log(data)
//   }

//   return (
//     <FormWrap onSubmit={handleSubmit}>
//       <FormFields>
//         <h5>Servicio</h5>
//         <Field>
//           <label htmlFor="name">Nombre</label>
//           <input
//             type="text"
//             id="name"
//             value={name.value}
//             onChange={name.onChange}
//           />
//         </Field>
//         <Field>
//           <label htmlFor="description">Descripción</label>
//           <input
//             type="text"
//             id="description"
//             value={description.value}
//             onChange={description.onChange}
//           />
//         </Field>
//         <Field>
//           <label htmlFor="">Categoría</label>
//           <select name="" id="">
//             <option value="">Elegir categoría</option>
//             <option value="">Autos</option>
//             <option value="">Salud</option>
//             <option value="">Hogar</option>
//           </select>
//         </Field>
//       </FormFields>
//       <FormAction>
//         <button type="submit">Grabar</button>
//         <button type="button">Cancelar</button>
//       </FormAction>
//     </FormWrap>
//   )
// }