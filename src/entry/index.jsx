
import es5 from 'es5-shim';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch, IndexRoute, IndexRedirect, browserHistory, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import configureStore from '../store';

import Menu from '../partials/menu';
import Header from '../partials/header';
import Footer from '../partials/footer';
/* router */

import Home from '../containers/home';
import Booking from '../containers/booking';

/* router end */

import './index.css';
/*
@Des:获取store
*/
let store = configureStore();
const history = syncHistoryWithStore(createBrowserHistory(hashHistory), store);

function onPageChange() {
    var path = window.location.hash.split('?')[0];
    document.title = getTitle(path);
    window.scrollTo(0,0);
}
/*
@Des： 路由分发
*/
render(
    <Provider store={store}>
        <Router history={history} onUpdate={onPageChange} >
            <div className="wrap">
                <div className="header">
                    <Header/>
                </div>
                <div>
                    <Menu/>
                    <Switch>
                        <Route path="" component={Booking} />
                    </Switch>
                </div>
                <Footer/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
)
