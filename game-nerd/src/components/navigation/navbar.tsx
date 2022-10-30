import { useCallback } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLogout, useSession } from '../../contexts/AuthProvider';
import { User } from '../../api/user/model/user.model';


export default function NavigationBar() {
  const {isAuthed, user }: {token:string, isAuthed:boolean, user: User} = useSession();
  const logout = useLogout();

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);


  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Game-Nerd</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/games">
              <Nav.Link>Games</Nav.Link>
              </LinkContainer>
            <LinkContainer to="/news">
              <Nav.Link>News</Nav.Link>
              </LinkContainer>
            <LinkContainer to="/reviews">
              <Nav.Link>Reviews</Nav.Link>
              </LinkContainer>
          </Nav>
          <Nav>
            <NavDropdown title="User" id="basic-nav-dropdown">
              {isAuthed ? (<><NavDropdown.Item><Navbar.Text className='text-dark'>
                Signed in as: {user.name}
              </Navbar.Text></NavDropdown.Item>
                <NavDropdown.Item> <button className='button-primary' onClick={handleLogout}>Logout</button></NavDropdown.Item></>
              ) :
                (<><NavDropdown.Item href="/login">Login</NavDropdown.Item>
                  <NavDropdown.Item href="/register">Register</NavDropdown.Item></>)}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

