import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import classNames from 'classnames';
import CityChoose from '../city-choose';
import './index.less';

class CitySuggest extends Component {

    static propTypes = {
        onChangeCategory: React.PropTypes.func,
        onChangeCity: React.PropTypes.func,
    };

    static defaultProps = {
        onChangeCategory: () => {},
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
        }
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
            this.setState({showChoose: false, showSuggest: true});
        } else {
            this.showChoose();
        }
    }

    onChooseCity(e) {
        let city = e.target.getAttribute('data');
    }

    render() {
        const { onChangeCategory, onChangeCity } = this.props;
        const { showChoose, showSuggest } = this.state;
        return (
            <div className="city-suggest">
                <input 
                    type="text" 
                    className="loacal" 
                    placeholder="支持中文/拼音/英文/三字码" 
                    onFocus={this.showChoose.bind(this)}
                    onChange={this.onChangeInput.bind(this)}
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
                            <tr className=""><td className="icon_city " data="xi'an|西安(SIA)|10|SIA|480">西安  (<b>X</b>A)</td></tr>
                            <tr className=""><td className="" data="xiamen|厦门(XMN)|25|XMN|480">厦门  (<b>X</b>M)</td></tr>
                            <tr className=""><td className="" data="xining|西宁(XNN)|124|XNN|480">西宁  (<b>X</b>N)</td></tr>
                            <tr className="active"><td className="" data="xishuangbanna|西双版纳(JHG)|35|JHG|480">西双版纳  (<b>X</b>SBN)</td>
                            </tr><tr><td className="" data="xuzhou|徐州(XUZ)|512|XUZ|480">徐州  (<b>X</b>Z)</td></tr>
                        </tbody></table>
                    </div>
                }
            </div>
        );
    }
}

export default onClickOutside(CitySuggest);