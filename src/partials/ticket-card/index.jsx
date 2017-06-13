import React, { Component } from 'react';
import moment from 'moment';
import PriceTag from './PriceTag';
import FlightInfo from './FlightInfo';
import FlightDetail from './FlightDetail';
import './index.less';

class TicketCard extends Component {

    /**
     * @description 构造函数
     */
    constructor(props) {
        super(props);
        this.state = {
            showMoreInfo: false
        };
    }

    showMoreInfoAction() {
        this.setState({showMoreInfo: !this.state.showMoreInfo});
    }

    render() {
        const { detail, params, priceType } = this.props;
        const { showMoreInfo } = this.state;
        const { odlist, fareList } = detail;
        return (
            <div className="flightCard">
                {odlist.map((od, i) => {
                    return (
                        <FlightInfo
                            key={i}
                            od={od}
                            enableShowMoreInfo={odlist.length === i + 1}
                            showMoreInfoAction={this.showMoreInfoAction.bind(this)}
                            showMoreInfo={showMoreInfo}
                        />
                    )
                })}
                {showMoreInfo &&
                    <div>
                        {odlist.map((od, i) => {
                            return (
                                <FlightDetail key={i} index={i} detail={od.flightDetail}/>
                            )
                        })}
                    </div>
                }
                <div className="personBar">
                    {fareList.map((fare, i) =>
                        <PriceTag key={i} odlist={odlist} fare={fareList[0]} priceType={priceType} params={params}/>
                    )}
                </div>
            </div>
        );
    }
}

export default TicketCard;
