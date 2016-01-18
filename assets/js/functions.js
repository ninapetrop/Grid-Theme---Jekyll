$(function(){
  articleView();
});


  function articleView(){
    $('.preview-box').mouseover(function(){
      $(this).removeClass('text-hidden').addClass('text-show');
    });
    $('.preview-box').mouseout(function(){
      $(this).addClass('text-hidden').removeClass('text-show');
    });
  }
