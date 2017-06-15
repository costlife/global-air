import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import CitySuggest from '../../components/city-suggest';
import Select from '../../components/select';
import classNames from 'classnames';
import utils from '../../utils';

class CityChoose extends Component {

    static propTypes = {
        changeCabinClass: PropTypes.func,
        changeAdtCount: PropTypes.func,
        changeChdCount: PropTypes.func,
        changeInfCount: PropTypes.func,
        onSegmentListChange:  PropTypes.func,
    };

    static defaultProps = {
        changeCabinClass: () => {},
        changeAdtCount: () => {},
        changeChdCount: () => {},
        changeInfCount: () => {},
        onSegmentListChange: () => {},
    };

    /**
     * @description 构造函数
     */
    constructor(props) {
        super(props);
        this.state = {
            total: 2,
            segmentList: this.buildSegmentListByTotal(2),
        };

    }

    buildSegmentListByTotal(total) {
        let segmentList = []
        for (let i = 0; i < total; i++) {
            segmentList.push({
                oriCode: '',
                desCode: '',
                departureText: '',
                destinationText: '',
                departureDate: '',
            })
        }
        return segmentList;
    }

    addNewFlight() {
        let total = this.state.total + 1;
        let segmentList = this.buildSegmentListByTotal(total);
        this.setState({total, segmentList})
    }

    deleteFlight() {
        let total = this.state.total - 1;
        let segmentList = this.buildSegmentListByTotal(total);
        this.setState({total, segmentList})
    }

    onChangeSegmentField(data, index, field) {
        let segmentList = this.state.segmentList;
        if (field == 'oriCode') {
            segmentList[index].departureText = utils.getName(data);
            segmentList[index].oriCode = utils.getCode(data);
        } else if (field == 'desCode') {
            segmentList[index].destinationText = utils.getName(data);
            segmentList[index].desCode = utils.getCode(data);
        } else {
            segmentList[index][field] = data;
        }
        this.props.onSegmentListChange(segmentList);
        this.setState({segmentList});
    }

    renderFlightLine(total) {
        let flight = [];
        const {segmentList} = this.state;
        for (let i = 0; i < total; i++) {
            flight.push(
                <div key={i} className="flightlinebox">
                    <div className="no">{i + 1}</div>
                    <div className="formline start-city">
                        <i>出发地</i>
                        <CitySuggest
                            value={segmentList[i].departureText}
                            onChangeCity={(departure) => this.onChangeSegmentField(departure, i, 'oriCode')}
                            onChangeText={(text) => this.onChangeSegmentField(text, i, 'departureText')}
                        />
                    </div>
                    <div className="formline">
                        <i>到达地</i>
                        <CitySuggest
                            value={segmentList[i].destinationText}
                            onChangeCity={(destination) => this.onChangeSegmentField(destination, i, 'desCode')}
                            onChangeText={(text) => this.onChangeSegmentField(text, i, 'destinationText')}
                        />
                        <s className="ico-time"></s>
                    </div>
                    <div className="formline">
                        <i>出发日期</i>
                        <DatePicker
                            dateFormat="YYYY/MM/DD"
                            selected={segmentList[i].departureDate}
                            placeholderText="请选择出发日期"
                            onChange={(date) => this.onChangeSegmentField(date, i, 'departureDate')} />
                    </div>
                    {i > 1 ?
                        <span className="flight-minus" onClick={this.deleteFlight.bind(this)}>
                            <i className="fa fa-minus-square" aria-hidden="true"></i>
                        </span> : null
                    }
                </div>
            );
        }
        return flight;
    }

    render() {
        const {changeCabinClass, changeAdtCount, changeChdCount, changeInfCount, onSegmentListChange} = this.props;
        const {total} = this.state;
        return (
            <div className="multi-search">
                {this.renderFlightLine(total)}
                <div className="addflight" onClick={this.addNewFlight.bind(this)}>添加航程</div>
                <div className="flightlinebox passengersinfo">
                    <div className="formline">
                        <i>成人</i>
                        <Select onChange={changeAdtCount.bind(this)}/>
                    </div>
                    <div className="formline">
                        <i>普通儿童</i>
                        <Select onChange={changeChdCount.bind(this)}/>
                    </div>
                    <div className="formline">
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
                            onChange={changeCabinClass.bind(this)}
                        />
                    </div>
                </div>
                <div className="moreInfo" style={{display:'none'}}>
                    <div className="formline">
                        <i>中转</i><input type="text" className="loacal" placeholder="支持中文/拼音/英文/三字码" />
                    </div>
                    <div className="formline">
                        <i>航空公司</i><input type="text" />
                    </div>
                </div>
            </div>
        )
    }
}

export default CityChoose;