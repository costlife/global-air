import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
class Pagination extends Component {

    /**
     * props类型验证
     * @type {Object}
     */
    static propTypes = {
        prefixCls: PropTypes.string,
        current: PropTypes.number,
        total: PropTypes.number,
        direction: PropTypes.string,
        onPageChange: PropTypes.func
    };

    static defaultProps = {
        prefixCls: 'global-pagination',
        current: 1,
        total: 1,
        direction: 'center', // 'left', 'right'
        onPageChange: (index) => console.log(index)
    };

    /**
     * @description 构造函数
     */
    constructor(props) {
        super(props);
        this.state = this.props;
    }

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps);
    }

    changePage(index) {
        this.setState({
          current: index
        });
        this.props.onPageChange(index);
    }

    renderNumbers(total, current) {
        var numbers = [];
        numbers.push(<a key={'prev'} onClick={this.changePage.bind(this, Math.max(current - 1, 1))}>上一页</a>);
        let renderList = this.calculateShowNumbers(total, current);
        for (var i = 0; i < renderList.length; i++) {
            let index = renderList[i];
            let item = (
                <a key={i} className={index === current ? 'active' : ''} onClick={this.changePage.bind(this, index)}>{index}</a>
            );
            if (!index) {
                item = <a key={`separater${i}`} className="separater">...</a>
            }
            numbers.push(item);
        }
        numbers.push(<a key={'next'} onClick={this.changePage.bind(this, Math.min(current + 1, total))}>下一页</a>);
        return numbers;
    }

    calculateShowNumbers(total, current) {
        let array = [];
        if (total <= 7) {
            for (let i = 1; i < total + 1; i++) {
                array.push(i);
            }
        } else if (current <= 4) { // total > 7
            for (let i = 1; i <= 6; i++) {
                array.push(i);
            }
            array.push(null);
            array.push(total);
        } else if (current < total - 3) { // total > 7 && current > 4
            array = [1, null, current - 2, current - 1, current, current + 1, current + 2, null, total];
        } else { // total > 7 && current > total - 2
            array.push(1);
            array.push(null);
            for (let i = total - 5; i <= total; i++) {
                array.push(i);
            }
        }
        return array;
    }

    render() {
        const {prefixCls, total, current, direction, withJump} = this.state;
        let conCls = classNames({
          [`${prefixCls}-container`]: true,
          [`${prefixCls}-container-${direction}`]: true
        });
        return <div className="paged">
          <div className={`${prefixCls}-numbers`}>{this.renderNumbers(total, current)}</div>
        </div>

    }
}
export default Pagination;
