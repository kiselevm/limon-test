import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserSvg from '../../../../public/images/user.svg';
import UserLogoutSvg from '../../../../public/images/user-logout.svg';

import * as userInfoActionExternal from '../../../actions/pages/app/user.info.action.jsx';

import './user.info.scss';

class UserInfo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { userInfo, userInfoAction } = this.props;
        const { login } = userInfo;

        if (login) {
            return (
                <div className="user-info">
                    <img src={UserSvg} />
                    <span className="user-name">{login ? login : ""}</span>
                    <span className="user-logout" onClick={() => userInfoAction.logout()}>
                        <img src={UserLogoutSvg} title="Выйти" />
                    </span>
                </div>
            );
        } else {
            return null;
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);