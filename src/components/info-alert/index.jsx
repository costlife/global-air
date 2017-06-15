import React, { Component } from 'react';
import './index.less';

class InfoAlert extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        const {text, left, top} = this.props;
        return (
            <div className="info">
                <div className="info-alert">
                    <b className="tri_l"></b>
                    <div className="info-content">{text}</div>
                </div>
            </div>
        )
    }
}
export default InfoAlert;
