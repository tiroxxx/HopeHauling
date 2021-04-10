import React from 'react'
import { Form, Button } from "react-bootstrap"

export default function FormComponent() {

    function handleSubmit(e) {
        e.preventDefault()

    }

    return (
        <div className="container-section">
            <h3>Email us for an estimate</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
