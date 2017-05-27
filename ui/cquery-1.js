var dataMap=[];
var lastInput='lala';
$(function(){ 
	 popInit();
	 $(".input-city").each(function(){
			var input = $(this);
			if($.trim(input.val())=='' || $.trim(input.val())==options.defaultText){ 
	            input.val(options.defaultText).css('color','#aaa');
	            input.next().val("");
	        }
		});
});
var labelFromcity = new Array();
labelFromcity ['国内热门'] = new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19);
labelFromcity ['国际热门'] = new Array(20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39);

labelFromcity ['欧洲'] = new Array(40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65);
labelFromcity ['亚洲'] = new Array(66,67,68,69,87,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,88,89);

labelFromcity ['美洲'] = new Array(90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107);
labelFromcity ['非洲/大洋洲'] = new Array(108,109,110,111,112,113,114,115,116,117,118);


var hotList = new Array(14,15,16,17,18,19);
var citysFlight=new Array();
//国内热门
citysFlight[0]=new Array('BJS','北京','BEIJING','BEIJING');
citysFlight[1]=new Array('SHA','上海','SHANGHAI','SHANGHAI');
citysFlight[2]=new Array('CAN','广州','GUANGZHOU','GUANGZHOU');
citysFlight[3]=new Array('SZX','深圳','SHENZHEN','SHENZHEN');
citysFlight[4]=new Array('CTU','成都','CHENGDU','CHENGDU');
citysFlight[5]=new Array('CKG','重庆','CHONGQING','CHONGQING');
citysFlight[6]=new Array('XMN','厦门','XIAMEN','XIAMEN');
citysFlight[7]=new Array('KMG','昆明','KUNMING','KUNMING');
citysFlight[8]=new Array('HGH','杭州','HANGZHOU','HANGZHOU');
citysFlight[9]=new Array('SIA','西安','XIAN','XI AN');
citysFlight[10]=new Array('WUH','武汉','WUHAN','WUHAN');
citysFlight[11]=new Array('CSX','长沙','CHANGSHA','CHANGSHA');
citysFlight[12]=new Array('NKG','南京','NANJING','NANJING');
citysFlight[13]=new Array('DLC','大连','DALIAN','DALIAN');
citysFlight[14]=new Array('CGO','郑州','ZHENGZHOU','ZHENGZHOU');
citysFlight[15]=new Array('TAO','青岛','QINGDAO','QINGDAO');
citysFlight[16]=new Array('TSN','天津','TIANJING','TIANJIN');
citysFlight[17]=new Array('SYX','三亚','SANYA','SANYA');
citysFlight[18]=new Array('HAK','海口','HAIKOU','HAIKOU');
citysFlight[19]=new Array('URC','乌鲁木齐','WULUMUQI','URUMQI');
//国际热门
citysFlight[20]=new Array('HKG','香港',' ','HONG KONG');
citysFlight[21]=new Array('MFM','澳门',' ','MACAU');
citysFlight[22]=new Array('TPE','台北',' ','TAIPEI');
citysFlight[23]=new Array('TYO','东京',' ','TOKYO');
citysFlight[24]=new Array('SEL','首尔',' ','SEOUL');
citysFlight[25]=new Array('BKK','曼谷',' ','BANGKOK');
citysFlight[26]=new Array('KUL','吉隆坡',' ','KUALA LUMPUR');
citysFlight[27]=new Array('SIN','新加坡',' ','SINGAPORE');
citysFlight[28]=new Array('FRA','法兰克福',' ','FRANKFURT');
citysFlight[29]=new Array('PAR','巴黎',' ','PARIS');
citysFlight[30]=new Array('NYC','纽约',' ','NEW YORK');
citysFlight[31]=new Array('OSA','大阪',' ','OSAKA');
citysFlight[32]=new Array('NGO','名古屋',' ','NAGOYA');
citysFlight[33]=new Array('SYD','悉尼',' ','SYDNEY');
citysFlight[34]=new Array('LON','伦敦(英国)',' ','LONDON ');
citysFlight[35]=new Array('MNL','马尼拉',' ','MANILA');
citysFlight[36]=new Array('HNL','夏威夷(檀香山)',' ','HAWAII');
citysFlight[37]=new Array('PUS','釜山',' ','PUSAN');
citysFlight[38]=new Array('SGN','胡志明市(西贡)',' ','HOCHIMING');
citysFlight[39]=new Array('YVR','温哥华',' ','VANCOUVER');
//欧洲
citysFlight[40]=new Array('LON','伦敦(英国)',' ','LONDON ');
citysFlight[41]=new Array('PAR','巴黎',' ','PARIS');
citysFlight[42]=new Array('FRA','法兰克福',' ','FRANKFURT');
citysFlight[43]=new Array('MOW','莫斯科',' ','MOSCOW');
citysFlight[44]=new Array('ROM','罗马',' ','ROME ');
citysFlight[45]=new Array('AMS','阿姆斯特丹',' ','AMSTERDAM');
citysFlight[46]=new Array('MIL','米兰',' ','MILAN');
citysFlight[47]=new Array('MUC','慕尼黑',' ','MUNICH');
citysFlight[48]=new Array('STO','斯德哥尔摩',' ','STOCKHOLM ');
citysFlight[49]=new Array('BER','柏林',' ','BERLIN');
citysFlight[50]=new Array('MAN','曼切斯特(英国)',' ','MANCHESTER');
citysFlight[51]=new Array('MAD','马德里',' ','MADRID');
citysFlight[52]=new Array('ZRH','苏黎世',' ','ZURICH');
citysFlight[53]=new Array('BRU','布鲁塞尔',' ','BRUSSELS');
citysFlight[54]=new Array('CPH','哥本哈根',' ','COPENHAGEN');
citysFlight[55]=new Array('HEL','赫尔辛基',' ','HELSINKI');
citysFlight[56]=new Array('VIE','维也纳',' ','VIENNA');
citysFlight[57]=new Array('BCN','巴塞罗那',' ','BARCELONA');
citysFlight[58]=new Array('ATH','雅典',' ','ATHENS');
citysFlight[59]=new Array('EDI','爱丁堡',' ','EDINBURGH');
citysFlight[60]=new Array('BHX','伯明翰',' ','BIRMINGHAM');
citysFlight[61]=new Array('GVA','日内瓦',' ','GENEVA');
citysFlight[62]=new Array('LED','圣彼得堡',' ','ST.PETERSBURG');
citysFlight[63]=new Array('IEV','基辅',' ','KIEV ');
citysFlight[64]=new Array('HAM','汉堡',' ','HAMBURG');
citysFlight[65]=new Array('PRG','布拉格',' ','PRAGUE');
//亚洲
citysFlight[66]=new Array('HKG','香港',' ','HONG KONG');
citysFlight[67]=new Array('SEL','首尔',' ','SEOUL');
citysFlight[68]=new Array('TPE','台北',' ','TAIPEI');
citysFlight[69]=new Array('MFM','澳门',' ','MACAU');
citysFlight[70]=new Array('SEL','首尔',' ','SEOUL');
citysFlight[71]=new Array('CJU','济州岛',' ','JEJU');
citysFlight[72]=new Array('PUS','釜山',' ','PUSAN');
citysFlight[73]=new Array('FNJ','平壤',' ','PYONGYANG');
citysFlight[74]=new Array('TYO','东京',' ','TOKYO');
citysFlight[75]=new Array('OSA','大阪',' ','OSAKA');
citysFlight[76]=new Array('FUK','福冈',' ','FUKUOKA');
citysFlight[77]=new Array('BKK','曼谷',' ','BANGKOK');
citysFlight[78]=new Array('SIN','新加坡',' ','SINGAPORE');
citysFlight[79]=new Array('MNL','马尼拉',' ','MANILA');
citysFlight[80]=new Array('KUL','吉隆坡',' ','KUALA LUMPUR');
citysFlight[81]=new Array('BOM','孟买',' ','MUMBAI');
citysFlight[82]=new Array('DEL','新德里',' ','NEW DELHI');
citysFlight[83]=new Array('DPS','巴厘岛',' ','DENPASAR BALI');
citysFlight[84]=new Array('IST','伊斯坦布尔',' ','ISTANBUL');
citysFlight[85]=new Array('DXB','迪拜',' ','DUBAI');
citysFlight[86]=new Array('BKK','曼谷',' ','BANGKOK');
citysFlight[87]=new Array('KHH','高雄',' ','KAOHSIUNG');
citysFlight[88]=new Array('HAN','河内',' ','HANOI');
citysFlight[89]=new Array('DOH','多哈',' ','DOHA');
//美洲
citysFlight[90]=new Array('NYC','纽约',' ','NEW YORK');
citysFlight[91]=new Array('LAX','洛杉矶',' ','LOS ANGELES');
citysFlight[92]=new Array('WAS','华盛顿',' ','WASHINGTON');
citysFlight[93]=new Array('SFO','旧金山',' ','SAN FRANCISCO');
citysFlight[94]=new Array('CHI','芝加哥',' ','CHIACGO');
citysFlight[95]=new Array('HOU','休斯顿',' ','HOUSTON');
citysFlight[96]=new Array('LAS','拉斯维加斯',' ','LAS VEGAS ');
citysFlight[97]=new Array('SEA','西雅图',' ','SEATTLE');
citysFlight[98]=new Array('HNL','夏威夷(檀香山)',' ','HAWAII');
citysFlight[99]=new Array('PHL','费城',' ','PHILADELPHIA ');
citysFlight[100]=new Array('YVR','温哥华',' ','VANCOUVER');
citysFlight[101]=new Array('YTO','多伦多',' ','TORONTO');
citysFlight[102]=new Array('YOW','渥太华',' ','OTTAWA');
citysFlight[103]=new Array('MEX','墨西哥城',' ','MEXCIO');
citysFlight[104]=new Array('BUE','布宜诺斯艾利斯',' ','BUENOS AIRES');
citysFlight[105]=new Array('ORL','奥兰多',' ','ORLANDO ');
citysFlight[106]=new Array('SAO','圣保罗(巴西)',' ','SAO PAULO');
citysFlight[107]=new Array('RIO','里约热内卢',' ','RIO DE JANEIRO ');
//非洲大洋洲
citysFlight[108]=new Array('CAI','开罗',' ','CAIRO');
citysFlight[109]=new Array('JNB','约翰内斯堡',' ','JOHANNESBURG');
citysFlight[110]=new Array('CPT','开普敦',' ','CAPE TOWN');
citysFlight[111]=new Array('MRU','毛里求斯',' ','MAURITIUS');
citysFlight[112]=new Array('SYD','悉尼',' ','SYDNEY');
citysFlight[113]=new Array('MEL','墨尔本',' ','MELBOURNE');
citysFlight[114]=new Array('AKL','奥克兰(新西兰)',' ','AUCKLAND');
citysFlight[115]=new Array('PER','珀斯',' ','PERTH');
citysFlight[116]=new Array('CBR','堪培拉',' ','CANBERRA');
citysFlight[117]=new Array('WLG','惠灵顿',' ','WELLINGTON');
citysFlight[118]=new Array('OOL','黄金海岸',' ','GOLD COAST');
citysFlight[118]=new Array('BNE','布里斯班',' ','BRISBANE');

