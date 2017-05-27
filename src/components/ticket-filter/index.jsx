import React, { Component } from 'react';
import moment from 'moment';

import Title from './Title.jsx';

import './index.less';

class Dialog extends Component {

    static propTypes = {
        airline: React.PropTypes.array,
        transferCity: React.PropTypes.array,
        checkDirectOnly: React.PropTypes.func,
        selectTransferCity: React.PropTypes.func,
        departHourRange: React.PropTypes.func,
    };

    static defaultProps = {
        airline: [{airlineName:'东方航空'}, {airlineName:'南方航空'}],
        transferCity: ['上海','首尔', '东京'],
        checkDirectOnly: () => {},
        selectTransferCity: () => {},
        departHourRange: () => {},
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

    renderAirline(airline) {
        return (
            <select>
                {airline.map((item, i) => <option key={i} value={item.airlineName}>{item.airlineName}</option>)}
            </select>
        )
    }

    renderLaunch(departHourRange) {
        return (
            <select onChange={departHourRange}>
                <option value="0">选择起飞时间</option>
                <option value="[6,12]">上午(6-12点)</option>
                <option value="[12,18]">下午(12-18点)</option>
                <option value="[18,24]">晚上(18-24点)</option>
                <option value="[18,24]">凌晨(0-6点)</option>
            </select>
        )
    }

    renderTransferCity(transferCity, selectTransferCity) {
        return (
            <select onChange={selectTransferCity}>
                {transferCity.map((item, i) => <option key={i} value={item}>{item}</option>)}
            </select>
        )
    }

    renderTable(data) {
        return (
            <div>
                <table>
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
        const { airline, transferCity, checkDirectOnly, selectTransferCity, departHourRange } = this.props;
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
            <div>
                <Title onOpen={this.toggleTable.bind(this)}/>
                {showTable && this.renderTable(data)}
                <div className="flight-filter">
                    航空公司：{this.renderAirline(airline)}
                    起飞时间：{this.renderLaunch(departHourRange)}
                    回程起飞：{this.renderLaunch()}
                    中转城市：{this.renderTransferCity(transferCity, selectTransferCity)}
                    <input type="checkbox" onClick={checkDirectOnly}/>仅看直飞

                    <span className="tax-filter">
                        <a>不含税价</a>
                        <a>含税价</a>
                    </span>
                </div>
            </div>
        );
    }
}

export default Dialog;
