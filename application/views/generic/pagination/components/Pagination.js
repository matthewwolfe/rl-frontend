import React from 'react';
import PropTypes from 'prop-types';
import { Pagination as BasePagination, PaginationItem, PaginationLink } from 'reactstrap';


function Pagination({className, onChange, page, lastPage}) {
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

            {page < lastPage &&
                <PaginationItem>
                    <PaginationLink
                        href="#"
                        next
                        onClick={(e) => {
                            e.preventDefault();
                            onChange(lastPage);
                        }} />
                </PaginationItem>
            }
        </BasePagination>
    );
}

Pagination.defaultProps = {
    className: ''
};

Pagination.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    lastPage: PropTypes.number.isRequired
};

export default Pagination;
