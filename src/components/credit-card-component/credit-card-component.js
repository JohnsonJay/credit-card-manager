import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/cjs/Container';
import Row from 'react-bootstrap/cjs/Row';
import Col from 'react-bootstrap/cjs/Col';
import CreditCardInput from 'react-credit-card-input';
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import CreditCardListComponent from '../credit-card-list-component/credit-card-list-component';
import BannedCountriesListComponent from "../banned-countries-list-component/banned-countries-list-component";

export default class CreditCardComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gradient: 1,
            cardHolder: '',
            cardNumber: '',
            expiryDate: '',
            country: '',
            cvc: '',
            cardData: [],
            bannedCountries: [],
            bannedCountry: ''
        }
    }

    generateRandomNum() {
        const newGradient = Math.floor(Math.random() * 10) + 1;
        this.setState({
            gradient: newGradient
        });
    }

    componentDidMount() {
        this.generateRandomNum();
    }

    checkIfCardIsBanned(country) {
        return this.state.bannedCountries.includes(country);
    }

    checkIfCardExists(cardNumber) {
        const cardList = this.state.cardData.map(card => card.cardNumber);
        return cardList.includes(cardNumber);
    }

    banCountry(country) {
        if (country.length > 0 && !this.state.bannedCountries.includes(country)) {
            const bannedCountryLists = this.state.bannedCountries;
            bannedCountryLists.push(country);
            this.setState({
                bannedCountries: bannedCountryLists
            });
        }
    }

    addCreditCard() {
        if (!this.checkIfCardIsBanned(this.state.country) && !this.checkIfCardExists(this.state.cardNumber)) {
            const cardList = this.state.cardData;

            cardList.push({
                cardHolder: this.state.cardHolder,
                cardNumber: this.state.cardNumber,
                expiryDate: this.state.expiryDate,
                country: this.state.country
            });

            this.setState({
                cardData: cardList
            });
        }
    }

    handleStateChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <div className={`jca-credit-card jca-credit-card--gradient-${ this.state.gradient }`}>
                            <div className="jca-credit-card__logo">
                                <img src="https://cdn.worldvectorlogo.com/logos/visa.svg" alt="Visa logo" />
                                <div className="jca-credit-card__type">Credit Card</div>
                            </div>
                            <div className="jca-credit-card__card-number">
                                <p data-mask="visa">{ this.state.cardNumber }</p>
                            </div>
                            <div className="jca-credit-card__meta">
                                <div className="jca-credit-card__owner">
                                    <div className="jca-credit-card__label">Card Holder</div>
                                    <div className="jca-credit-card__text">
                                        <p>{ this.state.cardHolder }</p>
                                    </div>
                                </div>
                                <div className="jca-credit-card__expiry">
                                    <div className="jca-credit-card__label">Expiry Date</div>
                                    <div className="jca-credit-card__text">
                                        <p>{ this.state.expiryDate }</p>
                                    </div>
                                </div>
                                <div className="jca-credit-card__cvv">
                                    <div className="jca-credit-card__label">CVC/CVV</div>
                                    <div className="jca-credit-card__text">
                                        <p>{ this.state.cvc }</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>

                        <CreditCardInput
                            cardNumberInputProps={{
                                value: this.state.cardNumber,
                                onChange: (e) => this.handleStateChange(e),
                                name: "cardNumber"
                            }}
                            cardExpiryInputProps={{
                                value: this.state.expiryDate,
                                onChange: (e) => this.handleStateChange(e),
                                name: "expiryDate"
                            }}
                            cardCVCInputProps={{
                                value: this.state.cvc,
                                onChange: (e) => this.handleStateChange(e),
                                name: "cvc"
                            }}
                            fieldClassName="input"
                        />

                        <Form>
                            <Form.Group controlId="cardHolder">
                                <Form.Label>Card Holder Name</Form.Label>
                                <Form.Control name="cardHolder" type="text" placeholder="Enter card holder name" onChange={(e) => this.handleStateChange(e)}/>
                            </Form.Group>

                            <Form.Group controlId="country">
                                <Form.Label>Country</Form.Label>
                                <Form.Control name="country" type="text" placeholder="Enter country of origin" onChange={(e) => this.handleStateChange(e)} />
                            </Form.Group>

                            <div className="btn btn-outline-success" onClick={() => this.addCreditCard()}>
                                Add credit card
                            </div>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CreditCardListComponent data={ this.state.cardData }/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
                            <Button variant="outline-success" onClick={() => this.banCountry(this.state.bannedCountry)}>Ban a country</Button>

                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="btnGroupAddon">Country</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    type="text"
                                    name="bannedCountry"
                                    placeholder="Add a country to ban"
                                    aria-label="Input group example"
                                    aria-describedby="btnGroupAddon"
                                    onChange={(e) => this.handleStateChange(e)}
                                />
                            </InputGroup>
                        </ButtonToolbar>

                        <BannedCountriesListComponent data={this.state.bannedCountries}/>
                    </Col>
                </Row>
            </Container>
        )

    }
}
