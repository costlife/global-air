import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Switch from '../../components/switch';
import './index.less';
class TicketSorter extends Component {

    static propTypes = {
        sorter: PropTypes.array,
        active: PropTypes.number,
        onChange: PropTypes.func,
    };

    static defaultProps = {
        sorter: [
            {
                text: '起飞时间',
                value: 'departHour'
            },
            {
                text: '抵达时间',
                value: 'rtDepartHour'
            },
            {
                text: '耗时',
                value: 'duration'
            },
            {
                text: '价格',
                value: 'price'
            }
        ],
        active: 0,
        desc: true,
        onChange: PropTypes.func,
    };

    /**
     * @description 构造函数
     */
    constructor(props) {
        super(props);
        this.state = this.props;
    }

    onChangeSorter(index, curActive) {
        let desc = index == curActive ? !this.state.desc: true;
        this.setState({
            active: index,
            desc: desc
        });
        let sort = this._sorter[index];
        sort.desc = desc;
        this.props.onChange(sort);
    }

    render() {
        let { sorter, active,
            checkDirectOnly, onChange, desc, journeyType } = this.state;
        const {
            priceType,
            priceTypeChange,} = this.props;
        if (journeyType != 'OW') {
            this._sorter = sorter.filter((item) => item.value != 'rtDepartHour');
        } else {
            this._sorter = sorter;
        }
        return (
            <div className="ticket-sorter">
                {this._sorter.map((item, i) => {
                    let isCurrent = i == active;
                    let className = classNames({
                        active: isCurrent
                    });
                    let iconClass = classNames({
                        'fa': true,
                        'fa-angle-down': desc,
                        'fa-angle-up': !desc,
                    });
                    return <a key={i} onClick={this.onChangeSorter.bind(this, i, active)} className={className}>
                        {item.text}
                        {isCurrent && <i className={iconClass} aria-hidden="true"></i>}
                    </a>
                })}
                <label className="check-only"><input type="checkbox" onClick={checkDirectOnly}/>仅看直飞</label>
                <Switch className="tax-filter" activeIndex={priceType} onChangeIndex={priceTypeChange}/>
            </div>

        );
    }
}

export default TicketSorter;
