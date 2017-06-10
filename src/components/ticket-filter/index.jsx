import React, { Component } from 'react';
import moment from 'moment';

import Title from './Title.jsx';
import Sorter from './Sorter.jsx';
import PriceTable from './PriceTable.jsx';
import FilterSelect from '../filter-select';
import './index.less';

class Dialog extends Component {

    static propTypes = {
        checkDirectOnly: React.PropTypes.func,
        transferCityChange: React.PropTypes.func,
        departHourRange: React.PropTypes.func,
        onSortChange: React.PropTypes.func,
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
        checkDirectOnly: () => {},
        transferCityChange: () => {},
        departHourRange: () => {},
        onSortChange: () => {},
    };

    /**
     * @description 构造函数
     */
    constructor(props) {
        super(props);
        this.state = {
            showTable: false
        }
    }

    toggleTable() {
        this.setState({
            showTable: !this.state.showTable
        });
    }

    onChangeSorter(value) {
        this.props.onSortChange(value);
    }

    getMinPrice(arr) {
        arr = arr.filter(item => item != null);
        return Math.min.apply(this, arr);
    }


    
    renderTable(priceTable) {
        return (
            <PriceTable priceTable={priceTable}/>
            
        )
    }

    render() {
        const {
            params,
            ticketList,
            airlineChange,
            transferCityChange,
            checkDirectOnly,
            departHourRange,
            rtDepartHourRange,
            dateRangeData,
        } = this.props;
        console.log(params)
        const { priceTable, transferCity } = ticketList;
        const { showTable } = this.state;
        return (
            <div className="flight-filter">
                <Title params={params} ticketList={ticketList} onOpen={this.toggleTable.bind(this)}/>
                {showTable && this.renderTable(priceTable)}
                <div className="filter">
                    <FilterSelect
                        label="航空公司"
                        data={priceTable.map(item => { return {
                            text: item.airlineName,
                            value: item.airlineName,
                            price: this.getMinPrice([item.lp, item.lpo, item.lpt])
                        }})}
                        onChange={airlineChange}/>
                    <FilterSelect label="起飞时间" data={dateRangeData} onChange={departHourRange}/>
                    <FilterSelect label="返程时间" data={dateRangeData} onChange={rtDepartHourRange}/>
                    <FilterSelect label="中转城市" data={transferCity.map(item => { return { text: item, value: item, price: null }})} onChange={transferCityChange}/>
                    <input type="checkbox" onClick={checkDirectOnly}/>仅看直飞
                    <Sorter onChange={this.onChangeSorter.bind(this)}/>
                    <span className="bar tax-filter">
                        <a className="active">不含税价</a>
                        <a>含税价</a>
                    </span>
                </div>
            </div>
        );
    }
}

export default Dialog;
