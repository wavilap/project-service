import React, { Fragment, Component } from 'react'
import { GlobalStyle } from './GlobalStyles'

import db from './config'
import { Filter } from './components/Filter'
import { Service } from './components/Service'
import { ServiceForm } from './components/ServiceForm'

export class App extends Component {
  state = {
    services: [],
    edit: false,
    docId: '',
    formValues: {
      name: '',
      description: '',
      category: 'Autos'
    }
  }

  componentDidMount() {
    const { services } = this.state

    db.collection('services').onSnapshot(snapshot => {
      this.setState({
        services: snapshot.docs.map(doc => {
          let data = doc.data()
          let id = doc.id
          return { id, ...data }
        })
      })
    })
  }

  addService = (service) => {
    !this.state.edit ?
    db.collection('services').add(service)
    .then((doc) => {
      console.log(`adding with id: ${doc.id}`)
    }).catch((err) => {
      console.log(err)
    }) : this.updateService(service)

    this.resetForm()
  }

  getService = (id) => {
    let docRef = db.collection('services').doc(id)
    docRef.get().then(doc => {
      if (doc.exists) {
        this.setState({
          edit: true,
          docId: doc.id,
          formValues: doc.data()
        })
      }
    })
  }

  updateService = (service) => {
    const { docId  } = this.state
    
    db.collection('services').doc(docId).update(service)
    .then(() => {
      this.setState({ edit: false })
    }).catch((err) => {
      console.log(err)
    })
  }

  removeService = (id) => {
    db.collection('services').doc(id).delete()
  }

  resetForm = () => {
    this.setState({
      formValues: {
        name: '',
        description: '',
        category: 'Autos'
      }
    })
  }

  render() {
    const { services, formValues } = this.state

    return (
      <Fragment>
        <GlobalStyle />
        <h1>Servicios</h1>
        <main>
          <div className="container">
            <Filter />
            <div className="row">
              <div className="serviceWrap row">
                {
                  services.map(service => (
                    <div className="one-third" key={service.id}>
                      <Service
                        id={service.id}
                        name={service.name}
                        description={service.description}
                        category={service.category}
                        removeService={this.removeService}
                        getService={this.getService}
                      />
                    </div>
                  ))
                }
              </div>
              <div className="formWrap">
                <ServiceForm
                  setInputs={formValues}
                  addService={this.addService}
                  resetForm={this.resetForm}
                />
              </div>
            </div>
          </div>
        </main>
      </Fragment>
    )
  }
}

export default App;
