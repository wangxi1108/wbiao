$(function(){function n(){e.eq(o).fadeOut(1500).end().eq(c).fadeIn(1500),o=c,++c>=i&&(c=0)}var e=$(".activity_link"),i=e.length,o=0,c=o+1;setInterval(n,3e3)}),$(function(){$("#closer").click(function(){$("#header .header_activity").hide()})}),$(function(){$(".tab_change li").mouseenter(function(n){$(this).addClass("tab_in").siblings().removeClass("tab_in")}),$(".tab_change li").eq(1).mouseenter(function(n){$(".img-box").hide(),$(".img-box2").show()}),$(".tab_change li").eq(1).mouseleave(function(n){$(".img-box").show(),$(".img-box2").hide()})}),$(function(){$("#search").click(function(n){$(this).prop({placeholder:""})}),$("#search").blur(function(n){$(this).prop({placeholder:"搜索 品牌/系列/型号"})});$("#search").val();$("#search").change(function(n){""===$("#search").val()?$("#searchbtn").hide():$("#searchbtn").show()})}),$(function(){$(".friends-links .more").click(function(n){height_=$(".friends-links").css("height"),"20px"===height_?$(".friends-links").css("height","100px"):$(".friends-links").css("height","20px")})}),$(function(){$(".footer_nav .more").click(function(){sty=$(".footer_nav .addmore").css("display"),console.log(sty),"none"===sty?$(".footer_nav .addmore").css("display","block"):$(".footer_nav .addmore").css("display","none")})}),$(function(){$(".tab_code li").mouseenter(function(){$(this).addClass("code_in").siblings().removeClass("code_in")}),$(".tab_code li").eq(0).mouseenter(function(){$(".code_con").eq(0).show().siblings().hide()}),$(".tab_code li").eq(1).mouseenter(function(){$(".code_con2").eq(0).show().siblings().hide()}),$(".tab_code li").eq(2).mouseenter(function(){$(".code_con").eq(2).show().siblings().hide()}),$(".tab_code li").eq(3).mouseenter(function(){$(".code_con2").eq(1).show().siblings().hide()})}),$(function(){$(".xbzxxl").hover(function(){$(".xuanbiaozhongxin").css("display","block")},function(){$(".xuanbiaozhongxin").css("display","none"),$(".xuanbiaozhongxin").hover(function(){$(".xuanbiaozhongxin").css("display","block")},function(){$(".xuanbiaozhongxin").css("display","none")})})}),$(function(){$(".check").hover(function(){$(this).children(".bside").css("display","block"),$("#cttouch").css("display","block")},function(){$(this).children(".bside").css("display","none"),$("#cttouch").css("display","none")})}),$(function(){$(".col p").hover(function(){$(this).css("color","#000")},function(){$(this).css("color","#999")}),$(".list_txt_link a").hover(function(){$(this).css({color:"#000",textDecoration:"underline"})},function(){$(this).css({color:"#666",textDecoration:"none"})})}),$(function(){function n(){e.eq(o).fadeOut().end().eq(c).fadeIn(),$(".circle").eq(o).removeClass("current").end().eq(c).addClass("current"),o=c,++c>=i&&(c=0)}var e=$(".main_banner li"),i=e.length,o=0,c=1,s="",t=null;t=setInterval(n,3e3);for(var a=0;a<i;a++)s+="<div></div>";$(s).appendTo("#pages").addClass("circle").eq(0).addClass("current");var l=$(".circle").eq(0).outerWidth()+10;$("#pages").css({width:i*l+40+"px"}),$("#pages").on("mouseover",".circle",function(){o!==$(this).index()&&(c=$(this).index(),n())}),$(".main_banner").hover(function(){clearInterval(t),$("#prev").show(),$("#next").show()},function(){t=setInterval(n,8e3),$("#prev").hide(),$("#next").hide()}),$("#prev").click(function(){(c=o-1)<0&&(c=i-1),n()}),$("#next").click(n)});