import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import PropTypes from 'prop-types';
import { PropTypes as MobxPropTypes } from 'mobx-react';
import { Button, Col, Form, FormGroup, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { CertificationSelect } from 'views/certifications';
import { ColorSelect } from 'views/colors';
import { CrateSelect } from 'views/crates';
import { ItemSelect } from 'views/items';


class TradeItemModal extends Component {

    INITIAL_STATE = {
        certificationId: 0,
        colorId: 0,
        crateId: 0,
        itemId: 0,
    };

    constructor(props) {
        super(props);

        this.state = Object.assign({}, this.INITIAL_STATE);
    }

    componentWillReceiveProps({isOpen, item}) {
        if (!this.props.isOpen && isOpen && item) {
            this.setState({
                certificationId: item.certificationId,
                colorId: item.colorId,
                crateId: item.crateId,
                itemId: item.itemId
            });
        }
    }

    @autobind
    reset() {
        this.setState(Object.assign({}, this.INITIAL_STATE));
    }

    @autobind
    save() {
        this.props.onSave(this.state);
        this.props.toggle();
        this.reset();
    }

    render() {
        const { isOpen, toggle } = this.props;

        return (
            <Modal
                isOpen={isOpen}
                toggle={toggle}>

                <ModalHeader>
                    Add New Item
                </ModalHeader>

                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Label md={3}>
                                Item
                            </Label>

                            <Col md={9}>
                                <ItemSelect
                                    onChange={itemId => this.setState({itemId: itemId})}
                                    value={this.state.itemId} />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label md={3}>
                                Certification
                            </Label>

                            <Col md={9}>
                                <CertificationSelect
                                    onChange={certificationId => this.setState({certificationId: certificationId})}
                                    value={this.state.certificationId} />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label md={3}>
                                Paint
                            </Label>

                            <Col md={9}>
                                <ColorSelect
                                    onChange={colorId => this.setState({colorId: colorId})}
                                    value={this.state.colorId} />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label md={3}>
                                Crate
                            </Label>

                            <Col md={9}>
                                <CrateSelect
                                    onChange={crateId => this.setState({crateId: crateId})}
                                    value={this.state.crateId} />
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>

                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={this.save}>
                        Add Item
                    </Button>

                    <Button
                        color="secondary"
                        onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}

TradeItemModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    item: MobxPropTypes.objectOrObservableObject,
    onSave: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired
};

export default TradeItemModal;
