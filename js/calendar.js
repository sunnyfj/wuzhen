 (
 	function() {
 		function showDate(obj,year,month){
 			var oDate = new Date();
 			var dayNum = 0;
            var resetDate = $('#choice_date').find('span').eq(0).attr('data-reset');

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
                var timeDate = new Date();
                switch(oDate.getDay()){
                    case 0:
                        for(var i = 0;i<dayNum;i++){
                            aTd.eq(i).find('i').html(i+1);
                            aTd.eq(i).addClass('optional');
                            timeDate.setFullYear(year,month,(i+1),0,0,0);
                            aTd.eq(i).attr({
                                'date-sec': timeDate.getTime(),
                                'data-date-format': year+'-'+tuDou(month)+'-'+tuDou((i+1))
                            });
                        }
                    break;
                    case 1:
                        for(var i = 0;i<dayNum;i++){
                            aTd.eq(i+1).find('i').html(i+1);
                            aTd.eq(i+1).addClass('optional');
                            timeDate.setFullYear(year,month,(i+1),0,0,0);
                            aTd.eq(i+1).attr({
                                'date-sec': timeDate.getTime(),
                                'data-date-format': year+'-'+tuDou(month)+'-'+tuDou((i+1))
                            });
                        }
                    break;
                    case 2:
                        for(var i = 0;i<dayNum;i++){
                            aTd.eq(i+2).find('i').html(i+1);
                            aTd.eq(i+2).addClass('optional');
                            timeDate.setFullYear(year,month,(i+1),0,0,0);
                            aTd.eq(i+2).attr({
                                'date-sec': timeDate.getTime(),
                                'data-date-format': year+'-'+tuDou(month)+'-'+tuDou((i+1))
                            });
                        }
                    break;
                    case 3:
                        for(var i = 0;i<dayNum;i++){
                            aTd.eq(i+3).find('i').html(i+1);
                            aTd.eq(i+3).addClass('optional');
                            timeDate.setFullYear(year,month,(i+1),0,0,0);
                            aTd.eq(i+3).attr({
                                'date-sec': timeDate.getTime(),
                                'data-date-format': year+'-'+tuDou(month)+'-'+tuDou((i+1))
                            });
                        }
                    break;
                    case 4:
                        for(var i = 0;i<dayNum;i++){
                            aTd.eq(i+4).find('i').html(i+1);
                            aTd.eq(i+4).addClass('optional');
                            timeDate.setFullYear(year,month,(i+1),0,0,0);
                            aTd.eq(i+4).attr({
                                'date-sec': timeDate.getTime(),
                                'data-date-format': year+'-'+tuDou(month)+'-'+tuDou((i+1))
                            });
                        }
                    break;
                    case 5:
                        for(var i = 0;i<dayNum;i++){
                            aTd.eq(i+5).find('i').html(i+1);
                            aTd.eq(i+5).addClass('optional');
                            timeDate.setFullYear(year,month,(i+1),0,0,0);
                            aTd.eq(i+5).attr({
                                'date-sec': timeDate.getTime(),
                                'data-date-format': year+'-'+tuDou(month)+'-'+tuDou((i+1))
                            });
                        }
                    break;
                    case 6:
                        for(var i = 0;i<dayNum;i++){
                            aTd.eq(i+6).find('i').html(i+1);
                            aTd.eq(i+6).addClass('optional');
                            timeDate.setFullYear(year,month,(i+1),0,0,0);
                            aTd.eq(i+6).attr({
                                'date-sec': timeDate.getTime(),
                                'data-date-format': year+'-'+tuDou(month)+'-'+tuDou((i+1))
                            });
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
        function tuDou(n){
            if(n<10){
                return '0'+n;
            }
            return n;
        }
        //过去日期调整
        function showColor(table1Td,year,month,date){
            var result = [];
            var oDate = new Date();

            for(var i=0;i<table1Td.length;i++){
                result.push(table1Td.eq(i));
            }
            if(parseInt(year) == oDate.getFullYear() && parseInt(month) == (oDate.getMonth()+1)) {
                var thisDate = oDate.getDate();
                for(var i=0;i<thisDate-1;i++){
                    table1Td.eq(i).removeClass();
                    table1Td.eq(i).addClass('gray');
                }
            }

            //页面和 日期部分的展示日期设置为当前的
            var dataWhetherEnd = $('#choice_date').find('span').eq(0).attr('data-whether-end');
            //判断需不需要结束日期
            if(dataWhetherEnd=='true'){
                var td0_data_format_start = $('#calendar-day').find('.optional').eq(0).attr('data-date-format');
                var td0_data_format_end = $('#calendar-day').find('.optional').eq(1).attr('data-date-format');
                $('#choice_date').find('span').eq(0).text(td0_data_format_start);
                $('#choice_date').find('span').eq(1).text(td0_data_format_end);   
                $('#show_choice_date').find('span').eq(0).text(td0_data_format_start);
                $('#show_choice_date').find('span').eq(1).text(td0_data_format_end);
            }else{
                var td0_data_format_start = $('#calendar-day').find('.optional').eq(0).attr('data-date-format');
                $('#choice_date').find('span').eq(0).text(td0_data_format_start);
                $('#choice_date').find('span').eq(1).text('');   
                $('#show_choice_date').find('span').eq(0).text(td0_data_format_start);
                $('#show_choice_date').find('span').eq(1).text('');
            }
            
        }
        
        var myDate = new Date();
        showDate($('.calendar-day'),myDate.getFullYear(),myDate.getMonth());
        showColor($('.calendar table').eq(0).find('td.optional'),myDate.getFullYear(),myDate.getMonth()+1,Date());
        
        //判断table多出的空行
        var allTbody = $('.calendar').find('tbody');
        var arr = [];
        for(var j=0;j<allTbody.length;j++){
            arr.push(allTbody.eq(j).find('tr:last'));
            arr.push(allTbody.eq(j).find('tr:last').prev());
        }
        for(var i=0;i<arr.length;i++){            
            for(var t=0;t<arr[i].find('td').length;t++){
                if(!arr[i].find('td').eq(t).hasClass('optional') && !arr[i].find('td').eq(t).hasClass('gray')){
                arr[i].find('td').eq(t).hide();
                }
            }
        }
        




        var bFlag = true;
        $('.calendar').find('td.optional').click(function(event){
            var $atd = $('.calendar').find('td.optional');
            var dataWhetherEnd = $('#choice_date').find('span').eq(0).attr('data-whether-end');
            //判断需不需要结束日期
            if(dataWhetherEnd =='true'){
                if(bFlag){
                    $atd.removeClass('selected-start');
                    $atd.removeClass('selected-end');
                    $atd.removeClass('selected-line');
                    $(this).addClass('selected-start');
                    $('#show_choice_date').find('span').eq(0).text($(this).attr('data-date-format'));
                    //$('#show_choice_date').find('span').eq(1).text($(this).next().attr('data-date-format'));
                    bFlag = false;
                }else{
                    if($(this).attr('date-sec') <= $(this).parents('.calendar').find('.selected-start').attr('date-sec')){
                        $atd.removeClass('selected-start');
                        $atd.removeClass('selected-end');
                        $atd.removeClass('selected-line');
                        $(this).addClass('selected-start');
                        $('#show_choice_date').find('span').eq(0).text($(this).attr('data-date-format'));
                        //$('#show_choice_date').find('span').eq(1).text($(this).next().attr('data-date-format'));
                        bFlag = false;
                    }else{
                        $(this).addClass('selected-end');
                        $('#show_choice_date').find('span').eq(1).text($(this).attr('data-date-format'));
                        var startTime = $(this).parents('.calendar').find('.selected-start').attr('date-sec');
                        var endTime = $(this).attr('date-sec');

                        for(var i=0;i<$atd.length;i++){
                            if($atd.eq(i).attr('date-sec') >= startTime && $atd.eq(i).attr('date-sec') <= endTime){
                                $atd.eq(i).addClass('selected-line');
                            }
                        }
                        bFlag = true;
                    }
                }
            }else{
                $atd.removeClass('selected-start');
                $atd.removeClass('selected-end');
                $atd.removeClass('selected-line');
                $(this).addClass('selected-start');
                $('#show_choice_date').find('span').eq(0).text($(this).attr('data-date-format'));
                $('#show_choice_date').find('span').eq(1).text('');
            }

        });

        $('#choice_date').click(function(event) {
            //判断需不需要结束日期
            var dataWhetherEnd = $('#choice_date').find('span').eq(0).attr('data-whether-end');
            if(dataWhetherEnd!='true'){
                $('#show_choice_date').find('.date-leave').hide();
            }
            $('.calendar').show();
            $('html').addClass('popup_prohibit_html');
        });
        $('.calendar').find('.calendar-btn').find('.cancel').click(function(event) {
            $('.calendar').hide();
            $('html').removeClass('popup_prohibit_html');
        });
        $('.calendar').find('.calendar-btn').find('.determine').click(function(event) {
            //判断需不需要结束日期
            var dataWhetherEnd = $('#choice_date').find('span').eq(0).attr('data-whether-end');
            if(dataWhetherEnd=='true'){
                if($('.calendar').find('td').hasClass('selected-start') && $('.calendar').find('td').hasClass('selected-end')){
                    $('.calendar').hide();
                    $('html').removeClass('popup_prohibit_html');
                }else{
                    alert('请选择离店时间');
                    return;
                }
            }else{
                $('.calendar').hide();
                $('html').removeClass('popup_prohibit_html');
            }
            var show_choice_date_start =$('#show_choice_date').find('span').eq(0).text();
            var show_choice_date_end =$('#show_choice_date').find('span').eq(1).text();
            $('#choice_date').find('span').eq(0).text(show_choice_date_start);
            $('#choice_date').find('span').eq(1).text(show_choice_date_end);
        });
 	}
 )()