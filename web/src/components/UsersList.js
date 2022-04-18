import React from 'react'
import { Table, Container } from 'react-bootstrap'

const UsersList = props => {
    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr className='text-center'>
                        <th>#</th>
                        <th></th>
                        <th>Name</th>
                        <th>id</th>
                    </tr>
                </thead>
                <tbody>
                    {props.Users.map((user, index) => (
                        <tr className='text-center' key={user.id}>
                            <td>{index+1}</td>
                            <td><img src={user.image} alt='' height='40px' width='40px' /></td>
                            <td>{user.name}</td>
                            <td>{user.id}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default UsersList