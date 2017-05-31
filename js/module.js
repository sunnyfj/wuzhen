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
		$('html').addClass('popup_prohibit_html');
	})
	$('.more-comment-close').on('click',function(){
		$('.more-comment').fadeOut(100);
		$('html').removeClass('popup_prohibit_html');
	})

	$('#btn_morePackage').on('click',function(){
		$('.more-package').fadeIn(100);
		$('html').addClass('popup_prohibit_html');
	})
	$('.more-package-close').on('click',function(){
		$('.more-package').fadeOut(100);
		$('html').removeClass('popup_prohibit_html');
	})

	$('#btn_moreTrip').on('click',function(){
		$('.more-trip').fadeIn(100);
		$('html').addClass('popup_prohibit_html');
	})
	$('.more-trip-close').on('click',function(){
		$('.more-trip').fadeOut(100);
		$('html').removeClass('popup_prohibit_html');
	})
	//列表页展开
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
			$(this).text('展开');
		}
	})
	//美食详情页加减
	$('.choice-date-number .number .add').on('click',function(){
		var num=Number($(this).prev().val());
		num++;
		$(this).prev().val(num);
	})
	$('.choice-date-number .number .reduce').on('click',function(){
		var num=Number($(this).next().val());
		num--;
		if(num<1){
			num=1;
			alert('不能再减少了');
		}
		$(this).next().val(num);
	})
	//会议列表页 选项
	/*$('.newList-choice li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})*/
	//购物娱乐详情页 加减
	$('.shopping-munber .add').on('click',function(){
		var num=Number($(this).prev().val());
		num++;
		$(this).prev().val(num);
	})
	$('.shopping-munber .reduce').on('click',function(){
		var num=Number($(this).next().val());
		num--;
		if(num<1){
			num=1;
			alert('不能再减少了');
		}
		$(this).next().val(num);
	})
	//票务 购物娱乐 筛选 
	$('.shopping-option ul li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.newList-modular .newList-modular-certain').eq($(this).index()).show().siblings().hide();
	})
	$('.click-open a').click(function(event) {
		$(this).toggleClass('open');
		if($(this).hasClass('open')){
			$('.shopping-option ul').stop().animate({'height':'1.92rem'},800);
		}else{
			$('.shopping-option ul').stop().animate({'height':'0.746667rem'},800);
		}
	});

	//已查看点击预约
	$('.confirmClick').click(function(event) {
		$(this).find('.icon').toggleClass('active');
	});
	//桐乡市民预约选择
	$('.co-option .options a').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
})