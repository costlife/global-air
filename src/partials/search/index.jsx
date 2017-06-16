import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import utils from '../../utils';
import paramsCheck from './paramsCheck';
import DatePicker from 'react-datepicker';
import Select from '../../components/select';
import CitySuggest from '../../components/city-suggest';
import MultiSearch from './MultiSearch';
import InfoAlert from '../../components/info-alert';
import 'react-datepicker/dist/react-datepicker.css';
import './index.less';

class FlightSearch extends Component {

    static propTypes = {
        onSearch: PropTypes.func,
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
            departureText: '',
            destination: '',
            destinationText: '',
            infoAlertResult: '',
            infoAlertTarget: null,
        };
    }

    changeJourneyType(e) {
        this.setState({
            infoAlertResult: null,
            journeyType: e.target.value
        });
    }

    changeCabinClass(data) {
        this.setState({
            infoAlertResult: null,
            cabinClass: data.value
        });
    }

    changeAdtCount(data) {
        this.setState({
            infoAlertResult: null,
            adtCount: data.value
        });
    }

    changeChdCount(data) {
        this.setState({
            infoAlertResult: null,
            chdCount: data.value
        });
    }

    changeInfCount(data) {
        this.setState({
            infoAlertResult: null,
            infCount: data.value
        });
    }

    changeStartDate(startDate) {
        this.setState({
            infoAlertResult: null,
            startDate
        });
    }

    changeReturnDate(returnDate) {
        this.setState({
            infoAlertResult: null,
            returnDate
        });
    }

    onChangeDeparture(departure) {
        this.setState({
            departure,
            infoAlertResult: null,
            departureText: utils.getName(departure)
        });
    }

    onChangeDepartureText(text) {
        this.setState({
            departureText: text
        });
    }

    onChangeDestination(destination) {
        this.setState({
            infoAlertResult: null,
            destination,
            destinationText: utils.getName(destination)
        });
    }

    onChangeDestinationText(text) {
        this.setState({
            infoAlertResult: null,
            destinationText: text
        });
    }

    onSegmentListChange(segmentList) {
        this.setState({
            infoAlertResult: null,
            segmentList
        })
    }

    changeDestOrigin() {
        const { departure, destination } = this.state;
        let temp = departure;
        let _departure = destination;
        let _destination = temp;
        this.setState({
            departure: _departure,
            destination: _destination,
            infoAlertResult: null,
            departureText: utils.getName(_departure),
            destinationText: utils.getName(_destination),
        });
    }

    onSearchClick() {
        const {journeyType, cabinClass, adtCount, chdCount, infCount, airline} = this.state;
        let searchParams = {
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
        };
        let checkResult = paramsCheck(searchParams);
        if (typeof checkResult == 'boolean' && checkResult) {
            this.props.onSearch(searchParams);
        } else {
            this.setState({
                infoAlertResult: checkResult
            });
            console.log(checkResult);
            console.log('查询参数错误');
        }
    }

    getSegmentList() {
        const {journeyType, departure, destination, startDate, returnDate, segmentList} = this.state;
        let departureCode = utils.getCode(departure);
        let destinationCode = utils.getCode(destination);
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
        const {
            journeyType,
            startDate,
            returnDate,
            departureText,
            destinationText,
            infoAlertResult,
            infoAlertTarget
        } = this.state;
        return (
            <div className="search-forms">
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
                <InfoAlert result={infoAlertResult}/>
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
                        <div className="formline search-city start-city">
                            <i>出发地</i>
                            <CitySuggest
                                ref="departureSelect"
                                value={departureText}
                                onChangeCity={this.onChangeDeparture.bind(this)}
                                onChangeText={this.onChangeDepartureText.bind(this)}
                            />
                            <div className="toggle" onClick={this.changeDestOrigin.bind(this)}>换</div>
                        </div>
                        <div className="formline start-day">
                            <i>出发日期</i>
                            <DatePicker
                                dateFormat="YYYY/MM/DD"
                                selected={startDate}
                                placeholderText="请选择出发日期"
                                onChange={this.changeStartDate.bind(this)} />
                        </div>
                        <div className="formline search-city end-city">
                            <i>到达地</i>
                            <CitySuggest
                                value={destinationText}
                                onChangeCity={this.onChangeDestination.bind(this)}
                                onChangeText={this.onChangeDestinationText.bind(this)}
                            />
                            <s className="ico-time"></s>
                        </div>
                        <div className="formline end-day">
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
                                    {label: '经济舱/超级经济舱', value: 'ECONOMY;PREMIUM_ECONOMY'},
                                    {label: '公务舱', value: 'BUSINESS'},
                                    {label: '头等舱', value: 'FIRST'},
                                    {label: '公务舱/头等舱', value: 'BUSINESS;FIRST'},
                                ]}
                                onChange={this.changeCabinClass.bind(this)}
                            />
                        </div>
                        <div className="formline">
                            <i>航空公司</i><input type="text"/>
                        </div>
                    </div>
                }
                <a className="search-btn" onClick={this.onSearchClick.bind(this)}>搜索</a>
                <span className="passenger-alert"></span>
            </div>
        );
    }
}

export default FlightSearch;