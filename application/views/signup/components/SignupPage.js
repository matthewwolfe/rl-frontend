import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardTitle, Col, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { isLoggedIn } from 'libraries/session';
import { SubmitButton } from 'views/generic/button';
import { Response } from 'views/generic/response';


@inject('page')
@observer
class SignupPage extends Component {

    constructor(props) {
        super(props);

        if (isLoggedIn()) {
            window.location.href = '/';
        }
    }

    render() {
        const { page } = this.props;
        const { form, response } = page;

        return (
            <Container className="login">
                <Card className="w-50 mx-auto mt-5">
                    <CardBody>
                        <CardTitle className="text-center">
                            Sign Up
                        </CardTitle>

                        <Response
                            response={response}
                            onHide={page.resetResponse} />

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
                                <Label md={3}>
                                    Confirm Password
                                </Label>

                                <Col md={7}>
                                    <Input
                                        onChange={e => form.update({passwordConfirm: e.target.value})}
                                        type="password"
                                        value={form.data.passwordConfirm} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md={{offset: 3, size: 7}}>
                                    <SubmitButton
                                        color="primary"
                                        disabled={page.loading}
                                        onSubmit={() => page.signup()}>
                                        Sign Up
                                    </SubmitButton>

                                    <Button
                                        className="ml-2"
                                        color="primary"
                                        tag={Link}
                                        to="/login">
                                        Go to login
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

export default SignupPage;
