import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UsersList } from './components/UsersList/UsersList';
import { AddUsers } from './components/AddUsers/AddUsers'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>CRUD</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="addusers">Add user</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <UsersList/> } exact></Route>
          <Route path='/addusers' element={ <AddUsers/> } exact></Route>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
