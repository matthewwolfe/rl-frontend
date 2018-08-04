import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import { inject, observer } from 'mobx-react';
import { Button, Card, CardBody, Col, Form, Input, Label, Row, Table } from 'reactstrap';
import { CertificationSelect } from 'views/certifications';
import { ColorSelect } from 'views/colors';
import { CrateSelect } from 'views/crates';
import { ItemSelect } from 'views/items';
import { PlatformSelect } from 'views/platforms';
import { SearchFilter } from 'views/trading';


const INITIAL_STATE = {
    form: {
        certificationId: 0,
        colorId: 0,
        crateId: 0,
        itemId: 0,
    },
    platform: '',
    searchFilters: [],
    type: ''
};

@inject('page')
@observer
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
        const { pagination } = this.props.page;
        const { platform, searchFilters, type } = this.state;

        return (
            <Card>
                <CardBody>
                    <Row>
                        <Col md={12}>
                            <div className="form-inline float-left">
                                <Label className="mr-2">
                                    Type
                                </Label>

                                <Input
                                    className="mr-2"
                                    onChange={e => this.setState({type: e.target.value})}
                                    type="select"
                                    value={type}>

                                    <option value="">
                                        All
                                    </option>
                                    <option value="want">
                                        Want
                                    </option>
                                    <option value="have">
                                        Have
                                    </option>
                                </Input>

                                <Label className="ml-2 mr-2">
                                    Platform
                                </Label>

                                <PlatformSelect
                                    onChange={platform => this.setState({platform: platform})}
                                    value={platform} />
                            </div>

                            <div className="float-right">
                                <Button
                                    className="mr-1"
                                    color="primary"
                                    onClick={() => {
                                        pagination.updateFilters({
                                            platform: platform,
                                            searchFilters: searchFilters,
                                            type: type
                                        }).fetch();
                                    }}>
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
                    </Row>


                    <Form className="mt-3" inline>
                        <ItemSelect
                            className="mr-2"
                            onChange={id => this.updateForm({itemId: id})}
                            value={this.form.itemId} />

                        <ColorSelect
                            className="mr-2"
                            onChange={id => this.updateForm({colorId: id})}
                            value={this.form.colorId} />

                        <CertificationSelect
                            className="mr-2"
                            onChange={id => this.updateForm({certificationId: id})}
                            value={this.form.certificationId} />

                        <CrateSelect
                            className="mr-2"
                            onChange={id => this.updateForm({crateId: id})}
                            value={this.form.crateId} />

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
                                    <th>Crate</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {searchFilters.map((searchFilter, index) => (
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
