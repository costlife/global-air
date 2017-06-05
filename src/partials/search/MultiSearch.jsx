import React, { Component } from 'react';
import Select from '../../components/select';
import classNames from 'classnames';

class CityChoose extends Component {

    static propTypes = {
        changeCabinClass: React.PropTypes.func,
        changeAdtCount: React.PropTypes.func,
        changeChdCount: React.PropTypes.func,
        changeInfCount: React.PropTypes.func,
    };

    static defaultProps = {
        changeCabinClass: () => {},
        changeAdtCount: () => {},
        changeChdCount: () => {},
        changeInfCount: () => {},
    };

    /**
     * @description 构造函数
     */
    constructor(props) {
        super(props);
        this.state = {
            total: 2
        };
    }

    addNewFlight() {
        let total = this.state.total + 1;
        this.setState({total: total})
    }

    deleteFlight() {
        let total = this.state.total - 1;
        this.setState({total: total})
    }

    renderFlightLine(total) {
        let flight = []
        for (var i = 0; i < total; i++) {
            flight.push(
                <div key={i} className="flightlinebox">
                    <div className="no">{i + 1}</div>
                    <div className="formline">
                        <i>出发地</i><input type="text" className="loacal" placeholder="支持中文/拼音/英文/三字码" />
                    </div>
                    <div className="formline">
                        <i>到达地</i><input type="text" className="loacal" placeholder="支持中文/拼音/英文/三字码" />
                        <s className="ico-time"></s>
                    </div>
                    <div className="formline">
                        <i>出发日期</i><input type="text" placeholder="选择返回日期" className="date"/>
                    </div>
                    {i > 1 ? <span className="flight-minus" onClick={this.deleteFlight.bind(this)}>-</span> : null}
                </div>
            );
        }
        return flight;
    }

    render() {
        const {changeCabinClass, changeAdtCount, changeChdCount, changeInfCount} = this.props;
        const {total} = this.state;
        return (
            <div className="searchForms">
                {this.renderFlightLine(total)}
                <div className="addflight" onClick={this.addNewFlight.bind(this)}>添加航程</div>
                <div className="flightlinebox passengersinfo">
                    <div className="formline">
                        <i>旅客身份</i><input type="text" value="普通" />
                    </div>
                    <div className="formline">
                        <i>成人</i>
                        <Select onChange={changeChdCount.bind(this)}/>
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