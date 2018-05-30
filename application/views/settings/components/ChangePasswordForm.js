import React from 'react';
import { inject, observer } from 'mobx-react';
import { Col, Form, FormGroup, Input, Label } from 'reactstrap';
import { SubmitButton } from 'views/generic/button';
import { Response } from 'views/generic/response';

function ChangePasswordForm({page}) {
    const { form, response } = page;

    return (
        <Form>
            <h2 className="pb-3 mb-5 border-bottom">Change Password</h2>

            <Response
                response={response}
                onHide={page.resetResponse} />

            <FormGroup row>
                <Label md={3}>
                    Password
                </Label>

                <Col md={4}>
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

                <Col md={4}>
                    <Input
                        onChange={e => form.update({passwordConfirm: e.target.value})}
                        type="password"
                        value={form.data.passwordConfirm} />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Col md={{offset: 3, size: 4}}>
                    <SubmitButton
                        color="primary"
                        disabled={page.loading}
                        onSubmit={() => page.save(this.props.application)}>
                        Save
                    </SubmitButton>
                </Col>
            </FormGroup>
        </Form>
    );
}

export default inject('application', 'page')(observer(ChangePasswordForm));
