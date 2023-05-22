import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'

const NavbarMenu = () => ( 
    <Navbar bg="dark" variant='dark'>
       <Navbar.Brand>My next app</Navbar.Brand>
            <Nav>
                <Link href='/' passHref legacyBehavior>
                    <Nav.Link>Home</Nav.Link>
                </Link>

                <Link href='/posts' passHref legacyBehavior>
                    <Nav.Link>Posts</Nav.Link>
                </Link>
                <Link href='/jokes/random' passHref legacyBehavior>
                    <Nav.Link>Jokes</Nav.Link>
                </Link>
           
                <Link href='/about' passHref legacyBehavior>
                    <Nav.Link>About</Nav.Link>
                </Link>
            </Nav>
    </Navbar> 
)

export default NavbarMenu;
