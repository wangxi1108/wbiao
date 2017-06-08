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