import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import PropTypes from 'prop-types';
import { request } from 'libraries/request';
import Select from 'react-select';
import { Button, Col, Row } from 'reactstrap';


class UserFinder extends Component {

    constructor() {
        super();

        this.state = {
            selected: null,
            users: []
        };
    }

    @autobind
    getUsers(username) {
        if (username.length === 0) {
            return;
        }

        request.post({
            url: '/users/search',
            data: {
                username: username
            }
        }).then(({users}) => {
            this.setState({
                users: users
            });
        });
    }

    render() {
        const { className, onSelected } = this.props;
        const { selected, users } = this.state;

        const options = users.map(user => ({
            label: user.username,
            value: user.id
        }));

        return (
            <Row className={className}>
                <Col md={9}>
                    <Select
                        isClearable={true}
                        onChange={selected => this.setState({selected: selected})}
                        onInputChange={username => this.getUsers(username)}
                        options={options}
                        value={this.state.selected} />
                </Col>
                <Col md={3}>
                    <Button
                        className="float-right"
                        disabled={selected === null}
                        onClick={() => onSelected(users.find(user => user.id === selected.value))}>
                        Select
                    </Button>
                </Col>
            </Row>
        );
    }
}

UserFinder.defaultProps = {
    className: ''
};

UserFinder.propTypes = {
    className: PropTypes.string,
    onSelected: PropTypes.func.isRequired
};

export default UserFinder;
