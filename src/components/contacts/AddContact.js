import React, { Component } from 'react'
import { Consumer } from '../../context'
import uuid from 'uuid'

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  }

  onSubmit = (dispatch, e) => {
    e.preventDefault()
    const { name, email, phone } = this.state

    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    }
    dispatch({ type: 'ADD_CONTACT', payload: newContact })

    this.setState({
      name: '',
      email: '',
      phone: ''
    })
  }

  onInputChange = e => this.setState({ [e.target.name]: e.target.value })

  render () {
    const { name, email, phone } = this.state

    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div className='card mb-3'>
              <div className='card-header'>Add Contact</div>
              <div className='card-body'>
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      className='form-control form-control-lg'
                      placeholder='Enter Name'
                      value={name}
                      onChange={this.onInputChange}
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input
                      id='email'
                      type='email'
                      name='email'
                      className='form-control form-control-lg'
                      placeholder='Enter Email'
                      value={email}
                      onChange={this.onInputChange}
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='phone'>Phone</label>
                    <input
                      id='phone'
                      type='text'
                      name='phone'
                      className='form-control form-control-lg'
                      placeholder='Enter Phone'
                      value={phone}
                      onChange={this.onInputChange}
                    />
                  </div>
                  <input
                    type='submit'
                    value='Add Content'
                    className='btn btn-light btn-block'
                  />
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default AddContact
