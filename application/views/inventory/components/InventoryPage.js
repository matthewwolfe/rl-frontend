import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Button, Container } from 'reactstrap';
import { PageHeader } from 'views/generic/page';
import { SaveItemModal } from 'views/trading';


@inject('application', 'page')
@observer
class InventoryPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };

        this.props.page.initialize(this.props.application.user.id);
    }

    render() {
        const { page } = this.props;

        return (
            <Container>
                <PageHeader>
                    <h2>Inventory</h2>
                    <Button
                        className="float-right"
                        color="primary"
                        onClick={() => this.setState({isOpen: true})}>
                        Add Item
                    </Button>
                </PageHeader>

                <SaveItemModal
                    isOpen={this.state.isOpen}
                    item={undefined}
                    onSave={item => page.addItem(item)}
                    toggle={() => this.setState({isOpen: !this.state.isOpen})} />
            </Container>
        );
    }
}

export default InventoryPage;
