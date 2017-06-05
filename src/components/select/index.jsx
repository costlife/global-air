import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import classNames from 'classnames';
import './index.less';

class SelectComponent extends Component {

    static propTypes = {
        onChange: React.PropTypes.func,
        options: React.PropTypes.array,
    };

    static defaultProps = {
        onChange: () => {},
        options: [
            {label:'无', value: 0},
            {label:'1', value: 1},
            {label:'2', value: 2},
            {label:'3', value: 3},
            {label:'4', value: 4},
            {label:'5', value: 5},
            {label:'6', value: 6},
            {label:'7', value: 7},
            {label:'8', value: 8},
            {label:'9', value: 9},
        ],
    };
    /**
     * @description 构造函数
     */
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            activeIndex: 0,
        }
    }

    handleClickOutside = e => {
        this.setState({show: false});
    }

    showList() {
        this.setState({show: true});
    }

    selectOption(options, activeIndex) {
        this.setState({activeIndex, show: false});
        this.props.onChange(options[activeIndex])
    }

    render() {
        const {show, activeIndex} = this.state;
        const {options, onChange} = this.props;
        let current = options[activeIndex];
        let iconClass = classNames({
            'fa': true,
            'fa-angle-down': !show,
            'fa-angle-up': show,
        })
        return (
            <div className="select">
                <input type="text" className="selects" value={current.label} onClick={this.showList.bind(this)} readOnly/>
                <i className={iconClass} aria-hidden="true"></i>
                {show &&
                    <dl className="select-list">
                        {options.map((item, i) =>
                            <dd
                                key={i}
                                className="select-option"
                                onClick={this.selectOption.bind(this, options, i)}
                            >{item.label}</dd>
                        )}
                    </dl>
                }
            </div>
        )
    }
}
export default onClickOutside(SelectComponent);
