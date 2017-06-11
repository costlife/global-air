import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from './actions';
import './index.less';
import $ from 'jquery';

import Loading from '../../components/loading';
import Pagination from '../../components/pagination';
import Search from '../../partials/search';
import TicketCard from '../../partials/ticket-card';
import TicketFilter from '../../partials/ticket-filter';
/*
@Des:组件容器
*/

class Booking extends Component {
    /*
    @Des：构造函数
    */
    constructor(props) {
        super(props);
        this.state = {
            current: 1,
            priceType: 1,
        }
    }

    componentDidMount() {
        // let didScroll;
        // $(window).on('scroll', () => {
        //     didScroll = true;
        // });
        // this.intervalHandler = setInterval(() => {
        //     const { paramsFilter, isInited } = this.props.booking;
        //     let show = $(document).scrollTop() + $(window).height() > $(document).height() - 300;
        //     if (didScroll && show && isInited) {
        //         didScroll = false;
        //         this.props.actions.pageChange(paramsFilter.current + 1);
        //     }
        // }, 250);
    }

    componentWillUnmount() {
        // $(window).off('scroll');
        // clearInterval(this.intervalHandler);
    }

    initBooking(params) {
        this.setState({params});
        this.props.actions.initBooking(params);
    }

    onPageChange(value) {
        this.props.actions.pageChange(value);
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

    priceTypeChange(priceType) {
        this.setState({priceType});
    }

    renderResult(ticketList, currentPage, total, isLoading, isInited) {
        const {params, priceType} = this.state;
        if (isLoading) {
            return <Loading/>
        }
        if (isInited) {
            return (
                <div>
                    <TicketFilter
                        params={params}
                        ticketList={ticketList}
                        airlineChange={this.airlineChange.bind(this)}
                        transferCityChange={this.transferCityChange.bind(this)}
                        departHourRange={this.departHourRange.bind(this)}
                        rtDepartHourRange={this.rtDepartHourRange.bind(this)}
                        checkDirectOnly={this.checkDirectOnly.bind(this)}
                        onSortChange={this.onSortChange.bind(this)}
                        priceType={priceType}
                        priceTypeChange={this.priceTypeChange.bind(this)}
                    />
                    {ticketList.avFlightList.map((item, i) => {
                        return <TicketCard 
                            key={i} 
                            detail={item} 
                            params={params}
                            priceType={priceType}
                        />
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
)(Booking);
