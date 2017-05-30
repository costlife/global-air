import React, { Component } from 'react';
import moment from 'moment';

import Title from './Title.jsx';
import Sorter from './Sorter.jsx';
import FilterSelect from '../filter-select';

import './index.less';

class Dialog extends Component {

    static propTypes = {
        airline: React.PropTypes.array,
        transferCity: React.PropTypes.array,
        checkDirectOnly: React.PropTypes.func,
        selectTransferCity: React.PropTypes.func,
        departHourRange: React.PropTypes.func,
        onSortChange: React.PropTypes.func,
    };

    static defaultProps = {
        airline: [{airlineName:'东方航空'}, {airlineName:'南方航空'}],
        transferCity: [{
            text: '上海',
            value: '上海',
            price: null,
        },{
            text: '首尔',
            value: '首尔',
            price: null,
        },{
            text: '东京',
            value: '东京',
            price: null,
        }],
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
        selectTransferCity: () => {},
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

    renderTable(data) {
        return (
            <div>
                <table className="ticket-table">
                    <thead>
                        <tr>
                            {data.head.map((item, i) => <th key={i}>{item}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {data.body.map((item, i) =>
                            <tr key={i}>
                                {item.map((data, i) =>
                                    <td key={i}>{data}</td>
                                )}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }

    render() {
        const { 
            airline, 
            transferCity, 
            checkDirectOnly, 
            selectTransferCity, 
            departHourRange,
            rtDepartHourRange,
            dateRangeData,
        } = this.props;
        const { showTable } = this.state;
        const data = {
            head: ['厦门航空','东方航空','南方航空','吉祥航空'],
            body: [
                ['2000', '-', '-', '-'],
                ['2000', '-', '-', '1000'],
                ['2000', '-', '3000', '-']
            ]
        };
        return (
            <div className="flight-filter">
                <Title onOpen={this.toggleTable.bind(this)}/>
                {showTable && this.renderTable(data)}
                <div className="filter">
                    {/*{this.renderAirline(airline)}*/}
                    <FilterSelect/>
                    <FilterSelect label="起飞时间" data={dateRangeData} onChange={departHourRange}/>
                    <FilterSelect label="返程时间" data={dateRangeData} onChange={rtDepartHourRange}/>
                    <FilterSelect label="中转城市" data={transferCity} onChange={selectTransferCity}/>
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
