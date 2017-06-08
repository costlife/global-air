import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import classNames from 'classnames';
import CityChoose from '../city-choose';
import $ from 'jquery';
import './index.less';

class CitySuggest extends Component {

    static propTypes = {
        onChangeCity: React.PropTypes.func,
    };

    static defaultProps = {
        onChangeCity: () => {},
    };

    /**
     * @description 构造函数
     */
    constructor(props) {
        super(props);
        this.state = {
            showChoose: false,
            showSuggest: false,
            inputText: '',
            suggestData: [],
            activeIndexSug: 0,
        };
    }

    handleClickOutside = e => {
        this.setState({showChoose: false, showSuggest: false})
    }

    showChoose() {
        this.setState({showChoose: true, showSuggest: false});
    }

    hideChoose() {
        this.setState({showChoose: false});
    }

    onChangeInput(e) {
        if (e.target.value.length > 0) {
            $.getJSON('/flight/getAirPortCode.in', {
                key: e.target.value
            }, (data) => {
                this.setState({showChoose: false, showSuggest: true, suggestData: data});
            });
        } else {
            this.showChoose();
        }
        this.setState({
            inputText: e.target.value
        });
    }

    onChooseCity(e) {
        let city = e.target.getAttribute('data');
        let citiCode = city.substring(city.indexOf('(') + 1, city.indexOf(')'));
        this.props.onChangeCity(citiCode);
        this.setState({
            showChoose: false,
            inputText: city.split('|')[1]
        });
    }

    onHoverSug(index) {
        this.setState({
            activeIndexSug: index
        });
    }

    renderSugItem(item, i, activeIndexSug) {
        let cls = classNames({
            active: i == activeIndexSug
        });
        if (item.airportCode == item.cityCode) {
            return (
                <tr key={i} className={cls} onMouseEnter={this.onHoverSug.bind(this, i)}>
                    <td className="icon_city " data="xi'an|西安(SIA)|10|SIA|480">
                        <span>城市</span>
                        {item.cityNameCn}({item.cityNameEn})
                        <em>{item.countryCodeCn}</em>
                    </td>
                </tr>
            )
        } else {
            return (
                <tr key={i} className={cls} onMouseEnter={this.onHoverSug.bind(this, i)}>
                    <td className="icon_city " data="xi'an|西安(SIA)|10|SIA|480">
                        <span>机场</span>
                        {item.cityNameCn}({item.airportNameCn})
                        <em>{item.countryCodeCn}</em>
                    </td>
                </tr>
            )
        }
    }

    render() {
        const { showChoose, showSuggest, suggestData, activeIndexSug, inputText } = this.state;
        return (
            <div className="city-suggest">
                <input
                    type="text"
                    className="loacal"
                    placeholder="支持中文/拼音/英文/三字码"
                    onFocus={this.showChoose.bind(this)}
                    onChange={this.onChangeInput.bind(this)}
                    value={inputText}
                />
                {showChoose &&
                    <CityChoose
                        onChooseCity={this.onChooseCity.bind(this)}
                        onCloseCityChoose={this.hideChoose.bind(this)}
                    />
                }
                {showSuggest &&
                    <div className="poi_suggest">
                        <table cellSpacing="0" cellPadding="2"><tbody>
                            {suggestData.map((item, i) => this.renderSugItem(item, i, activeIndexSug))}
                        </tbody></table>
                    </div>
                }
            </div>
        );
    }
}

export default onClickOutside(CitySuggest);