import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from './actions';
import './index.less';
import $ from 'jquery';

import Loading from '../../components/loading';
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
        }
    }

    componentDidMount() {
        let didScroll;
        $(window).on('scroll', () => {
            didScroll = true;
        });
        this.intervalHandler = setInterval(() => {
            const { paramsFilter, isInited } = this.props.booking;
            let show = $(document).scrollTop() + $(window).height() > $(document).height() - 300;
            if (didScroll && show && isInited) {
                didScroll = false;
                this.props.actions.pageChange(paramsFilter.current + 1);
            }
        }, 250);
    }

    componentWillUnmount() {
        $(window).off('scroll');
        clearInterval(this.intervalHandler);
    }

    initBooking(params) {
        this.props.actions.initBooking(params);
    }

    onPageChange(value) {
        this.props.actions.pageChange(value);
    }

    // getTicketList(ticketList, total, current, size) {
    //     let start = (current - 1) * size;
    //     let end = Math.min(current * size, total) - 1;
    //     let list = [];
    //     for (var i = start; i <= end; i++) {
    //         list.push(<TicketCard key={i} detail={ticketList.avFlightList[i]}/>)
    //     }
    //     return list;
    // }

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


    renderResult(ticketList, currentPage, total, isLoading, isInited) {
        if (isLoading) {
            return <Loading/>
        }
        if (isInited) {
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
                    {ticketList.avFlightList.map((item, i) => {
                        return <TicketCard key={i} detail={item}/>
                    })}
                </div>
            )
        }
    }
    /**
     * 渲染index 入口
     * @return {React.DOM}
     */
    render() {
        const { ticketList, paramsFilter, isLoading, isInited } = this.props.booking;
        return (
            <div className="global-air">
                <Search onSearch={this.initBooking.bind(this)}/>
                {this.renderResult(ticketList, paramsFilter.current, paramsFilter.total, isLoading, isInited)}
            </div>
        )
    }
}

export default connect(
    (state) => state,
    (dispatch) => {return { actions: bindActionCreators(actions, dispatch) }}
)(Home);
