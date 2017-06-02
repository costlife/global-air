import React, { Component } from 'react';
import classNames from 'classnames';
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
    }


      render() {
            const {onChangeCategory, onChangeCity} = this.props;
            return (
                  <div className="city-suggest">
                        <div className="address_hot" id="address_hot" style={{padding: '10px', width: '385px'}}>
                            <div className="address_hotcity_fd">
                             <a href="#" className="close">&times;</a> 支持中文/拼音/简拼输入
                            </div>
                            <div className="address_hotlist">
                             <ol className="address_hot_abb">
                              <li><span className="hot_selected" onClick={onChangeCategory}>热门</span></li>
                              <li><span className="" onClick={onChangeCategory}>ABCDEF</span></li>
                              <li><span className="" onClick={onChangeCategory}>GHIJ</span></li>
                              <li><span className="" onClick={onChangeCategory}>KLMN</span></li>
                              <li><span className="" onClick={onChangeCategory}>PQRSTUVW</span></li>
                              <li><span className="" onClick={onChangeCategory}>XYZ</span></li>
                             </ol>
                             <ul className="address_hot_adress layoutfix">
                              <li><a data="Beijing|北京(BJS)|1|BJS" href="javascript:void(0);">北京</a></li>
                              <li><a data="Shanghai|上海(SHA)|2|SHA" href="javascript:void(0);">上海</a></li>
                              <li><a data="Guangzhou|广州(CAN)|32|CAN" href="javascript:void(0);">广州</a></li>
                              <li><a data="Shenzhen|深圳(SZX)|30|SZX" href="javascript:void(0);">深圳</a></li>
                              <li><a data="Chengdu|成都(CTU)|28|CTU" href="javascript:void(0);">成都</a></li>
                              <li><a data="Hangzhou|杭州(HGH)|17|HGH" href="javascript:void(0);">杭州</a></li>
                              <li><a data="Wuhan|武汉(WUH)|477|WUH" href="javascript:void(0);">武汉</a></li>
                              <li><a data="Xian|西安(SIA)|10|SIA" href="javascript:void(0);">西安</a></li>
                              <li><a data="Chongqing|重庆(CKG)|4|CKG" href="javascript:void(0);">重庆</a></li>
                              <li><a data="Qingdao|青岛(TAO)|7|TAO" href="javascript:void(0);">青岛</a></li>
                              <li><a data="Changsha|长沙(CSX)|206|CSX" href="javascript:void(0);">长沙</a></li>
                              <li><a data="Nanjing|南京(NKG)|12|NKG" href="javascript:void(0);">南京</a></li>
                              <li><a data="Xiamen|厦门(XMN)|25|XMN" href="javascript:void(0);">厦门</a></li>
                              <li><a data="Kunming|昆明(KMG)|34|KMG" href="javascript:void(0);">昆明</a></li>
                              <li><a data="Dalian|大连(DLC)|6|DLC" href="javascript:void(0);">大连</a></li>
                              <li><a data="Tianjin|天津(TSN)|3|TSN" href="javascript:void(0);">天津</a></li>
                              <li><a data="Zhengzhou|郑州(CGO)|559|CGO" href="javascript:void(0);">郑州</a></li>
                              <li><a data="Sanya|三亚(SYX)|43|SYX" href="javascript:void(0);">三亚</a></li>
                              <li><a data="Jinan|济南(TNA)|144|TNA" href="javascript:void(0);">济南</a></li>
                              <li><a data="Fuzhou|福州(FOC)|258|FOC" href="javascript:void(0);">福州</a></li>
                             </ul>
                             <dl className="address_hot_adress layoutfix" style={{display: 'none'}}>
                              <dt>
                               A
                              </dt>
                              <dd>
                               <a href="javascript:;" title="阿勒泰" data="Aletai|阿勒泰(AAT)|175|AAT">阿勒泰</a>
                               <a href="javascript:;" title="安康" data="Ankang|安康(AKA)|171|AKA">安康</a>
                               <a href="javascript:;" title="阿克苏" data="Aksu|阿克苏(AKU)|173|AKU">阿克苏</a>
                               <a href="javascript:;" title="鞍山" data="Anshan|鞍山(AOG)|178|AOG">鞍山</a>
                               <a href="javascript:;" title="安庆" data="Anqing|安庆(AQG)|177|AQG">安庆</a>
                               <a href="javascript:;" title="安顺" data="Anshun|安顺(AVA)|179|AVA">安顺</a>
                               <a href="javascript:;" title="阿拉善左旗" data="Alashanzuoqi|阿拉善左旗(AXF)|21269|AXF">阿拉善左旗</a>
                               <a href="javascript:;" title="澳门" data="Macau|澳门(MFM)|59|MFM">澳门</a>
                               <a href="javascript:;" title="阿里" data="Ali|阿里(NGQ)|97|NGQ">阿里</a>
                               <a href="javascript:;" title="阿拉善右旗" data="Alashanyouqi|阿拉善右旗(RHT)|21863|RHT">阿拉善右旗</a>
                               <a href="javascript:;" title="阿尔山" data="Aershan|阿尔山(YIE)|1658|YIE">阿尔山</a>
                              </dd>
                              <dt>
                               B
                              </dt>
                              <dd>
                               <a href="javascript:;" title="百色" data="Baise|百色(AEB)|1140|AEB">百色</a>
                               <a href="javascript:;" title="包头" data="Baotou|包头(BAV)|141|BAV">包头</a>
                               <a href="javascript:;" title="毕节" data="Bijie|毕节(BFJ)|22031|BFJ">毕节</a>
                               <a href="javascript:;" title="北海" data="Beihai|北海(BHY)|189|BHY">北海</a>
                               <a href="javascript:;" title="北京" data="Beijing|北京(BJS)|1|BJS">北京</a>
                               <a href="javascript:;" title="北京(南苑机场)" data="Beijing(NANYUAN)|北京(南苑机场)(NAY)|1|BJS,NAY">北京(南苑机场)</a>
                               <a href="javascript:;" title="北京(首都国际机场)" data="Beijing(CAPITAL)|北京(首都国际机场)(PEK)|1|BJS,PEK">北京(首都国际机场)</a>
                               <a href="javascript:;" title="博乐" data="Bole|博乐(BPL)|2548|BPL">博乐</a>
                               <a href="javascript:;" title="保山" data="Baoshan|保山(BSD)|197|BSD">保山</a>
                               <a href="javascript:;" title="巴彦淖尔" data="Bayan Nur|巴彦淖尔(RLK)|3887|RLK">巴彦淖尔</a>
                              </dd>
                              <dt>
                               C
                              </dt>
                              <dd>
                               <a href="javascript:;" title="昌都" data="Qamdo|昌都(BPX)|575|BPX">昌都</a>
                               <a href="javascript:;" title="常德" data="Changde|常德(CGD)|201|CGD">常德</a>
                               <a href="javascript:;" title="长春" data="Changchun|长春(CGQ)|158|CGQ">长春</a>
                               <a href="javascript:;" title="朝阳" data="Chaoyang|朝阳(CHG)|211|CHG">朝阳</a>
                               <a href="javascript:;" title="赤峰" data="Chifeng|赤峰(CIF)|202|CIF">赤峰</a>
                               <a href="javascript:;" title="长治" data="Changzhi|长治(CIH)|137|CIH">长治</a>
                               <a href="javascript:;" title="重庆" data="Chongqing|重庆(CKG)|4|CKG">重庆</a>
                               <a href="javascript:;" title="长海" data="Changhai|长海(CNI)|5091|CNI">长海</a>
                               <a href="javascript:;" title="长沙" data="Changsha|长沙(CSX)|206|CSX">长沙</a>
                               <a href="javascript:;" title="成都" data="Chengdu|成都(CTU)|28|CTU">成都</a>
                               <a href="javascript:;" title="沧源" data="Cangyuan|沧源(CWJ)|21741|CWJ">沧源</a>
                               <a href="javascript:;" title="常州" data="Changzhou|常州(CZX)|213|CZX">常州</a>
                               <a href="javascript:;" title="池州" data="Chizhou|池州(JUH)|218|JUH">池州</a>
                               <a href="javascript:;" title="长白山" data="Changbaishan|长白山(NBS)|199|NBS">长白山</a>
                               <a href="javascript:;" title="潮州" data="Chaozhou|潮州(SWA)|215|SWA">潮州</a>
                               <a href="javascript:;" title="潮汕" data="Chaoshan|潮汕(SWA)|956|SWA">潮汕</a>
                              </dd>
                              <dt>
                               D
                              </dt>
                              <dd>
                               <a href="javascript:;" title="大同" data="Datong|大同(DAT)|136|DAT">大同</a>
                               <a href="javascript:;" title="达县" data="Daxian|达县(DAX)|234|DAX">达县</a>
                               <a href="javascript:;" title="达州" data="Dazhou|达州(DAX)|234|DAX">达州</a>
                               <a href="javascript:;" title="稻城" data="Daocheng|稻城(DCY)|1222|DCY">稻城</a>
                               <a href="javascript:;" title="丹东" data="Dandong|丹东(DDG)|221|DDG">丹东</a>
                               <a href="javascript:;" title="迪庆" data="Diqing|迪庆(DIG)|93|DIG">迪庆</a>
                               <a href="javascript:;" title="大连" data="Dalian|大连(DLC)|6|DLC">大连</a>
                               <a href="javascript:;" title="大理" data="Dali|大理(DLU)|36|DLU">大理</a>
                               <a href="javascript:;" title="敦煌" data="Dunhuang|敦煌(DNH)|11|DNH">敦煌</a>
                               <a href="javascript:;" title="东营" data="Dongying|东营(DOY)|236|DOY">东营</a>
                               <a href="javascript:;" title="大庆" data="Daqing|大庆(DQA)|231|DQA">大庆</a>
                               <a href="javascript:;" title="德令哈" data="Delingha|德令哈(HXD)|2542|HXD">德令哈</a>
                               <a href="javascript:;" title="德宏" data="Dehong|德宏(LUM)|3997|LUM">德宏</a>
                              </dd>
                              <dt>
                               E
                              </dt>
                              <dd>
                               <a href="javascript:;" title="鄂尔多斯" data="Ordos|鄂尔多斯(DSN)|3976|DSN">鄂尔多斯</a>
                               <a href="javascript:;" title="额济纳旗" data="Ejinaqi|额济纳旗(EJN)|21339|EJN">额济纳旗</a>
                               <a href="javascript:;" title="恩施" data="Enshi|恩施(ENH)|245|ENH">恩施</a>
                               <a href="javascript:;" title="二连浩特" data="Erenhot|二连浩特(ERL)|7626|ERL">二连浩特</a>
                              </dd>
                              <dt>
                               F
                              </dt>
                              <dd>
                               <a href="javascript:;" title="福州" data="Fuzhou|福州(FOC)|258|FOC">福州</a>
                               <a href="javascript:;" title="阜阳" data="Fuyang|阜阳(FUG)|257|FUG">阜阳</a>
                               <a href="javascript:;" title="佛山" data="Foshan|佛山(FUO)|251|FUO">佛山</a>
                               <a href="javascript:;" title="抚远" data="Fuyuan|抚远(FYJ)|21943|FYJ">抚远</a>
                               <a href="javascript:;" title="富蕴" data="Fuyun|富蕴(FYN)|255|FYN">富蕴</a>
                              </dd>
                             </dl>
                             <dl className="address_hot_adress layoutfix" style={{display: 'none'}}>
                              <dt>
                               G
                              </dt>
                              <dd>
                               <a href="javascript:;" title="广州" data="Guangzhou|广州(CAN)|32|CAN">广州</a>
                               <a href="javascript:;" title="广汉" data="Guanghan|广汉(GHN)|750|GHN">广汉</a>
                               <a href="javascript:;" title="果洛" data="Golog|果洛(GMQ)|21862|GMQ">果洛</a>
                               <a href="javascript:;" title="格尔木" data="Golmud|格尔木(GOQ)|132|GOQ">格尔木</a>
                               <a href="javascript:;" title="广元" data="Guangyuan|广元(GYS)|267|GYS">广元</a>
                               <a href="javascript:;" title="固原" data="Guyuan|固原(GYU)|321|GYU">固原</a>
                               <a href="javascript:;" title="高雄" data="Kaohsiung|高雄(KHH)|720|KHH">高雄</a>
                               <a href="javascript:;" title="赣州" data="Ganzhou|赣州(KOW)|268|KOW">赣州</a>
                               <a href="javascript:;" title="贵阳" data="Guiyang|贵阳(KWE)|38|KWE">贵阳</a>
                               <a href="javascript:;" title="桂林" data="Guilin|桂林(KWL)|33|KWL">桂林</a>
                               <a href="javascript:;" title="光化" data="Guanghua|光化(LHK)|746|LHK">光化</a>
                              </dd>
                              <dt>
                               H
                              </dt>
                              <dd>
                               <a href="javascript:;" title="红原" data="Hongyuan|红原(AHJ)|7835|AHJ">红原</a>
                               <a href="javascript:;" title="海口" data="Haikou|海口(HAK)|42|HAK">海口</a>
                               <a href="javascript:;" title="河池" data="Hechi|河池(HCJ)|3969|HCJ">河池</a>
                               <a href="javascript:;" title="恒春" data="HENGCHUN|恒春(HCN)|78487|HCN">恒春</a>
                               <a href="javascript:;" title="邯郸" data="Handan|邯郸(HDG)|275|HDG">邯郸</a>
                               <a href="javascript:;" title="黑河" data="Heihe|黑河(HEK)|281|HEK">黑河</a>
                               <a href="javascript:;" title="呼和浩特" data="Hohhot|呼和浩特(HET)|103|HET">呼和浩特</a>
                               <a href="javascript:;" title="合肥" data="Hefei|合肥(HFE)|278|HFE">合肥</a>
                               <a href="javascript:;" title="杭州" data="Hangzhou|杭州(HGH)|17|HGH">杭州</a>
                               <a href="javascript:;" title="淮安" data="Huai'an|淮安(HIA)|577|HIA">淮安</a>
                               <a href="javascript:;" title="怀化" data="Huaihua|怀化(HJJ)|282|HJJ">怀化</a>
                               <a href="javascript:;" title="海拉尔" data="Hailar|海拉尔(HLD)|142|HLD">海拉尔</a>
                               <a href="javascript:;" title="哈密" data="Hami|哈密(HMI)|285|HMI">哈密</a>
                               <a href="javascript:;" title="衡阳" data="Hengyang|衡阳(HNY)|297|HNY">衡阳</a>
                               <a href="javascript:;" title="哈尔滨" data="Harbin|哈尔滨(HRB)|5|HRB">哈尔滨</a>
                               <a href="javascript:;" title="和田" data="Hotan|和田(HTN)|294|HTN">和田</a>
                               <a href="javascript:;" title="花土沟" data="HUATUGOU|花土沟(HTT)|83679|HTT">花土沟</a>
                               <a href="javascript:;" title="花莲" data="Hualien|花莲(HUN)|6954|HUN">花莲</a>
                               <a href="javascript:;" title="惠州" data="Huizhou|惠州(HUZ)|299|HUZ">惠州</a>
                               <a href="javascript:;" title="汉中" data="Hanzhong|汉中(HZG)|129|HZG">汉中</a>
                               <a href="javascript:;" title="黄山" data="Huangshan|黄山(TXN)|23|TXN">黄山</a>
                              </dd>
                              <dt>
                               J
                              </dt>
                              <dd>
                               <a href="javascript:;" title="嘉义" data="Chiayi|嘉义(CYI)|5152|CYI">嘉义</a>
                               <a href="javascript:;" title="景德镇" data="Jingdezhen|景德镇(JDZ)|305|JDZ">景德镇</a>
                               <a href="javascript:;" title="加格达奇" data="Jiagedaqi|加格达奇(JGD)|1143|JGD">加格达奇</a>
                               <a href="javascript:;" title="嘉峪关" data="Jiayuguan|嘉峪关(JGN)|326|JGN">嘉峪关</a>
                               <a href="javascript:;" title="井冈山" data="Jinggangshan|井冈山(JGS)|307|JGS">井冈山</a>
                               <a href="javascript:;" title="景洪" data="Jinghong|景洪(JHG)|35|JHG">景洪</a>
                               <a href="javascript:;" title="金昌" data="Jinchang|金昌(JIC)|1158|JIC">金昌</a>
                               <a href="javascript:;" title="九江" data="Jiujiang|九江(JIU)|24|JIU">九江</a>
                               <a href="javascript:;" title="晋江" data="Jinjiang|晋江(JJN)|406|JJN">晋江</a>
                               <a href="javascript:;" title="佳木斯" data="Jiamusi|佳木斯(JMU)|317|JMU">佳木斯</a>
                               <a href="javascript:;" title="济宁" data="Jining|济宁(JNG)|318|JNG">济宁</a>
                               <a href="javascript:;" title="锦州" data="Jinzhou|锦州(JNZ)|327|JNZ">锦州</a>
                               <a href="javascript:;" title="鸡西" data="Jixi|鸡西(JXA)|157|JXA">鸡西</a>
                               <a href="javascript:;" title="九寨沟" data="Jiuzhaigou|九寨沟(JZH)|91|JZH">九寨沟</a>
                               <a href="javascript:;" title="金门" data="Kinmen|金门(KNH)|7203|KNH">金门</a>
                               <a href="javascript:;" title="荆州" data="Jingzhou|荆州(SHS)|328|SHS">荆州</a>
                               <a href="javascript:;" title="揭阳" data="Jieyang|揭阳(SWA)|956|SWA">揭阳</a>
                               <a href="javascript:;" title="济南" data="Jinan|济南(TNA)|144|TNA">济南</a>
                              </dd>
                             </dl>
                             <dl className="address_hot_adress layoutfix" style={{display: 'none'}}>
                              <dt>
                               K
                              </dt>
                              <dd>
                               <a href="javascript:;" title="库车" data="Kuqa|库车(KCA)|329|KCA">库车</a>
                               <a href="javascript:;" title="康定" data="Kangding|康定(KGT)|4130|KGT">康定</a>
                               <a href="javascript:;" title="喀什" data="Kashgar|喀什(KHG)|109|KHG">喀什</a>
                               <a href="javascript:;" title="凯里" data="Kaili|凯里(KJH)|333|KJH">凯里</a>
                               <a href="javascript:;" title="喀纳斯" data="Kanas|喀纳斯(KJI)|3326|KJI">喀纳斯</a>
                               <a href="javascript:;" title="昆明" data="Kunming|昆明(KMG)|34|KMG">昆明</a>
                               <a href="javascript:;" title="库尔勒" data="Korla|库尔勒(KRL)|330|KRL">库尔勒</a>
                               <a href="javascript:;" title="克拉玛依" data="Karamay|克拉玛依(KRY)|166|KRY">克拉玛依</a>
                              </dd>
                              <dt>
                               L
                              </dt>
                              <dd>
                               <a href="javascript:;" title="黎平" data="Liping|黎平(HZH)|3852|HZH">黎平</a>
                               <a href="javascript:;" title="龙岩" data="Longyan|龙岩(LCX)|348|LCX">龙岩</a>
                               <a href="javascript:;" title="临汾" data="Linfen|临汾(LFQ)|139|LFQ">临汾</a>
                               <a href="javascript:;" title="兰州" data="Lanzhou|兰州(LHW)|100|LHW">兰州</a>
                               <a href="javascript:;" title="梁平" data="Liangping|梁平(LIA)|427|LIA">梁平</a>
                               <a href="javascript:;" title="丽江" data="Lijiang|丽江(LJG)|37|LJG">丽江</a>
                               <a href="javascript:;" title="荔波" data="Libo|荔波(LLB)|1708|LLB">荔波</a>
                               <a href="javascript:;" title="吕梁" data="Lvliang|吕梁(LLV)|7631|LLV">吕梁</a>
                               <a href="javascript:;" title="临沧" data="Lincang|临沧(LNJ)|1236|LNJ">临沧</a>
                               <a href="javascript:;" title="六盘水" data="Liupanshui|六盘水(LPF)|605|LPF">六盘水</a>
                               <a href="javascript:;" title="拉萨" data="Lhasa|拉萨(LXA)|41|LXA">拉萨</a>
                               <a href="javascript:;" title="林西" data="Linxi|林西(LXI)|744|LXI">林西</a>
                               <a href="javascript:;" title="洛阳" data="Luoyang|洛阳(LYA)|350|LYA">洛阳</a>
                               <a href="javascript:;" title="连云港" data="Lianyungang|连云港(LYG)|353|LYG">连云港</a>
                               <a href="javascript:;" title="临沂" data="Linyi|临沂(LYI)|569|LYI">临沂</a>
                               <a href="javascript:;" title="柳州" data="Liuzhou|柳州(LZH)|354|LZH">柳州</a>
                               <a href="javascript:;" title="泸州" data="Luzhou|泸州(LZO)|355|LZO">泸州</a>
                               <a href="javascript:;" title="林芝" data="Nyingtri|林芝(LZY)|108|LZY">林芝</a>
                              </dd>
                              <dt>
                               M
                              </dt>
                              <dd>
                               <a href="javascript:;" title="芒市" data="Mangshi|芒市(LUM)|3997|LUM">芒市</a>
                               <a href="javascript:;" title="牡丹江" data="Mudanjiang|牡丹江(MDG)|150|MDG">牡丹江</a>
                               <a href="javascript:;" title="马祖" data="MATSU|马祖(MFK)|7808|MFK">马祖</a>
                               <a href="javascript:;" title="绵阳" data="Mianyang|绵阳(MIG)|370|MIG">绵阳</a>
                               <a href="javascript:;" title="梅州" data="Meizhou|梅州(MXZ)|3053|MXZ">梅州</a>
                               <a href="javascript:;" title="马公" data="MAKUNG|马公(MZG)|5383|MZG">马公</a>
                               <a href="javascript:;" title="满洲里" data="Manzhouli|满洲里(NZH)|1083|NZH">满洲里</a>
                               <a href="javascript:;" title="漠河" data="Mohe|漠河(OHE)|155|OHE">漠河</a>
                              </dd>
                              <dt>
                               N
                              </dt>
                              <dd>
                               <a href="javascript:;" title="南昌" data="Nanchang|南昌(KHN)|376|KHN">南昌</a>
                               <a href="javascript:;" title="南充" data="Nanchong|南充(NAO)|377|NAO">南充</a>
                               <a href="javascript:;" title="宁波" data="Ningbo|宁波(NGB)|375|NGB">宁波</a>
                               <a href="javascript:;" title="南京" data="Nanjing|南京(NKG)|12|NKG">南京</a>
                               <a href="javascript:;" title="宁蒗" data="Ninglang|宁蒗(NLH)|1161|NLH">宁蒗</a>
                               <a href="javascript:;" title="那拉提" data="Nalati|那拉提(NLT)|3360|NLT">那拉提</a>
                               <a href="javascript:;" title="南宁" data="Nanning|南宁(NNG)|380|NNG">南宁</a>
                               <a href="javascript:;" title="南阳" data="Nanyang|南阳(NNY)|385|NNY">南阳</a>
                               <a href="javascript:;" title="南通" data="Nantong|南通(NTG)|82|NTG">南通</a>
                              </dd>
                             </dl>
                             <dl className="address_hot_adress layoutfix" style={{display: 'none'}}>
                              <dt>
                               P
                              </dt>
                              <dd>
                               <a href="javascript:;" title="澎湖列岛" data="Penghu Islands|澎湖列岛(MZG)|5383|MZG">澎湖列岛</a>
                               <a href="javascript:;" title="攀枝花" data="Panzhihua|攀枝花(PZI)|1097|PZI">攀枝花</a>
                               <a href="javascript:;" title="普洱" data="Pu'er|普洱(SYM)|3996|SYM">普洱</a>
                              </dd>
                              <dt>
                               Q
                              </dt>
                              <dd>
                               <a href="javascript:;" title="琼海" data="Qionghai|琼海(BAR)|52|BAR">琼海</a>
                               <a href="javascript:;" title="秦皇岛" data="Qinhuangdao|秦皇岛(BPE)|147|BPE">秦皇岛</a>
                               <a href="javascript:;" title="且末" data="Qiemo|且末(IQM)|399|IQM">且末</a>
                               <a href="javascript:;" title="庆阳" data="Qingyang|庆阳(IQN)|404|IQN">庆阳</a>
                               <a href="javascript:;" title="黔江" data="Qianjiang|黔江(JIQ)|7708|JIQ">黔江</a>
                               <a href="javascript:;" title="泉州" data="Quanzhou|泉州(JJN)|406|JJN">泉州</a>
                               <a href="javascript:;" title="衢州" data="Quzhou|衢州(JUZ)|407|JUZ">衢州</a>
                               <a href="javascript:;" title="齐齐哈尔" data="Qiqihar|齐齐哈尔(NDG)|149|NDG">齐齐哈尔</a>
                               <a href="javascript:;" title="青岛" data="Qingdao|青岛(TAO)|7|TAO">青岛</a>
                              </dd>
                              <dt>
                               R
                              </dt>
                              <dd>
                               <a href="javascript:;" title="日照" data="Rizhao|日照(RIZ)|1106|RIZ">日照</a>
                               <a href="javascript:;" title="日喀则" data="Rikaze|日喀则(RKZ)|92|RKZ">日喀则</a>
                              </dd>
                              <dt>
                               S
                              </dt>
                              <dd>
                               <a href="javascript:;" title="神农架" data="Shennongjia|神农架(HPG)|657|HPG">神农架</a>
                               <a href="javascript:;" title="上海" data="Shanghai|上海(SHA)|2|SHA">上海</a>
                               <a href="javascript:;" title="上海(浦东国际机场)" data="Shanghai(PU DONG)|上海(浦东国际机场)(PVG)|2|SHA,PVG">上海(浦东国际机场)</a>
                               <a href="javascript:;" title="上海(虹桥国际机场)" data="Shanghai(HONGQIAO)|上海(虹桥国际机场)(SHA)|2|SHA,SHA">上海(虹桥国际机场)</a>
                               <a href="javascript:;" title="沈阳" data="Shenyang|沈阳(SHE)|451|SHE">沈阳</a>
                               <a href="javascript:;" title="石河子" data="Shihezi|石河子(SHF)|426|SHF">石河子</a>
                               <a href="javascript:;" title="石家庄" data="Shijiazhuang|石家庄(SJW)|428|SJW">石家庄</a>
                               <a href="javascript:;" title="三明" data="Sanming|三明(SQJ)|437|SQJ">三明</a>
                               <a href="javascript:;" title="汕头" data="Shantou|汕头(SWA)|447|SWA">汕头</a>
                               <a href="javascript:;" title="三亚" data="Sanya|三亚(SYX)|43|SYX">三亚</a>
                               <a href="javascript:;" title="深圳" data="Shenzhen|深圳(SZX)|30|SZX">深圳</a>
                               <a href="javascript:;" title="十堰" data="SHIYAN|十堰(WDS)|452|WDS">十堰</a>
                              </dd>
                              <dt>
                               T
                              </dt>
                              <dd>
                               <a href="javascript:;" title="台州" data="Taizhou|台州(HYN)|578|HYN">台州</a>
                               <a href="javascript:;" title="台中" data="Taichung|台中(RMQ)|3849|RMQ">台中</a>
                               <a href="javascript:;" title="塔城" data="Tacheng|塔城(TCG)|455|TCG">塔城</a>
                               <a href="javascript:;" title="腾冲" data="Tengchong|腾冲(TCZ)|1819|TCZ">腾冲</a>
                               <a href="javascript:;" title="铜仁" data="Tongren|铜仁(TEN)|1227|TEN">铜仁</a>
                               <a href="javascript:;" title="通辽" data="Tongliao|通辽(TGO)|458|TGO">通辽</a>
                               <a href="javascript:;" title="天水" data="Tianshui|天水(THQ)|464|THQ">天水</a>
                               <a href="javascript:;" title="吐鲁番" data="Tulufan|吐鲁番(TLQ)|21811|TLQ">吐鲁番</a>
                               <a href="javascript:;" title="通化" data="Tonghua|通化(TNH)|456|TNH">通化</a>
                               <a href="javascript:;" title="台南" data="Tainan|台南(TNN)|3847|TNN">台南</a>
                               <a href="javascript:;" title="台北" data="Taipei|台北(TPE)|617|TPE">台北</a>
                               <a href="javascript:;" title="天津" data="Tianjin|天津(TSN)|3|TSN">天津</a>
                               <a href="javascript:;" title="台东" data="Taitung|台东(TTT)|3848|TTT">台东</a>
                               <a href="javascript:;" title="唐山" data="Tangshan|唐山(TVS)|468|TVS">唐山</a>
                               <a href="javascript:;" title="太原" data="Taiyuan|太原(TYN)|105|TYN">太原</a>
                               <a href="javascript:;" title="泰州" data="Taizhou|泰州(YTY)|15|YTY">泰州</a>
                              </dd>
                              <dt>
                               W
                              </dt>
                              <dd>
                               <a href="javascript:;" title="乌兰浩特" data="Ulan Hot|乌兰浩特(HLH)|484|HLH">乌兰浩特</a>
                               <a href="javascript:;" title="乌兰察布" data="ULANQAB|乌兰察布(UCB)|7518|UCB">乌兰察布</a>
                               <a href="javascript:;" title="乌鲁木齐" data="Urumqi|乌鲁木齐(URC)|39|URC">乌鲁木齐</a>
                               <a href="javascript:;" title="潍坊" data="Weifang|潍坊(WEF)|475|WEF">潍坊</a>
                               <a href="javascript:;" title="威海" data="Weihai|威海(WEH)|479|WEH">威海</a>
                               <a href="javascript:;" title="文山" data="Wenshan|文山(WNH)|1342|WNH">文山</a>
                               <a href="javascript:;" title="温州" data="Wenzhou|温州(WNZ)|491|WNZ">温州</a>
                               <a href="javascript:;" title="乌海" data="Wuhai|乌海(WUA)|1133|WUA">乌海</a>
                               <a href="javascript:;" title="武汉" data="Wuhan|武汉(WUH)|477|WUH">武汉</a>
                               <a href="javascript:;" title="武夷山" data="Wuyishan|武夷山(WUS)|26|WUS">武夷山</a>
                               <a href="javascript:;" title="无锡" data="Wuxi|无锡(WUX)|13|WUX">无锡</a>
                               <a href="javascript:;" title="梧州" data="Wuzhou|梧州(WUZ)|492|WUZ">梧州</a>
                               <a href="javascript:;" title="万州" data="Wanzhou|万州(WXN)|487|WXN">万州</a>
                              </dd>
                             </dl>
                             <dl className="address_hot_adress layoutfix" style={{display: 'none'}}>
                              <dt>
                               X
                              </dt>
                              <dd>
                               <a href="javascript:;" title="兴义" data="Xingyi|兴义(ACX)|1139|ACX">兴义</a>
                               <a href="javascript:;" title="夏河" data="Xiahe|夏河(GXH)|497|GXH">夏河</a>
                               <a href="javascript:;" title="香港" data="Hong Kong|香港(HKG)|58|HKG">香港</a>
                               <a href="javascript:;" title="西双版纳" data="Xishuangbanna|西双版纳(JHG)|35|JHG">西双版纳</a>
                               <a href="javascript:;" title="西安" data="Xi'an|西安(SIA)|10|SIA">西安</a>
                               <a href="javascript:;" title="忻州" data="Xinzhou|忻州(WUT)|513|WUT">忻州</a>
                               <a href="javascript:;" title="襄阳" data="Xiangyang|襄阳(XFN)|496|XFN">襄阳</a>
                               <a href="javascript:;" title="西昌" data="Xichang|西昌(XIC)|494|XIC">西昌</a>
                               <a href="javascript:;" title="锡林浩特" data="Xilinhot|锡林浩特(XIL)|500|XIL">锡林浩特</a>
                               <a href="javascript:;" title="咸阳国际机场" data="Xianyang|咸阳国际机场(XIY)|111|XIY">咸阳国际机场</a>
                               <a href="javascript:;" title="厦门" data="Xiamen|厦门(XMN)|25|XMN">厦门</a>
                               <a href="javascript:;" title="西宁" data="Xining|西宁(XNN)|124|XNN">西宁</a>
                               <a href="javascript:;" title="徐州" data="Xuzhou|徐州(XUZ)|512|XUZ">徐州</a>
                              </dd>
                              <dt>
                               Y
                              </dt>
                              <dd>
                               <a href="javascript:;" title="延安" data="Yan'an|延安(ENY)|110|ENY">延安</a>
                               <a href="javascript:;" title="银川" data="Yinchuan|银川(INC)|99|INC">银川</a>
                               <a href="javascript:;" title="伊春" data="Yichun|伊春(LDS)|517|LDS">伊春</a>
                               <a href="javascript:;" title="永州" data="Yongzhou|永州(LLF)|970|LLF">永州</a>
                               <a href="javascript:;" title="榆林" data="Yulin|榆林(UYN)|527|UYN">榆林</a>
                               <a href="javascript:;" title="宜宾" data="Yibin|宜宾(YBP)|514|YBP">宜宾</a>
                               <a href="javascript:;" title="运城" data="Yuncheng|运城(YCU)|140|YCU">运城</a>
                               <a href="javascript:;" title="宜春" data="Yichun|宜春(YIC)|518|YIC">宜春</a>
                               <a href="javascript:;" title="宜昌" data="Yichang|宜昌(YIH)|515|YIH">宜昌</a>
                               <a href="javascript:;" title="伊宁" data="Yining|伊宁(YIN)|529|YIN">伊宁</a>
                               <a href="javascript:;" title="义乌" data="Yiwu|义乌(YIW)|536|YIW">义乌</a>
                               <a href="javascript:;" title="营口" data="Yingkou|营口(YKH)|1300|YKH">营口</a>
                               <a href="javascript:;" title="延吉" data="Yanji|延吉(YNJ)|523|YNJ">延吉</a>
                               <a href="javascript:;" title="烟台" data="Yantai|烟台(YNT)|533|YNT">烟台</a>
                               <a href="javascript:;" title="盐城" data="Yancheng|盐城(YNZ)|1200|YNZ">盐城</a>
                               <a href="javascript:;" title="扬州" data="Yangzhou|扬州(YTY)|15|YTY">扬州</a>
                               <a href="javascript:;" title="玉树" data="Yushu|玉树(YUS)|7582|YUS">玉树</a>
                              </dd>
                              <dt>
                               Z
                              </dt>
                              <dd>
                               <a href="javascript:;" title="郑州" data="Zhengzhou|郑州(CGO)|559|CGO">郑州</a>
                               <a href="javascript:;" title="张家界" data="Zhangjiajie|张家界(DYG)|27|DYG">张家界</a>
                               <a href="javascript:;" title="舟山" data="Zhoushan|舟山(HSN)|19|HSN">舟山</a>
                               <a href="javascript:;" title="扎兰屯" data="Zhalantun|扎兰屯(NZL)|1135|NZL">扎兰屯</a>
                               <a href="javascript:;" title="张掖" data="ZHANGYE|张掖(YZY)|663|YZY">张掖</a>
                               <a href="javascript:;" title="昭通机场" data="ZHAOTONG|昭通机场(ZAT)|555|ZAT">昭通机场</a>
                               <a href="javascript:;" title="中山" data="Zhongshan|中山(ZGN)|553|ZGN">中山</a>
                               <a href="javascript:;" title="湛江机场" data="ZHANJIANG|湛江机场(ZHA)|547|ZHA">湛江机场</a>
                               <a href="javascript:;" title="中卫" data="ZHONGWEI|中卫(ZHY)|556|ZHY">中卫</a>
                               <a href="javascript:;" title="张家口" data="Zhangjiakou|张家口(ZQZ)|550|ZQZ">张家口</a>
                               <a href="javascript:;" title="珠海" data="Zhuhai|珠海(ZUH)|31|ZUH">珠海</a>
                               <a href="javascript:;" title="遵义" data="Zunyi|遵义(ZYI)|558|ZYI">遵义</a>
                              </dd>
                             </dl>
                            </div>
                           </div>
                  </div>
            );
    }
}

export default CitySuggest;