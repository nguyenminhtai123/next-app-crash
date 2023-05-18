import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavbarMenu = () => 
    ( 
        <Navbar bg="dark" variant='dark'>
        <Navbar.Brand>My next app</Navbar.Brand>
        <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>About</Nav.Link>
        </Nav>
        </Navbar> 
    )

export default NavbarMenu;
