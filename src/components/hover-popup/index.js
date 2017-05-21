/**
 * @description hover-popup：悬浮提示框，可放入任意内容
 * @param  {String}  content    必填，悬浮框显示内容（定宽150px，如需其他尺寸可通过className自定义）
 * @param  {String}  direction  可选，悬浮框展示方向，可选'top', 'bottom', 'left', 'right'，默认为top
 * @param  {String}  classNm    可选，组件容器的className
 * @param  {Object}  hoverStyle 可选，悬浮框样式（默认为宽度180px）
 *
 * @return {React.DOM}
 */

import React, { Component } from 'react';
import './index.less';

class HoverPopup extends Component {
    /**
     * 属性默认值
     * @type {Object}
     */
    static defaultProps = {
        classNm: '',
        direction: 'top',
        hoverStyle: { width: '180px' },
        content: ''
    };

    /**
     * props类型验证
     * @type {Object}
     */
    static propTypes = {
        classNm: React.PropTypes.string,
        direction: React.PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
        content: React.PropTypes.oneOfType([
           React.PropTypes.string,
           React.PropTypes.element,
        ]).isRequired,
        hoverStyle: React.PropTypes.object,
        children: React.PropTypes.oneOfType([
           React.PropTypes.string,
           React.PropTypes.element,
        ]).isRequired
    };

    /**
     * 构造函数
     */
    constructor(props) {
        super(props);
        this.state = {
            showHover: false
        };
    }

    /**
     * 控制state显示／隐藏悬浮提示框
     * @param  {Boolean} show 显示／隐藏标识，true为显示
     * @return {void}
     */
    showPop(show) {
        const { showHover } = this.state;
        if (showHover !== show) {
            this.setState({ showHover: show });
        }
    }

    /**
     * 渲染index 入口
     * @return {React.DOM}
     */
    render() {
        const {
            classNm,
            content,
            direction,
            hoverStyle,
            children
        } = this.props;
        const { showHover } = this.state;
        return (
            <div className={`pgc-hover-popup ${classNm}`} onMouseMove={this.showPop.bind(this, true)} onMouseLeave={this.showPop.bind(this, false)} >
                {children}
                {
                    showHover ?
                    <div className={`hover-content ${direction}`} style={hoverStyle}>
                        {content}
                        <div className="hover-arrow"><i /></div>
                    </div>
                    : null
                }
            </div>
        );
    }
}

export default HoverPopup;
