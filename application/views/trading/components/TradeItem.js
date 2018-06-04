import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import { titleCaseToDashes } from 'libraries/string';
import { Icon } from 'views/generic/icon';
import { TradeItemModal } from 'views/trading';


class TradeItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    @autobind
    toggleModal() {
        if (this.props.editable) {
            this.setState({isOpen: !this.state.isOpen});
        }
    }

    render() {
        const { certifications, colors, items, editable, item } = this.props;

        return (
            <Col md={3}>
                <div
                    className={`trade-item ${item ? 'has-item' : ''}`}
                    onClick={() => {
                        if (!item) {
                            this.toggleModal();
                        }
                    }}>
                    {item &&
                        <div className="item">
                            <img src={`${process.env.FRONTEND_URL}/item_images/${item.itemId}.png`} />

                            {editable &&
                                <span>
                                    <Icon
                                        onClick={this.toggleModal}
                                        type="pencil" />
                                    <Icon
                                        onClick={this.props.onRemoveItem}
                                        type="x" />
                                </span>
                            }

                            {item.colorId > 0 &&
                                <div className={`color color-${titleCaseToDashes(colors.get(item.colorId).name)}`}>
                                    text
                                </div>
                            }

                            <p className="mb-0 item-name text-center">
                                {items.get(item.itemId).name}
                            </p>

                            {item.certificationId > 0 &&
                                <p className="mb-0 certification text-center">
                                    {certifications.get(item.certificationId).name}
                                </p>
                            }
                        </div>
                    }

                    {editable &&
                        <TradeItemModal
                            isOpen={this.state.isOpen}
                            item={item}
                            onSave={this.props.onAddItem}
                            toggle={this.toggleModal} />
                    }
                </div>
            </Col>

        );
    }
}

function mapStoresToProps(stores) {
    return {
        certifications: stores.application.certifications,
        colors: stores.application.colors,
        crates: stores.application.crates,
        items: stores.application.items
    };
}

TradeItem.defaultProps = {
    editable: false
};

TradeItem.propTypes = {
    editable: PropTypes.bool,
    item: MobxPropTypes.objectOrObservableObject,
    onAddItem: PropTypes.func,
    onRemoveItem: PropTypes.func
};

export default inject(mapStoresToProps)(observer(TradeItem));
