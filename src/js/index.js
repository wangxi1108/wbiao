// banner区轮播
	// 使用jQuery对象
	$(function () {
		var $imgs = $(".main_banner li"),//首先获取图片数组

			len = $imgs.length,//获取到这个图片数组的个数
			// imgWidth = $imgs[0].outerWidth(),//获取到单个图片的宽
			currentIndex = 0,
			nextIndex = 1,
			html="",//为添加小圆点准备
			timer = null;
		timer = setInterval(move,8000)//三秒换一张图片
		/*创建小圆点*/
		for(var i = 0; i < len; i++){//计算需要创建多少个小圆点
			html += "<div></div>";
		};
		$(html).appendTo('#pages').addClass('circle').eq(0).addClass('current');
		var circleWidth = $(".circle").eq(0).outerWidth()+10;
			$("#pages").css({
				width: (len*circleWidth+40)+"px"
			});
		/*添加小圆点移入事件*/
		$("#pages").on("mouseover",".circle",function () {
			if (currentIndex === $(this).index()) {
				return;
			}
			nextIndex = $(this).index();
			move();
		})
		/*添加鼠标移入暂停，移出继续*/
		$(".main_banner").hover(function() {
			clearInterval(timer);
			$("#prev").show();
			$("#next").show();
		}, function() {
			timer = setInterval(move,8000);
			$("#prev").hide();
			$("#next").hide();
		});
		/*添加上下翻页*/
			$("#prev").click(function() {
				nextIndex = currentIndex - 1;
				if (nextIndex < 0) {
					nextIndex = len -1;
				}
				move()
			});
			$("#next").click(move);
		/* 轮播动画创建*/
		function move() {
			// 实现淡入淡出需要用到fadeIn()与fadeOut()
			$imgs.eq(currentIndex).fadeOut().end()
				 .eq(nextIndex).fadeIn()
			//实现小圆点的颜色与当前图片对应
			$(".circle").eq(currentIndex).removeClass('current').end()
						.eq(nextIndex).addClass('current');
			/********************************************/
			currentIndex = nextIndex;
			nextIndex++;
			if (nextIndex >=len) {
				nextIndex = 0;
			}

		}
	});
//showpic区效果
$(function () {
	$(".floor_showpic").hover(function() {
		$(".floor_showpic p span").eq(0).animate({ 
            left:0,
          }, 400 );
		$(".floor_showpic p span").eq(1).animate({ 
            right:0,
          }, 400 );
        },function () {
        	$(".floor_showpic p span").eq(0).animate({ 
            left:"-30px",
          }, 400);
        	$(".floor_showpic p span").eq(1).animate({ 
            right:"-30px",
          }, 400 );
        });
});

// 楼层区轮播图


