import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Col, Container, FormGroup, Input, Label, Row } from 'reactstrap';
import { TradeItemsDisplay } from 'views/trading';


class TradingBuild extends Component {

    constructor(props) {
        super(props);

        this.state = {
            description: '',
            haveItems: [],
            wantItems: []
        };
    }

    render() {
        return (
            <Container className="trading-build">
                <h1 className="mb-4">New Trade</h1>

                <Row className="mb-3">
                    <Col md={6}>
                        <Card>
                            <CardBody>
                                <CardTitle>
                                    Have Items
                                </CardTitle>

                                <TradeItemsDisplay items={this.state.haveItems} />
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card>
                            <CardBody>
                                <CardTitle>
                                    Want Items
                                </CardTitle>

                                <TradeItemsDisplay items={this.state.wantItems} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row className="mb-5">
                    <Col md={12}>
                        <Card>
                            <CardBody>
                                <CardTitle>
                                    Details
                                </CardTitle>

                                <FormGroup row>
                                    <Label md={2}>
                                        Description
                                    </Label>

                                    <Col md={10}>
                                        <Input
                                            className="w-100"
                                            onChange={e => this.setState({description: e.target.value})}
                                            rows="10"
                                            type="textarea"
                                            value={this.state.description} />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label md={2}>
                                        Platform
                                    </Label>

                                    <Col md={10}>
                                        
                                    </Col>
                                </FormGroup>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default TradingBuild;
