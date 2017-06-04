import React, { Component } from 'react';
import classNames from 'classnames';

import $ from 'jquery';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CitySuggest from '../../components/city-suggest';
import './index.less';

class FlightSearch extends Component {

    static propTypes = {
        onSearch: React.PropTypes.func,
    };

    static defaultProps = {
        onSearch: () => {}
    };

    /**
     * @description 构造函数
     */
    constructor(props) {
        super(props);
    }

    render() {
        const { onSearch } = this.props;
        return (
            <div className="flyHead">
                <div className="flyType">
                    <a className="active">单程</a>
                    <a>往返</a>
                    <a>多程</a>
                </div>
                <div className="typeCont">
                    <div className="tpyeBox" id="typeBox">
                        <div>
                            <div className="searchForms">
                                <div className="formline search-city">
                                    <i>出发地</i>
                                    <CitySuggest />
                                    <div className="toggle">换</div>
                                </div>
                                <div className="formline">
                                    <i>出发日期</i>
                                    <DatePicker
                                        dateFormat="YYYY/MM/DD"
                                        selected={this.startDate}
                                        onChange={this.handleChange} />
                                </div>
                                <div className="formline search-city">
                                    <i>到达地</i>
                                    <CitySuggest />
                                    <s className="ico-time"></s>
                                </div>
                                <div className="formline">
                                    <i>返回日期</i>
                                    <DatePicker
                                        dateFormat="YYYY/MM/DD"
                                        selected={this.startDate}
                                        onChange={this.handleChange} />
                                </div>
                                <div className="formline select-user">
                                    <i>成人</i>
                                    <select className="selects">
                                        <option value="0">无</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                    </select>
                                </div>
                                <div className="formline select-user">
                                    <i>普通儿童</i>
                                    <select className="selects">
                                        <option value="0">无</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                    </select>
                                </div>
                                <div className="formline select-user">
                                    <i>舱位等级</i>
                                    <select className="selects">
                                        <option value="ECONOMY">经济舱</option>
                                        <option value="PREMIUM_ECONOMY">超级经济舱</option>
                                        <option value="BUSINESS">公务舱</option>
                                        <option value="FIRST">头等舱</option>
                                    </select>
                                </div>
                                <div className="moreInfo" style={{display:'none'}}>
                                    <div className="formline">
                                        <i>中转</i><input type="text" className="loacal" placeholder="支持中文/拼音/英文/三字码"/>
                                    </div>
                                    <div className="formline">
                                        <i>航空公司</i><input type="text"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footbar">
                        <a className="searchBtn" onClick={onSearch}>搜索</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default FlightSearch;