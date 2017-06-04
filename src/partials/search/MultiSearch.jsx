import React, { Component } from 'react';
import classNames from 'classnames';

class CityChoose extends Component {

    static propTypes = {
        onChooseCity: React.PropTypes.func,
    };

    static defaultProps = {
        onChooseCity: () => {},
    };

    /**
     * @description 构造函数
     */
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div className="searchForms">
                    <div className="flightlinebox">
                        <div className="no">1</div>
                        <div className="formline">
                            <i>出发地</i><input type="text" className="loacal" placeholder="支持中文/拼音/英文/三字码" />
                            
                        </div>
                        <div className="formline">
                            <i>到达地</i><input type="text" className="loacal" placeholder="支持中文/拼音/英文/三字码" />
                            <s className="ico-time"></s>
                        </div>
                                            
                        <div className="formline">
                            <i>出发日期</i><input type="text" placeholder="选择返回日期" className="date"/>
                        </div>
                    </div>
                    
                    <div className="flightlinebox">
                        <div className="no">2</div>
                        <div className="formline">
                            <i>出发地</i><input type="text" className="loacal" placeholder="支持中文/拼音/英文/三字码" />
                            
                        </div>
                        <div className="formline">
                            <i>到达地</i><input type="text" className="loacal" placeholder="支持中文/拼音/英文/三字码" />
                            <s className="ico-time"></s>
                        </div>
                                            
                        <div className="formline">
                            <i>出发日期</i><input type="text" placeholder="选择返回日期" className="date"/>
                        </div>
                    </div>
                    
                   
                    <div className="addflight">添加航程</div>
    
                    <div className="flightlinebox passengersinfo">
        
                                <div className="formline">
                                    <i>旅客身份</i><input type="text" value="普通" />
                                    
                                </div>
                                
                                
                                
                                <div className="formline">
                                    <i>成人</i><input type="text" className="selects" onClick="selects(this)" />
                                    <dl className="selectlist">
                                         <dd data-value="0" className="select-option">无</dd>
                                                     <dd data-value="1" className="select-option">1</dd>
                                                     <dd data-value="2" className="select-option">2</dd>
                                                     <dd data-value="3" className="select-option">3</dd>
                                                     <dd data-value="4" className="select-option">4</dd>
                                                     <dd data-value="5" className="select-option">5</dd>
                                                     <dd data-value="6" className="select-option">6</dd>
                                                     <dd data-value="7" className="select-option">7</dd>
                                                     <dd data-value="8" className="select-option">8</dd>
                                                     <dd data-value="9" className="select-option">9</dd>
                                    </dl>
                                </div>
                                <div className="formline">
                                    <i>普通儿童</i><input type="text" className="selects" onClick="selects(this)" />
                                    <dl className="selectlist">
                                                     <dd data-value="0" className="select-option">无</dd>
                                                     <dd data-value="1" className="select-option">1</dd>
                                                     <dd data-value="2" className="select-option">2</dd>
                                                     <dd data-value="3" className="select-option">3</dd>
                                                     <dd data-value="4" className="select-option">4</dd>
                                                     <dd data-value="5" className="select-option">5</dd>
                                                     <dd data-value="6" className="select-option">6</dd>
                                                     <dd data-value="7" className="select-option">7</dd>
                                                     <dd data-value="8" className="select-option">8</dd>
                                                     <dd data-value="9" className="select-option">9</dd>
                                                 </dl>
                                </div>
                                
                                <div className="formline">
                                    <i>婴儿</i><input type="text" className="selects" onClick="selects(this)" />
                                    <dl className="selectlist">
                                                     <dd data-value="0" className="select-option">无</dd>
                                                     <dd data-value="1" className="select-option">1</dd>
                                                     <dd data-value="2" className="select-option">2</dd>
                                                     <dd data-value="3" className="select-option">3</dd>
                                                     <dd data-value="4" className="select-option">4</dd>
                                                     <dd data-value="5" className="select-option">5</dd>
                                                     <dd data-value="6" className="select-option">6</dd>
                                                     <dd data-value="7" className="select-option">7</dd>
                                                     <dd data-value="8" className="select-option">8</dd>
                                                     <dd data-value="9" className="select-option">9</dd>
                                                 </dl>
                                </div>
                                <div className="formline">
                                    <i>舱位等级</i><input type="text" className="selects selectlist_width" onClick="selects(this)" />
                                    <dl className="selectlist">
                                                     <dd data-value="ECONOMY" className="select-option">经济舱</dd>
                                                     <dd data-value="PREMIUM_ECONOMY" className="select-option">超级经济舱</dd>
                                                     <dd data-value="BUSINESS" className="select-option">公务舱</dd>
                                                     <dd data-value="FIRST" className="select-option">头等舱</dd>
                                                 </dl>
                                </div>
                    </div>
                    <div className="moreInfo" style={{display:'none'}}>
                        <div className="formline">
                            <i>中转</i><input type="text" className="loacal" placeholder="支持中文/拼音/英文/三字码" />
                        </div>
                        <div className="formline">
                            <i>航空公司</i><input type="text" />
                        </div>
                    </div>
                    <div className="moreBtn">查看更多搜索条件</div>
                    
                </div>
        )
    }
}

export default CityChoose;