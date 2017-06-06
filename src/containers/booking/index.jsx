import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from './actions';
import './index.less';


import Search from '../../partials/search';
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

    initBooking(params) {
        this.props.actions.initBooking(params);
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

    airlineChange(data) {
        this.props.actions.airlineChange(data);
    }

    transferCityChange(data) {
        this.props.actions.transferCityChange(data);
    }

    departHourRange(data) {
        this.props.actions.departHourRange(data);
    }

    rtDepartHourRange(data) {
        this.props.actions.rtDepartHourRange(data);
    }

    onSortChange(value) {
        this.props.actions.sortChange(value);
    }


    renderResult(ticketList, isLoading, isInited) {
        if (isLoading) {
            return <div>loading</div>
        }
        if (isInited) {
            const { current, size } = this.state;
            const total = ticketList.avFlightList.length;
            return (
                <div>
                    <TicketFilter
                        airline={ticketList.priceTable}
                        airlineChange={this.airlineChange.bind(this)}
                        transferCity={ticketList.transferCity}
                        transferCityChange={this.transferCityChange.bind(this)}
                        departHourRange={this.departHourRange.bind(this)}
                        rtDepartHourRange={this.rtDepartHourRange.bind(this)}
                        checkDirectOnly={this.checkDirectOnly.bind(this)}
                        onSortChange={this.onSortChange.bind(this)}
                    />
                    {this.getTicketList(ticketList, total, current, size)}
                    <Pagination total={Math.ceil(total / size)} current={current} onPageChange={this.onPageChange.bind(this)}/>
                </div>
            )
        }
    }
    /**
     * 渲染index 入口
     * @return {React.DOM}
     */
    render() {
        const { ticketList, isLoading, isInited } = this.props.booking;
        return (
            <div className="global-air">
                <div style={{marginTop: '20px'}}>
                </div>
                <Search onSearch={this.initBooking.bind(this)}/>
                {this.renderResult(ticketList, isLoading, isInited)}
            </div>
        )
    }
}

export default connect(
    (state) => state,
    (dispatch) => {return { actions: bindActionCreators(actions, dispatch) }}
)(Home);
