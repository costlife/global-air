import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import './index.less';
/*
@Des:组件容器
*/
const actions = {};
class Menu extends Component {
    /*
    @Des：构造函数
    */
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div className="pgc-menu"></div>
        )
    }
}

export default connect(
    (state) => state,
    (dispatch) => {return { actions: bindActionCreators(actions, dispatch) }}
)(Menu);
