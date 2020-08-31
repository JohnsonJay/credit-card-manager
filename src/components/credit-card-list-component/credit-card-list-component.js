import React from 'react';
import Table from 'react-bootstrap/cjs/Table';
import Container from "react-bootstrap/cjs/Container";

export default class CreditCardListComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: props.data
        }
    }

    renderCardRow() {
        if(!this.state.data) return;
        return(
            this.state.data.map((card, index) => {
                return (
                    <tr key={index}>
                        <td>{ card.cardHolder }</td>
                        <td>{ card.cardNumber }</td>
                        <td>{ card.expiryDate }</td>
                        <td>{ card.country }</td>
                    </tr>
                )
            })
        )
    }

    render() {
        return(
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
                       this.renderCardRow()
                   }
                   </tbody>
               </Table>
           </Container>
        );
    }
}
