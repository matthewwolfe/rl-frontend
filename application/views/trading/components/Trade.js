import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardSubtitle, CardTitle, Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { TradeItemsDisplay } from 'views/trading';


function Trade({trade, tradeItems, user}) {
    return (
        <Row className="mb-3">
            <Col md={6}>
                <Card>
                    <CardBody>
                        <CardTitle>
                            Have Items
                        </CardTitle>

                        <TradeItemsDisplay items={tradeItems.filter(tradeItem => tradeItem.type === 'have')} />
                    </CardBody>
                </Card>
            </Col>

            <Col md={6}>
                <Card>
                    <CardBody>
                        <CardTitle>
                            Want Items
                        </CardTitle>

                        <TradeItemsDisplay items={tradeItems.filter(tradeItem => tradeItem.type === 'want')} />
                    </CardBody>
                </Card>
            </Col>

            <Col className="mt-3" md={12}>
                <Card>
                    <CardBody>
                        <CardTitle className="d-inline-block">
                            Details
                        </CardTitle>

                        <CardSubtitle className="float-right d-inline-block">
                            {trade.userId === user.id &&
                                <span>
                                    <Link
                                        className="mr-3"
                                        to={`/trading/build/${trade.id}`}>
                                        Edit
                                    </Link>

                                    <Link to="#">
                                        Delete
                                    </Link>
                                </span>

                            }
                        </CardSubtitle>

                        <FormGroup row>
                            <Label md={2}>
                                Description
                            </Label>

                            <Col md={10}>
                                <Input plaintext>
                                    {trade.description}
                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label md={2}>
                                Platform
                            </Label>

                            <Col md={3}>
                                <Input plaintext>
                                    {trade.platform}
                                </Input>
                            </Col>
                        </FormGroup>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}

function mapStoresToProps(stores) {
    return {
        user: stores.application.user
    };
}

export default inject(mapStoresToProps)(observer(Trade));
