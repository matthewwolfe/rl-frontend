import React from 'react';
import { Button, Card, CardBody, Form, Input, Label } from 'reactstrap';
import { ColorSelect } from 'views/colors';


function SearchFilters() {
    return (
        <Card>
            <CardBody>
                <Form inline>
                    <Label className="mr-2">
                        Platform
                    </Label>

                    <Input
                        className="mr-2"
                        type="select">

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

                    <Label className="mr-2">
                        Color
                    </Label>

                    <ColorSelect
                        className="mr-2" />

                    <Button
                        className="mr-1"
                        color="primary">
                        Search
                    </Button>
                    <Button
                        color="primary">
                        Clear Filters
                    </Button>
                </Form>
            </CardBody>
        </Card>
    );
}

export default SearchFilters;
