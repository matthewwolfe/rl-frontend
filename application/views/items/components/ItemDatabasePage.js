import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import { Item } from 'views/items';


class ItemDatabasePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            itemTypeId: 0
        };
    }

    render() {
        const { items, itemTypes } = this.props;

        return (
            <Container className="item-database">
                <Nav tabs>
                    {itemTypes.values().map(itemType => (
                        <ItemTypeTab
                            className={this.state.itemTypeId === itemType.id ? 'active' : ''}
                            key={itemType.id}
                            itemType={itemType}
                            onClick={() => this.setState({itemTypeId: itemType.id})} />
                    ))}
                </Nav>

                <TabContent className="mt-4">
                    <TabPane>
                        <Row>
                            {items.byType(this.state.itemTypeId).map(item => (
                                <Item
                                    key={item.id}
                                    item={item} />
                            ))}
                        </Row>
                    </TabPane>
                </TabContent>
            </Container>
        );
    }
}

function ItemTypeTab({className, itemType, onClick}) {
    return (
        <NavItem>
            <NavLink
                className={className}
                onClick={onClick}>
                {itemType.name}
            </NavLink>
        </NavItem>
    );
}

function mapStoresToProps(stores) {
    return {
        items: stores.application.items,
        itemTypes: stores.application.itemTypes
    };
}

export default inject(mapStoresToProps)(observer(ItemDatabasePage));
