 (
 	function() {

        var boundStarDate = "";  //限定开始日期
        var boundEndDate = "";  //限定结束日期
        var disabledDate = [];//指定日期不可选
        var boundStarDate_arr = [];
        var boundEndDate_arr = [];
 		var nowStart = "in";



 		function showDate(obj,year,month){
 			var oDate = new Date();
 			var dayNum = 0;
            var resetDate = $('#date-arrive').find('span').attr('data-reset');

			for(var t=0;t<resetDate;t++){
                var oTable = $("<table></table>");
                var oTHead = $("<thead></thead>");
                var oTr = $("<tr></tr>");
                
                month++;
                if(month>12){
                    month=1;
                    year++;
                }
                
                var oth = $("<th colspan='7'>"+year+"年"+month+"月"+"</th>");

                oTr.append(oth);
                oTHead.append(oTr);
                oTable.append(oTHead);
                var oTbody = $("<tbody></tbody>");
                for(var i = 0;i<6;i++){
                    var oTr = $("<tr></tr>");
                    for(var j = 0;j<7;j++){
                        var oTd = $("<td><span><i></i></span></td>");
                        oTr.append(oTd);
                    }
                    oTbody.append(oTr);
                }

                oTable.append(oTbody);
                obj.append(oTable);
                
                var aTd = $(obj).find("table").eq(t).find("td");
                
                for(var i = 0; i<aTd.length;i++){
                    aTd.eq(i).find('i').html("");
                }

                if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month ==10 ||month ==12){
                    dayNum = 31;
                }else if(month ==4 || month == 6 || month == 9 || month == 11){
                    dayNum = 30;
                }else if(month == 2 && isLeapYear(year)){
                    dayNum = 29;
                }else{
                    dayNum = 28;
                }

                
                oDate.setDate(1);
                oDate.setMonth(month-1);                
                oDate.setFullYear(year);

                switch(oDate.getDay()){
                    case 0:
                        for(var i = 0;i<dayNum;i++){
                            aTd.eq(i).find('i').html(i+1);
                        }
                    break;
                    case 1:
                        for(var i = 0;i<dayNum;i++){
                            aTd.eq(i+1).find('i').html(i+1);
                        }
                    break;
                    case 2:
                        for(var i = 0;i<dayNum;i++){
                            aTd.eq(i+2).find('i').html(i+1);
                        }
                    break;
                    case 3:
                        for(var i = 0;i<dayNum;i++){
                            aTd.eq(i+3).find('i').html(i+1);
                        }
                    break;
                    case 4:
                        for(var i = 0;i<dayNum;i++){
                            aTd.eq(i+4).find('i').html(i+1);
                        }
                    break;
                    case 5:
                        for(var i = 0;i<dayNum;i++){
                            aTd.eq(i+5).find('i').html(i+1);
                        }
                    break;
                    case 6:
                        for(var i = 0;i<dayNum;i++){
                            aTd.eq(i+6).find('i').html(i+1);
                        }
                    break;
                }
            }
 		};
 		function isLeapYear(year){
 			if(year%4 == 0 && year%100 != 0){
 				return true;
 			}else{
 				if(year%400 == 0){
 					return true;
 				}else{
 					return false;
 				}
 			}
 		}

        $('#choice_date').click(function(event) {
            $('.calendar').show();
            $('html').addClass('popup_prohibit_html');
        });
        $('.calendar').find('.calendar-btn').find('.cancel').click(function(event) {
            $('.calendar').hide();
            $('html').removeClass('popup_prohibit_html');
        });
        $('.calendar').find('.calendar-btn').find('.determine').click(function(event) {
            $('.calendar').hide();
            $('html').removeClass('popup_prohibit_html');
        });
        var myDate = new Date();
        showDate($('.calendar-day'),myDate.getFullYear(),myDate.getMonth());

 	}
 )()