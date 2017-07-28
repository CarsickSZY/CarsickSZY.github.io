$(document).ready(function(){
  //鼠标滑过最顶部导航，字体颜色改变。
  $(".header-a").mouseover(function(){
    $(this).css("color","#FFFFFF");
  });
  $(".header-a").mouseout(function(){
    $(this).css("color","#B0B0B0");
  });
  // 鼠标滑过购物车，颜色发生改变。
  $(".shoppingCar").mouseover(function(){
    $(".gouwuche").css("color","#FF6700");
    $(".shoppingCar").css("background-color","#FFFFFF");
    // $(".gouwuche").addClass(".car1");  不管用！  因为这是给.gouwuche这一元素添加一个car1类。
    //更改购物车的图片
    // $(".car").remove();   这种方法也可以实现换图片。但下面的会更好
    // $(".car1").show();
    $(".car").attr("src","images/car1.jpg");
    $(".xuangou").show();
  });
  $(".shoppingCar").mouseout(function(){
    $(".gouwuche").css("color","#B0B0B0");
    $(".shoppingCar").css("background-color","#424242");
    $(".car").attr("src","images/car.jpg");
    $(".xuangou").hide();
  });
  //鼠标滑动到搜索图片,改变背景颜色和背景图片。
  $(".submit").mouseover(function(){
    $(this).css({"background-color":"#FF6700",
                "background-image":"url(images/search1.png)",
                });
  });
  $(".submit").mouseout(function(){
    $(this).css({"background-color":"#FFFFFF",
                "background-image":"url(images/search.png)"});
  });
  //鼠标移动到form改变border颜色。
  $("form").mouseover(function(){
    $(this).css("border","1px solid #B0B0B0");
    $(".submit").css("border-left","1px solid #B0B0B0");
  });
  $("form").mouseleave(function(){
    $(this).css("border","1px solid #E0E0E0");
    $(".submit").css("border-left","1px solid #E0E0E0");
  });

  //鼠标滑动出现手机图片
  /*
  这种做法，鼠标从小米手机滑到红米手机的时候，会有动画之后才变图片，所以选择了下面的show()方法。
  $("#xiaomiphone").mouseenter(function(){
    $(this).css("color","#FF6700");
    $(".xiaomiphoto").slideDown(400);
  });
  $("#xiaomiphone").mouseleave(function(){
    $(this).css("color","#333333");
    $(".xiaomiphoto").slideUp(400);
  });

  $("#hongmiphone").mouseenter(function(){
    $(this).css("color","#FF6700");
    $(".hongmiphoto").slideDown(400);
  });
  $("#hongmiphone").mouseleave(function(){
    $(this).css("color","#333333");
    $(".hongmiphoto").slideUp(400);
  });
  */
  $("#xiaomispan").mouseover(function(){
    $("#xiaomispan").css("color","#FF6700");
  });
  $("#xiaomispan").mouseout(function(){
    $("#xiaomispan").css("color","#333333");
  });

  $("#xiaomiphone").mouseenter(function(){
    $(".xiaomiphoto").show();
  });
  $("#xiaomiphone").mouseleave(function(){
    $(".xiaomiphoto").hide();
  });

  $("#hongmispan").mouseover(function(){
    $("#hongmispan").css("color","#FF6700");
  });
  $("#hongmispan").mouseout(function(){
    $("#hongmispan").css("color","#333333");
  });
  $("#hongmiphone").mouseenter(function(){
    $(".hongmiphoto").show();
  });
  $("#hongmiphone").mouseleave(function(){
    $(".hongmiphoto").hide();
  });

  //鼠标滑到侧边导航,导航上的<Li>背景颜色改变
  $(".slide-li").mouseover(function(){
    $(this).css("background-color","#FF6700");
  });
  $(".slide-li").mouseout(function(){
    $(this).css("background-color","#5F5F5F");
  });
  //鼠标滑到侧边导航，显示手机图片(".shoujidianhuaka")等。
  $("#li-shouji").mouseover(function(){
    $(".shoujidianhuaka").show();
  });
  $("#li-shouji").mouseout(function(){
    $(".shoujidianhuaka").hide();
  });
  //鼠标滑到“<span>”小米NOTE 2等字时改变颜色。
  $(".shoujidianhuaka span").mouseover(function(){
    $(this).css("color","#FF6700");
  });
  $(".shoujidianhuaka span").mouseout(function(){
    $(this).css("color","#333333");
  });
  //鼠标滑到“<input>” “选购”时改变背景颜色和字体颜色。
  $(".shoujidianhuaka input").mouseover(function(){
    $(this).css({"color":"#FFFFFF","background-color":"#FF6700"});
  });
  $(".shoujidianhuaka input").mouseout(function(){
    $(this).css({"color":"#FF6700","background-color":"#FFFFFF"});
  });


  //轮播图片
  jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:true});

  //侧边导航下面的 六个小导航
  $(".small-li1").mouseover(function(){
    $(this).find("img").attr("src","images/small-1f.jpg");
    $(this).find("span").css("color","#FFFFFF");
  });
  $(".small-li1").mouseout(function(){
    $(this).find("img").attr("src","images/small-1.jpg");
    $(this).find("span").css("color","#CFCDCB");
  });
  $(".small-li2").mouseover(function(){
    $(this).find("img").attr("src","images/small-2f.jpg");
    $(this).find("span").css("color","#FFFFFF");
  });
  $(".small-li2").mouseout(function(){
    $(this).find("img").attr("src","images/small-2.jpg");
    $(this).find("span").css("color","#CFCDCB");
  });
  $(".small-li3").mouseover(function(){
    $(this).find("img").attr("src","images/small-3f.jpg");
    $(this).find("span").css("color","#FFFFFF");
  });
  $(".small-li3").mouseout(function(){
    $(this).find("img").attr("src","images/small-3.jpg");
    $(this).find("span").css("color","#CFCDCB");
  });
  $(".small-li4").mouseover(function(){
    $(this).find("img").attr("src","images/small-4f.jpg");
    $(this).find("span").css("color","#FFFFFF");
  });
  $(".small-li4").mouseout(function(){
    $(this).find("img").attr("src","images/small-4.jpg");
    $(this).find("span").css("color","#CFCDCB");
  });
  $(".small-li5").mouseover(function(){
    $(this).find("img").attr("src","images/small-5f.jpg");
    $(this).find("span").css("color","#FFFFFF");
  });
  $(".small-li5").mouseout(function(){
    $(this).find("img").attr("src","images/small-5.jpg");
    $(this).find("span").css("color","#CFCDCB");
  });
  $(".small-li6").mouseover(function(){
    $(this).find("img").attr("src","images/small-6f.jpg");
    $(this).find("span").css("color","#FFFFFF");
  });
  $(".small-li6").mouseout(function(){
    $(this).find("img").attr("src","images/small-6.jpg");
    $(this).find("span").css("color","#CFCDCB");
  });
  //六个导航颜色变化结束

  //鼠标滑过六个小导航右边的三个图片时的动画。
  $(".nav-small-div").mouseover(function(){
    $(this).css("box-shadow","0px 4px 25px #DDD");
  });
  $(".nav-small-div").mouseout(function(){
    $(this).css("box-shadow","0 0 0 #FFFFFF");
  });
})
