import React, { Component } from 'react';
import classNames from 'classnames';
import './index.less';

class Dialog extends Component {

    static propTypes = {
        data: React.PropTypes.array,
        label: React.PropTypes.string,
        onChange: React.PropTypes.func,
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
        activeArr: [],
        onChange: () => {}
    };

    /**
     * @description 构造函数
     */
    constructor(props) {
        super(props);
        this.state = this.props;
    }

    showOptions() {
        this.setState({show: true});
    }

    hideOptions() {
        this.setState({show: false});
    }

    onSelectData(value) {
        let activeArr = this.state.activeArr;
        activeArr.push(value);
        this.setState({
            activeArr
        });
        this.props.onChange();
    }

    render() {
        const { data, label, show, activeArr, onChange } = this.state;
        
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

export default Dialog;