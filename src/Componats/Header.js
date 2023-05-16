import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'


export const Header = () => {
    return (
        <div>
            <Navbar bg="light" variant="light" fixed='top'>
                <Container className='custome-container'>

                    <Navbar.Brand href="#home">Hassan Ahmed</Navbar.Brand>
                    <Nav className="">

                        <Nav.Link className='custome-link' href="#home">Blog</Nav.Link>
                        <Nav.Link className='custome-link' href="#features">Community</Nav.Link>
                        <Nav.Link className='custome-link' href="#pricing">Fourm</Nav.Link>
                        <Nav.Link className='custome-link' href="#pricing">support_web</Nav.Link>

                    </Nav>
                    <Button className='custome-btn' variant="outline-dark">Sign Up</Button>

                </Container>
            </Navbar>
        </div>
    )
}
