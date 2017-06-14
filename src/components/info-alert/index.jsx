import React, { Component } from 'react';
import './index.less';

class InfoAlert extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="info">
                <div className="info-alert">
                    <b className="tri_l"></b>
                    <div className="info-content">请选择酒店所在城市</div>
                </div>
            </div>
        )
    }
}
export default InfoAlert;
