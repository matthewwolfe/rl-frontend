import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import { Loader } from 'views/generic/loader';
import { Pagination } from 'views/generic/pagination';


function PaginatedList({className, pagination, renderer}) {

    if (pagination.loading) {
        return (<Loader />);
    }

    const paginationComponent = (
        <Pagination
            className="float-right"
            page={pagination.page}
            lastPage={pagination.lastPage}
            onChange={page => pagination.changePage(page).fetch()} />
    );

    return (
        <Row className={className}>
            <Col md={12}>
                {paginationComponent}
            </Col>

            <Col md={12}>
                {pagination.data.map(row => renderer(row))}
            </Col>

            <Col md={12}>
                {paginationComponent}
            </Col>
        </Row>
    );
}

PaginatedList.defaultProps = {
    className: ''
};

PaginatedList.propTypes = {
    className: PropTypes.string,
    pagination: PropTypes.object.isRequired,
    renderer: PropTypes.func.isRequired
};

export default observer(PaginatedList);
