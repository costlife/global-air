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
                    <div className="eback">
                        <Tips>
                            <span>退改/行李额及须知</span>
                            <div>
                                <div className="tipsTab">
                                    <div className="active">成人</div>
                                    <div>儿童</div>
                                    <div>婴儿</div>
                                </div>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>退改签说明</td>
                                            <td>退票：退票另需加收服务费100元人民币。需扣除已使用航段机票费用。
                        改期：需加收当地的服务费.需加收当地的服务费。改期另需加收服务费100元人民币。必须在航班起飞前7天办理更改手续。更改后的出发日期必须在2017-3-21与2017-9-27之间且更改后的日期-改期当日必须大于等于7天。如产生机票差价需另行支付。
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>行李额</td>
                                            <td className="baggage">
                                                <div><h4>第一段</h4>  <p>上海到香港 成人/每人100元</p></div>
                                                <div><h4>第二段 </h4> <p>上海到香港 成人/每人100元</p></div>
                                                <div><h4>第三段 </h4> <p> 上海到香港 成人/每人100元</p></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Tips>
                    </div>
                    <div className="person-price">票面价：{fare.avgSettlementPrice}</div>
                    <div className="person-back">返点：3.5%</div>
                    <div className="price">
                        <span>¥{fare.avgSettlementPrice}</span>
                        <span className="info">含税价</span>
                    </div>
                    <div className="person-order">
                        <a className="btn selbtn btn-o">预定</a>
                        <span>仅剩{fare.totalPassengerCount}张</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default PriceTag;
