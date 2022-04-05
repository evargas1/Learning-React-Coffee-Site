import React from 'react'
import { Container, Navbar, Nav} from 'react-bootstrap'
 
 function Header() {
     return (
         <div>

            <Navbar bg="light" expand="lg" className="no-border" >
            <Container >
                
                <Navbar.Brand className="me-auto" href="#home" >
                    <h2 className="main-title" >PixelMatters</h2>
                    </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link className="home-butt" href="#home">Work</Nav.Link>
                    <Nav.Link className="home-butt"  href="#link">Approach</Nav.Link>
                    <Nav.Link className="home-butt"  href="#link">Culture</Nav.Link>
                    <Nav.Link className="home-butt"  href="#link">Careers</Nav.Link>
                    <Nav.Link className="home-butt"  href="#link">Blog</Nav.Link>

                    <button type="button" className="butt">Small button</button>
                   
                </Nav>
                </Navbar.Collapse>
                
            </Container>
            </Navbar>

             

         </div>
     );
 }
 
 export default Header
 