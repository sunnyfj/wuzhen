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
				$("#" + hvtid).fadeIn(100);
			}
			else {
				$("#" + hvtid).fadeOut(100);
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
		$('html').addClass('sidenav-active');
		$('.sidenav').addClass('active');
		$('.pageContent').addClass('active');
		$('.sidenav-opa').fadeIn();
	});
	$('.sidenav-opa').click(function(event) {
		$('html').removeClass('sidenav-active');
		$('.sidenav').removeClass('active');
		$('.pageContent').removeClass('active');
		$('.sidenav-opa').fadeOut();
	});

	
})