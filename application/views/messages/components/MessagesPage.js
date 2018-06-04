import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import {
    Button, Card, CardBody, CardFooter, Col, Container, Form, FormGroup, Input, ListGroup, ListGroupItem, Row
} from 'reactstrap';


@inject('page')
@observer
class MessagesPage extends Component {

    constructor(props) {
        super(props);

        this.props.page.initialize();
    }

    render() {
        return (
            <Container
                className="messages"
                fluid>

                <Row>
                    <Col md={4}>
                        <ListGroup>
                            <ListGroupItem>
                                User 1
                            </ListGroupItem>
                            <ListGroupItem>
                                User 2
                            </ListGroupItem>
                            <ListGroupItem>
                                User 3
                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col md={7}>
                        <Card>
                            <CardBody />

                            <CardFooter>
                                <Form inline>
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
