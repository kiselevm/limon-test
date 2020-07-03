import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CheckLogin from './check.login.jsx';
import Header from './header.jsx';

// Error
import Error from '../../Shared/modal/error.modal.jsx';

import * as userInfoActionExternal from '../../../actions/pages/app/user.info.action.jsx';

class Layout extends Component {

    constructor(props) {
        super(props);

        const { userInfoAction } = this.props;
        userInfoAction.getUserInfo();
    }

    render() {

        return (
            <Fragment>
                <CheckLogin>
                    <Header />
                    <div className="pageContent">
                        {this.props.children}
                    </div>
                </CheckLogin>
                <Error />
            </Fragment>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        userInfoAction: bindActionCreators(userInfoActionExternal, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);