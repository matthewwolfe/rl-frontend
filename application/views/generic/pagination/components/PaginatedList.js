import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import { Loader } from 'views/generic/loader';
import { Pagination } from 'views/generic/pagination';


function PaginatedList({className, emptyRenderer, pagination, renderer, rows}) {

    if (pagination.loading) {
        return (<Loader />);
    }

    const paginationComponent = (
        <Pagination
            className="float-right"
            page={pagination.page}
            onChange={page => pagination.changePage(page).fetch()} />
    );

    return (
        <Row className={className}>
            {rows.length === 0 &&
                <Col md={12}>
                    {emptyRenderer()}
                </Col>
            }

            <Col md={12}>
                {rows.length > 0 && paginationComponent}
            </Col>

            <Col md={12}>
                {rows.map(row => renderer(row))}
            </Col>

            <Col md={12}>
                {rows.length > 0 && paginationComponent}
            </Col>
        </Row>
    );
}

PaginatedList.defaultProps = {
    className: ''
};

PaginatedList.propTypes = {
    className: PropTypes.string,
    emptyRenderer: PropTypes.func.isRequired,
    pagination: PropTypes.object.isRequired,
    renderer: PropTypes.func.isRequired,
    rows: PropTypes.any.isRequired
};

export default observer(PaginatedList);
