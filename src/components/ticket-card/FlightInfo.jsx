import React, { Component } from 'react';
import moment from 'moment';
import classNames from 'classnames';

class FligthInfo extends Component {

    /**
     * @description 构造函数
     */
    constructor(props) {
        super(props);
    }

    unixToTimeFormat(value) {
        return moment(value).format('HH:MM');
    }

    isJumpDay(startTime, endTime) {
        return new Date(endTime).getDate() - new Date(startTime).getDate() > 0;
    }

    render() {
        const {od, showMoreInfoAction} = this.props;
        const {
            startTime,
            endTime,
            airline,
            duration,
            flightNo,
            dPortName,
            aPortName,
            transferCity
        } = od;
        let differDay = Math.floor((endTime - startTime) / 86400000);
        let depTerm = od.flightDetail[0].depTerm;
        let arrTerm = od.flightDetail[od.flightDetail.length - 1].arrTerm;
        let isJumpDay = this.isJumpDay(od.flightDetail[0].departureTime, od.flightDetail[od.flightDetail.length - 1].arriveTime);
        return (
            <div className="flight-info">
                <div className="flight-name">
                    <img src="http://simg1.qunarzz.com/site/images/airlines/HU.gif" alt="" />
                    <div className="flight-name-info">
                        <p>{airline}</p>
                        <p>{flightNo}</p>
                    </div>
                </div>
                <div className="flight-line">
                    <div className="flight-time start">
                        <div className="times">{this.unixToTimeFormat(startTime)}</div>
                        <b>
                            {dPortName}
                            {depTerm && <span>T{depTerm}</span>}
                        </b>
                    </div>
                    <div className="flight-arrow">
                        <div className="alltime">{duration}</div>
                        <div className="transfer"></div>
                        {/* <div className="direct"></div>*/}
                    </div>
                    <div className="flight-time end">
                        <div className="times">
                            {this.unixToTimeFormat(endTime)}
                            {isJumpDay && <div className="dateAdd">+1</div>}
                        </div>
                        <b>
                            {aPortName}
                            {arrTerm && <span>T{arrTerm}</span>}
                        </b>
                    </div>
                    <div>
                        {transferCity &&
                            <div className="transfer">转 <b>{transferCity}</b></div>
                        }
                    </div>
                </div>
                <div className="flight-tool">
                    <a className="viewMore" onClick={showMoreInfoAction.bind(this)}>航班详情</a>
                </div>
            </div>
        )
    }
}
export default FligthInfo;
