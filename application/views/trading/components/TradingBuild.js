import React from 'react';
import { inject, observer } from 'mobx-react';
import { Button, Card, CardBody, CardTitle, Col, Container, FormGroup, Input, Label, Row } from 'reactstrap';
import { PlatformSelect } from 'views/platforms';
import { TradeItemsDisplay } from 'views/trading';


function TradingBuild({tradingBuildStore}) {

    const { form } = tradingBuildStore;

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

                            <TradeItemsDisplay
                                editable
                                items={form.data.haveItems}
                                onAddItem={item => form.update({haveItems: [...form.data.haveItems, item]})} />
                        </CardBody>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card>
                        <CardBody>
                            <CardTitle>
                                Want Items
                            </CardTitle>

                            <TradeItemsDisplay
                                editable
                                items={form.data.wantItems}
                                onAddItem={item => form.update({wantItems: [...form.data.wantItems, item]})} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-3">
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
                                        onChange={e => form.update({description: e.target.value})}
                                        rows="10"
                                        type="textarea"
                                        value={form.data.description} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label md={2}>
                                    Platform
                                </Label>

                                <Col md={3}>
                                    <PlatformSelect
                                        onChange={platform => form.update({platform: platform})}
                                        value={form.data.platform} />
                                </Col>
                            </FormGroup>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <Button
                        color="success">
                        Add Trade
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default inject('tradingBuildStore')(observer(TradingBuild));
