/*
* @Author: admin
* @Date:   2017-04-20 17:55:49
* @Last Modified by:   admin
* @Last Modified time: 2017-04-21 13:31:17
*/

'use strict';
$(function(){
	//回到顶部
	
	window.onscroll=function(){
	    if($(window).scrollTop()>100){
	         $('#gotop').show();
	    }else{
	         $('#gotop').hide();
	    }
	} 
	$('#gotop').click(function(){
	    scroll('0px', 300);	
	});
	function scroll(scrollTo, time) {
	    var scrollFrom = parseInt($(window).scrollTop()),
	        i = 0,
	        runEvery = 5; // run every 5ms

	    scrollTo = parseInt(scrollTo);
	    time /= runEvery;

	    var interval = setInterval(function () {
	        i++;

	        $(window).scrollTop((scrollTo - scrollFrom) / time * i + scrollFrom)

	        if (i >= time) {
	            clearInterval(interval);
	        }
	    }, runEvery);
	}
	//侧边导航栏
	$('#header-btn').click(function(event) {
		$('body').addClass('sidenav-active');
		$('.sidenav').addClass('active');
		$('.pageContent').addClass('active');
		/*$('header').addClass('active');*/
		$('.sidenav-opa').fadeIn(400);
	});
	$('.sidenav-opa').click(function(event) {
		$('body').removeClass('sidenav-active');
		$('.sidenav').removeClass('active');
		$('.pageContent').removeClass('active');
		$('.sidenav-opa').removeClass('active');
		/*$('header').removeClass('active');*/
		$('.sidenav-opa').fadeOut(400);
	});

	//list页删选
		//单页删选
		$('.M_PageSelection_content').find('li').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
		})

	//美食↓
		//组合形式
		$('#combination-form').click(function(event) {
			$('#cf_content').show();
			$('html').addClass('popup_prohibit_html');
		});
		$('#cf_content .determine').click(function(event) {
			$('#cf_content').hide();
			$('html').removeClass('popup_prohibit_html');
		});

		//适合人数
		$('#fit-number').click(function(event) {
			$('#fn_content').show();
			$('html').addClass('popup_prohibit_html');
		});
		$('#fn_content .determine').click(function(event) {
			$('#fn_content').hide();
			$('html').removeClass('popup_prohibit_html');
		});

		//综合排序
		$('#comprehensive').click(function(event) {
			$('#c_content').show();
			$('html').addClass('popup_prohibit_html');
		});
		$('.M_select span').click(function(event) {
			$(this).addClass('active').siblings().removeClass('active');
		});
		$('#c_content .reset').click(function(){
			var re_length = $('.M_select').length;
			for(var i = 0; i < re_length; i++){
				$('.M_select').eq(i).find('span').eq(0).addClass('active').siblings().removeClass('active');
			}
		})
		$('#c_content .determine').click(function(){
			$('#c_content').hide();
			$('html').removeClass('popup_prohibit_html');
		})
	//会议
		//活动类型
		$('#activity_type_btn').click(function(event) {
			$('#activity_type').show();
			$('html').addClass('popup_prohibit_html');
		});
		$('#activity_type .determine').click(function(event) {
			$('#activity_type').hide();
			$('html').removeClass('popup_prohibit_html');
		});
		//参加人数
		$('#number_entries_btn').click(function(event) {
			$('#number_entries').show();
			$('html').addClass('popup_prohibit_html');
		});
		$('#number_entries .determine').click(function(event) {
			$('#number_entries').hide();
			$('html').removeClass('popup_prohibit_html');
		});
		//场地类型
		$('#site_type_btn').click(function(event) {
			$('#site_type').show();
			$('html').addClass('popup_prohibit_html');
		});
		$('#site_type .determine').click(function(event) {
			$('#site_type').hide();
			$('html').removeClass('popup_prohibit_html');
		});
		//地理位置
		$('#g_position_btn').click(function(event) {
			$('#g_position').show();
			$('html').addClass('popup_prohibit_html');
		});
		$('#g_position .determine').click(function(event) {
			$('#g_position').hide();
			$('html').removeClass('popup_prohibit_html');
		});

})