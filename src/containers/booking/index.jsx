import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from './actions';
import './index.less';
import $ from 'jquery';


import TicketCard from '../../components/ticket-card';
import Pagination from '../../components/pagination';
import TicketFilter from '../../components/ticket-filter';
/*
@Des:组件容器
*/

class Home extends Component {
    /*
    @Des：构造函数 
    */
    constructor(props) {
        super(props);
        this.state = {
            current: 1,
            size: 5,
        }
    }

    initHome() {
        this.props.actions.initHome();
    }

    onPageChange(value) {
        this.setState({
            current: value,
        });
    }

    getTicketList(ticketList, total, current, size) {
        let start = (current - 1) * size;
        let end = Math.min(current * size, total) - 1;
        let list = [];
        for (var i = start; i <= end; i++) {
            list.push(<TicketCard key={i} detail={ticketList.avFlightList[i]}/>)
        }
        return list;
    }

    checkDirectOnly() {
        this.props.actions.checkDirectOnly();
    }
    /**
     * 渲染index 入口
     * @return {React.DOM} 
     */
    render() {
        const { ticketList } = this.props.booking;
        const { current, size } = this.state;
        const total = ticketList.avFlightList.length;
        console.log(ticketList)
        return (
            <div className="global-air">
                <div style={{marginTop: '20px'}}>
                </div>
                <TicketFilter checkDirectOnly={this.checkDirectOnly.bind(this)}/>
                {this.getTicketList(ticketList, total, current, size)}
                <Pagination total={Math.ceil(total / size)} current={current} onPageChange={this.onPageChange.bind(this)}/>
                <button onClick={()=>this.initHome()}>Click Me!</button>
            </div>
        )
    }
}

export default connect(
    (state) => state,
    (dispatch) => {return { actions: bindActionCreators(actions, dispatch) }}
)(Home);
