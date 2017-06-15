import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import PriceTable from './PriceTable.jsx';
import $ from 'jquery';

import './index.less';

const journey = {
    OW: '单程',
    RT: '往返',
    MS: '多程'
}
class TicketFilterTitle extends Component {

    static propTypes = {
        onOpen: PropTypes.func,
    };

    static defaultProps = {
        onOpen: () => console.log(111),
    };

    /**
     * @description 构造函数
     */
    constructor(props) {
        super(props);
        this.state = {
            showTable: false,
        };
    }

    toggleTable() {
        this.setState({
            showTable: !this.state.showTable
        });
    }

    getAirline() {
        const { params } = this.props;
        const { journeyType } = params;
        let startCity = $('.start-city input').val();
        let endCity = $('.end-city input').val();
        let startDay = $('.start-day input').val();
        let endDay = $('.end-day input').val();
        if (journeyType == 'OW') {
            return `【${journey[journeyType]}】${startCity} - ${endCity}  ${startDay}`;
        } else if (journeyType == 'RT') {
            return `【${journey[journeyType]}】${startCity} - ${endCity} 去：${startDay} 返: ${endDay}`;
        } else {
            return `${startCity}始发的多程查询`;
        }

    }

    getListInfo() {
        const {ticketList} = this.props;
        let count = ticketList.avFlightList.length || 0;
        let direct = ticketList.avFlightList.filter((item) => item && item.transfer == 0);
        let directCount = direct.length;
        return `（${count}个航班，${directCount}个直飞）`
    }

    render() {
        const {showTable} = this.state;
        const {
            params,
            ticketList,
        } = this.props;
        const { priceTable, transferCity } = ticketList;
        const { journeyType } = params;
        return (
            <div className="ticket-title">
                <div className="filter-title">
                    {this.getAirline()} {this.getListInfo()}
                    <div className="ticket-title-table-btn" onClick={this.toggleTable.bind(this)}>
                        展开航司矩阵表
                    </div>
                </div>
                {showTable && <PriceTable priceTable={priceTable}/>}
            </div>
        );
    }
}

export default TicketFilterTitle;
