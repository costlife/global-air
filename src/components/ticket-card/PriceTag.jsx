import React, { Component } from 'react';
import classNames from 'classnames';
class PriceTag extends Component {

    /**
     * @description 构造函数
     */
    constructor(props) {
        super(props);
        this.state = this.props;
    }

    render() {
        const {fare, type, count} = this.props;
        let price, personType;
        if (type === 1) {
            personType = '成人';
            price = fare.adultPrice;
        } else if (type === 2) {
            personType = '儿童';
            price = fare.childPrice;
        }
        console.log(fare);
        return (
            <div className="personLine">
                <div>{price.physicalClassName}</div>
                <div>{personType}/普通 x {count}</div>
                <div>退改签规定</div>
                <div>票面价：¥{price.settlementPrice * count}</div>
                <div>政策：5%,6%,8%</div>
                <div className="price">

                    <b>¥{price.settlementPriceWithTax * count}</b>
                    <p>含税费¥{price.settlementPrice * count}</p>
                </div>
            </div>
        )
    }
}
export default PriceTag;
