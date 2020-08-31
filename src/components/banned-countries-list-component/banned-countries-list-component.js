import React from 'react';
import ListGroup from 'react-bootstrap/cjs/ListGroup';

export default class BannedCountriesListComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          data: this.props.data
        };
    }

    render() {
        if (!this.state.data) return;
        return (
            <ListGroup>
                {this.state.data.map((country, index) => <ListGroup.Item key={index}>{country}</ListGroup.Item>)}
            </ListGroup>
        );
    }
}
