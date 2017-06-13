import React, { Component } from 'react';
import moment from 'moment';
import classNames from 'classnames';
import utils from '../../utils';
class FlightDetail extends Component {

    /**
     * @description 构造函数
     */
    constructor(props) {
        super(props);
    }

    unixToTimeFormat(value) {
        return moment(value).format('YYYY-MM-DD HH:mm');
    }

    unixToDurationFormat(value) {
        return moment.duration(value).hours() + 'h' + moment.duration(value).minutes() + 'm';
    }

    renderFlightDetailItem(item, index, total) {
        const { detail } = this.props;
        const {
            airline,
            airlineName,
            airFlightNo,
            plane,
            duration,
            departureAirport,
            dPortName,
            depTerm,
            departureTime,
            arriveAirport,
            aCityName,
            aPortName,
            arrTerm,
            arriveTime,
        } = item;
        let hasTransferTime = index < total - 1;
        return (
            <div key={index}>
                <div className="flines">
                    <div className="fname">
                        <img src={utils.getLogoByCode(airline)} alt="" /><h2>{airlineName}</h2>
                        <div>
                            <span className="orange">{airline}{airFlightNo}</span>
                            <span>{plane}</span>
                        </div>
                    </div>
                    <div className="timeline">
                        <div className="star">
                            <p>{departureAirport} {dPortName} T{depTerm}</p>
                            <p className="time">{this.unixToTimeFormat(departureTime)}</p>
                            </div>
                            <div className="bar">
                                <div className="flightTime">{duration}</div>
                            </div>
                        <div className="end">
                            <p>{arriveAirport} {aPortName} T{arrTerm}</p>
                            <p className="time">{this.unixToTimeFormat(arriveTime)}</p>
                        </div>
                    </div>
                </div>
                {hasTransferTime &&
                    <div className="transferName">
                        <div className="time">
                            中转 {aCityName}
                            <span className="orange">
                                停留时长 {this.unixToDurationFormat(detail[index + 1].departureTime - arriveTime)}
                            </span>
                        </div>
                    </div>
                }
            </div>
        )
    }

    render() {
        const { detail, index } = this.props;
        let total = detail.length;
        return (
            <div className="flightDetails">
                <div className="flights">
                    <div className="lineStep">第{index + 1}段</div>
                    {detail.map((item, i) => {
                        return this.renderFlightDetailItem(item, i, total);
                    })}
                </div>
            </div>
        )
    }
}
export default FlightDetail;
