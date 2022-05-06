import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Button} from 'react-bootstrap'
import axios from 'axios'

export const AddUsers = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const nav = useNavigate()

  const addUser = () => {
    const user = {
      name: name,
      email: email,
      phone: phone
    }

    axios.post('http://localhost:5000/api/users', user)
    .then(res => {
        if(res.status === 201){
          console.log('se posteó')
          nav('/')
        }
    }).catch(err => {
      return err
    })
  }

  return (
    <Container>
      <Row>
        <h2>Create New User</h2>
      </Row>
      <Row>
        <Col>
          <div className='mb-3'>
            <label htmlFor="name"className='from-label'>Name</label>
            { <input type="text" className='form-control' value={ name } onChange={(e) => { setName(e.target.value) }}/> }
          </div>
          <div className='mb-3'>
            <label htmlFor="email"className='from-label'>Email</label>
            <input type="email" className='form-control' value={ email } onChange={(e) => { setEmail(e.target.value) }}/>
          </div>
          <div className='mb-3'>
            <label htmlFor="phone"className='from-label'>Phone</label>
            <input type="text" className='form-control' value={ phone } onChange={(e) => { setPhone(e.target.value) }}/>
          </div>

          <Button onClick={addUser} className='btn btn-success'>Save User</Button>
        </Col>
      </Row>
    </Container>
  )
}
