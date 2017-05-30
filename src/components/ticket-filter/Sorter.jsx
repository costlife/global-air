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
        onChange: React.PropTypes.func,
    };

    /**
     * @description 构造函数
     */
    constructor(props) {
        super(props);
        this.state = this.props;
    }

    onChangeSorter(index) {
        this.setState({
            active: index
        });
        this.props.onChange(this.state.sorter[index]);
    }

    render() {
        const { sorter, active, onChange } = this.state;
        
        return (
            <div className="bar">
                {sorter.map((item, i) => {
                    let className = classNames({
                        active: i == active
                    });
                    return <a key={i} onClick={this.onChangeSorter.bind(this, i)} className={className}>{item.text}</a>
                })}
            </div>
        );
    }
}

export default Dialog;
