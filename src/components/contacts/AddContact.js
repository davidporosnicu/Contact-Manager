import React, { Component } from 'react'

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  }

  onInputChange = e => this.setState({ [e.target.name]: e.target.value })

  onSubmit = e => {
    e.preventDefault()
    console.log(this.state)
  }

  render () {
    const { name, email, phone } = this.state
    return (
      <div className='card mb-3'>
        <div className='card-header'>Add Contact</div>
        <div className='card-body'>
          <form onSubmit={this.onSubmit}>
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
  }
}

export default AddContact
