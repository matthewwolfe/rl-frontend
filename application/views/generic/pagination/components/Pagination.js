import React from 'react';
import { Pagination as BasePagination, PaginationItem, PaginationLink } from 'reactstrap';


function Pagination({className, onChange, page, total}) {
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

            {page < total &&
                <PaginationItem>
                    <PaginationLink
                        href="#"
                        next
                        onClick={(e) => {
                            e.preventDefault();
                            onChange(total);
                        }} />
                </PaginationItem>
            }
        </BasePagination>
    );
}

export default Pagination;