var defaults = {
        'data'          : citysFlight,
        'tabs'          : labelFromcity,
        'hotList'       : hotList,            
        'defaultText'   : '支持中文/拼音/英文/三字码',
        'popTitleText'  : '从下列城市选择',
        'suggestTitleText' : '输入中文/拼音或↑↓选择',
        'suggestLength' : 10,
        'pageLength'    : 5, 
        'onSelect'      : '' 
};
var options = $.extend(defaults,options);
function popInit(popMain){
	$('body').append("<div id='pop_city' class='pop_city' style='display:none'><p class='pop_head'></p><ul class='list_label'></ul><div class='pop_city_container'></div></div>");
	var popMain=$("#pop_city");
	var popContainer=popMain.find(".pop_city_container");
	var labelMain = popMain.find('.list_label');
    popMain.find('.pop_head').html(options.popTitleText);
    var index=0;
    if(!options.tabs){
        popContainer.append("<ul id='label_container' class='current'></ul>");
        labelMain.remove();
        for( var item in options.data){
              $("#label_container").append("<li><a href='javascript:void(0)'>"+options.data[item][1]+"</a></li>");
        }
        return;
    }
	for(var itemLabel in options.tabs){		
	    index++;			
	    if(index == 1){
		    popContainer.append("<ul id='label_"+index+"_container' class='current' data-type='"+itemLabel+"'></ul>");
		    labelMain.append("<li><a id='label_"+index+"' class='current' href='javascript:void(0)'>"+itemLabel+"</a></li>");		
	    }else{
		    popContainer.append("<ul style='display:none' id='label_"+index+"_container' data-type='"+itemLabel+"'></ul>");
		    labelMain.append("<li><a id='label_"+index+"' href='javascript:void(0)'>"+itemLabel+"</a></li>");		
	    }
	    for(var item in options.tabs[itemLabel]){
		    var cityCode = options.tabs[itemLabel][item];
		    if(!options.data[cityCode]){
			    break;
		    }				//alert(options.data[cityCode][3]);
			$("#label_"+index+"_container").append("<li><a href='javascript:void(0)' name='"+options.data[cityCode][0]+"'>"+options.data[cityCode][1]+"</a></li>");
		}
	}
	popMain.bgIframe();
	 popMain.mouseover(function(){	
		    t_pop_focus = true;
	    }).mouseout(function(){	
		    t_pop_focus = false;
	    });
}
var t_pop_focus = false;
var currentLable,nationLable;
$(".input-city").focus(function(e){
	var input=$(this);
	if($.trim($(this).val())==options.defaultText){
	    $(this).val('').css('color','#000');
	}
	var popMain=$("#pop_city");
	popMain.show();
	popMain.css({
		'top' :$(this).offset().top + $(this).outerHeight(),
		'left':$(this).offset().left
	});
	var popContainer=popMain.find(".pop_city_container");
	var labelMain = popMain.find('.list_label');
	if($(this).hasClass("domestic-city")){
		nationLable= $("#label_2");
		currentLable=$("#label_2_container");
	}else{
		nationLable= $("#label_1");
		currentLable=$("#label_1_container");
	}
	if(!t_pop_focus){
		labelMain.find('li a').removeClass('current');
		popContainer.find('ul').hide().removeClass("current");
		currentLable.show().addClass("current");
		nationLable.addClass('current');
	}
	labelMain.find('a').unbind("click").on('click',function(){
		input.focus();
		t_pop_focus = true;
	    var labelId = $(this).attr('id');
	    labelMain.find('li a').removeClass('current');
	    $(this).addClass('current');
	    popContainer.find('ul').hide().removeClass("current");
	    $("#"+labelId+'_container').show().addClass("current");
	    
    });
	
    popContainer.find('a').unbind("click").on('click',function(){
		//alert(fromcity.value);
    	var aaa=$(this).attr("name");
	    input.val($(this).html()+"("+aaa+")");
		input.parent().find(".input-city-code").val(aaa);
	    $("#pop_city").hide();
    });
   
}).blur(function(){
	if(!t_pop_focus){
		$("#pop_city").hide();
		var input=$(this);
		if($.trim(input.val())=='' || $.trim(input.val())==options.defaultText){ 
            input.val(options.defaultText).css('color','#aaa');
            input.next().val("");
        }else{
        	
        	var node=$(this);
    		var select = node.closest(".input-city-con");
    		if(select.find(".input-city-code").val()){
    			return false;
    		}
    	    var list = select.find(".select-list");
    	    var selected;
    	    if(list.find(".selected").length==0){
    	    	 selected = list.find("dd:first");
    	    }else{
    	    	 selected = list.find(".selected");
    	    }
    		var code =selected.attr("data-value");
    		if(code){
    			node.val(selected.find(".select-city-value").text());
    			select.find(".input-city-code").val(code);
    		}else{
    			node.val(options.defaultText).css('color','#aaa');
    			select.find(".input-city-code").val("");
    		}
    		list.removeClass("vv");
    		select.removeClass("select-focus");
        }
	}
});

