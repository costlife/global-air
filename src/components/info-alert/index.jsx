import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './index.less';

const CODE_TYPES = {
    1: '.start-city',
    2: '.end-city',
    3: '.start-day',
    4: '.end-day',
    9: '.passenger-alert',
}
class InfoAlert extends Component {

    constructor(props) {
        super(props);
    }

    getPosition($target) {
        const { top = 0, left = 0 } = $target.offset() || {};
        const width = $target.width() || 0;
        const height = $target.height() || 0;
        let destLeft = left + width;
        let destTop = top + height / 2;
        return { destLeft, destTop };
    }

    render() {
        const {result} = this.props;
        if (!result) {
            return null;
        }
        const {code, index, text} = result;
        const $target = $(CODE_TYPES[code]);
        $target.find('input').focus();
        let {destLeft, destTop} = this.getPosition($target);
        return (
            <div className="info" style={{left: destLeft, top: destTop}}>
                <div className="info-alert">
                    <b className="tri_l"></b>
                    <div className="info-content">{text}</div>
                </div>
            </div>
        )
    }
}
export default InfoAlert;
