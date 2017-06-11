import React, { Component } from 'react';
import classNames from 'classnames';
import './index.less';

class Switch extends Component {

    static propTypes = {
        data: React.PropTypes.array,
        activeIndex: React.PropTypes.number,
        onChangeIndex: React.PropTypes.func,
    };

    static defaultProps = {
        data: [{
            label: '不含税价',
            value: 0
        }, {
            label: '含税价',
            value: 1
        }],
        activeIndex: 0,
        onChangeIndex: () => {}
    };

    /**
     * @description 构造函数
     */
    constructor(props) {
        super(props);
    }

    render() {
        const {data, activeIndex, onChangeIndex, className} = this.props;
        let cls = 'switch ' + className;
        return (
            <div className={cls}>
                <span className="bar">
                    {data.map((item, i) => {
                        let itemCls = classNames({
                            active: activeIndex == i
                        });
                        return <a 
                            className={itemCls}
                            href="javascript:void(0);"  
                            onClick={() => onChangeIndex(item.value)}
                        >{item.label}</a>
                    })}
                </span>
            </div>
        )
    }
}

export default Switch;