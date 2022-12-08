import React from 'react'
import { Navbar, Nav, Container, NavDropdown, Button} from 'react-bootstrap'
import Logo from './images/Sandywords.png'
import './NavbarComp.css'

const NavbarComp = () => {
  return (
    <div>
         <Navbar collapseOnSelect expand="lg" fixed='top'>
           <Container>
             <a href='#Home'><img src={Logo} alt='Logo' width='250px' height='100%' /></a>
             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="justify-content-end flex-grow-1 pe-3">
                 <NavDropdown title="Services" id="collasible-nav-dropdown">
                   <NavDropdown.Item href="#action/3.1">Essay Writing</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.2">
                     Dissertation Writing
                   </NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.3">Coursework Writing</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.4">
                     Thesis Writing
                   </NavDropdown.Item>
                   <NavDropdown.Divider />
                   <NavDropdown.Item href="#action/3.3">Research Paper</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.3">Case Study</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.3">Buy Essay Online</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.3">Custom Essay</NavDropdown.Item>
                  </NavDropdown>
                 <Nav.Link href="#pricing">Pricing</Nav.Link>
                 <Nav.Link href="#features">About</Nav.Link>
                 </Nav>
               <Button>Order Now</Button>
             </Navbar.Collapse>
           </Container>
         </Navbar>
    </div>
  )
}

export default NavbarComp
