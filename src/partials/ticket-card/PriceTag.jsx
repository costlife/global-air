import React, { Component } from 'react';
import classNames from 'classnames';
import Tips from '../../components/tips';

class PriceTag extends Component {

    /**
     * @description 构造函数
     */
    constructor(props) {
        super(props);
        // priceType == 0为不含税价，priceType == 1 为含税价
    }

    renderSpecial(fare) {
        return  <Tips className="person-title">
            <span>{fare.title}</span>
            <div className="title-tips">
                <p>商务优选机票服务有保障，我们提供：</p>
                <p>·快速出票；</p>
                <p>·提供行程单或者机票发票，报销无忧；</p>
                <p>·服务优先：尊享7×24小时的全天候服务。</p>
            </div>
        </Tips>
    }

    renderClass(fare) {
        return <Tips className="person-class">
            <span>{fare.physicalClassName}</span>
            <div className="class-tips">
                {fare.classInfo.map((info, i) => {
                    return <div key={i}>
                        <span>{info.cityName}</span>
                        <span>{info.physicalClassName}({info.cabin})</span>
                    </div>
                })};
            </div>
        </Tips>
    }

    renderEback(fare) {
        return <Tips className="eback">
            <span>退改/行李额及须知</span>
            <div className="eback-tips">
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
    }

    renderPrice(fare, priceType, params) {
        let adtCount = params.passengerType[0].passgerNumber;
        let chdCount = params.passengerType[1].passgerNumber;
        let infCount = params.passengerType[2].passgerNumber;
        const {
            avgSettlementPriceWithTax,
            avgSettlementPrice,
            avgTax,
            adultPrice,
            childPrice,
            infPrice,
        } = fare;
        let priceList = [{
            label: '成人',
            priceWithTax:  adultPrice && adultPrice.settlementPriceWithTax,
            price: adultPrice && adultPrice.settlementPrice,
            tax: adultPrice && adultPrice.tax,
            count: adtCount
        }, {
            label: '儿童',
            priceWithTax:  childPrice && childPrice.settlementPriceWithTax,
            price: childPrice && childPrice.settlementPrice,
            tax: childPrice && childPrice.tax,
            count: chdCount
        }, {
            label: '婴儿',
            priceWithTax:  infPrice && infPrice.settlementPriceWithTax,
            price: infPrice && infPrice.settlementPrice,
            tax: infPrice && infPrice.tax,
            count: infCount
        }, {
            label: '往返人均含税价',
            priceWithTax:  avgSettlementPriceWithTax,
            price: avgSettlementPrice,
            tax: avgTax,
            count: -1
        }]
        return <Tips className="person-class">
            <div className="price">
                {priceType == 0 ?
                    <span><em>¥{avgSettlementPrice}</em>税费¥{avgTax}</span>
                    :
                    <span><em>¥{avgSettlementPriceWithTax}</em>含税价</span>
                }
            </div>
            <div className="price-tips">
                {priceList.map((item, i) => {
                    if (item.count > 0 || item.count == -1) {
                        return <div key={i}>
                            <label>{item.label}</label>
                            {priceType == 0 ?
                                <span>
                                    <span>¥{item.price}</span>
                                    <span>+¥{item.tax}税费</span>
                                </span>
                                :
                                <span>
                                    <span>¥{item.priceWithTax}</span>
                                </span>
                            }
                            {item.count > 0 && <span>x{item.count}人</span>}
                        </div>
                    }
                })}
            </div>
        </Tips>
    }

    render() {
        const {fare, priceType, count, params} = this.props;
        return (
            <div className="price-tag">
                <div className="personInfos">
                    {this.renderSpecial(fare)}
                    {this.renderClass(fare)}
                    {this.renderEback(fare)}
                    <div className="person-price">票面价：<em>¥{fare.avgSettlementPrice}</em></div>
                    <div className="person-back">返点：<em>3.5%</em></div>
                    {this.renderPrice(fare, priceType, params)}
                    <div className="person-order">
                        <a className="btn selbtn btn-o">预定</a>
                        {fare.seats < 9 && <span>仅剩{fare.seats}张</span>}
                    </div>
                </div>
            </div>
        )
    }
}
export default PriceTag;
