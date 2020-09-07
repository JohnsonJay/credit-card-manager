import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const bannedCountriesListComponent = props => (
    <ListGroup>
        {props.data.map((country, index) => <ListGroup.Item key={index}>{country}</ListGroup.Item>)}
    </ListGroup>
);

export default bannedCountriesListComponent;
