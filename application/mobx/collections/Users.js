import { ObjectCollection } from 'mobx/core';
import { User } from 'mobx/models';


class Users extends ObjectCollection {

    Model = User;
}

export default Users;
