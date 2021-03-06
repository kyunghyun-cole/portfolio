$(document).ready(function() {
  $('#fullpage').fullpage( {
    css3: true
  });
});

//  게시판
$('.tab_tit > li').eq(0).click(function() {
  $(this).css({
    "background-color": "#333b45",
    "color": "#fff"
  });
  $(this).siblings().css({
    "background-color": "#fff",
    "color": "#141414"
  });
  $(this).children().addClass('active1');
  $(this).siblings().children().removeClass('active1');
});

$('.tab_tit > li').eq(1).click(function() {
  $(this).css({
    "background-color": "#333b45",
    "color": "#fff"
  });
  $(this).siblings().css({
    "background-color": "#fff",
    "color": "#141414"
  });
  $(this).children().addClass('active1');
  $(this).siblings().children().removeClass('active1');
});

$('.tab_tit > li').eq(2).click(function() {
  $(this).css({
    "background-color": "#333b45",
    "color": "#fff"
  });
  $(this).siblings().css({
    "background-color": "#fff",
    "color": "#141414"
  });
  $(this).children().addClass('active1');
  $(this).siblings().children().removeClass('active1');
});

$('.tab_tit > li').eq(3).click(function() {
  $(this).css({
    "background-color": "#333b45",
    "color": "#fff"
  });
  $(this).siblings().css({
    "background-color": "#fff",
    "color": "#141414"
  });
  $(this).children().addClass('active1');
  $(this).siblings().children().removeClass('active1');
});


// 팝업존 자동슬라이드


function moveSlider(index) {
  var willMoveLeft = -(index * 404);
  $('.popup_img_wrap').animate({
    left: willMoveLeft
  }, 'slow');
  $('.control_btn[data-index=' + index + ']').addClass('active2');
  $('.control_btn[data-index!=' + index + ']').removeClass('active2');
}


$('.control_btn').each(function(index) {
  $(this).attr('data-index', index);
}).click(function() {
  var index = $(this).attr('data-index');
  moveSlider(index);
});
