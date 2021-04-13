import React from 'react'
import { Nav, Navbar } from "react-bootstrap"

export default function NavbarComponent() {
    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="transparent" variant="light">
                <Navbar.Brand href="#home">Hope's Hauling</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav >
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#AboutUs">About Us</Nav.Link>
                        <Nav.Link href="#Contact">123-456-7890</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </>
    )
}
