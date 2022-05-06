import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { ModalandButtonEdit } from '../ModalandButton/ModalandButtonEdit'
import { DeleteButton } from '../DeleteButton/DeleteButton'

export const User = ({name, email, phone, id}) => {

  return (
    <Card style={{ width: '18rem' }} className='mt-3'>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>email: {email}</Card.Text>
        <Card.Text>phone: {phone}</Card.Text>
        <div className='d-flex justify-content-between'>
          <ModalandButtonEdit id={id} title='delete'/>
          <DeleteButton id={id}/>
        </div>
      </Card.Body>
    </Card>
  )
}
