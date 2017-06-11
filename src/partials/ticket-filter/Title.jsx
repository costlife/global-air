import React, { Component } from 'react';
import moment from 'moment';
import $ from 'jquery';

const journey = {
    OW: '单程',
    RT: '往返',
    MS: '多程'
}
class TicketFilterTitle extends Component {

    static propTypes = {
        onOpen: React.PropTypes.func,
    };

    static defaultProps = {
        onOpen: () => console.log(111),
    };

    /**
     * @description 构造函数
     */
    constructor(props) {
        super(props);
    }

    getAirline() {
        const { params } = this.props;
        const { journeyType } = params;
        let startCity = $('.start-city input').val();
        let endCity = $('.end-city input').val();
        let startDay = $('.start-day input').val();
        let endDay = $('.end-day input').val();
        if (journeyType == 'OW') {
            return '【' + journey[journeyType] + '】 ' + startCity + ' - ' + endCity + ' ' + startDay;
        } else if (journeyType == 'RT') {
            return '【' + journey[journeyType] + '】 ' + startCity + ' - ' + endCity + ' 去：' + startDay + '返' + endDay;
        } else {
            return startCity + ' - ' + endCity + '多程查询'
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
        const { onOpen } = this.props;
        return (
            <div className="filter-title">
                {this.getAirline()} {this.getListInfo()}
                <div style={{float:'right'}}>
                    <a href="javascript:void(0)" onClick={onOpen}>展开航司矩阵表</a>
                </div>
            </div>
        );
    }
}

export default TicketFilterTitle;
