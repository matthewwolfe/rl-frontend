import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Button, Card, CardBody, CardTitle, Col, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { isLoggedIn } from 'libraries/session';


@inject('page')
@observer
class LoginPage extends Component {

    constructor(props) {
        super(props);

        if (isLoggedIn()) {
            window.location.href = '/';
        }
    }

    render() {
        const { page } = this.props;
        const { form, loggingIn } = page;

        return (
            <Container className="login">
                <Card className="w-50 mx-auto mt-5">
                    <CardBody>
                        <CardTitle className="text-center">
                            Login
                        </CardTitle>

                        <Form>
                            <FormGroup row>
                                <Label md={3}>
                                    Email
                                </Label>

                                <Col md={7}>
                                    <Input
                                        onChange={e => form.update({email: e.target.value})}
                                        type="text"
                                        value={form.data.email} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label md={3}>
                                    Password
                                </Label>

                                <Col md={7}>
                                    <Input
                                        onChange={e => form.update({password: e.target.value})}
                                        type="password"
                                        value={form.data.password} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md={{offset: 3, size: 7}}>
                                    <Button
                                        color="primary"
                                        disabled={loggingIn}
                                        onClick={() => page.login()}>
                                        Log In
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Container>
        );
    }
}

export default LoginPage;
