import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactSwipe from 'react-swipe';
import utils from '../../utils';

class PriceTable extends Component {

    static propTypes = {
        priceTable: PropTypes.array,
    };

    static defaultProps = {
        priceTable: [],
    };


    /**
     * @description 构造函数
     */
    constructor(props) {
        super(props);
    }

    next() {
        this.refs.reactSwipe.next();
    }

    prev() {
        this.refs.reactSwipe.prev();
    }

    renderTable(singleTable, index, total) {
        let head = ['所有航司'], body = [['第一次转机'], ['第二次转机'], ['直飞']];
        singleTable.map(item => {
            head.push(item.airlineName);
            body[0].push(item.lpo);
            body[1].push(item.lpt);
            body[2].push(item.lp);
        });
        return (
            <div key={index}>
                <div className="ticket-table-page" onClick={this.prev.bind(this)}>
                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                    <br/>
                    <span>{index} / {total}</span>
                </div>
                <table key={index} className="ticket-table" width="1">
                    <tbody>
                        <tr>
                            {head.map((item, i) => {
                                let code = utils.getCode(item);
                                return <td key={i}>
                                    {code && <img src={utils.getLogoByCode(code)} />}
                                    {item}
                                </td>
                            })}
                        </tr>
                        {body.map((item, i) =>
                            <tr key={i}>
                                {item.map((data, i) =>
                                    <td key={i}>{data || ' -'}</td>
                                )}
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="ticket-table-page" onClick={this.next.bind(this)}>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                    <br/>
                    <span>{index} / {total}</span>
                </div>
            </div>

        )
    }

    render() {
        const { priceTable } = this.props;
        let pageSize = 7;
        let swipeTable = [];
        let singleTable = [];
        let len = priceTable.length;
        let total = Math.ceil(priceTable.length / pageSize)
        for (let i = 0; i < len; i++) {
            singleTable.push(priceTable[i]);
            if (singleTable.length == pageSize || i == len - 1) {
                let index = swipeTable.length + 1;
                swipeTable.push(this.renderTable(singleTable, index, total));
                singleTable = [];
            }
        }
        return (
            <div className="ticket-table-container">
                <ReactSwipe ref="reactSwipe" className="carousel" swipeOptions={{continuous: false}}>
                    {swipeTable}
                </ReactSwipe>
            </div>
        );
    }
}

export default PriceTable;
