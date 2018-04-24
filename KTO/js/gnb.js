
  $('.gnb ul > li').mouseover(function(){
    $('.submenu').stop().slideDown();
    $('.gnb_bg').stop().slideDown(100);
  });

  $('.gnb ul > li').mouseleave(function(){
    $('.submenu').stop().slideUp(100);
    $('.gnb_bg').stop().slideUp();
  });




// 관련사이트
$('.site').click(function() {
  $('.site_submenu').toggle();
})
