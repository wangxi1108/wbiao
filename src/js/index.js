


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
		timer = setInterval(move,3000)//三秒换一张图片

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
