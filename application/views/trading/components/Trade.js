import React from 'react';
import { inject, observer } from 'mobx-react';
import { FormattedRelative } from 'react-intl';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { ConfirmModal } from 'views/generic/confirm';
import { TextOrDefault } from 'views/generic/text';
import { FlagTradeModal } from 'views/flags';
import { TradeItemsDisplay } from 'views/trading';


function Trade({trade, tradeItems, user}) {
    return (
        <Row className="mb-5">
            <Col md={6}>
                <Card>
                    <CardBody>
                        <CardTitle>
                            Have Items
                        </CardTitle>

                        <TradeItemsDisplay
                            items={tradeItems.filter(tradeItem => tradeItem.type === 'have')} />
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
                    <CardHeader>
                        Last Updated: <FormattedRelative value={trade.updatedAt} />

                        <span className="float-right">
                            Posted: <FormattedRelative value={trade.createdAt} />
                        </span>
                    </CardHeader>

                    <CardBody>
                        <CardTitle className="mb-0 d-inline-block">
                            Details
                        </CardTitle>

                        <CardSubtitle className="float-right d-inline-block">
                            <span>
                                <Link
                                    className="mr-3"
                                    id={`trade-flag-${trade.id}`}
                                    to="#">
                                    Flag
                                </Link>

                                <FlagTradeModal
                                    target={`trade-flag-${trade.id}`}
                                    trade={trade} />
                            </span>

                            {trade.userId === user.id &&
                                <span>
                                    <Link
                                        className="mr-3"
                                        to={`/trading/build/${trade.id}`}>
                                        Edit
                                    </Link>

                                    <Link
                                        id={`trade-delete-${trade.id}`}
                                        to="#">
                                        Delete
                                    </Link>

                                    <ConfirmModal
                                        onConfirm={() => trade.delete()}
                                        target={`trade-delete-${trade.id}`}>
                                        Are you sure you want to delete this trade?
                                    </ConfirmModal>
                                </span>
                            }
                        </CardSubtitle>

                        <FormGroup className="mb-0" row>
                            <Label md={2}>
                                Description
                            </Label>

                            <Col md={10}>
                                <Input plaintext>
                                    <TextOrDefault
                                        defaultValue="N/A"
                                        value={trade.description} />
                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup className="mb-0" row>
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
