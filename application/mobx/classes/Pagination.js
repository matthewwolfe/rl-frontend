import { action, observable } from 'mobx';
import { request } from 'libraries/request';


class Pagination
{
    @observable filters = {};
    @observable loading = false;
    @observable page = 1;

    onFetched = null;
    url = '';

    constructor({filters, page, onFetched, url})
    {
        if (filters) {
            this.filters = Object.assign({}, filters);
        }

        if (page) {
            this.page = page;
        }

        this.onFetched = onFetched;
        this.url = url;
    }

    @action.bound
    changePage(page)
    {
        this.page = page;
        return this;
    }

    @action.bound
    async fetch()
    {
        this.loading = true;

        try {
            const response = await request.post({
                url: this.url,
                data: {
                    page: this.page,
                    ...this.filters
                }
            });

            this.onFetched(response);
        }
        catch (errors) {
            throw errors;
        }
        finally {
            this.loading = false;
        }
    }

    @action.bound
    updateFilters(newFilters)
    {
        for (const key in newFilters) {
            this.filters[key] = newFilters[key];
        }

        return this;
    }
}

export default Pagination;
