import React, { Component } from 'react';
import classNames from 'classnames';

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
            cabinClass: "ECONOMY", /*舱位等级*/
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
        this.setState({
            departure,
            departureText: this.getName(departure)
        });
    }

    onChangeDepartureText(text) {
        this.setState({
            departureText: text
        });
    }

    onChangeDestination(destination) {
        this.setState({
            destination,
            destinationText: this.getName(destination)
        });
    }

    onChangeDestinationText(text) {
        this.setState({
            destinationText: text
        });
    }

    onSegmentListChange(segmentList) {
        this.setState({segmentList})
    }

    changeDestOrigin() {
        const { departure, destination } = this.state;
        let temp = departure;
        let _departure = destination;
        let _destination = temp;
        this.setState({departure: _departure, destination: _destination});
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

    getCode(source) {
        return source.substring(source.indexOf('(') + 1, source.indexOf(')'));
    }

    getName(source) {
        return source.split('|')[1]
    }

    getSegmentList() {
        const {journeyType, departure, destination, startDate, returnDate, segmentList} = this.state;
        let departureCode = this.getCode(departure);
        let destinationCode = this.getCode(destination);
        if (journeyType == 'OW') {
            return [{/*航程列表， 单程是一个，往返是两个，多程几程几个*/
                oriCode: departureCode,
                desCode: destinationCode,
                departureDate: startDate.valueOf(),
            }];
        } else if (journeyType == 'RT') {
            return [{
                oriCode: departureCode,
                desCode: destinationCode,
                departureDate: startDate.valueOf(),
            }, {
                oriCode: destinationCode,
                desCode: departureCode,
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
        const { journeyType, startDate, returnDate, departureText, destinationText } = this.state;
        return (
            <div className="typeCont">
                <div className="searchForms">
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
                        <div>
                            <div className="formline search-city">
                                <i>出发地</i>
                                <CitySuggest
                                    value={departureText}
                                    onChangeCity={this.onChangeDeparture.bind(this)}
                                    onChangeText={this.onChangeDepartureText.bind(this)}
                                />
                                <div className="toggle" onClick={this.changeDestOrigin.bind(this)}>换</div>
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
                                <CitySuggest
                                    value={destinationText}
                                    onChangeCity={this.onChangeDestination.bind(this)}
                                    onChangeText={this.onChangeDestinationText.bind(this)}
                                />
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