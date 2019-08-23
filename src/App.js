import React, { Fragment, Component } from 'react'
import { GlobalStyle } from './GlobalStyles'
import Firebase from 'firebase'

import DB_CONFIG from './config'
import { Filter } from './components/Filter'
import { Service } from './components/Service'
// import { ListServices } from './components/ListServices'
import { ServiceForm } from './components/ServiceForm'
import { throwStatement } from '@babel/types';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      services: []
    }

    this.app = Firebase.initializeApp(DB_CONFIG)
    this.db = this.app.database().ref().child('services')
  }

  componentDidMount() {
    const { services } = this.state
    
    this.db.on('child_added', snapshot => {
      services.push({
        serviceId: snapshot.key,
        name: snapshot.val().name,
        description: snapshot.val().description,
        category: snapshot.val().category
      })
      this.setState({services})
    })

    this.db.on('child_removed', snapshot => {
      for (let i = 0; i < services.length; i++) {
        if (services[i].serviceId === snapshot.key) {
          services.splice(i, 1)
        }
      }
      this.setState({services})
    })
  }

  addService = (service) => {
    const { name, description, category } = service
    console.log(service)
    this.db.push().set({
      name,
      description,
      category
    })
  }

  editService = () => {
    
  }

  removeService = (serviceId) => {
    this.db.child(serviceId).remove()
  }

  render() {
    const { services } = this.state
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
                    <div className="one-third" key={service.serviceId}>
                      <Service
                        id={service.serviceId}
                        name={service.name}
                        description={service.description}
                        category={service.category}
                        removeService={this.removeService}
                      />
                    </div>
                  ))
                }
              </div>
              <div className="formWrap">
                <ServiceForm addService={this.addService} />
              </div>
            </div>
          </div>
        </main>
      </Fragment>
    )
  }
}

export default App;
