import React from 'react';
import './borrow-book.styles.css';
import { Button, Table, Input } from 'reactstrap'

const BorrowBook = () => {
    return (
        <div className="container">
            <h2 className="title">List borrow books</h2>
            <Button color="primary" className="add-borrow">Borrow</Button>
            <Input placeholder="search">Search</Input>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User name</th>
                        <th>title</th>
                        <th>Borrow</th>
                        <th>Transaction</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td><div><Button>Borrow</Button></div></td>
                        <td><div><Button>Transaction</Button></div></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td><div><Button>Borrow</Button></div></td>
                        <td><div><Button>Transaction</Button></div></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td><div><Button>Borrow</Button></div></td>
                        <td><div><Button>Transaction</Button></div></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default BorrowBook;