$(function () {
	$(window).one("mouseenter", function(){
		var	$imgss= $(".floor_style_1 .show_part1 .floor_1"),//首先获取图片数组
			len = $imgss.length,//获取到这个图片数组的个数
			currentIndex = 0,
			nextIndex = 1,
			html="",//为添加小圆点准备
			timer = null;
		timer = setInterval(move,3000);//三秒换一张图片

		/*创建小圆点*/
		for(var i = 0; i < len; i++){//计算需要创建多少个小圆点
			html += "<div></div>";
		};
		$(html).appendTo('#pages2').addClass('circle').eq(0).addClass('current');
		var circleWidth = $(".circle").eq(0).outerWidth()+10;
			$("#pages2").css({
				width: (len*circleWidth)+"px"
			});
		/*添加小圆点移入事件*/
		$("#pages2").on("mouseover",".circle",function () {
			if (currentIndex === $(this).index()) {
				return;
			}
			nextIndex = $(this).index();
			move();
		})
		/*添加鼠标移入暂停，移出继续*/
		$(".floor_style_1 .show_part1 ul").hover(function() {
			clearInterval(timer);
			$("#prev2").show();
			$("#next2").show();
		}, function() {
			timer = setInterval(move,3000);
			$("#prev2").hide();
			$("#next2").hide();
		});
		/*添加上下翻页*/
			$("#prev2").click(function() {
				nextIndex = currentIndex - 1;
				if (nextIndex < 0) {
					nextIndex = len -1;
				}
				move()
			});
			$("#next2").click(move);
		/* 轮播动画创建*/
		function move() {
			// 实现淡入淡出需要用到fadeIn()与fadeOut()
			$imgss.eq(currentIndex).fadeOut().end()
				 .eq(nextIndex).fadeIn()
			//实现小圆点的颜色与当前图片对应
			$("#pages2 .circle").eq(currentIndex).removeClass('current').end()
						.eq(nextIndex).addClass('current');
			/********************************************/
			currentIndex = nextIndex;
			nextIndex++;
			if (nextIndex >=len) {
				nextIndex = 0;
			}

		}
	 });

});
$(function () {
	$(window).one("mouseenter", function(){
		var	$imgss= $(".floor_style_1 .show_part1 .floor_2"),//首先获取图片数组
			len = $imgss.length,//获取到这个图片数组的个数
			currentIndex = 0,
			nextIndex = 1,
			html="",//为添加小圆点准备
			timer = null;
		timer = setInterval(move,3000);//三秒换一张图片

		/*创建小圆点*/
		for(var i = 0; i < len; i++){//计算需要创建多少个小圆点
			html += "<div></div>";
		};
		$(html).appendTo('#pages3').addClass('circle').eq(0).addClass('current');
		var circleWidth = $(".circle").eq(0).outerWidth()+10;
			$("#pages3").css({
				width: (len*circleWidth)+"px"
			});
		/*添加小圆点移入事件*/
		$("#pages3").on("mouseover",".circle",function () {
			if (currentIndex === $(this).index()) {
				return;
			}
			nextIndex = $(this).index();
			move();
		})
		/*添加鼠标移入暂停，移出继续*/
		$(".floor_style_1 .show_part1 ul").hover(function() {
			clearInterval(timer);
			$("#prev3").show();
			$("#next3").show();
		}, function() {
			timer = setInterval(move,3000);
			$("#prev3").hide();
			$("#next3").hide();
		});
		/*添加上下翻页*/
			$("#prev3").click(function() {
				nextIndex = currentIndex - 1;
				if (nextIndex < 0) {
					nextIndex = len -1;
				}
				move()
			});
			$("#next3").click(move);
		/* 轮播动画创建*/
		function move() {
			// 实现淡入淡出需要用到fadeIn()与fadeOut()
			$imgss.eq(currentIndex).fadeOut().end()
				 .eq(nextIndex).fadeIn()
			//实现小圆点的颜色与当前图片对应
			$("#pages3 .circle").eq(currentIndex).removeClass('current').end()
						.eq(nextIndex).addClass('current');
			/********************************************/
			currentIndex = nextIndex;
			nextIndex++;
			if (nextIndex >=len) {
				nextIndex = 0;
			}

		}
	 });

});
$(function () {
	$(window).one("mouseenter", function(){
		var	$imgss= $(".floor_style_1 .show_part1 .floor_3"),//首先获取图片数组
			len = $imgss.length,//获取到这个图片数组的个数
			currentIndex = 0,
			nextIndex = 1,
			html="",//为添加小圆点准备
			timer = null;
		timer = setInterval(move,3000);//三秒换一张图片

		/*创建小圆点*/
		for(var i = 0; i < len; i++){//计算需要创建多少个小圆点
			html += "<div></div>";
		};
		$(html).appendTo('#pages4').addClass('circle').eq(0).addClass('current');
		var circleWidth = $(".circle").eq(0).outerWidth()+10;
			$("#pages4").css({
				width: (len*circleWidth)+"px"
			});
		/*添加小圆点移入事件*/
		$("#pages4").on("mouseover",".circle",function () {
			if (currentIndex === $(this).index()) {
				return;
			}
			nextIndex = $(this).index();
			move();
		})
		/*添加鼠标移入暂停，移出继续*/
		$(".floor_style_1 .show_part1 ul").hover(function() {
			clearInterval(timer);
			$("#prev4").show();
			$("#next4").show();
		}, function() {
			timer = setInterval(move,3000);
			$("#prev4").hide();
			$("#next4").hide();
		});
		/*添加上下翻页*/
			$("#prev4").click(function() {
				nextIndex = currentIndex - 1;
				if (nextIndex < 0) {
					nextIndex = len -1;
				}
				move()
			});
			$("#next4").click(move);
		/* 轮播动画创建*/
		function move() {
			// 实现淡入淡出需要用到fadeIn()与fadeOut()
			$imgss.eq(currentIndex).fadeOut().end()
				 .eq(nextIndex).fadeIn()
			//实现小圆点的颜色与当前图片对应
			$("#pages4 .circle").eq(currentIndex).removeClass('current').end()
						.eq(nextIndex).addClass('current');
			/********************************************/
			currentIndex = nextIndex;
			nextIndex++;
			if (nextIndex >=len) {
				nextIndex = 0;
			}

		}
	 });

});

$(function () {
	$(window).one("mouseenter", function(){
	var oNav = $('#cebiannav');//导航壳
		   var aNav = oNav.find('li');//导航
		   var aDiv = $('#main .louceng');//楼层
		   var oTop = $('#goTop');
			//回到顶部
			$(window).scroll(function(){
				 var winH = $(window).height();//可视窗口高度
				 var iTop = $(window).scrollTop();//鼠标滚动的距离
				 var untile=$('#header').height()+$('.nav').height()+$('.main_banner').height();
				 if(iTop>=untile){
				 	oNav.fadeIn();
				 	oTop.fadeIn();
				 //鼠标滑动式改变	
				 aDiv.each(function(){
				 	if(winH+iTop - $(this).offset().top>winH/2){
				 		aNav.removeClass('active');
				 		aNav.eq($(this).index()).addClass('active');
				 	}
				 })
				 }else{
				 	oNav.fadeOut();
				 	oTop.fadeOut();
				 }
			})
			//点击top回到顶部
			oTop.click(function(){
				$('body,html').animate({"scrollTop":0},500)
			})
			//点击回到当前楼层
			aNav.click(function(){
				var t = aDiv.eq($(this).index()).offset().top;
				$('body,html').animate({"scrollTop":t},500);
				$(this).addClass('active').siblings().removeClass('active');
			});
	})
})

