/*
* @Author: admin
* @Date:   2017-04-21 13:31:30
* @Last Modified by:   admin
* @Last Modified time: 2017-05-22 15:13:00
*/

'use strict';
$(function(){
	//房型选择
	$('.choice-package ul li').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
	})



	//弹出层
	$('#btn_moreComment').on('click',function(){
		$('.more-comment').fadeIn();
		$('html').addClass('more_prohibit_html');
	})
	$('.more-comment-close').on('click',function(){
		$('.more-comment').fadeOut(100);
		$('html').removeClass('more_prohibit_html');
	})

	$('#btn_morePackage').on('click',function(){
		$('.more-package').fadeIn(100);
		$('html').addClass('more_prohibit_html');
	})
	$('.more-package-close').on('click',function(){
		$('.more-package').fadeOut(100);
		$('html').removeClass('more_prohibit_html');
	})

	$('#btn_moreTrip').on('click',function(){
		$('.more-trip').fadeIn(100);
		$('html').addClass('more_prohibit_html');
	})
	$('.more-trip-close').on('click',function(){
		$('.more-trip').fadeOut(100);
		$('html').removeClass('more_prohibit_html');
	})
	//酒店设施弹出
	$('#btn_H-detail').on('click',function(){
		$('.more-H-detail').fadeIn(100);
		$('html').addClass('more_prohibit_html');
	})
	$('.more-H-detail-close').on('click',function(){
		$('.more-H-detail').fadeOut(100);
		$('html').removeClass('more_prohibit_html');
	})
	//房间详情预订须知弹出
	$('#room-detailsNotice-btn').on('click',function(){
		$('.more-detailsNotice').fadeIn(100);
		$('html').addClass('more_prohibit_html');
	})
	$('.more-detailsNotice-close').on('click',function(){
		$('.more-detailsNotice').fadeOut(100);
		$('html').removeClass('more_prohibit_html');
	})



	//房间详情温馨提示弹出
	$('#room-detailsPrompt-btn').on('click',function(){
		$('.more-detailsPrompt').fadeIn(100);
		$('html').addClass('more_prohibit_html');
	})
	$('.more-detailsPrompt-close').on('click',function(){
		$('.more-detailsPrompt').fadeOut(100);
		$('html').removeClass('more_prohibit_html');
	})


	//列表页展开
	var AthisText = $('.nio-bottom-btn .btn-a').text();
	$('.nio-bottom-btn .btn-a').on('click',function(){
		if($(this).parent().prev().hasClass('ul-height')){
			if ($(this).parent().prev().find('li').length>2) {
				$(this).parent().prev().removeClass('ul-height');
				$(this).text('收起');
			}else{
				alert('没有更多了')
			}
		}else{
			$(this).parent().prev().addClass('ul-height')
			$(this).text(AthisText);
		}
	})
	//美食详情页加减
	$('.choice-date-number .number .add').on('click',function(){
		var num=Number($(this).prev().text());
		num++;
		$(this).prev().text(num);
	})
	$('.choice-date-number .number .reduce').on('click',function(){
		var num=Number($(this).next().text());
		num--;
		if(num<1){
			num=1;
			alert('不能再减少了');
		}
		$(this).next().text(num);
	})
	//会议列表页 选项
	/*$('.newList-choice li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})*/
	//购物娱乐详情页 加减
	$('.shopping-munber .add').on('click',function(){
		var num=Number($(this).prev().text());
		num++;
		$(this).prev().text(num);
	})
	$('.shopping-munber .reduce').on('click',function(){
		var num=Number($(this).next().text());
		num--;
		if(num<1){
			num=1;
			alert('不能再减少了');
		}
		$(this).next().text(num);
	})
	//票务 购物娱乐 筛选
	var $aLi = $('.shopping-option ul li');
	for(var i=0; i<$aLi.length-1; i++){
		$aLi.eq(i).click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			$('.newList-modular .newList-modular-certain').eq($(this).index()).show().siblings().hide();
		})
	}

	$('.click-open a').click(function(event) {
		$(this).toggleClass('open');
		if($(this).hasClass('open')){
			$('.shopping-option ul').animate({'height':'1.92rem'},300);
		}else{
			$('.shopping-option ul').animate({'height':'0.746667rem'},300);
		}
	});

	//已查看点击预约
	$('.confirmClick').click(function(event) {
		$(this).find('.icon').toggleClass('active');
	});
	//
	$('.appointed-link a').click(function(event) {
		if(!$('.confirmClick').find('.icon').hasClass('active')){
			return false;
		}
	});
	//桐乡市民预约选择
	$('.co-option .options a').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	//会议马上预约按钮
	$('.appointed-link a').click(function(event) {
        $('.submit-prompt').show();
	});
	//详情页查看更多
	var datails_bFlag = true;
	var changeHeightChild = $('.datails-text-hidden').find('p').height();
	var changeHeight = $('.datails-text-hidden').height();
	if(changeHeight-changeHeightChild < 10 && changeHeight-changeHeightChild >-10 ){
		$('#datails-text-hidden-btn').hide();
	}
	$('#datails-text-hidden-btn a').click(function(event) {
		if(datails_bFlag){
			if(changeHeight-changeHeightChild < 10 && changeHeight-changeHeightChild >-10 ){
				alert('没有更多了');
				return;
			}else{
				$('.datails-text-hidden').height(changeHeightChild);
				$(this).text('收起 >');
				datails_bFlag = false;
			}
		}else{
			$('.datails-text-hidden').height('1.04rem');
			$(this).text('查看更多 > ');
			datails_bFlag = true;
		}
	});
	//收藏
	$('.collection').click(function(event) {
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			setTimeout(function(){
				alert('取消收藏');
			},100)
		}else{
			$(this).addClass('active');
			setTimeout(function(){
				alert('收藏成功');
			},100)
		}
		
	});
})
