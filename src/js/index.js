
$(function () {
	// 加载头部底部
			$("#header").load("include/index-header.html");
			$("#footer").load("include/index-footer.html");
	// 渲染模板
			$.getJSON('../data/floor.json',function(responseData) {
				var data = {
					list : responseData
				};
				var html1 = template("art_showpic",data);
				$(".floor_showpic").append(html1);
				var html2 = template("art_style_1",data);
				$(".floor_style_1").append(html2);
				var html3 = template("art_style_2",data);
				$(".floor_style_2").append(html3);
				var html4 = template("art_style_3",data);
				$(".floor_style_3").append(html4);
				var html5 = template("art_style_4",data);
				$(".floor_style_4").append(html5);
				var html6 = template("art_style_5",data);
				$(".floor_style_5").append(html6);
			});

	})

// 头部广告活动区轮播
	$(function () {
		var $imgs = $(".activity_link"),
			len = $imgs.length,
			currentIndex = 0,
			nextIndex = currentIndex + 1,
			timer = null;
		timer = setInterval(move,3000);
		function move() {
			$imgs.eq(currentIndex).fadeOut(1500).end()
				 .eq(nextIndex).fadeIn(1500);
			currentIndex = nextIndex;
			nextIndex++;
			if (nextIndex >=len) {
				nextIndex = 0;
			}
		}
	});
// 头部广告活动区关闭
	$(function () {
		$("#closer").click(function() {
			$("#header .header_activity").hide();
		});
	})
// 头部手机万表二维码切换
	$(function () {
		$(".tab_change li").mouseenter(function(event) {
			$(this).addClass('tab_in').siblings().removeClass('tab_in');
		});
		$(".tab_change li").eq(1).mouseenter(function(event) {
			$('.img-box').hide();
			$('.img-box2').show();
		});
		$(".tab_change li").eq(1).mouseleave(function(event) {
			$('.img-box').show();
			$('.img-box2').hide();
		});

	})
// 头部搜索框点击字消失,输入字出现搜索按钮
	$(function () {
		$("#search").click(function(event) {
			$(this).prop({
				placeholder: '',
			})
		});
		$("#search").blur(function(event) {
			$(this).prop({
				placeholder: '搜索 品牌/系列/型号'
			})
		});
		var $valength=$("#search").val();
		$("#search").change(function(event) {
			var $val=$("#search").val();
			($val==="") ? $("#searchbtn").hide()
					    : $("#searchbtn").show()
		})
	});
// 底部更多友情链接
	$(function () {
		var	$more=$(".friends-links .more");
		$more.click(function(event) {			
		height_=$('.friends-links').css("height");
			if(height_==="20px"){
				$('.friends-links').css("height","100px")
			}else{
					$('.friends-links').css("height","20px")
				}
		});
	});
	$(function(){
		var $more=$(".footer_nav .more");
		$more.click(function(){
			sty=$(".footer_nav .addmore").css("display");
			console.log(sty)
			if (sty==="none") {
				$(".footer_nav .addmore").css("display","block");
			}else{
				$(".footer_nav .addmore").css("display","none");
			}
		})
	})
//底部二维码切换
	$(function(){
		$(".tab_code li").mouseenter(function(){
			$(this).addClass('code_in').siblings().removeClass('code_in')
		})
		$(".tab_code li").eq(0).mouseenter(function(){
			$(".code_con").eq(0).show().siblings().hide()
		})
		$(".tab_code li").eq(1).mouseenter(function(){
			$(".code_con2").eq(0).show().siblings().hide()
		})
		$(".tab_code li").eq(2).mouseenter(function(){
			$(".code_con").eq(2).show().siblings().hide()
		})
		$(".tab_code li").eq(3).mouseenter(function(){
			$(".code_con2").eq(1).show().siblings().hide()
		})
	})
// 导航选表中心下拉菜单
	$(function () {
		$(".xbzxxl").hover(function() {
			$(".xuanbiaozhongxin").css('display', 'block');

		}, function() {
			$(".xuanbiaozhongxin").css('display', 'none');
			$(".xuanbiaozhongxin").hover(function() {
				$(".xuanbiaozhongxin").css('display', 'block');
			}, function() {
				$(".xuanbiaozhongxin").css('display', 'none');
			});
		});
	})
// 导航品牌区tab切换
	$(function () {
		$(".check").hover(function() {
			$(this).children('.bside').css('display', 'block');
			$("#cttouch").css('display', 'block');
		}, function() {
			$(this).children('.bside').css('display', 'none');
			$("#cttouch").css('display', 'none');
		});
	})
// bside区hover变色
	$(function () {
		$(".col p").hover(function() {
			$(this).css('color', '#000');
		}, function() {
			$(this).css('color', '#999');
		});
		$(".list_txt_link a").hover(function() {
			$(this).css({
				color: '#000',
				textDecoration: 'underline'
			});
		}, function() {
			$(this).css({
				color: '#666',
				textDecoration: 'none'
			});
		});
	})
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
