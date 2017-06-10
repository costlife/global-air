import React, { Component } from 'react';
import moment from 'moment';
import PriceTag from './PriceTag';
import Flight from './Flight';
import './index.less';

class TicketCard extends Component {

    /**
     * @description 构造函数
     */
    constructor(props) {
        super(props);

    }

    render() {
        const { detail } = this.props;

        return (
            <div className="flightCard">
                {detail.odlist.map((od, i) => {
                    return <Flight od={od} key={i}/>
                })}
                <div className="personBar">
                    {detail.fareList.map((fare, i) => 
                        <PriceTag fare={detail.fareList[0]} type={1}/>
                    )}
                </div>
            </div>
        );
    }
}

export default TicketCard;
