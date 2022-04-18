import React from 'react'
import {Form, Button} from 'react-bootstrap'

const Forms = () => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBotName">
                    <Form.Label>Bot Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBotToken">
                    <Form.Label>Bot Token</Form.Label>
                    <Form.Control type="password" placeholder="Token" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Forms