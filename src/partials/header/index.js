import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const actions = {};
import './index.less';
/*
@Des:组件容器
*/
class Header extends Component {
    /*
    @Des：构造函数 
    */
    constructor(props) {
        super(props);
    }

    renderLogo() {
        return <a className="shead_logo" href="/">test</a>
    }

    render() {
        return (
            <div className="pgc-header">
                header
            </div>
        )
    }
}


export default connect(
    (state) => state,
    (dispatch) => {return { actions: bindActionCreators(actions, dispatch) }}
)(Header);
