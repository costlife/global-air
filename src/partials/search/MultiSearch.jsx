import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import CitySuggest from '../../components/city-suggest';
import Select from '../../components/select';
import classNames from 'classnames';

class CityChoose extends Component {

    static propTypes = {
        changeCabinClass: React.PropTypes.func,
        changeAdtCount: React.PropTypes.func,
        changeChdCount: React.PropTypes.func,
        changeInfCount: React.PropTypes.func,
        onSegmentListChange:  React.PropTypes.func,
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
        segmentList[index][field] = data;
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
                    <div className="formline">
                        <i>出发地</i>
                        <CitySuggest onChangeCity={(departure) => this.onChangeSegmentField(departure, i, 'oriCode')}/>
                    </div>
                    <div className="formline">
                        <i>到达地</i>
                        <CitySuggest onChangeCity={(destination) => this.onChangeSegmentField(destination, i, 'desCode')}/>
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
                    {i > 1 ? <span className="flight-minus" onClick={this.deleteFlight.bind(this)}>-</span> : null}
                </div>
            );
        }
        return flight;
    }

    render() {
        const {changeCabinClass, changeAdtCount, changeChdCount, changeInfCount, onSegmentListChange} = this.props;
        const {total} = this.state;
        return (
            <div className="searchForms">
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
                                {label: '公务舱', value: 'BUSINESS'},
                                {label: '头等舱', value: 'FIRST'},
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