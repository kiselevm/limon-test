import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './layout.jsx';
import PageLogin from '../login/page.login.jsx';
import PageMain from '../main/page.main.jsx';
import PageNews from '../news/page.news.jsx';
import PageProfile from '../profile/page.profile.jsx';

export default class App extends Component {

    render() {
        return (
            <Layout>
                <Switch>
                    <Route path='/' component={PageMain} exact />
                    <Route path='/login' component={PageLogin} exact />
                    <Route path='/news' component={PageNews} exact />
                    <Route path='/profile' component={PageProfile} exact />
                </Switch>
            </Layout>
        );
    }
}