import { action, observable } from 'mobx';
import { request } from 'libraries/request';
import { setToken } from 'libraries/session';
import { Section, Form } from 'mobx/classes';
import { provide } from 'mobx/utils';
import { LoginPage } from 'views/login';


class LoginStore extends Section {

    @observable form;
    @observable loggingIn = false;

    constructor() {
        super();

        this.form = new Form({
            email: '',
            password: ''
        });
    }

    @action.bound
    async login() {
        this.set({loggingIn: true});

        try {
            const { token } = await request.post({
                url: '/login',
                data: this.form.data
            });

            setToken(token);
            window.location.href = '/';
        }
        catch (errors) {
            this.setErrorResponse(errors);
        }
        finally {
            this.set({loggingIn: false});
        }
    }
}

function LoginPageContainer() {
    return provide({
        page: new LoginStore()
    })(LoginPage);
}

export default LoginPageContainer;
