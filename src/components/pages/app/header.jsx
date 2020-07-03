import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink as RRNavLink } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import UserInfo from './user.info.jsx';

import './header.scss';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    handleClick(e) {
        if (window.location.pathname === e.currentTarget.pathname)
            e.preventDefault();
    }

    renderNavLink(key, to, title, isActive) {
        return (
            <li key={key}>
                <NavLink onClick={(e) => this.handleClick(e)} tag={RRNavLink} isActive={isActive} exact to={`/${to}`}>{title}</NavLink>
            </li>
        );
    }

    renderNavs() {
        const data = [
            { title: 'Новости', link: 'news' },
            { title: 'Профиль', link: 'profile' }
        ];

        return (
            <ul>
                {
                    data.map((x, index) => {
                        return this.renderNavLink(index, x.link, x.title, `/${x.link}` === location.pathname ? (_, { pathname }) => [`/${x.link}`].includes(pathname) : () => { });
                    })
                }
            </ul>
        );
    }

    render() {
        let startLink = "/";

        return (
            <header className="pageHeader">
                <div className="pageHeader__logo">
                    {
                        startLink === "/" ?
                            < h1 > <Link onClick={(e) => this.handleClick(e)} to="/">На главную</Link></h1>
                            :
                            <h1>На главную</h1>
                    }
                </div>
                <div className="pageHeader__block">
                    {this.renderNavs()}
                    <div className="pageHeader__block2">
                        <UserInfo />
                    </div>
                </div>
            </header>
        );
    }
};


const mapStateToProps = (state) => {
    return {
        router: state.router
    };
};

export default connect(mapStateToProps)(Header);