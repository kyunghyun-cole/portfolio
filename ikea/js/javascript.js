// nav mouseover 효과
$('.menu_place').mouseover(function(){
  $('.submenu_place').stop().slideDown();
  $('.submenu_bg').stop().slideDown();
})

$('.menu_place').mouseleave(function(){
  $('.submenu_place').stop().slideUp('fast');
  $('.submenu_bg').stop().slideUp();
})

$('.menu_product').mouseover(function(){
  $('.submenu_product').stop().slideDown();
  $('.submenu_bg').stop().slideDown();
})

$('.menu_product').mouseleave(function(){
  $('.submenu_product').stop().slideUp('fast');
  $('.submenu_bg').stop().slideUp();
})

$('.menu_idea').mouseover(function(){
  $('.submenu_idea').stop().slideDown();
  $('.submenu_bg').stop().slideDown();
})

$('.menu_idea').mouseleave(function(){
  $('.submenu_idea').stop().slideUp('fast');
  $('.submenu_bg').stop().slideUp();
})

$('.menu_event').mouseover(function(){
  $('.submenu_event').stop().slideDown();
  $('.submenu_bg').stop().slideDown();
})

$('.menu_event').mouseleave(function(){
  $('.submenu_event').stop().slideUp('fast');
  $('.submenu_bg').stop().slideUp();
})

$('.menu_story').mouseover(function(){
  $('.submenu_story').stop().slideDown();
  $('.submenu_bg').stop().slideDown();
})

$('.menu_story').mouseleave(function(){
  $('.submenu_story').stop().slideUp('fast');
  $('.submenu_bg').stop().slideUp();
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
  },5000)
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


// 배너 로딩 버튼
var btn_count = 0
var auto_btn_slide

function btn_slide () {
  auto_btn_slide = setInterval(function(){
    $('.btn_loading').eq(btn_count).siblings().css('display','none');
    $('.btn_loading').eq(btn_count).css('display','block');
    $('.btn_loading').eq(btn_count).siblings().css('width','50px');
    $('.btn_loading').eq(btn_count).css('width','318px');

    if(btn_count === 2) {
      btn_count = 0;
    } else {
      btn_count++;
    }
  },5000)
}

  btn_slide();

$('.banner_btn_content li').eq(0).click(function(){
  clearInterval(auto_btn_slide);
  btn_count = 0;
  $('.btn_loading').eq(btn_count).css('display','block');
  $('.btn_loading').eq(btn_count).siblings().css('display','none');
  $('.btn_loading').eq(btn_count).siblings().css('width','50px');
  $('.btn_loading').eq(btn_count).css('width','318px');
  btn_count++;
  btn_slide();
})

$('.banner_btn_content li').eq(1).click(function(){
  clearInterval(auto_btn_slide);
  btn_count = 1;
  $('.btn_loading').eq(btn_count).siblings().css('width','50px');
  $('.btn_loading').eq(btn_count).css('display','block');
  $('.btn_loading').eq(btn_count).siblings().css('display','none');
  $('.btn_loading').eq(btn_count).css('width','318px');
  btn_count++;
  btn_slide();
})

$('.banner_btn_content li').eq(2).click(function(){
  clearInterval(auto_btn_slide);
  btn_count = 2;
  $('.btn_loading').eq(btn_count).siblings().css('width','50px');
  $('.btn_loading').eq(btn_count).css('display','block');
  $('.btn_loading').eq(btn_count).siblings().css('display','none');
  $('.btn_loading').eq(btn_count).css('width','318px');
  btn_slide();
})