$(".input-city").keydown(function(e){
	var keyCode=e.keyCode;
	$("#pop_city").hide();
	if(keyCode==9 || keyCode==13){
		var node=$(this);
		var select = node.closest(".input-city-con");
		
		    var list = select.find(".select-list");
		    var selected;
		    if(list.find(".selected").length==0){
		    	 selected = list.find("dd:first");
		    }else{
		    	 selected = list.find(".selected");
		    }
			var code =selected.attr("data-value");
			if(code){
				node.val(selected.find(".select-city-value").text());
				select.find(".input-city-code").val(code);
			}else{
				node.val(options.defaultText).css('color','#aaa');
				select.find(".input-city-code").val("");
			}
			list.removeClass("vv");
			select.removeClass("select-focus");
		
	}
}).keyup(function(e){
	var keyCode=e.keyCode;
	var node=$(this);
	var select = node.closest(".input-city-con");
    var list = select.find(".select-list");
	if((keyCode>=65&&keyCode<=97)||(keyCode>=48&&keyCode<58)||
			keyCode==119 || keyCode==8 ||keyCode==32){
		var key = {};
		var input=$(this).val()+"";
		if($.trim(input) == 0){
			list.removeClass("vv");
		}
		if(input.length>0){
			if(dataMap[input]){
	        	list.html(drawInputList(dataMap[input],input));
		        list.addClass("vv");
		        select.addClass("select-focus");
				bindSelect();
				return;
	        }
			var key=$.trim(input);
			if(!/^[A-Za-z\u4e00-\u9fa5]{1,}$/.test(key) && key != ''){
				return;
			}
			$.ajax({
				type: 'POST',
				async:false,
				contentType: "application/json;",
				url : "/flight/getAirPortCode.in?key="+key,
				dataType: "json",
				//data:"key="+key,
				success : function(data) {
					dataMap[input]=data;
					lastInput=input;
			        list.html(drawInputList(data,input));
			        list.addClass("vv");
			        list.find("dd:first").addClass("selected");
			        select.addClass("select-focus");
					bindSelect();
				},
				error : function() {					
				}
			});
		}
	}
	if (keyCode == 37) {//左
    } else if (keyCode == 39) {//右
    }else if(keyCode == 38){//上
    	var selected;
    	if(list.find(".selected").length==0){
	    	 selected = list.find("dd:first");
	    }else{
	    	 selected = list.find(".selected");
	    }
    	if(selected.prev()){
    		var prev = selected.prev();
    		selected.removeClass("selected");
    		prev.addClass("selected");
    	}
    }else if(keyCode == 40){//下
    	var selected;
    	if(list.find(".selected").length==0){
	    	 selected = list.find("dd:first");
	    	 selected.addClass("selected");
	    	 return false ;
	    }else{
	    	 selected = list.find(".selected");
	    }
    	if(selected.next()){
    		var next = selected.next();
    		selected.removeClass("selected");
    		next.addClass("selected");
    	}
    }
});
function drawInputList(data,key){
	var inputlist='';
	var cityName = '';
	if(data){
		key = $.trim(key);
		if(key.length > 1){
			$.each(data,function(i,airportInfo){
				if(key.toUpperCase() == airportInfo.airportCode.toUpperCase() ||
					key.toUpperCase() == airportInfo.cityNameCn ||
					key.toUpperCase() == airportInfo.cityCode.toUpperCase() ||
					key.toUpperCase() == airportInfo.cityNameEn.toUpperCase() ||
					key.toUpperCase() == airportInfo.airportNamePy.toUpperCase() ||
					key.toUpperCase() == airportInfo.airportNameCn ||
					key.toUpperCase() == airportInfo.airportNameEn.toUpperCase()
						){
					if(airportInfo.airportCode.toUpperCase() == airportInfo.cityCode.toUpperCase()){
						var airPortCode = airportInfo.airportCode.toUpperCase();
						cityName = airportInfo.cityNameCn;
						inputlist = airportList(airportInfo,cityName,airPortCode,false,false,false,false);
						//inputlist += airportList(airportInfo,cityName,airPortCode,false,false,false,true);
						$.each(data,function(i,airportInfo){
							inputlist += airportList(airportInfo,cityName,airPortCode,true,false,false,false);
						});
					}
					return;
				}
			});
		}
		$.each(data,function(i,airportInfo){
			inputlist += airportList(airportInfo,cityName,key,false,true,false,false);
		});
		if(inputlist == ''){
			inputlist = '<dd data-value="" class="select-option">无匹配结果</dd>';
		}
	}
	else{
		lastinput="";
		return '<dd data-value="" class="select-option">无匹配结果</dd>';
	}
	return inputlist;
}

