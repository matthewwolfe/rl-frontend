import { action } from 'mobx';
import { HttpError } from 'errors';
import { request } from 'libraries/request';
import { Model } from 'mobx/core';


class Trade extends Model {

    @action.bound
    async delete() {
        this.set({deleting: true});

        try {
            await request.post({
                url: '/trades/delete',
                data: {
                    id: this.id
                }
            });

            this.collection.delete(this.id);
        }
        catch (error) {
            if (error instanceof HttpError) {
                throw error;
            }
        } finally {
            this.set({deleting: false});
        }
    }
}

export default Trade;
