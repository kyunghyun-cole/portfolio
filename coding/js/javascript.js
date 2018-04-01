// nav mouseover 효과
$('.menu_place').mouseover(function(){
  $('.submenu_place').css('display','block');
  $('.submenu_bg').css('display','block');
})

$('.menu_place').mouseleave(function(){
  $('.submenu_place').css('display','none');
  $('.submenu_bg').css('display','none');
})

$('.menu_product').mouseover(function(){
  $('.submenu_product').css('display','block');
  $('.submenu_bg').css('display','block');
})

$('.menu_product').mouseleave(function(){
  $('.submenu_product').css('display','none');
  $('.submenu_bg').css('display','none');
})

$('.menu_idea').mouseover(function(){
  $('.submenu_idea').css('display','block');
  $('.submenu_bg').css('display','block');
})

$('.menu_idea').mouseleave(function(){
  $('.submenu_idea').css('display','none');
  $('.submenu_bg').css('display','none');
})

$('.menu_event').mouseover(function(){
  $('.submenu_event').css('display','block');
  $('.submenu_bg').css('display','block');
})

$('.menu_event').mouseleave(function(){
  $('.submenu_event').css('display','none');
  $('.submenu_bg').css('display','none');
})

$('.menu_story').mouseover(function(){
  $('.submenu_story').css('display','block');
  $('.submenu_bg').css('display','block');
})

$('.menu_story').mouseleave(function(){
  $('.submenu_story').css('display','none');
  $('.submenu_bg').css('display','none');
})


// 배너 자동 슬라이드
var count= 0;
var auto_slide;

function start_slide () {
  auto_slide  = setInterval(function(){
    $('.banner_inner_img').css('opacity','0');
    $('.banner_inner_img').eq(count).css('opacity','100');

    if(count === 2) {
      count = 0;
    } else {
      count++;
    }
  },3000)
}

start_slide();

// 배너 버튼 작동
$('.banner_btn li').eq(0).click(function(){
  clearInterval(auto_slide);
  count = 0;
  $('.banner_inner_img').css('opacity','0');
  $('.banner_inner_img').eq(count).css('opacity','100');
  count ++;
  start_slide();
})

$('.banner_btn li').eq(1).click(function(){
  clearInterval(auto_slide);
  count = 1;
  $('.banner_inner_img').css('opacity','0');
  $('.banner_inner_img').eq(count).css('opacity','100');
  count ++;
  start_slide();
})

$('.banner_btn li').eq(2).click(function(){
  clearInterval(auto_slide);
  count = 2;
  $('.banner_inner_img').css('opacity','0');
  $('.banner_inner_img').eq(count).css('opacity','100');
  start_slide();
})


// 배너 버튼 로딩?
/*
 var i = 0
function banner_loading (){
    while (i < 3 ) {
      if(i == 0 && count == 0) {
        $('.banner_btn_loading').css('width','313px');
        i++;
      } else if(i == 1 && count== 1) {
        $('.banner_btn_loading').css('width','313px');
        i++;
      } else if (i == 2 && count== 2){
        $('.banner_btn_loading').css('width','313px');
        i=0;
      };
      $('.banner_btn_loading').css('width','50px')
    };
  };
  banner_loading();
  */