function airportList(airportInfo,cityName,airPortCode,isFilterAirPortCode,isFilterCityName,isCity,isAirPort){
	var inputlist='';
	if(isFilterAirPortCode && airportInfo.airportCode.toUpperCase() == airPortCode.toUpperCase()){
		return '';
	}
	if((isFilterCityName && cityName == airportInfo.cityNameCn) || (!isFilterCityName && cityName != airportInfo.cityNameCn)){
		return '';
	}
	if(airportInfo.cityNameCn == '' || airportInfo.cityNameEn == '' || airportInfo.airportNameCn == '' || airportInfo.airportCode == ''
		||airportInfo.cityNameCn == 'null' || airportInfo.cityNameEn == 'null' || airportInfo.airportNameCn == 'null' || airportInfo.airportCode == 'null' || airportInfo.countryCodeCn == 'null'){
		return '';
	}
	inputlist+='<dd data-value="'+airportInfo.airportCode+'" class="select-option">';
	if(isAirPort || (!isCity && airportInfo.airportCode.toUpperCase() != airportInfo.cityCode.toUpperCase() && (airportInfo.airportCode.toUpperCase().indexOf(airPortCode.toUpperCase())!=-1 || airportInfo.airportCode.toUpperCase() != airPortCode.toUpperCase()))){
		inputlist+='<span class="select-city airport">';
		inputlist+= '机场';
	}else{
		inputlist+='<span class="select-city city">';
		inputlist+= '城市';
	}
	inputlist+='</span><span class="select-city protcode">';
	inputlist+=airportInfo.cityNameCn+'(';
	if(isAirPort || (!isCity && airportInfo.airportCode.toUpperCase() != airportInfo.cityCode.toUpperCase() && (airportInfo.airportCode.toUpperCase().indexOf(airPortCode.toUpperCase())!=-1 || airportInfo.airportCode.toUpperCase() != airPortCode.toUpperCase()))){
		inputlist+= airportInfo.airportNameCn;
	}else{
		inputlist+= airportInfo.cityNameEn;
	}
	inputlist+=')'+airportInfo.airportCode;
	inputlist+='</span>';
	inputlist+='<span class="select-city country">'+airportInfo.countryCodeCn+'</span>';
	inputlist+='<span class="select-city-value" style="display:none">'+airportInfo.cityNameCn+'('+airportInfo.airportCode+')</span>';
	inputlist+='</dd>';
	return inputlist;
}

