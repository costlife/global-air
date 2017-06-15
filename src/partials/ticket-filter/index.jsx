import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import FilterSelect from '../../components/filter-select';
import './index.less';

class Dialog extends Component {

    static propTypes = {
        transferCityChange: PropTypes.func,
        departHourRange: PropTypes.func,
        onSortChange: PropTypes.func,
    };

    static defaultProps = {
        dateRangeData: [{
            text: '上午(6-12点)',
            value: '[6,12]',
            price: null,
        },{
            text: '下午(12-18点)',
            value: '[12,18]',
            price: null,
        },{
            text: '晚上(18-24点)',
            value: '[18,24]',
            price: null,
        },{
            text: '凌晨(0-6点)',
            value: '[0,6]',
            price: null,
        }],
        transferCityChange: () => {},
        departHourRange: () => {},
        onSortChange: () => {},
    };

    /**
     * @description 构造函数
     */
    constructor(props) {
        super(props);
    }

    getMinPrice(arr) {
        arr = arr.filter(item => item != null);
        return Math.min.apply(this, arr);
    }

    render() {
        const {
            params,
            ticketList,
            airlineChange,
            transferCityChange,
            departHourRange,
            rtDepartHourRange,
            dateRangeData,
        } = this.props;
        const { priceTable, transferCity } = ticketList;
        const { journeyType } = params;
        return (
            <div className="flight-filter">
                <div className="filter">
                    <FilterSelect
                        label="航空公司"
                        data={priceTable.map(item => { return {
                            text: item.airlineName,
                            value: item.airlineName,
                            price: this.getMinPrice([item.lp, item.lpo, item.lpt])
                        }})}
                        onChange={airlineChange}
                    />
                    <span className="filter-spliter"></span>
                    <FilterSelect label="起飞时间" data={dateRangeData} onChange={departHourRange}/>
                    {journeyType == 'RT' &&
                        <FilterSelect label="返程时间" data={dateRangeData} onChange={rtDepartHourRange}/>
                    }
                    <span className="filter-spliter"></span>
                    <FilterSelect
                        label="中转城市"
                        data={transferCity.map(item => { return { text: item, value: item, price: null }})}
                        onChange={transferCityChange}
                    />
                </div>
            </div>
        );
    }
}

export default Dialog;
