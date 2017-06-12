import React, { Component } from 'react';
import classNames from 'classnames';
class Dialog extends Component {

    static propTypes = {
        sorter: React.PropTypes.array,
        active: React.PropTypes.number,
        onChange: React.PropTypes.func,
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
        onChange: React.PropTypes.func,
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
        let sort = this.state.sorter[index];
        sort.desc = desc;
        this.props.onChange(sort);
    }

    render() {
        let { sorter, active, onChange, desc, journeyType } = this.state;
        if (journeyType != 'OW') {
            sorter = sorter.filter((item) => item.value != 'rtDepartHour');
        }
        return (
            <div className="bar">
                {sorter.map((item, i) => {
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
            </div>
        );
    }
}

export default Dialog;
