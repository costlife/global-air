import React, { Component } from 'react';
import moment from 'moment';
import classNames from 'classnames';
import utils from '../../utils';
class FligthInfo extends Component {

    /**
     * @description 构造函数
     */
    constructor(props) {
        super(props);
    }

    unixToTimeFormat(value) {
        return moment(value).format('HH:mm');
    }

    isJumpDay(startTime, endTime) {
        return new Date(endTime).getDate() - new Date(startTime).getDate() > 0;
    }

    durationFormat(value) {
        return value.replace(':', '小时') + '分';
    }

    render() {
        const {od, showMoreInfoAction, showMoreInfo} = this.props;
        const {
            departureTime,
            arriveTime,
            airline,
            airlineName,
            duration,
            flightNo,
            dPortName,
            aPortName,
            flightDetail,
            transferCity,
            stopCity,
        } = od;
        let depTerm = flightDetail[0].depTerm;
        let arrTerm = flightDetail[flightDetail.length - 1].arrTerm;
        let isJumpDay = this.isJumpDay(flightDetail[0].departureTime, flightDetail[flightDetail.length - 1].arriveTime);
        return (
            <div className="flight-info">
                <div className="flight-name">
                    <img src={utils.getLogoByCode(airline)} alt="" />
                    <div className="flight-name-info">
                        <p>{airlineName}</p>
                        <p>{flightNo}</p>
                    </div>
                </div>
                <div className="flight-line">
                    <div className="flight-time start">
                        <div className="times">{this.unixToTimeFormat(departureTime)}</div>
                        <b>
                            {dPortName}
                            {depTerm && <span>T{depTerm}</span>}
                        </b>
                    </div>
                    <div className="flight-arrow">
                        {flightDetail.length == 1 ?
                            <div className="flight-arrow-direct"></div>
                            :
                            <div className="flight-arrow-transfer"></div>
                        }
                    </div>
                    <div className="flight-time end">
                        <div className="times">
                            {this.unixToTimeFormat(arriveTime)}
                            {isJumpDay && <span className="date-add">+1</span>}
                        </div>
                        <b>
                            {aPortName}
                            {arrTerm && <span>T{arrTerm}</span>}
                        </b>
                    </div>
                    <div className="flight-duration">
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                        {duration}
                    </div>
                    <div className="flight-transfer">
                        {transferCity &&
                            <div className="flight-transfer-item">
                                <label>中转</label>
                                <b>{transferCity}</b>
                            </div>
                        }
                        {stopCity &&
                            <div className="flight-transfer-item">
                                <label>经停</label>
                                <b>{stopCity}</b>
                            </div>
                        }
                    </div>
                </div>
                <div className="flight-tool">
                    <a className="viewMore" onClick={showMoreInfoAction.bind(this)}>
                        航班详情
                        {showMoreInfo ?
                            <i className="fa fa-angle-up" aria-hidden="true"></i>
                            :
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                        }
                    </a>
                </div>
            </div>
        )
    }
}
export default FligthInfo;
