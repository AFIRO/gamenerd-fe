import { useCallback } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLogout, useSession } from '../../contexts/AuthProvider';

export default function NavigationBar() {
  const { isAuthed, user } = useSession();
  const logout = useLogout();

	const handleLogout = useCallback(() => {
		logout();
	}, [logout]);
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand>Game-Nerd</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/games">Games</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/reviews">Reviews</Nav.Link>
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

