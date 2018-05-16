import React, { Component } from 'react';
import { Button, Card, CardBody, Col, Form, Input, Label } from 'reactstrap';
import { CertificationSelect } from 'views/certifications';
import { ColorSelect } from 'views/colors';


const INITIAL_STATE = {
    certification: 0,
    color: 0,
    item: 0,
    platform: ''
};

class SearchFilters extends Component {

    state = Object.assign({}, INITIAL_STATE);

    render() {
        return (
            <Card>
                <CardBody>
                    <Col md={12}>
                        <div className="float-right">
                            <Button
                                className="mr-1"
                                color="primary">
                                Search
                            </Button>
                            <Button
                                color="primary"
                                onClick={() => this.setState(Object.assign({}, INITIAL_STATE))}>
                                Clear Filters
                            </Button>
                        </div>

                        <div className="clearfix" />
                    </Col>

                    <Form className="mt-3" inline>
                        <Label className="mr-2">
                            Platform
                        </Label>

                        <Input
                            className="mr-2"
                            onChange={e => this.setState({platform: e.target.value})}
                            type="select"
                            value={this.state.platform}>

                            <option value="">
                                All
                            </option>

                            <option value="pc">
                                PC
                            </option>

                            <option value="ps4">
                                PS4
                            </option>

                            <option value="switch">
                                Switch
                            </option>

                            <option value="xbox">
                                Xbox
                            </option>
                        </Input>

                        <Label className="ml-2 mr-2">
                            Paint
                        </Label>

                        <ColorSelect
                            className="mr-2"
                            onChange={id => this.setState({color: id})}
                            value={this.state.color} />

                        <Label className="ml-2 mr-2">
                            Certification
                        </Label>

                        <CertificationSelect
                            className="mr-2"
                            onChange={id => this.setState({certification: id})}
                            value={this.state.certification} />
                    </Form>
                </CardBody>
            </Card>
        );
    }
}

export default SearchFilters;
