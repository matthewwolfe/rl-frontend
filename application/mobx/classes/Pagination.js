import { action, observable } from 'mobx';
import { request } from 'libraries/request';


class Pagination {

    @observable loading = false;
    onFetch;
    url = '';

    @observable data = [];
    @observable lastPage;
    @observable limit;
    @observable page;
    @observable total;

    constructor({url, onFetch, page, limit}) {
        this.url = url;
        this.page = page;

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

        const response = await request.get({
            url: this.url,
            params: {
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
}

export default Pagination;
