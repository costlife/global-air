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
            <div className="flightInfo">
                <div className="flightsName">
                    <h1><i><img src="http://simg1.qunarzz.com/site/images/airlines/HU.gif" alt="" /></i>{airline}</h1>
                    <p>{flightNo}</p>
                </div>
                <div className="linebars">
                    <div className="time star">
                        <div className="times">{this.unixToTimeFormat(startTime)}</div>
                        <b>
                            {dPortName}
                            {depTerm && <span>T{depTerm}</span>}
                        </b>
                    </div>
                    <div className="line">
                        <div className="alltime">{duration}</div>
                        <div className="transfer"></div>
                    </div>
                    <div className="time end">
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
                <div className="flightTool">
                    <a className="viewMore" onClick={showMoreInfoAction.bind(this)}>航班详情</a>
                </div>
            </div>
        )
    }
}
export default FligthInfo;
