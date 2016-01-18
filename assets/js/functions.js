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

  // function articleView(){
  //   var randNum = Math.floor(Math.random() * $('.preview-box').length + 1)
  //
  //   $('.preview-box').eq(randNum).removeClass('text-hidden')
  //     .siblings().addClass('text-hidden');
    //}
