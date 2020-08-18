import React from 'react';
import { Table } from 'react-bootstrap'

const Sell = ({ sellhistory }) => {
    if (!sellhistory) return null
    console.log(sellhistory[1].productInfo.title)
    const number = 0
    return (

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>id</th>
                    <th>User</th>
                    <th>PostNumber</th>
                </tr>
            </thead>
            <tbody>

                {sellhistory.map((index,numbers) =>
                    <tr key={index._id}>
                        <td>{numbers}</td>
                        <td>{index.productInfo.title}</td>
                        <td>{index.user}</td>
                        <td>{index.deliveryNumber}</td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
}

export default Sell