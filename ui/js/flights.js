$(document).ready(function(){
		var flightResult = $('#flightResult');//列表容器
		//时间戳转换
		function date(now){ 
			function add0(m){return m<10?'0'+m:m;}
			var now =new Date(now),
			year=now.getFullYear(),
			month=now.getMonth()+1,
			day=now.getDate(),
			hour=now.getHours(), 
			minute=now.getMinutes(),
			second=now.getSeconds();
			return add0(hour)+":"+add0(minute);
		} 
		function getDate(tm){ 
		    var tt=new Date(tm).toLocaleString(); 
		    return tt; 
		} 
		var flight = {
			//query请求
			query:function(opt){
				var opt = opt||{};
				$.ajax({
					type : opt.type||"GET",
					url :opt.url,
					contentType: "application/json;",
					dataType:opt.dateType||"JSON",
					async:true,
					data:opt.data,
					beforeSend:function(){
						console.log('loading……');
						flightResult.html('<div class="loading">加载中……</div>');
					},
					success:opt.success,
					error:function(xhr,status,error){
						console.log(xhr);	
					}
				});
			},
			//单程
			single:function(){
				
			},
			
			//往返
			round:function(){
				this.query({
					url:'RT.json',
					success:function(data){
						$('.loading').remove();
						console.log(data);
						console.log(data.airFlightSearchRQ.journeyType);
						var flightList = data.avFlightList,
							priceTable = data.priceTable;
						
						var tableAttr = $('<div class="priceTable"><div class="tableAttr"><div>-</div><div>第一次转机</div><div>第二次转机</div><div>直飞</div></div></div>');
						
						for(i in priceTable){
							var item = priceTable[i];
							console.log(item);
							
							var price = '<div class="tabledd">'+
							'<div class="name">'+item.airlineName+'</div>'+
							'<div>'+(item.lp===null?'-':item.lp)+'</div>'+
							'<div>'+(item.lpo===null?'-':item.lpo)+'</div>'+
							'<div>'+(item.lpt===null?'-':item.lpt)+'</div>'+
							'<div>';
							tableAttr.append(price);
						}
						flightResult.append(tableAttr);
							
						//所有航班结果
						$.each(flightList,function(i,item){
							var flightCard= $('<div class="flightCard"></div>');
							var odlist = item.odlist;
							var flightDetails = $('<div class="flightDetails" style="display:block"></div>');//航班详情
							var flightTool ='<div class="flightTool"><a class="viewMore">查看详情</a></div>';//其他工具
							//
							$.each(odlist,function(index,item){
								var details = item.flightDetail;
								//航班号判断 
								var flightBorder ='<div class="flightInfo roundInfo">'+
										'<div class="flightsName">'+
											'<h1><i><img src="http://simg1.qunarzz.com/site/images/airlines/HU.gif" alt="" /></i>'+details[0].airlineName+'</h1>'+
											'<p>'+item.flightNo+'</p>'+
											'<p>机型：'+details[0].plane+'</p>'+
										'</div>'+
										'<div class="linebars">'+
											'<div class="time star">'+
												'<div class="times">'+date(details[0].departureTime)+'</div>'+
												'<b>' +item.departureAirport+' '+item.dPortName+'<span class="blue">'+details[0].depTerm+'</span></b>'+
											'</div>'+
											'<div class="line">'+
												'<div class="alltime">'+item.duration+'</div>'+
												'<div class="transfer">中转城市：'+item.transferCity+'经停：'+item.stopCity+'</div>'+
											'</div>'+
											'<div class="time end">'+
												'<div class="times">'+date(details[0].arriveTime)+'<div class="dateAdd">+1</div></div>'+
											'<b>'+item.arrivalAirport+' '+item.aPortName+'<span class="blue">'+details[0].arrTerm+'</span></b>'+
											'</div>'+
										'</div>'+
									'</div>';
									
									var flines;
									//中转城市
									var transferInfo = '<div class="transferName"><div class="time">'+item.transferCity+'<span class="orange">停'+item.transferTime+'</span></div></div>';
									//航班详情
									var detailsItem = $('<div class="detailsItem"></div>');
									detailsItem.append(transferInfo); //装入中转城市
									
									
									var journeytype=(index!==1)?'去':'返';
								    var journeytypeElm='<div class="lineStep">'+journeytype+'</div>';
								    detailsItem.append(journeytypeElm);
								    
								    
									$.each(details,function(index,item){
										 flines='<div class="flines">'+
												'<div class="fname">'+
													'<img src="http://simg1.qunarzz.com/site/images/airlines/HU.gif" alt=""><h2>'+item.airlineName+
											
														'<span class="orange">'+item.plane+'</span>'+
														'<span>大型机</span>'+
														'<span>经济舱</span>'+
														'<span>行李额：2件</span>'+
														'</h2>'+
												'</div>'+
												'<div class="timeline">'+
													'<div class="star">'+
														'<p class="time">出发：'+getDate(item.departureTime)+'</p>'+
														'<p>'+item.departureAirport+' '+item.dPortName+'</p>'+
														'</div>'+
													'<div class="end">'+
														'<p class="time">到达：'+getDate(item.arriveTime)+'</p>'+
														'<p>'+item.arriveAirport+' '+item.aPortName+'</p>'+
														
													'</div>'+
													'<div class="bar">'+
														'<div class="flightTime">飞行时长：'+item.duration+'</div>'+
													'</div>'+
												'</div>'+
											'</div>';
										detailsItem.append(flines);
										flightDetails.append(detailsItem);
									});
									
								
									
								//详情
								flightCard.append(flightBorder);//od list
								flightCard.append(flightDetails);//详情
							});
							flightCard.append(flightTool);
							flightResult.append(flightCard);
						});
					},
				});
			},
			//多程
			multipass:function(){
				
			},
			//
			flightItm:function(){
				
			}
		}
		
		
		
		flight.round();
		});