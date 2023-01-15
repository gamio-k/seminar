function scrollToTop() {
    scrollTo({
        top:0, //TOPまで戻る
        behavior:"smooth"//スムースで戻る
    });
}


$(function(){
   let upbtn = $('.upbtn');   
   upbtn.hide();
   $(window).scroll(function () {
       if ($(this).scrollTop() > 250) {  //250pxスクロールしたら表示
           upbtn.fadeIn();
       } else {
           upbtn.fadeOut();
       }
   });
   });

// ページ内リンク　スクロール
$('#page-link a[href*="#"]').click(function () {
    var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
    var pos = $(elmHash).offset().top;  //idの上部の距離を取得
    $('body,html').animate({scrollTop: pos}, 800); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
    return false;
  });

