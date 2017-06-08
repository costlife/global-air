import React, { Component } from 'react';
import moment from 'moment';
import PriceTag from './PriceTag';
import FlightInfo from './FlightInfo';
import './index.less';

class TicketCard extends Component {

    static propTypes = {
        adultCount: React.PropTypes.number,
        babyCount: React.PropTypes.number,
        childCount: React.PropTypes.number,
    };

    static defaultProps = {
        adultCount: 1,
        babyCount: 1,
        childCount: 1,
    };

    /**
     * @description 构造函数
     */
    constructor(props) {
        super(props);
        this.state = {
            showMoreInfo: false
        };
    }

    isJumpDay(startTime, endTime) {
        return new Date(endTime).getDate() - new Date(startTime).getDate() > 0;
    }

    unixToTimeFormat(value) {
        return moment(value).format('HH:MM');
    }

    durationFormat(value) {
        return value.replace(':', '小时') + '分';
    }

    showMoreInfoAction() {
        this.setState({showMoreInfo: !this.state.showMoreInfo});
    }


    renderFlightMoreInfo(odlist) {
        console.log(odlist)
        return odlist.map((oditem, index) => {
            let startTime = oditem.flightDetail[0].departureTime;
            let endTime = oditem.flightDetail[oditem.flightDetail.length - 1].arriveTime;
            let differDay = Math.floor((endTime - startTime) / 86400000);

            return (
                <div key={index} className="flightInfo">
                    <div className="flightsName">
                        <h1><i><img src="http://simg1.qunarzz.com/site/images/airlines/HU.gif" alt="" /></i>{oditem.airline}</h1>
                        <p>{oditem.flightNo}</p>
                    </div>
                    <div className="linebars">
                        <div className="time star">
                            <div className="times">{this.unixToTimeFormat(startTime)}</div>
                            <b>
                                {oditem.dPortName}
                                {oditem.flightDetail[0].depTerm && <span>T{oditem.flightDetail[0].depTerm}</span>}
                            </b>
                        </div>
                        <div className="line">
                            <div className="alltime">{this.durationFormat(oditem.duration)}</div>
                            {oditem.transferCity &&
                                <div className="transfer">转 <b>{oditem.transferCity}</b></div>
                            }
                        </div>
                        <div className="time end">
                            <div className="times">
                                {this.unixToTimeFormat(endTime)}
                                {differDay > 0 ?
                                    <div className="dateAdd">+{differDay}</div> : null
                                }
                            </div>
                            <b>
                                {oditem.flightDetail[1].aPortName}
                                {oditem.flightDetail[1].arrTerm && <span>T{oditem.flightDetail[1].arrTerm}</span>}
                            </b>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        const { detail } = this.props;
        const { showMoreInfo } = this.state;

        return (
            <div className="flightCard">
                {detail.odlist.map((od, i) => {
                    return <FlightInfo
                        key={i}
                        od={od}
                        showMoreInfoAction={this.showMoreInfoAction}
                    />
                })}
                {showMoreInfo && this.renderFlightMoreInfo(detail.odlist)}
                <div className="flightDetails">
                    <div className="flights">
                        <div className="flines">
                        <div className="lineStep">第一段</div>
                            <div className="fname">
                                <img src="http://simg1.qunarzz.com/site/images/airlines/HU.gif" alt="" /><h2>西班牙伊比利亚航空</h2>

                                <div>
                                    <span className="orange">BN4783</span>
                                    <span>大型机</span>
                                    <span>经济舱</span>
                                    <span>行李额：2件</span>
                                </div>


                            </div>
                            <div className="timeline">
                                <div className="star">
                                    <p>LHR 希思罗机场2</p>
                                    <p className="time">2017-04-27 14:00</p>
                                    </div>
                                    <div className="bar">
                                        <div className="flightTime">约2小时35分</div>
                                    </div>
                                <div className="end">
                                    <p>ARN 阿兰达机场</p>
                                    <p className="time">2017-04-27 14:00</p>
                                </div>
                            </div>

                        </div>

                        <div className="transferName">
                            <div className="time">
                                中转 斯德哥尔摩
                                <span className="orange">停2小时30分</span></div>
                        </div>
                        <div className="flines">
                            <div className="lineStep">第二段</div>
                            <div className="fname">
                                <h2><img src="http://simg1.qunarzz.com/site/images/airlines/HU.gif" alt="" />西班牙伊比利亚航空<sub>BN4783</sub></h2>
                                <div>
                                    <span>大型机</span>
                                    <span>经济舱</span>
                                    <span>行李额：2件</span>
                                </div>
                            </div>
                            <div className="timeline">
                                <div className="star">
                                    <p>LHR 希思罗机场2</p>
                                    <p className="time">2017-04-27 14:00</p>
                                    </div>
                                    <div className="bar">
                                        <div className="flightTime">约2小时35分</div>
                                    </div>
                                <div className="end">
                                    <p>ARN 阿兰达机场</p>
                                    <p className="time">2017-04-27 14:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="personBar">
                    <PriceTag fare={detail.fareList[0]} type={1} count={2}/>
                    <PriceTag fare={detail.fareList[0]} type={2} count={3}/>
                </div>

            </div>
        );
    }
}

export default TicketCard;
