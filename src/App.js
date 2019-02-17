import React, { Component } from 'react'
import Contacts from './components/contacts/Contacts'
import Header from './components/layout/Header'
import AddContact from './components/contacts/AddContact'
import { Provider } from './context'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render () {
    return (
      <Provider>
        <div>
          <Header branding='Contact Manager' />
          <div className='container'>
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    )
  }
}

export default App
