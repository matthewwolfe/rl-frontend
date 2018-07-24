import React from 'react';
import PropTypes from 'prop-types';
import { Pagination as BasePagination, PaginationItem, PaginationLink } from 'reactstrap';


function Pagination({className, onChange, page}) {
    return (
        <BasePagination className={className}>
            {page > 1 &&
                <PaginationItem>
                    <PaginationLink
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            onChange(page - 1);
                        }}
                        previous />
                </PaginationItem>
            }

            <PaginationItem active>
                <PaginationLink
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                    }}>
                    {page}
                </PaginationLink>
            </PaginationItem>
        </BasePagination>
    );
}

Pagination.defaultProps = {
    className: ''
};

Pagination.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired
};

export default Pagination;
