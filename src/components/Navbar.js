import React from 'react'
import { Nav, Navbar } from "react-bootstrap"

export default function NavbarComponent() {
    return (
        <>
            <Navbar className="justify-content-between" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Hope Hauling</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <Nav.Link href="#AboutUs">About Us</Nav.Link>
                    <Nav.Link href="#Contact">123-456-7890</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}
