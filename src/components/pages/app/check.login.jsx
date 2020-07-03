import Config from 'Config';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageLogin from '../login/page.login.jsx';

class CheckLogin extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { router, userInfo } = this.props;
        const { location } = router;
        const { login } = userInfo;
        const pages = Config.authorizationPage;

        // если страница требует авторизации и пользователь не авторизован, то перенаправим на страницу логина
        if (!login && pages.some(x => x === location.pathname)) {
            return <PageLogin />;
        } else {
            return this.props.children;
        }
    }
};

const mapStateToProps = (state) => {
    return {
        router: state.router,
        userInfo: state.userInfo
    };
};

export default connect(mapStateToProps)(CheckLogin);