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
        let price, personType,tipType;
        if (type === 1) {
            personType = '成人';
            price = fare.adultPrice;
        } else if (type === 2) {
            personType = '儿童';
            price = fare.childPrice;
        }
        
        return (
            <div className="personLine">
                <div className="personInfos">
                    <div >{personType}/普通 x {count}</div>
                    <div
                        className="eback"
                        onMouseEnter={this.showOptions.bind(this)}
                        onMouseLeave={this.hideOptions.bind(this)}>
                        退改签规定
                        {show &&
                            <Tips />
                        }
                    </div>
                    <div>票面价：¥{price.settlementPrice * count}</div>
                    <div>政策：5%,6%,8%</div>
                    <div className="price">
                        <span>¥{price.settlementPriceWithTax * count}</span>
                        <span className="info">含税费¥{price.settlementPrice * count}</span>
                    </div>
                </div>
                <div className="rightInfo">
                    <div>{price.physicalClassName}</div>
                    <div className="subBtn"> <a className="btn selbtn btn-o">预定</a></div>
                </div>
            </div>
        )
    }
}
export default PriceTag;
