/*
* @Author: admin
* @Date:   2017-04-20 17:55:49
* @Last Modified by:   admin
* @Last Modified time: 2017-04-21 13:31:17
*/

'use strict';
$(function(){
	//回到顶部
	function initTopHoverTree(hvtid, times) {
		$("#" + hvtid).on("click", function () { goTopHovetree(times); })

		$(window).scroll(function () {
			if ($(window).scrollTop() > 268) {
				$("#" + hvtid).show();
			}
			else {
				$("#" + hvtid).hide();
			}
		});
	}

	//返回顶部动画
	//goTop(500);//500ms内滚回顶部
	function goTopHovetree(times) {
		if (!!!times) {
		$(window).scrollTop(0);
			return;
		}

	var sh = $('body').scrollTop();//移动总距离
	var inter = 13.333;//ms,每次移动间隔时间
	var forCount = Math.ceil(times / inter);//移动次数
	var stepL = Math.ceil(sh / forCount);//移动步长
	var timeId = null;
	function aniHovertree() {
		!!timeId && clearTimeout(timeId);
		timeId = null;
		//console.log($('body').scrollTop());
		if ($('body').scrollTop() <= 0 || forCount <= 0) {//移动端判断次数好些，因为移动端的scroll事件触发不频繁，有可能检测不到有<=0的情况
		$('body').scrollTop(0);
		return;
		}
		forCount--;
		sh -= stepL;
		$('body').scrollTop(sh);
		timeId = setTimeout(function () { aniHovertree(); }, inter);
		}
		aniHovertree();
	}
	initTopHoverTree("gotop",300); 


	//侧边导航栏
	$('#header-btn').click(function(event) {
		$('body').addClass('sidenav-active');
		$('.sidenav').addClass('active');
		$('.pageContent').addClass('active');
		/*$('header').addClass('active');*/
		$('.sidenav-opa').fadeIn(300);
	});
	$('.sidenav-opa').click(function(event) {
		$('body').removeClass('sidenav-active');
		$('.sidenav').removeClass('active');
		$('.pageContent').removeClass('active');
		$('.sidenav-opa').removeClass('active');
		/*$('header').removeClass('active');*/
		$('.sidenav-opa').fadeOut(300);
	});

	//list页删选
		//单页删选
		$('.S_PageSelection').find('li').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
		})

	//美食↓
		//组合形式
		$('#combination-form').click(function(event) {
			$('#cf_content').show();
			$('html').addClass('popup_prohibit_html');
		});
		$('#cf_content .S_btn').click(function(event) {
			$('#cf_content').hide();
			$('html').removeClass('popup_prohibit_html');
		});

		//适合人数
		$('#fit-number').click(function(event) {
			$('#fn_content').show();
			$('html').addClass('popup_prohibit_html');
		});
		$('#fn_content .S_btn').click(function(event) {
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
		$('#reset').click(function(){
			var re_length = $('.M_select').length;
			for(var i = 0; i < re_length; i++){
				$('.M_select').eq(i).find('span').eq(0).addClass('active').siblings().removeClass('active');
			}
		})
		$('#determine').click(function(){
			$('#c_content').hide();
			$('html').removeClass('popup_prohibit_html');
		})
	//会议
		//活动类型
		$('#activity_type_btn').click(function(event) {
			$('#activity_type').show();
			$('html').addClass('popup_prohibit_html');
		});
		$('#activity_type .S_btn').click(function(event) {
			$('#activity_type').hide();
			$('html').removeClass('popup_prohibit_html');
		});
		//参加人数
		$('#number_entries_btn').click(function(event) {
			$('#number_entries').show();
			$('html').addClass('popup_prohibit_html');
		});
		$('#number_entries .S_btn').click(function(event) {
			$('#number_entries').hide();
			$('html').removeClass('popup_prohibit_html');
		});
		//场地类型
		$('#site_type_btn').click(function(event) {
			$('#site_type').show();
			$('html').addClass('popup_prohibit_html');
		});
		$('#site_type .S_btn').click(function(event) {
			$('#site_type').hide();
			$('html').removeClass('popup_prohibit_html');
		});
		//地理位置
		$('#g_position_btn').click(function(event) {
			$('#g_position').show();
			$('html').addClass('popup_prohibit_html');
		});
		$('#g_position .S_btn').click(function(event) {
			$('#g_position').hide();
			$('html').removeClass('popup_prohibit_html');
		});

})