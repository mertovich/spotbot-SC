import React from 'react'
import {Form, Button} from 'react-bootstrap'

const Forms = props => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="botName">
                    <Form.Label>Bot Name</Form.Label>
                    <Form.Control onChange={e => props.handleChange(e)} type="text" placeholder="Enter Name" name='botName' />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="botToken">
                    <Form.Label>Bot Token</Form.Label>
                    <Form.Control onChange={e => props.handleChange(e)} type="password" placeholder="Token" name='botToken' />
                </Form.Group>
                <Button onClick={(e) => props.handleSubmit(e)} variant="primary" type='submit' name='submit'>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Forms