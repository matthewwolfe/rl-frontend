import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import {
    Button, Card, CardBody, CardFooter, Col, Container, Form, FormGroup, Input, ListGroup, ListGroupItem, Row
} from 'reactstrap';
import { Message } from 'views/messages';
import { UserFinder } from 'views/users';


@inject('page')
@observer
class MessagesPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: ''
        };

        this.props.page.initialize();
    }

    componentWillUnmount() {
        this.props.page.listener.remove();
    }

    sendMessage() {
        this.props.page.sendMessage(this.state.message);
        this.setState({message: ''});
    }

    render() {
        const { page } = this.props;
        const { messages, selectedUserId, users } = page;

        return (
            <Container
                className="messages"
                fluid>

                <Row>
                    <Col md={4}>
                        <UserFinder
                            className="mb-4"
                            onSelected={user => users.addNew(user)} />

                        <ListGroup>
                            {users.values().map(user => (
                                <ListGroupItem
                                    className={`user ${selectedUserId === user.id ? 'selected' : ''}`}
                                    key={user.id}
                                    onClick={() => page.set({selectedUserId: user.id})}>
                                    {user.username}
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>

                    <Col md={7}>
                        <Card>
                            <CardBody>
                                {selectedUserId > 0 &&
                                    messages.values().filter(message =>
                                        message.userId === selectedUserId ||
                                        message.recipientId === selectedUserId
                                    ).map(message => (
                                        <Message
                                            key={message.id}
                                            message={message} />
                                    ))
                                }
                            </CardBody>

                            {selectedUserId > 0 &&
                                <CardFooter>
                                    <Form className="mb-0" inline>
                                        <FormGroup className="w-100">
                                            <Input
                                                className="w-85"
                                                onChange={e => this.setState({message: e.target.value})}
                                                type="textarea"
                                                value={this.state.message} />

                                            <Button
                                                className="ml-3"
                                                color="success"
                                                onClick={() => this.sendMessage()}>
                                                Send
                                            </Button>
                                        </FormGroup>
                                    </Form>
                                </CardFooter>
                            }
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default MessagesPage;
