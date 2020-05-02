import React from 'react';
import './add-user.styles.css';
import { Button, Input } from 'reactstrap'

const AddUser = () => {
    return (
        <div className="container">
            <h2>Add user</h2>
            <label>Name</label>
            <Input placeholder="name"></Input>
            <label>Phone</label>
            <Input placeholder="phone"></Input>
            <Button color="primary">Add</Button>
        </div>
    )
}

export default AddUser;