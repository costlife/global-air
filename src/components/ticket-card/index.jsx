import React, { Component } from 'react';
import moment from 'moment';
import './index.less';

class Dialog extends Component {

    /**
     * @description 构造函数
     */
    constructor(props) {
        super(props);
        this.state = {
            showMoreInfo: false
        };
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

    renderFlightInfo(detail) {
        let firstOD = detail.odlist[0];
        let lastOD = detail.odlist[detail.odlist.length - 1];
        let startTime = firstOD.flightDetail[0].departureTime;
        let endTime = lastOD.flightDetail[lastOD.flightDetail.length - 1].arriveTime;
        let differDay = Math.floor((endTime - startTime) / 86400000);
        return (
            <div className="flightInfo">
                <div className="flightsName">
                    <h1><i><img src="http://simg1.qunarzz.com/site/images/airlines/HU.gif" alt="" /></i>{detail.airlineSet.split(';')[0]}</h1>
                    <p>PS288波音767(大)</p>
                    <p>PS415波音737(中)</p>
                </div>
                <div className="linebars">
                    <div className="time star">
                        <div className="times">{this.unixToTimeFormat(startTime)}</div>
                        <b>{detail.odlist[0].aPortName}</b>
                    </div>
                    <div className="line">
                        <div className="alltime">14小时20分钟</div>
                        <div className="transfer">转 <b>基辅KBP</b></div>
                    </div>
                    <div className="time end">
                        <div className="times">
                            {this.unixToTimeFormat(endTime)}
                            <div className="dateAdd">+1</div>
                        </div>
                        <b>{detail.odlist[1].aPortName}</b>
                    </div>
                </div>
                <div className="flightTool">
                    <a className="viewMore" onClick={this.showMoreInfoAction.bind(this)}>航班详情</a>
                    <a className="btn selbtn btn-o">选为去程</a>
                </div>
            </div>
        )
    }

    renderFlightMoreInfo(odlist) {
        return odlist.map((oditem, index) => {
            let startTime = oditem.flightDetail[0].departureTime;
            let endTime = oditem.flightDetail[oditem.flightDetail.length - 1].arriveTime;
            let differDay = Math.floor((endTime - startTime) / 86400000);
            console.log(differDay)
            return (
                <div key={index} className="flightInfo">
                    <div className="flightsName">
                        <h1><i><img src="http://simg1.qunarzz.com/site/images/airlines/HU.gif" alt="" /></i>{oditem.airline}</h1>
                        <p>{oditem.flightNo}</p>
                    </div>
                    <div className="linebars">
                        <div className="time star">
                            <div className="times">{this.unixToTimeFormat(startTime)}</div>
                            <b>{oditem.dPortName}</b>
                        </div>
                        <div className="line">
                            <div className="alltime">{this.durationFormat(oditem.duration)}</div>
                            <div className="transfer">转 <b>基辅KBP</b></div>
                        </div>
                        <div className="time end">
                            <div className="times">
                                {this.unixToTimeFormat(endTime)}
                                {differDay > 0 ?
                                    <div className="dateAdd">+{differDay}</div> : null
                                }
                            </div>
                            <b>{oditem.flightDetail[oditem.flightDetail.length - 1].aPortName}</b>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        const { detail } = this.props;
        const { showMoreInfo } = this.state;
        console.log(detail);
        return (
            <div className="flightCard">
                {this.renderFlightInfo(detail)}
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
                    <div className="personLine">
                        <div>ssww=8</div>
                        <div>成人/普通</div>
                        <div>退改签规定</div>
                        <div>票面价：800</div>
                        <div>政策：5%,6%,8%</div>
                        <div className="price">
                            <b>¥9800.00</b>
                            <p>含税费¥8900</p>
                        </div>
                    </div>
                    <div className="personLine">
                        <div>ssww=8</div>
                        <div>成人/普通</div>
                        <div>退改签规定</div>
                        <div>票面价：800</div>
                        <div>政策：5%,6%,8%</div>
                        <div className="price">
                            <b>¥9800.00</b>
                            <p>含税费¥8900</p>
                        </div>
                    </div>
                </div>
            
            </div>
        );
    }
}

export default Dialog;
