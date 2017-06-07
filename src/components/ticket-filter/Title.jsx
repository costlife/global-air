import React, { Component } from 'react';
import moment from 'moment';

class TicketFilterTitle extends Component {

    static propTypes = {
        onOpen: React.PropTypes.func,
    };

    static defaultProps = {
        onOpen: () => console.log(111),
    };

    /**
     * @description 构造函数
     */
    constructor(props) {
        super(props);
    }

    render() {
        const { onOpen } = this.props;

        return (
            <div className="filter-title">
                【单程】 昆明 - 首尔 5月23日 （68个航班，0个直飞）
                <div style={{float:'right'}}>
                    <a href="javascript:void(0)" onClick={onOpen}>展开航司矩阵表</a>
                </div>
            </div>
        );
    }
}

export default TicketFilterTitle;
