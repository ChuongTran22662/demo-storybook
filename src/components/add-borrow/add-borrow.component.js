import React from 'react';
import './add-borrow.styles.css';
import { Button, Input } from 'reactstrap'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const AddBorrow = () => {
    return (
        <div className="container">
            <h2>Add Borrow</h2>
            <UncontrolledDropdown className="add-borrow">
                <DropdownToggle caret>
                    Name
                    </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown className="add-borrow">
                <DropdownToggle caret>
                    Title
                    </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <Button color="primary">Add</Button>
        </div>
    )
}

export default AddBorrow;