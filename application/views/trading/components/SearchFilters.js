import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import { Button, Card, CardBody, Col, Form, Label, Table } from 'reactstrap';
import { CertificationSelect } from 'views/certifications';
import { ColorSelect } from 'views/colors';
import { ItemSelect } from 'views/items';
import { PlatformSelect } from 'views/platforms';
import { SearchFilter } from 'views/trading';


const INITIAL_STATE = {
    searchFilters: [],
    form: {
        certificationId: 0,
        colorId: 0,
        itemId: 0,
        platform: ''
    }
};

class SearchFilters extends Component {

    constructor(props) {
        super(props);

        this.state = Object.assign({}, INITIAL_STATE);
    }

    get form() {
        return this.state.form;
    }

    get isFormEmpty() {
        for (const property in this.form) {
            if (this.form[property] !== INITIAL_STATE.form[property]) {
                return false;
            }
        }

        return true;
    }

    @autobind
    addSearchItem() {
        this.setState({
            searchFilters: [...this.state.searchFilters, Object.assign({}, this.form)],
            form: Object.assign({}, INITIAL_STATE.form)
        });
    }

    @autobind
    removeSearchItem(index) {
        this.setState({
            searchFilters: [...this.state.searchFilters.slice(0, index), ...this.state.searchFilters.slice(index + 1)]
        });
    }

    @autobind
    updateForm(newState) {
        this.setState({form: {...this.state.form, ...newState}});
    }

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

                        <PlatformSelect
                            className="mr-2"
                            onChange={platform => this.updateForm({platform: platform})}
                            value={this.form.platform} />

                        <Label className="ml-2 mr-2">
                            Item
                        </Label>

                        <ItemSelect
                            onChange={id => this.updateForm({itemId: id})}
                            value={this.form.itemId} />

                        <Label className="ml-2 mr-2">
                            Paint
                        </Label>

                        <ColorSelect
                            onChange={id => this.updateForm({colorId: id})}
                            value={this.form.colorId} />

                        <Label className="ml-2 mr-2">
                            Certification
                        </Label>

                        <CertificationSelect
                            onChange={id => this.updateForm({certificationId: id})}
                            value={this.form.certificationId} />

                        <Button
                            className="ml-2"
                            color="success"
                            disabled={this.isFormEmpty}
                            onClick={() => this.addSearchItem()}>
                            Add Filter
                        </Button>
                    </Form>

                    {this.state.searchFilters.length > 0 &&
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Platform</th>
                                    <th>Item</th>
                                    <th>Paint</th>
                                    <th>Certification</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.state.searchFilters.map((searchFilter, index) => (
                                    <SearchFilter
                                        key={`search-filter-${index}`}
                                        removeSearchItem={() => this.removeSearchItem(index)}
                                        searchFilter={searchFilter} />
                                ))}
                            </tbody>
                        </Table>
                    }
                </CardBody>
            </Card>
        );
    }
}

export default SearchFilters;
