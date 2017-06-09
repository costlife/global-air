import React, { Component } from 'react';
import classNames from 'classnames';
import $ from 'jquery';
import './index.less';

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
        this.state = {
            activeIndex: 0
        };
    }

    onChangeCategory(index) {
        this.setState({
            activeIndex: index
        });
    }

    componentDidMount() {
        $('.c_address_box a').on('click', (e) => {
            this.props.onChooseCity(e.target.getAttribute('data'));
        });
    }

    componentWillUnmount() {
        $('.c_address_box a').off('click');
    }

    render() {
        const {onChooseCity} = this.props;
        const {activeIndex} = this.state;
        return (
            <div className="city-choose">
                <div className="c_address_box" style={{width: '400px'}}>
                    <ol className="c_address_ol">
                        <li><span className={activeIndex == 0 ? 'hot_selected' : '' } onClick={this.onChangeCategory.bind(this, 0)}>国际热门</span></li>
                        <li><span className={activeIndex == 1 ? 'hot_selected' : '' } onClick={this.onChangeCategory.bind(this, 1)}>国内热门</span></li>
                        <li><span className={activeIndex == 2 ? 'hot_selected' : '' } onClick={this.onChangeCategory.bind(this, 2)}>亚洲</span></li>
                        <li><span className={activeIndex == 3 ? 'hot_selected' : '' } onClick={this.onChangeCategory.bind(this, 3)}>欧洲</span></li>
                        <li><span className={activeIndex == 4 ? 'hot_selected' : '' } onClick={this.onChangeCategory.bind(this, 4)}>美洲</span></li>
                        <li><span className={activeIndex == 5 ? 'hot_selected' : '' } onClick={this.onChangeCategory.bind(this, 5)}>非洲</span></li>
                        <li><span className={activeIndex == 6 ? 'hot_selected' : '' } onClick={this.onChangeCategory.bind(this, 6)}>大洋洲</span></li>
                    </ol>
                    <ul className="c_address_ul" style={{display: activeIndex == 0 ? 'block' : 'none' }}>
                        <li><a data="Hong Kong|香港(HKG)|58|480" href="javascript:void(0);">香港</a></li>
                        <li><a data="Seoul|首尔(SEL)|274|540" href="javascript:void(0);">首尔</a></li>
                        <li><a data="Taipei|台北(TPE)|617|480" href="javascript:void(0);">台北</a></li>
                        <li><a data="Tokyo|东京(TYO)|228|540" href="javascript:void(0);">东京</a></li>
                        <li><a data="Singapore|新加坡(SIN)|73|480" href="javascript:void(0);">新加坡</a></li>
                        <li><a data="MACAU|澳门(MFM)|59|480" href="javascript:void(0);">澳门</a></li>
                        <li><a data="Bangkok|曼谷(BKK)|359|420" href="javascript:void(0);">曼谷</a></li>
                        <li><a data="Osaka|大阪(OSA)|219|540" href="javascript:void(0);">大阪</a></li>
                        <li><a data="Ho Chi Minh City|胡志明市(SGN)|301|420" href="javascript:void(0);">胡志明市</a></li>
                        <li><a data="Manila|马尼拉(MNL)|364|480" href="javascript:void(0);">马尼拉</a></li>
                        <li><a data="Nagoya|名古屋(NGO)|360|540" href="javascript:void(0);">名古屋</a></li>
                        <li><a data="London|伦敦(英国)(LON)|338|60" href="javascript:void(0);">伦敦(英国)</a></li>
                        <li><a data="Kuala Lumpur|吉隆坡(KUL)|315|480" href="javascript:void(0);">吉隆坡</a></li>
                        <li><a data="Pusan|釜山(PUS)|253|540" href="javascript:void(0);">釜山</a></li>
                        <li><a data="Sydney|悉尼(澳大利亚)(SYD)|501|600" href="javascript:void(0);">悉尼(澳大利亚)</a></li>
                        <li><a data="Frankfurt|法兰克福(FRA)|250|120" href="javascript:void(0);">法兰克福</a></li>
                        <li><a data="Vancouver|温哥华(YVR)|476|-420" href="javascript:void(0);">温哥华</a></li>
                        <li><a data="Paris|巴黎(PAR)|192|120" href="javascript:void(0);">巴黎</a></li>
                        <li><a data="New York|纽约(NYC)|633|-240" href="javascript:void(0);">纽约</a></li>
                        <li><a data="Los Angeles|洛杉矶(LAX)|347|-420" href="javascript:void(0);">洛杉矶</a></li>
                        <li><a data="Honolulu|夏威夷(HNL)|757|-600" href="javascript:void(0);">夏威夷</a></li>
                    </ul>
                    <ul className="c_address_ul" style={{display: activeIndex == 1 ? 'block' : 'none' }}>
                        <li><a data="Shanghai|上海(SHA)|2|480" href="javascript:void(0);">上海</a></li>
                        <li><a data="Beijing|北京(BJS)|1|480" href="javascript:void(0);">北京</a></li>
                        <li><a data="Hong Kong|香港(HKG)|58|480" href="javascript:void(0);">香港</a></li>
                        <li><a data="Guangzhou|广州(CAN)|32|480" href="javascript:void(0);">广州</a></li>
                        <li><a data="Hangzhou|杭州(HGH)|17|480" href="javascript:void(0);">杭州</a></li>
                        <li><a data="Xiamen|厦门(XMN)|25|480" href="javascript:void(0);">厦门</a></li>
                        <li><a data="Nanjing|南京(NKG)|12|480" href="javascript:void(0);">南京</a></li>
                        <li><a data="MACAU|澳门(MFM)|59|480" href="javascript:void(0);">澳门</a></li>
                        <li><a data="Chengdu|成都(CTU)|28|480" href="javascript:void(0);">成都</a></li>
                        <li><a data="Qingdao|青岛(TAO)|7|480" href="javascript:void(0);">青岛</a></li>
                        <li><a data="Taipei|台北(TPE)|617|480" href="javascript:void(0);">台北</a></li>
                        <li><a data="Fuzhou|福州(FOC)|258|480" href="javascript:void(0);">福州</a></li>
                        <li><a data="Tianjin|天津(TSN)|3|480" href="javascript:void(0);">天津</a></li>
                        <li><a data="Shenzhen|深圳(SZX)|30|480" href="javascript:void(0);">深圳</a></li>
                        <li><a data="Dalian|大连(DLC)|6|480" href="javascript:void(0);">大连</a></li>
                        <li><a data="Shenyang|沈阳(SHE)|451|480" href="javascript:void(0);">沈阳</a></li>
                        <li><a data="Kunming|昆明(KMG)|34|480" href="javascript:void(0);">昆明</a></li>
                        <li><a data="Wuhan|武汉(WUH)|477|480" href="javascript:void(0);">武汉</a></li>
                        <li><a data="Ningbo|宁波(NGB)|375|480" href="javascript:void(0);">宁波</a></li>
                        <li><a data="Wuxi|无锡(WUX)|13|480" href="javascript:void(0);">无锡</a></li>
                        <li><a data="Jinjiang|晋江(JJN)|1803|480" href="javascript:void(0);">晋江</a></li>
                        <li><a data="Chongqing|重庆(CKG)|4|480" href="javascript:void(0);">重庆</a></li>
                        <li><a data="Sanya|三亚(SYX)|43|480" href="javascript:void(0);">三亚</a></li>
                        <li><a data="Xian|西安(SIA)|10|480" href="javascript:void(0);">西安</a></li>
                    </ul>
                    <ul className="c_address_ul" style={{display: activeIndex == 2 ? 'block' : 'none' }}>
                        <li><a data="Hong Kong|香港(HKG)|58|480" href="javascript:void(0);">香港</a></li>
                        <li><a data="Tokyo|东京(TYO)|228|540" href="javascript:void(0);">东京</a></li>
                        <li><a data="Taipei|台北(TPE)|617|480" href="javascript:void(0);">台北</a></li>
                        <li><a data="Seoul|首尔(SEL)|274|540" href="javascript:void(0);">首尔</a></li>
                        <li><a data="Singapore|新加坡(SIN)|73|480" href="javascript:void(0);">新加坡</a></li>
                        <li><a data="Bangkok|曼谷(BKK)|359|420" href="javascript:void(0);">曼谷</a></li>
                        <li><a data="Kuala Lumpur|吉隆坡(KUL)|315|480" href="javascript:void(0);">吉隆坡</a></li>
                        <li><a data="Osaka|大阪(OSA)|219|540" href="javascript:void(0);">大阪</a></li>
                        <li><a data="MACAU|澳门(MFM)|59|480" href="javascript:void(0);">澳门</a></li>
                        <li><a data="Jakarta|雅加达(JKT)|524|420" href="javascript:void(0);">雅加达</a></li>
                        <li><a data="Ho Chi Minh City|胡志明市(SGN)|301|420" href="javascript:void(0);">胡志明市</a></li>
                        <li><a data="Manila|马尼拉(MNL)|364|480" href="javascript:void(0);">马尼拉</a></li>
                        <li><a data="Bali|巴厘岛(DPS)|723|480" href="javascript:void(0);">巴厘岛</a></li>
                        <li><a data="Nagoya|名古屋(NGO)|360|540" href="javascript:void(0);">名古屋</a></li>
                        <li><a data="Phuket|普吉岛(HKT)|725|420" href="javascript:void(0);">普吉岛</a></li>
                        <li><a data="Hanoi|河内(HAN)|286|420" href="javascript:void(0);">河内</a></li>
                        <li><a data="MALDIVES|马累(MLE)|1207|300" href="javascript:void(0);">马累</a></li>
                        <li><a data="DUBAI|迪拜(DXB)|220|240" href="javascript:void(0);">迪拜</a></li>
                        <li><a data="Pusan|釜山(PUS)|253|540" href="javascript:void(0);">釜山</a></li>
                        <li><a data="Kathmandu|加德满都(KTM)|304|345" href="javascript:void(0);">加德满都</a></li>
                        <li><a data="Kaohsiung|高雄(KHH)|720|480" href="javascript:void(0);">高雄</a></li>
                        <li><a data="Fukuoka|福冈(FUK)|248|540" href="javascript:void(0);">福冈</a></li>
                        <li><a data="PHNOM PENH|金边(PNH)|303|420" href="javascript:void(0);">金边</a></li>
                        <li><a data="Delhi|德里(DEL)|230|330" href="javascript:void(0);">德里</a></li>
                        <li><a data="JEJU|济州岛(CJU)|737|540" href="javascript:void(0);">济州岛</a></li>
                        <li><a data="Hokkaido|札幌(SPK)|641|540" href="javascript:void(0);">札幌</a></li>
                        <li><a data="Istanbul|伊斯坦布尔(IST)|532|180" href="javascript:void(0);">伊斯坦布尔</a></li>
                        <li><a data="ULAANBAATAR|乌兰巴托(ULN)|483|540" href="javascript:void(0);">乌兰巴托</a></li>
                        <li><a data="Mumbai|孟买(BOM)|724|330" href="javascript:void(0);">孟买</a></li>
                        <li><a data="IBARAKI|茨城(IBR)|20748|540" href="javascript:void(0);">茨城</a></li>
                    </ul>
                    <ul className="c_address_ul" style={{display: activeIndex == 3 ? 'block' : 'none' }}>
                        <li><a data="London|伦敦(英国)(LON)|338|60" href="javascript:void(0);">伦敦(英国)</a></li>
                        <li><a data="Paris|巴黎(PAR)|192|120" href="javascript:void(0);">巴黎</a></li>
                        <li><a data="Frankfurt|法兰克福(FRA)|250|120" href="javascript:void(0);">法兰克福</a></li>
                        <li><a data="Moscow|莫斯科(MOW)|366|180" href="javascript:void(0);">莫斯科</a></li>
                        <li><a data="Rome|罗马(ROM)|343|120" href="javascript:void(0);">罗马</a></li>
                        <li><a data="Amsterdam|阿姆斯特丹(AMS)|176|120" href="javascript:void(0);">阿姆斯特丹</a></li>
                        <li><a data="Milan|米兰(MIL)|361|120" href="javascript:void(0);">米兰</a></li>
                        <li><a data="Munich|慕尼黑(MUC)|363|120" href="javascript:void(0);">慕尼黑</a></li>
                        <li><a data="Stockholm|斯德哥尔摩(STO)|420|120" href="javascript:void(0);">斯德哥尔摩</a></li>
                        <li><a data="Berlin|柏林(BER)|193|120" href="javascript:void(0);">柏林</a></li>
                        <li><a data="Manchester|曼彻斯特(英国)(MAN)|722|60" href="javascript:void(0);">曼彻斯特(英国)</a></li>
                        <li><a data="Madrid|马德里(MAD)|357|120" href="javascript:void(0);">马德里</a></li>
                        <li><a data="Zurich|苏黎世(ZRH)|434|120" href="javascript:void(0);">苏黎世</a></li>
                        <li><a data="Brussels|布鲁塞尔(BRU)|196|120" href="javascript:void(0);">布鲁塞尔</a></li>
                        <li><a data="Copenhagen|哥本哈根(CPH)|260|120" href="javascript:void(0);">哥本哈根</a></li>
                        <li><a data="Helsinki|赫尔辛基(HEL)|277|180" href="javascript:void(0);">赫尔辛基</a></li>
                        <li><a data="Vienna|维也纳(VIE)|651|120" href="javascript:void(0);">维也纳</a></li>
                        <li><a data="Barcelona|巴塞罗那(BCN)|707|120" href="javascript:void(0);">巴塞罗那</a></li>
                        <li><a data="Athens|雅典(ATH)|710|180" href="javascript:void(0);">雅典</a></li>
                        <li><a data="Edinburgh|爱丁堡(EDI)|706|60" href="javascript:void(0);">爱丁堡</a></li>
                        <li><a data="Birmingham|伯明翰(英国)(BHX)|1270|60" href="javascript:void(0);">伯明翰(英国)</a></li>
                        <li><a data="Newcastle|纽卡斯尔(英国)(NCL)|1289|60" href="javascript:void(0);">纽卡斯尔(英国)</a></li>
                        <li><a data="Geneva|日内瓦(GVA)|666|120" href="javascript:void(0);">日内瓦</a></li>
                        <li><a data="SAINT PETERSBURG|圣彼得堡(LED)|798|180" href="javascript:void(0);">圣彼得堡</a></li>
                        <li><a data="Glasgow|格拉斯哥(GLA)|780|60" href="javascript:void(0);">格拉斯哥</a></li>
                        <li><a data="Kiev|基辅(IEV)|306|180" href="javascript:void(0);">基辅</a></li>
                        <li><a data="Budapest|布达佩斯(BUD)|637|120" href="javascript:void(0);">布达佩斯</a></li>
                        <li><a data="Hamburg|汉堡(HAM)|763|120" href="javascript:void(0);">汉堡</a></li>
                        <li><a data="Prague|布拉格(PRG)|1288|120" href="javascript:void(0);">布拉格</a></li>
                        <li><a data="Dusseldorf|杜塞尔多夫(DUS)|762|120" href="javascript:void(0);">杜塞尔多夫</a></li>
                    </ul>
                    <ul className="c_address_ul" style={{display: activeIndex == 4 ? 'block' : 'none' }}>
                        <li><a data="New York|纽约(NYC)|633|-240" href="javascript:void(0);">纽约</a></li>
                        <li><a data="Los Angeles|洛杉矶(LAX)|347|-420" href="javascript:void(0);">洛杉矶</a></li>
                        <li><a data="San Francisco|旧金山(SFO)|313|-420" href="javascript:void(0);">旧金山</a></li>
                        <li><a data="Vancouver|温哥华(YVR)|476|-420" href="javascript:void(0);">温哥华</a></li>
                        <li><a data="Chicago|芝加哥(CHI)|549|-300" href="javascript:void(0);">芝加哥</a></li>
                        <li><a data="Toronto|多伦多(YTO)|461|-240" href="javascript:void(0);">多伦多</a></li>
                        <li><a data="Seattle|西雅图(SEA)|511|-420" href="javascript:void(0);">西雅图</a></li>
                        <li><a data="Washington|华盛顿(WAS)|676|-240" href="javascript:void(0);">华盛顿</a></li>
                        <li><a data="Boston|波士顿(BOS)|703|-240" href="javascript:void(0);">波士顿</a></li>
                        <li><a data="Detroit|底特律(DTT)|233|-240" href="javascript:void(0);">底特律</a></li>
                        <li><a data="Atlanta|亚特兰大(ATL)|704|-240" href="javascript:void(0);">亚特兰大</a></li>
                        <li><a data="Houston|休斯敦(HOU)|701|-300" href="javascript:void(0);">休斯敦</a></li>
                        <li><a data="Montreal|蒙特利尔(YMQ)|759|-240" href="javascript:void(0);">蒙特利尔</a></li>
                        <li><a data="Honolulu|夏威夷(HNL)|757|-600" href="javascript:void(0);">夏威夷</a></li>
                        <li><a data="Saipan|塞班(SPN)|1237|600" href="javascript:void(0);">塞班</a></li>
                        <li><a data="Dallas|达拉斯(DFW)|705|-300" href="javascript:void(0);">达拉斯</a></li>
                        <li><a data="Minneapolis|明尼阿波利斯(MSP)|1238|-300" href="javascript:void(0);">明尼阿波利斯</a></li>
                        <li><a data="Philadelphia|费城(PHL)|1189|-240" href="javascript:void(0);">费城</a></li>
                        <li><a data="Sao Paulo|圣保罗(巴西)(SAO)|415|-180" href="javascript:void(0);">圣保罗(巴西)</a></li>
                        <li><a data="Ottawa|渥太华(YOW)|760|-240" href="javascript:void(0);">渥太华</a></li>
                        <li><a data="Mexico City|墨西哥城(MEX)|691|-300" href="javascript:void(0);">墨西哥城</a></li>
                        <li><a data="Las Vegas|拉斯维加斯(LAS)|675|-420" href="javascript:void(0);">拉斯维加斯</a></li>
                        <li><a data="Calgary|卡尔加里(YYC)|761|-360" href="javascript:void(0);">卡尔加里</a></li>
                        <li><a data="Miami|迈阿密(MIA)|702|-240" href="javascript:void(0);">迈阿密</a></li>
                        <li><a data="Denver|丹佛(DEN)|699|-360" href="javascript:void(0);">丹佛</a></li>
                        <li><a data="Orlando|奥兰多(ORL)|1187|-240" href="javascript:void(0);">奥兰多</a></li>
                        <li><a data="Portland|波特兰(美国)(PDX)|694|-420" href="javascript:void(0);">波特兰(美国)</a></li>
                        <li><a data="Manchester|曼彻斯特(美国)(MHT)|1877|-240" href="javascript:void(0);">曼彻斯特(美国)</a></li>
                        <li><a data="Edmonton|埃德蒙顿(YEA)|1245|-360" href="javascript:void(0);">埃德蒙顿</a></li>
                        <li><a data="Buenosaires|布宜诺斯艾利斯(BUE)|807|-180" href="javascript:void(0);">布宜诺斯艾利斯</a></li>
                        <li><a data="San Jose|圣何塞(美国)(SJC)|1880|960" href="javascript:void(0);">圣何塞(美国)</a></li>
                    </ul>
                    <ul className="c_address_ul" style={{display: activeIndex == 5 ? 'block' : 'none' }}>
                        <li><a data="Cairo|开罗(CAI)|332|120" href="javascript:void(0);">开罗</a></li>
                        <li><a data="Johannesburg|约翰内斯堡(JNB)|684|120" href="javascript:void(0);">约翰内斯堡</a></li>
                        <li><a data="Cape Town|开普敦(CPT)|683|120" href="javascript:void(0);">开普敦</a></li>
                        <li><a data="Nairobi|内罗毕(NBO)|825|180" href="javascript:void(0);">内罗毕</a></li>
                        <li><a data="Lagos|拉各斯(LOS)|783|60" href="javascript:void(0);">拉各斯</a></li>
                        <li><a data="Luanda|罗安达(LAD)|842|60" href="javascript:void(0);">罗安达</a></li>
                        <li><a data="Mauritius|毛里求斯(MRU)|785|240" href="javascript:void(0);">毛里求斯</a></li>
                        <li><a data="Dar es salaam|达累斯萨拉姆(DAR)|814|180" href="javascript:void(0);">达累斯萨拉姆</a></li>
                        <li><a data="Addis ababa|亚的斯亚贝巴(ADD)|635|180" href="javascript:void(0);">亚的斯亚贝巴</a></li>
                        <li><a data="Khartoum|喀土穆(KRT)|1279|180" href="javascript:void(0);">喀土穆</a></li>
                        <li><a data="Accra|阿克拉(ACC)|1274|0" href="javascript:void(0);">阿克拉</a></li>
                        <li><a data="Algiers|阿尔及尔(ALG)|1271|60" href="javascript:void(0);">阿尔及尔</a></li>
                        <li><a data="Casablanca|卡萨布兰卡(CAS)|809|60" href="javascript:void(0);">卡萨布兰卡</a></li>
                        <li><a data="durban|德班(DUR)|1278|120" href="javascript:void(0);">德班</a></li>
                        <li><a data="Tunis|突尼斯(TUN)|1280|60" href="javascript:void(0);">突尼斯</a></li>
                        <li><a data="Lusaka|卢萨卡(LUN)|816|120" href="javascript:void(0);">卢萨卡</a></li>
                        <li><a data="Harare|哈拉雷(HRE)|849|120" href="javascript:void(0);">哈拉雷</a></li>
                        <li><a data="Yaounde|雅温得(YAO)|4206|60" href="javascript:void(0);">雅温得</a></li>
                        <li><a data="Gaborone|哈博罗内(GBE)|857|120" href="javascript:void(0);">哈博罗内</a></li>
                        <li><a data="Kinshasa|金沙萨(FIH)|845|60" href="javascript:void(0);">金沙萨</a></li>
                        <li><a data="Maputo|马普托(MPM)|863|120" href="javascript:void(0);">马普托</a></li>
                        <li><a data="Douala|杜阿拉(DLA)|1272|60" href="javascript:void(0);">杜阿拉</a></li>
                        <li><a data="Freetown|费里敦(FNA)|4210|0" href="javascript:void(0);">费里敦</a></li>
                        <li><a data="Abidjan|阿比让(ABJ)|3265|0" href="javascript:void(0);">阿比让</a></li>
                        <li><a data="Luxor|卢克索(LXR)|730|120" href="javascript:void(0);">卢克索</a></li>
                    </ul>
                    <ul className="c_address_ul" style={{display: activeIndex == 6 ? 'block' : 'none' }}>
                        <li><a data="Sydney|悉尼(澳大利亚)(SYD)|501|600" href="javascript:void(0);">悉尼(澳大利亚)</a></li>
                        <li><a data="Melbourne|墨尔本(澳大利亚)(MEL)|358|600" href="javascript:void(0);">墨尔本(澳大利亚)</a></li>
                        <li><a data="Auckland|奥克兰(新西兰)(AKL)|678|720" href="javascript:void(0);">奥克兰(新西兰)</a></li>
                        <li><a data="Brisbane|布里斯班(BNE)|680|600" href="javascript:void(0);">布里斯班</a></li>
                        <li><a data="Adelaide|阿德莱德(ADL)|1243|570" href="javascript:void(0);">阿德莱德</a></li>
                        <li><a data="Perth|珀斯(PER)|681|480" href="javascript:void(0);">珀斯</a></li>
                        <li><a data="Wellington|惠灵顿(WLG)|843|720" href="javascript:void(0);">惠灵顿</a></li>
                        <li><a data="Canberra|堪培拉(CBR)|679|600" href="javascript:void(0);">堪培拉</a></li>
                        <li><a data="Cairns|凯恩斯(CNS)|728|600" href="javascript:void(0);">凯恩斯</a></li>
                        <li><a data="Nadi|楠迪(NAN)|791|720" href="javascript:void(0);">楠迪</a></li>
                        <li><a data="Gold coast|黄金海岸(OOL)|1210|600" href="javascript:void(0);">黄金海岸</a></li>
                        <li><a data="PAPEETE|帕皮堤(PPT)|5646|-600" href="javascript:void(0);">帕皮堤</a></li>
                        <li><a data="Hobart|霍巴特(HBA)|1446|600" href="javascript:void(0);">霍巴特</a></li>
                        <li><a data="Darwin|达尔文(DRW)|682|570" href="javascript:void(0);">达尔文</a></li>
                        <li><a data="DUNEDIN|达尼丁(DUD)|1297|720" href="javascript:void(0);">达尼丁</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default CityChoose;