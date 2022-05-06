import React , {useState, useEffect}from 'react'
import { User } from '../User/User'
import { Row } from 'react-bootstrap'
import axios from 'axios'


export const UsersList = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
    .then(res => {
      setUsers(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])
  
  const usersList = users.map(user => {
    return(
      <Row className='d-flex justify-content-center'>
        <User key={user._id} id={user._id} name={user.name} email={user.email} phone={user.phone}></User>
      </Row>
    )
  })

  return (
    <div>
      <h2>Users list</h2>
      {usersList}
    </div>

  )
}
