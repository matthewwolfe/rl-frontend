import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import {
    Button, Card, CardBody, CardFooter, Col, Container, Form, FormGroup, Input, ListGroup, ListGroupItem, Row
} from 'reactstrap';
import { Message } from 'views/messages';


@inject('page')
@observer
class MessagesPage extends Component {

    constructor(props) {
        super(props);

        this.props.page.initialize();
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

                            <CardFooter>
                                <Form className="mb-0" inline>
                                    <FormGroup className="w-100">
                                        <Input
                                            className="w-85"
                                            type="textarea" />

                                        <Button
                                            className="ml-3"
                                            color="success">
                                            Send
                                        </Button>
                                    </FormGroup>
                                </Form>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default MessagesPage;
