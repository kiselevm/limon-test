import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { InputText } from 'primereact/inputtext';
import { CustomButton } from '../../Shared/button/custom.button.jsx';

import PageLoginIconSvg from '../../../../public/images/page-login-icon.svg';
import PageLoginSvg from '../../../../public/images/page-login.svg';

import * as pageLoginActionsExternal from '../../../actions/pages/login/page.login.action.jsx';

import './page.login.scss';

class PageLogin extends Component {

    constructor(props) {
        super(props);

        // все латинские буквы, цифры, @ . _
        this.pattern1 = /^[A-Za-z0-9@._]+$/;
        // все кроме русских букв
        this.pattern2 = /^[^А-Яа-яЁё]+$/;

        this.state = { login: null, password: null };
    }

    onSubmit(event) {
        event.preventDefault();

        const { pageLoginActions } = this.props;
        pageLoginActions.login({ login: this.state.login, password: this.state.password });
    }

    setLogin(e) {
        this.setState({ login: e.currentTarget.value });
    }

    setPassword(e) {
        this.setState({ password: e.currentTarget.value });
    }

    render() {
        return (
            <div className="pageLoging">
                <div className="pageLoging__column1">
                    <div className="pageLogingContent">
                        <img src={PageLoginIconSvg} />
                        <div className="pageLogingContent__profileText">ПРОФИЛЬ</div>
                        <form onSubmit={(e, m) => this.onSubmit(e, m)} method='post'>
                            <div className="loginItem">
                                <InputText
                                    onChange={(e) => this.setLogin(e)}
                                    name="login"
                                    keyfilter={this.pattern1}
                                    placeholder="Логин"
                                    required
                                />
                            </div>
                            <div className="loginItem">
                                <InputText
                                    onChange={(e) => this.setPassword(e)}
                                    name="passwd"
                                    type="password"
                                    keyfilter={this.pattern2}
                                    placeholder="Пароль"
                                    required
                                />
                            </div>
                            <CustomButton type="submit">Войти</CustomButton>
                        </form>
                    </div>
                </div>
                <div className="pageLoging__column2">
                    <img src={PageLoginSvg} />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        pageLoginActions: bindActionCreators(pageLoginActionsExternal, dispatch)
    };
};

export default connect(null, mapDispatchToProps)(PageLogin);