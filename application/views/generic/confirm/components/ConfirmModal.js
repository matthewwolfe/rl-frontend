import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import PropTypes from 'prop-types';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';


class ConfirmModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
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
    toggle() {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        const { isOpen } = this.state;
        const { children, onConfirm } = this.props;

        return (
            <Modal
                isOpen={isOpen}
                toggle={() => this.toggle()}>
                <ModalHeader>
                    Confirm your action
                </ModalHeader>

                <ModalBody>
                    {children}
                </ModalBody>

                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={() => {
                            onConfirm();
                            this.toggle();
                        }}>
                        Confirm
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

ConfirmModal.propTypes = {
    children: PropTypes.node.isRequired,
    onConfirm: PropTypes.func.isRequired,
    target: PropTypes.string.isRequired
};

export default ConfirmModal;
