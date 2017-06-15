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
            activeArr: []
        };
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
        const { activeArr } = this.state;
        return (
            <div className="filter-select">
                <div className="filter-label">{label}</div>
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
            </div>
        );
    }
}

export default FilterSelect;
