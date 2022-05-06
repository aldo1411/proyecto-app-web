import React from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'

export const DeleteButton = ({id}) => {
  const deleteUser = () => {
    axios.delete(`http://localhost:5000/api/users/${id}`)
    .then(() => {
        window.location.reload()
    })
    .catch(err => {
        console.log(err)
    })
  }

  return (
    <Button variant='danger' onClick={deleteUser}>Delete</Button>
  )
}
