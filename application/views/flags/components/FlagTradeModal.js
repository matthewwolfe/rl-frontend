import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import { PropTypes as MobxPropTypes } from 'mobx-react';
import PropTypes from 'prop-types';
import { HttpError } from 'errors';
import { request } from 'libraries/request';
import { Alert, Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Response } from 'views/generic/response';


class FlagTradeModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            reason: '',
            response: {
                status: 'success',
                message: 'Test response working'
            },
            saving: false,
            saved: false
        };

        this.target = null;
    }

    componentDidMount() {
        this.target = document.getElementById(this.props.target);
        this.target.onclick = this.onTargetClicked;
    }

    @autobind
    onTargetClicked() {
        this.toggle();
    }

    @autobind
    reset() {
        this.setState({reason: ''});
    }

    @autobind
    async save() {
        this.setState({saving: true});

        try {
            await request.post({
                url: '/trades/flag',
                data: {
                    id: this.props.trade.id,
                    reason: this.state.reason
                }
            });

            this.setState({
                response: {
                    status: 'success',
                    message: 'Successfully flagged trade.'
                },
                saved: true
            });
        }
        catch (error) {
            if (error instanceof HttpError) {
                this.setState({
                    response: {
                        status: 'error',
                        message: error.errors
                    },
                    saved: true
                });
            }
        }
        finally {
            this.setState({saving: false});
        }
    }

    @autobind
    toggle() {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        const { isOpen } = this.state;

        return (
            <Modal
                isOpen={isOpen}
                onExit={() => this.reset()}
                toggle={() => this.toggle()}>

                <ModalHeader>
                    Flag Trade
                </ModalHeader>

                <ModalBody>
                    <Response response={this.state.response} />

                    <Form>
                        <Alert color="info">
                            Trades should be flagged if they
                            contain <strong>spam</strong> or <strong>offensive content</strong>, or if it
                            is a <strong>suspected scam</strong>. Trades with many flags will be temporarily disabled
                            until an administrator can view the
                            trade. <strong>Abuse of flagging trades will result in a permanent ban.</strong>
                        </Alert>

                        <FormGroup row>
                            <Label md={3}>
                                Reason
                            </Label>

                            <Col md={9}>
                                <Input
                                    onChange={e => this.setState({reason: e.target.value})}
                                    rows={8}
                                    type="textarea"
                                    value={this.state.reason} />
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>

                <ModalFooter>
                    <Button
                        color="primary"
                        disabled={this.state.saving || this.state.saved}
                        onClick={() => this.save()}>
                        Submit Report
                    </Button>

                    <Button
                        color="secondary"
                        onClick={() => this.toggle()}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}

FlagTradeModal.propTypes = {
    target: PropTypes.string.isRequired,
    trade: MobxPropTypes.objectOrObservableObject.isRequired
};

export default FlagTradeModal;
