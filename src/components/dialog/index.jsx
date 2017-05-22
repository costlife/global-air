/**
 * @description dialog
 * @param {String} prefixCls 组件类名前缀
 * @param {String || Element} title 对话框标题
 * @param {Boolean} showCloseIcon 对话框标题是否显示关闭按钮
 * @param {Array} btns 对话框底部按钮（包含type，className，text，fn三个字段，具体格式请参照read.me和下方的定义）
 * @param {Function} onShow 显示对话框调用的函数
 * @param {Function} onHide 隐藏对话框调用的函数
 * @param {String} customClassName 自定义组件类名
 * @param {String || Element} children 对话框内容
 * @return {React.DOM} Dialog组件
 */

import React, { Component } from 'react';
import { Button, Icon } from 'byted-tui';
import './index.less';

class Dialog extends Component {

    static defaultProps = {
        prefixCls: 'pgc-dialog',
        title: 'This is a dialog title',
        showCloseIcon: true,
        btns: [
            {
                type: 'negative',
                className: '',
                text: '确认',
                fn: () => {}
            },
            {
                type: 'default',
                className: '',
                text: '取消',
                fn: () => {}
            }
        ],
        onShow: () => {},
        onHide: () => {},
        customClassName: '',
        children: 'This is a dialog content'
    };

    /**
     * props类型验证
     * @type {Object}
     */
    static propTypes = {
        prefixCls: React.PropTypes.string,
        title: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.element
        ]),
        btns: React.PropTypes.arrayOf(React.PropTypes.shape({
            type: React.PropTypes.string,
            text: React.PropTypes.string,
            fn: React.PropTypes.func
        })),
        onHide: React.PropTypes.func,
        customClassName: React.PropTypes.string,
        children: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.element
        ])
    };

    /**
     * @description 构造函数
     */
    constructor(props) {
        super(props);
    }

    /**
     * @description 加载Dialog时设置body
     */
    componentWillMount() {
        document.body.className += ' showDialog';
        this.props.onShow();
    }

    /**
     * @description 卸载Dialog时取消body的设置
     */
    componentWillUnmount() {
        let classNameList = document.body.className.split(' ');
        for (var i = 0; i < classNameList.length; i++) {
            if(classNameList[i] === 'showDialog') {
                classNameList.splice(i, 1);
            }
        }
        document.body.className = classNameList.join(' ');
    }

    /**
     * @description 获取对话框标题
     * @param  {String || Element} title  对话框标题，可以为字符或自定义元素，非必须
     * @param  {Function} onHide 关闭对话框
     * @return {Element} 返回对话框标题元素
     */
    getTitle(title, showCloseIcon, onHide) {
        return (
            title ?
                <div className="dialog-header">
                    <div className="title">{title}</div>
                    {
                        showCloseIcon ?
                            <div className="close">
                                <Icon
                                    className="icon"
                                    type="errorfunction"
                                    onClick={onHide}
                                />
                            </div>
                        :
                            null
                    }
                </div>
            :
                null
        );
    }

    /**
     * @description 获取对话框底部按钮
     * @param  {Object} item 按钮的数据对象
     * @param {String} className 按钮的类名，支持自定义样式
     * @param  {Number} key  index
     * @return {React.DOM} TUI按钮组件
     */
    getButton(item, key) {
        return (
            <Button
                key={key}
                type={item.type || ''}
                className={item.className || ''}
                onClick={item.fn}
            >
                {item.text}
            </Button>
        );
    }

    /**
     * @description 渲染入口
     * @return {React.DOM} 对话框组件
     */
    render() {
        const { prefixCls, title, showCloseIcon, btns, onHide, customClassName, children } = this.props;
        return (
            <div className={prefixCls + ' ' + customClassName}>
                <div
                    className="modal"
                    onClick={onHide}
                >
                </div>
                <div className="dialog">
                    {this.getTitle(title, showCloseIcon, onHide)}
                    <div className="dialog-body">
                        {children}
                    </div>
                    <div className="dialog-footer">
                        {btns.map((item, i) => {
                            return this.getButton(item, i);
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Dialog;
