import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Col, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { SubmitButton } from 'views/generic/button';
import { Response } from 'views/generic/response';
import { ChangePasswordFormContainer } from 'views/settings';


class SettingsPage extends Component {

    constructor(props) {
        super(props);

        const { user } = props.application;
        const { form } = props.page;

        form.update({
            gamertag: user.gamertag,
            psn: user.psn,
            steam: user.steam,
            switch: user.switch
        });
    }

    render() {
        const { page } = this.props;
        const { form, response } = page;

        return (
            <Container>
                <h2 className="pb-3 border-bottom mb-5">Settings</h2>

                <Response
                    response={response}
                    onHide={page.resetResponse} />

                <Form className="mb-5">
                    <FormGroup row>
                        <Label md={3}>
                            Gamertag
                        </Label>

                        <Col md={4}>
                            <Input
                                onChange={e => form.update({gamertag: e.target.value})}
                                type="text"
                                value={form.data.gamertag} />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label md={3}>
                            PSN
                        </Label>

                        <Col md={4}>
                            <Input
                                onChange={e => form.update({psn: e.target.value})}
                                type="text"
                                value={form.data.psn} />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label md={3}>
                            Steam
                        </Label>

                        <Col md={4}>
                            <Input
                                onChange={e => form.update({steam: e.target.value})}
                                type="text"
                                value={form.data.steam} />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label md={3}>
                            Switch
                        </Label>

                        <Col md={4}>
                            <Input
                                onChange={e => form.update({switch: e.target.value})}
                                type="text"
                                value={form.data.switch} />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Col md={{offset: 3, size: 4}}>
                            <SubmitButton
                                color="primary"
                                disabled={page.saving}
                                onSubmit={() => page.save(this.props.application)}>
                                Save
                            </SubmitButton>
                        </Col>
                    </FormGroup>
                </Form>

                <ChangePasswordFormContainer />
            </Container>
        );
    }
}

export default inject('application', 'page')(observer(SettingsPage));
