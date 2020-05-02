import React from 'react';
import './add-book.styles.css';
import { Button, Input } from 'reactstrap'

const AddBook = () => {
    return (
        <div className="container">
            <h2>Add Book</h2>
            <label>Name</label>
            <Input placeholder="name"></Input>
            <label>Title</label>
            <Input placeholder="title"></Input>
            <Button color="primary">Add</Button>
        </div>
    )
}

export default AddBook;