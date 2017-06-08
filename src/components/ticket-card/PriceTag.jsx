import React, { Component } from 'react';
import classNames from 'classnames';
import Tips from './Tips';
class PriceTag extends Component {

    /**
     * @description 构造函数
     */
    constructor(props) {
        super(props);
        //this.state = this.props;
        this.state = {
            show: false
        }

    }

    showOptions() {
        this.setState({show: true});
    }

    hideOptions() {
        this.setState({show: false});
    }
    render() {
        const {fare, type, count} = this.props;
        const {show} = this.state;
        return (
            <div className="personLine">
                <div className="personInfos">
                    <div className="person-title">{fare.title}</div>
                    <div className="person-class">{fare.physicalClassName}</div>
                    <div
                        className="eback"
                        onMouseEnter={this.showOptions.bind(this)}
                        onMouseLeave={this.hideOptions.bind(this)}>
                        退改/行李额及须知
                        {show &&
                            <Tips />
                        }
                    </div>
                    <div className="person-price">票面价：{fare.avgSettlementPrice}</div>
                    <div className="person-back">返点：3.5%</div>
                    <div className="price">
                        <span>¥{fare.avgSettlementPrice}</span>
                        <span className="info">含税价</span>
                    </div>
                    <div>
                        <a className="btn selbtn btn-o">预定</a>
                        <span>仅剩{fare.totalPassengerCount}张</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default PriceTag;
