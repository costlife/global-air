import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from './actions';
import './index.less';
import $ from 'jquery';
/*
@Des:组件容器
*/

class Home extends Component {
    /*
    @Des：构造函数 
    */
    constructor(props) {
        super(props);
    }

    initHome() {
        this.props.actions.initHome();
    }
    /**
     * 渲染index 入口
     * @return {React.DOM} 
     */
    render() {
        const {data} = this.props.home;
        console.log(data)
        return (
            <div className="global-air">
                <div style={{marginTop: '20px'}}>
                </div>
                <button onClick={()=>this.initHome()}>Click Me!</button>
            </div>
        )
    }
}

export default connect(
    (state) => state,
    (dispatch) => {return { actions: bindActionCreators(actions, dispatch) }}
)(Home);
