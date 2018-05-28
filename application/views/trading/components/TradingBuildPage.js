import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Button, Card, CardBody, CardTitle, Col, Container, FormGroup, Input, Label, Row } from 'reactstrap';
import { array } from 'libraries/array';
import { Loader } from 'views/generic/loader';
import { Response } from 'views/generic/response';
import { PlatformSelect } from 'views/platforms';
import { TradeItemsDisplay } from 'views/trading';


@withRouter
@inject('page')
@observer
class TradingBuildPage extends Component {

    constructor(props) {
        super(props);

        const id = parseInt(props.match.params.id);

        if (Number.isInteger(id)) {
            props.page.initialize(id);
        }
        else {
            props.page.set({loading: false});
        }
    }

    render() {
        const { page } = this.props;
        const { form, response } = page;

        return (
            <Container className="trading-build">
                <h1 className="mb-4">New Trade</h1>

                <Response
                    onHide={page.resetResponse}
                    response={response} />

                <Loader loading={page.loading}>
                    {() => (
                        <div>
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
                                                onAddItem={(item, index) => {
                                                    form.update({
                                                        haveItems: array.addAtIndex(form.data.haveItems, item, index)
                                                    });
                                                }}
                                                onRemoveItem={(item, index) => {
                                                    form.update({
                                                        haveItems: array.removeAtIndex(form.data.haveItems, index)
                                                    });
                                                }} />
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
                                                onAddItem={(item, index) => {
                                                    form.update({
                                                        wantItems: array.addAtIndex(form.data.wantItems, item, index)
                                                    });
                                                }}
                                                onRemoveItem={(item, index) => {
                                                    form.update({
                                                        wantItems: array.removeAtIndex(form.data.wantItems, index)
                                                    });
                                                }} />
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
                                        color="success"
                                        disabled={page.saving}
                                        onClick={() => page.save()}>
                                        Add Trade
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    )}
                </Loader>
            </Container>
        );
    }
}

export default TradingBuildPage;
