import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.less';

class FilterSelect extends Component {

    static propTypes = {
        data: PropTypes.array,
        label: PropTypes.string,
        onChange: PropTypes.func,
    };

    static defaultProps = {
        data: [{
            text: '直飞',
            value: 'direct',
            price: 570,
        }, {
            text: '直飞',
            value: 'direct2',
            price: 570,
        }],
        label: '航空公司',
        onChange: () => {}
    };

    /**
     * @description 构造函数
     */
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            activeArr: []
        };
    }

    showOptions() {
        this.setState({show: true});
    }

    hideOptions() {
        this.setState({show: false});
    }

    onSelectData(value, e) {
        let checked = e.target.checked;
        let activeArr = this.state.activeArr;
        if (checked) {
            activeArr.push(value);
        } else {
            activeArr = activeArr.filter(i => i != value);
        }
        this.setState({
            activeArr
        });
        this.props.onChange(activeArr);
    }

    render() {
        const { data, label, onChange } = this.props;
        const { show, activeArr } = this.state;
        return (
            <div
                className="filter-select"
                onMouseEnter={this.showOptions.bind(this)}
                onMouseLeave={this.hideOptions.bind(this)}>
                <div className="filter-label">
                    {label}<i className="fa fa-angle-down" aria-hidden="true"></i>
                </div>
                {show &&
                    <ul className="bar-filter-select" >
                        {data.map((item, i) =>
                            <li key={i} className="bar-filter-option">
                                <label>
                                    <input
                                        onChange={this.onSelectData.bind(this, item.value)}
                                        className="J_filter_option"
                                        type="checkbox"
                                        value={item.value}
                                        checked={activeArr.indexOf(item.value) >= 0}
                                    />
                                    {item.text}
                                    {item.price && <span className="base_price02"><dfn>¥</dfn>{item.price}</span>}
                                </label>
                            </li>
                        )}
                    </ul>
                }
            </div>
        );
    }
}

export default FilterSelect;
