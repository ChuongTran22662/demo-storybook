import React from 'react';
import './user.styles.css';
import { Button, Table, Input } from 'reactstrap'

const Users = () => {
    return (
        <div className="container">
            <h2 className="title">List users</h2>
            <Button color="primary" className="add-user">Add user</Button>
            <Input placeholder="search">Search</Input>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User name</th>
                        <th>title</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td><div><Button>Delete</Button></div></td>
                        <td><div><Button>Update</Button></div></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td><div><Button>Delete</Button></div></td>
                        <td><div><Button>Update</Button></div></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td><div><Button>Delete</Button></div></td>
                        <td><div><Button>Update</Button></div></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Users;