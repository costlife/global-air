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
        debugger;
        if (e.target.value.length > 0) {
            $.getJSON('/flight/getAirPortCode.in', {
                key: e.target.value
            }, (data) => {
                this.setState({showChoose: false, showSuggest: true, suggestData: data});
            });
        } else {
            this.showChoose();
        }
    }

    onChooseCity(city) {
        this.props.onChangeCity(city);
        this.setState({
            showChoose: false,
            showSuggest: false,
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
        const {airportNameCn, airportCode, countryCodeCn, airportNamePy, cityNameCn, cityNameEn, cityCode } = item;
        let city = airportNamePy + '|' + cityNameCn + '|(' + cityCode + ')';
        if (airportCode == cityCode) {
            return (
                <tr key={i} className={cls}
                    onMouseEnter={this.onHoverSug.bind(this, i)}
                    onClick={() => this.onChooseCity(city)}
                >
                    <td className="icon_city">
                        <span>城市</span>
                        {cityNameCn}({cityNameEn})
                        <em>{countryCodeCn}</em>
                    </td>
                </tr>
            )
        } else {
            return (
                <tr key={i} className={cls}
                    onMouseEnter={this.onHoverSug.bind(this, i)}
                    onClick={() => this.onChooseCity(city)}
                >
                    <td className="icon_city">
                        <span>机场</span>
                        {cityNameCn}({airportNameCn})
                        <em>{countryCodeCn}</em>
                    </td>
                </tr>
            )
        }
    }

    render() {
        const { showChoose, showSuggest, suggestData, activeIndexSug } = this.state;
        const { value } = this.props;
        return (
            <div className="city-suggest">
                <input
                    type="text"
                    className="loacal"
                    placeholder="支持中文/拼音/英文/三字码"
                    onFocus={this.showChoose.bind(this)}
                    onChange={this.onChangeInput.bind(this)}
                    value={value}
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