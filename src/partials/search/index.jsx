import React, { Component } from 'react';
import classNames from 'classnames';

import $ from 'jquery';
import DatePicker from 'react-datepicker';
import CitySuggest from '../../components/city-suggest';
import MultiSearch from './MultiSearch';
import 'react-datepicker/dist/react-datepicker.css';
import './index.less';

class FlightSearch extends Component {

    static propTypes = {
        onSearch: React.PropTypes.func,
    };

    static defaultProps = {
        onSearch: () => {}
    };

    /**
     * @description 构造函数
     */
    constructor(props) {
        super(props);
        this.state = {
            journeyType: 'OW', // OW单程, RT往返, MS多程
            cabinClass: "ECONOMY;PREMIUM_ECONOMY", /*舱位等级*/
            adtCount: 0,
            chdCount: 0,
            infCount: 0,
            startDate: '',
            returnDate: '',
            segmentList: [],
            airline: '', /*航空公司，传航司二字码*/
        }
    }

    changeJourneyType(e) {
        this.setState({journeyType: e.target.value});
    }

    changeCabinClass(e) {
        this.setState({cabinClass: e.target.value});
    }

    changeAdtCount(e) {
        this.setState({adtCount: e.target.value});
    }

    changeChdCount(e) {
        this.setState({chdCount: e.target.value});
    }

    changeInfCount(e) {
        this.setState({infCount: e.target.value});
    }

    changeStartDate(startDate) {
        this.setState({startDate})

    }
    
    changeReturnDate(returnDate) {
        this.setState({returnDate})
    }

    onSearchClick() {
        const {journeyType, cabinClass, adtCount, chdCount, infCount, airline} = this.state;

        this.props.onSearch({
            journeyType: journeyType,
            segmentList: [{/*航程列表， 单程是一个，往返是两个，多程几程几个*/
                oriCode: "BJS",
                desCode: "NGO",
                departureDate: 1495036800000
            }],
            passengerType: [{
                passgerType: "ADT",  /*成人人数*/
                passgerNumber: adtCount
            }, {
                passgerType: "CHD",/*儿童人数*/
                passgerNumber: chdCount
            }, {
                passgerType: "INF",/*婴儿人数*/
                passgerNumber: infCount
            }],
            cabinClass: cabinClass,
            airline: airline,
            directFlightsOnly: false,  /*是否仅查直飞,默认是false*/
            debug: false,
        });
    }

    render() {
        const { onSearch } = this.props;
        const { journeyType, startDate, returnDate } = this.state;
        return (
            <div className="typeCont">
                <div className="tpyeBox" id="typeBox">
                    <div className="formline">
                        <i>航程类型</i>
                        <label className="index_label">
                            <input name="FlightWay" type="radio" value="OW" checked={journeyType == 'OW'} onChange={this.changeJourneyType.bind(this)}/>
                            单程
                        </label>
                        <label className="index_label">
                            <input name="FlightWay" type="radio" value="RT" checked={journeyType == 'RT'} onChange={this.changeJourneyType.bind(this)}/>
                            往返
                        </label>
                        <label className="index_label">
                            <input name="FlightWay" type="radio" value="MS" checked={journeyType == 'MS'} onChange={this.changeJourneyType.bind(this)}/>
                            多程
                        </label>
                    </div>
                    {journeyType == 'MS' ? 
                        <MultiSearch />
                        :
                        <div className="searchForms">
                            <div className="formline search-city">
                                <i>出发地</i>
                                <CitySuggest />
                                <div className="toggle">换</div>
                            </div>
                            <div className="formline">
                                <i>出发日期</i>
                                <DatePicker
                                    dateFormat="YYYY/MM/DD"
                                    selected={startDate}
                                    placeholderText="请选择出发日期"
                                    onChange={this.changeStartDate.bind(this)} />
                            </div>
                            <div className="formline search-city">
                                <i>到达地</i>
                                <CitySuggest />
                                <s className="ico-time"></s>
                            </div>
                            <div className="formline">
                                <i>返回日期</i>
                                <DatePicker
                                    dateFormat="YYYY/MM/DD"
                                    selected={returnDate}
                                    disabled={journeyType == 'OW'}
                                    placeholderText="请选择返回日期"
                                    onChange={this.changeReturnDate.bind(this)} />
                            </div>
                            <div className="formline select-user">
                                <i>成人</i>
                                <select className="selects" onChange={this.changeAdtCount.bind(this)}>
                                    <option value="0">无</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </select>
                            </div>
                            <div className="formline select-user">
                                <i>普通儿童</i>
                                <select className="selects" onChange={this.changeChdCount.bind(this)}>
                                    <option value="0">无</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </select>
                            </div>
                            <div className="formline select-user">
                                <i>舱位等级</i>
                                <select className="selects" onChange={this.changeCabinClass.bind(this)}>
                                    <option value="ECONOMY">经济舱</option>
                                    <option value="PREMIUM_ECONOMY">超级经济舱</option>
                                    <option value="BUSINESS">公务舱</option>
                                    <option value="FIRST">头等舱</option>
                                </select>
                            </div>
                            <div className="moreInfo" style={{display:'none'}}>
                                <div className="formline">
                                    <i>中转</i><input type="text" className="loacal" placeholder="支持中文/拼音/英文/三字码"/>
                                </div>
                                <div className="formline">
                                    <i>航空公司</i><input type="text"/>
                                </div>
                            </div>
                        </div>
                    }
                </div>

                <div className="footbar">
                    <a className="searchBtn" onClick={this.onSearchClick.bind(this)}>搜索</a>
                </div>
            </div>
        );
    }
}

export default FlightSearch;