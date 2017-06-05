import React, { Component } from 'react';
import classNames from 'classnames';

import $ from 'jquery';
import DatePicker from 'react-datepicker';
import Select from '../../components/select';
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
            departure: '',
            destination: '',
        };
    }

    changeJourneyType(e) {
        this.setState({journeyType: e.target.value});
    }

    changeCabinClass(data) {
        this.setState({cabinClass: data.value});
    }

    changeAdtCount(data) {
        this.setState({adtCount: data.value});
    }

    changeChdCount(data) {
        this.setState({chdCount: data.value});
    }

    changeInfCount(data) {
        this.setState({infCount: data.value});
    }

    changeStartDate(startDate) {
        this.setState({startDate})
    }

    changeReturnDate(returnDate) {
        this.setState({returnDate})
    }

    onChangeDeparture(departure) {
        this.setState({departure});
    }

    onChangeDestination(destination) {
        this.setState({destination});
    }

    onSegmentListChange(segmentList) {
        this.setState({segmentList})
    }

    onSearchClick() {
        const {journeyType, cabinClass, adtCount, chdCount, infCount, airline} = this.state;

        this.props.onSearch({
            journeyType: journeyType,
            segmentList: this.getSegmentList(),
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

    getSegmentList() {
        const {journeyType, departure, destination, startDate, returnDate, segmentList} = this.state;
        if (journeyType == 'OW') {
            return [{/*航程列表， 单程是一个，往返是两个，多程几程几个*/
                oriCode: departure,
                desCode: destination,
                departureDate: startDate.valueOf(),
            }];
        } else if (journeyType == 'RT') {
            return [{
                oriCode: departure,
                desCode: destination,
                departureDate: startDate.valueOf(),
            }, {
                oriCode: destination,
                desCode: departure,
                departureDate: returnDate.valueOf(),
            }]
        } else {
            return segmentList.map(item => {
                return {
                    oriCode: item.oriCode,
                    desCode: item.desCode,
                    departureDate: item.departureDate.valueOf(),
                }
            });
        }
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
                        <MultiSearch
                            changeCabinClass={this.changeCabinClass.bind(this)}
                            changeAdtCount={this.changeAdtCount.bind(this)}
                            changeChdCount={this.changeChdCount.bind(this)}
                            changeInfCount={this.changeInfCount.bind(this)}
                            onSegmentListChange={this.onSegmentListChange.bind(this)}
                        />
                        :
                        <div className="searchForms">
                            <div className="formline search-city">
                                <i>出发地</i>
                                <CitySuggest onChangeCity={this.onChangeDeparture.bind(this)}/>
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
                                <CitySuggest onChangeCity={this.onChangeDestination.bind(this)}/>
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
                                <Select onChange={this.changeAdtCount.bind(this)}/>
                            </div>
                            <div className="formline select-user">
                                <i>普通儿童</i>
                                <Select onChange={this.changeChdCount.bind(this)}/>
                            </div>
                            <div className="formline select-user">
                                <i>舱位等级</i>
                                <Select
                                    options={[
                                        {label: '经济舱', value: 'ECONOMY'},
                                        {label: '超级经济舱', value: 'PREMIUM_ECONOMY'},
                                        {label: '公务舱', value: 'BUSINESS'},
                                        {label: '头等舱', value: 'FIRST'},
                                    ]}
                                    onChange={this.changeCabinClass.bind(this)}
                                />
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