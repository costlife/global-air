import React, { Component } from 'react';
import classNames from 'classnames';
import FlightInfo from './FlightInfo';
import FlightDetail from './FlightDetail';
class Flight extends Component {

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
        const { od } = this.props;
        const { showMoreInfo } = this.state;
        return (
            <div className="flight">
                <FlightInfo
                    od={od}
                    showMoreInfoAction={this.showMoreInfoAction.bind(this)}
                    showMoreInfo={showMoreInfo}
                />
                {showMoreInfo &&
                    <FlightDetail detail={od.flightDetail}/>
                }
            </div>
        )
    }
}
export default Flight;
