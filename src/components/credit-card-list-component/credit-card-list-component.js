import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

const creditCardListComponent = (props) => (
    <Container>
        <Table bordered hover>
            <thead>
            <tr>
                <th>Card holder name</th>
                <th>Card number</th>
                <th>Expiry date</th>
                <th>Country</th>
            </tr>
            </thead>
            <tbody>
            {
                props.data.map((card, index) => {
                    return (
                        <tr key={index}>
                            <td>{ card.cardHolder }</td>
                            <td>{ card.cardNumber }</td>
                            <td>{ card.expiryDate }</td>
                            <td>{ card.country }</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </Table>
    </Container>
)

export default creditCardListComponent
