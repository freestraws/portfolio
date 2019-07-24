$(function() {
  var right = 90;
  var left = -90;
  var top = 0;
  var bottom = 180;
  var center = 20;
  var setDirection = 0;
  switch($(".current").attr('id')){
    case 'left': setDirection = left; break;
    case 'right': setDirection = right; break;
    case 'top': setDirection = top; break;
    case 'bottom': setDirection = bottom; break;
    case 'center': setDirection = center; break;
    default: setDirection = 0; break;
  }
  document.styleSheets[1].addRule('nav:before','transform: rotate('+setDirection+'deg);');
  $('.center').text($('.current a .hover').text());

  $('#right').hover(function(){
    document.styleSheets[1].addRule('nav:before','transform: rotate('+right+'deg);');
    $('.center').text($('#right a .hover').text());
  });
  $('#left').hover(function(){
    document.styleSheets[1].addRule('nav:before','transform: rotate('+left+'deg);');
    $('.center').text($('#left a .hover').text());
  });
  $('#top').hover(function(){
    document.styleSheets[1].addRule('nav:before','transform: rotate('+top+'deg);');
    $('.center').text($('#top a .hover').text());
  });
  $('#bottom').hover(function(){
    document.styleSheets[1].addRule('nav:before','transform: rotate('+bottom+'deg);');
    $('.center').text($('#bottom a .hover').text());
  });

  $('#center').hover(function(){
    document.styleSheets[1].addRule('nav:before','transform: rotate('+center+'deg);');
    $('.center').text($('#center a .hover').text());
  });

  $('nav').mouseleave(function(){
    document.styleSheets[1].addRule('nav:before','transform: rotate('+setDirection+'deg);');
    $('.center').text($('.current a .hover').text());
  });

});