function bindSelect(){
	$(".input-city-con").find(".select-option").unbind("click").on("click", function () {
	    var select = $(this).closest(".input-city-con");
	    select.find(".input-city-code").val($(this).attr("data-value"));
	    select.find(".input-city").val($(this).find(".select-city-value").text());
	    // select closed
	    select.find(".select-list").removeClass("vv");
	    select.removeClass("select-focus");
	}).on("click", function (e) {
	    var heNode = $(e.target).closest(".input-city-con");
	    // select closed
	    if (heNode.length == 0) {
	        $(".select-list").removeClass("vv");
	        $(".input-city-con").removeClass("select-focus");
	    }
	});
}
String.prototype.startWith=function(str){  
	if(str==null||str==""||this.length==0||str.length>this.length){  
		return false; 
	}
	if(this.substr(0,str.length)==str){
		return true;
	}
	else{
		  return false;
	}
	return true;  
}; 

(function($){
	$.fn.bgIframe = $.fn.bgiframe = function(s) {
		//if ( $.browser.msie && /IE 6.0/.test(navigator.userAgent)){
		if ( $.browser.msie && /6.0/.test(navigator.userAgent) ) {
			s = $.extend({
				top     : 'auto', // auto == .currentStyle.borderTopWidth
				left    : 'auto', // auto == .currentStyle.borderLeftWidth
				width   : 'auto', // auto == offsetWidth
				height  : 'auto', // auto == offsetHeight
				opacity : true,
				src     : 'javascript:false;'
			}, s || {});
			var prop = function(n){return n&&n.constructor==Number?n+'px':n;},
			    html = '<iframe class="bgiframe"frameborder="0"tabindex="-1"src="'+s.src+'"'+
			               'style="display:block;position:absolute;z-index:-1;'+
				               (s.opacity !== false?'filter:Alpha(Opacity=\'0\');':'')+
						       'top:'+(s.top=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+\'px\')':prop(s.top))+';'+
						       'left:'+(s.left=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+\'px\')':prop(s.left))+';'+
						       'width:'+(s.width=='auto'?'expression(this.parentNode.offsetWidth+\'px\')':prop(s.width))+';'+
						       'height:'+(s.height=='auto'?'expression(this.parentNode.offsetHeight+\'px\')':prop(s.height))+';'+
						'"/>';
			return this.each(function() {
				if ( $('> iframe.bgiframe', this).length == 0 ){
					//console.log(html);
					//this.insertBefore( document.createElement(html), this.firstChild );
					//this.insertBefore( $(html), this.firstChild );
					//$("html").before( this.firstChild);
					this.insertBefore( $(html)[0], this.firstChild );
					//this.insertBefore( document.createElement('html'), this.firstChild );
				}
			});
		}
		return this;
	};
	})(jQuery);