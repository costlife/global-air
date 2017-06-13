import React, { Component } from 'react';
import './index.less';

class NoData extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="no-data">
                No data matched
            </div>
        )
    }
}
export default NoData;
