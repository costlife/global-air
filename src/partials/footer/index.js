import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
const actions = {};
import './index.less';
/*
@Des:组件容器
*/
class Footer extends Component {
    /*
    @Des：构造函数 
    */
    constructor(props) {
        super(props);
    }

    /**
     * 渲染header 入口
     * @return {React.DOM} 
     */
    render() {
        return (
            <div className="pgc-footer">
                <div className="sfoot">
                   footer
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => state,
    (dispatch) => {return { actions: bindActionCreators(actions, dispatch) }}
)(Footer);