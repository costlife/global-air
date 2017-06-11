import React, { Component } from 'react';
import classNames from 'classnames';
import './index.less';

class Tips extends Component {

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

    getTarget() {
        return React.cloneElement(this.props.children[0], {
            onMouseEnter: this.showOptions.bind(this),
        });
    }
    render() {
        const { show } = this.state;
        const { className } = this.props;
        return (
            <div className={className} onMouseLeave={this.hideOptions.bind(this)}>
                {this.getTarget()}
                {show &&
                    <div className="tips">
                        {this.props.children[1]}
                    </div>
                }
            </div>
        )
    }
}
export default Tips;
