import React, { Component } from 'react';
import './index.less';

class Loading extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="loading">
                <i className="fa fa-spinner" aria-hidden="true"></i>
                loading
            </div>
        )
    }
}
export default Loading;
