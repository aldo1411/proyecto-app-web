import axios from 'axios';
import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { UsersList } from '../UsersList/UsersList';

export const ModalandButtonEdit = ({id}) => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const update = () => {
      const user = {
        name: name,
        email: email,
        phone: phone
      }
      
      axios.put(`http://localhost:5000/api/users/${id}`, user)
      .catch(err => {
        console.log(err)
      })
      .then(() => {
        window.location.reload()
      })
    }
  
    return (
      <>
        <Button variant="dark" onClick={handleShow}>Edit User</Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='mb-3'>
              <label htmlFor="name"className='from-label'>Name</label>
              <input type="text" className='form-control' value={name}  onChange={(e) => { setName(e.target.value) }}/>
            </div>
            <div className='mb-3'>
              <label htmlFor="email"className='from-label'>Email</label>
              <input type="email" className='form-control' value={email} onChange={(e) => { setEmail(e.target.value) }}/>
            </div>
            <div className='mb-3'>
              <label htmlFor="phone"className='from-label'>Phone</label>
              <input type="text" className='form-control' value={phone} onChange={(e) => { setPhone(e.target.value) }}/>
            </div>
            <Button className='btn btn-success' onClick={update}>Save User</Button>
          </Modal.Body>
        </Modal>
      </>
    );
}
