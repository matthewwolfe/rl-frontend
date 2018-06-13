import { action, observable } from 'mobx';
import { request } from 'libraries/request';


class Pagination {

    @observable loading = false;
    onFetch;
    url = '';

    @observable data = [];
    @observable filters = {};
    @observable lastPage;
    @observable limit;
    @observable page;
    @observable total;

    constructor({filters, url, onFetch, page, limit}) {
        this.url = url;
        this.page = page;

        if (filters) {
            this.filters = Object.assign({}, filters);
        }

        if (limit) {
            this.limit = limit;
        }

        if (onFetch) {
            this.onFetch = onFetch;
        }
    }

    @action.bound
    changePage(page) {
        this.page = page;
        return this;
    }

    @action.bound
    async fetch() {
        this.loading = true;

        const response = await request.post({
            url: this.url,
            data: {
                ...this.filters,
                limit: this.limit,
                page: this.page
            }
        });

        if (this.onFetch) {
            this.onFetch(response);
        }

        const { data, lastPage, limit, page, total } = response.pagination;

        this.data = data;
        this.lastPage = lastPage;
        this.limit = limit;
        this.page = page;
        this.total = total;

        this.loading = false;
    }

    @action.bound
    updateFilters(filters) {
        this.filters = Object.assign({}, this.filters, filters);
        return this;
    }
}

export default Pagination;
