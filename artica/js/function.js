/**
 * Created by Administrator on 2017-07-19.
 */

$(function(){

  //gnb
  $('.btn-menu-toggle').data({'open' : 'false'}).on('click', function(){

    if( $(this).data('open') == 'false' ){

      $('.gnb').css({right : 0});
      $(this).data({'open' : 'true'});

    } else {

      $('.gnb').css({right : -340});
      $(this).data({'open' : 'false'});

    }

  });

  $('.btn-menu-close').on('click', function(){
    $('.gnb').css({right:-340});
    $('.btn-menu-toggle').data({'open' : 'false'});
  });

  $('.gnb-link').on('click', function(e){

    e.preventDefault();

    var href = $(this).attr('href');

    var scrollPosition = $(href).offset().top;

    // scrollTop 을 할때는 window 객체를 사용해야 하지만 animate 함수로 바꾸면 body 또는 'html, body' 로 객체를 바꿔줘야함
    $('body').stop().animate({
      scrollTop : scrollPosition
    });

  });

  //about us - my story
  $('.item-photo-mask').on('click', function(){

    $('.item-story-wrap').css({
      height:0
    });

    $(this).parent().next().css({
      height:279,
      transition:'height 0.3s ease-out'
    });

    $('.section5').css({
      'padding-bottom':279,
      transition:'padding-bottom 0.3s ease-out'
    });

  });

  $('.js-item-story-close').on('click', function(){

    $(this).parents('.item-story-wrap').css({
      height:0,
      transition:'height 0.3s ease-out'
    });

    $('.section5').css({
      'padding-bottom':0,
      transition:'padding-bottom 0.3s ease-out'
    });

  });

  // our skills
  // bar graph
  $('.skill-list').on('click', function(){

    var barAmount = ['p90', 'p80', 'p93', 'p85']; //[ 0, 1, 2, 3 번째 순서임 배열변수]

    $('.skill-list-item>.bar').each(function(index){

      $(this).addClass( barAmount[index] );

    });

  });

  // number count
  $('.career-list-item').on('click', function(){
    var count=0;
    var countTime = setInterval(function(){
      if( count <= 230 ) {
        $('.career-number').eq(0).text(count);
      }
      if( count <= 22 ) {
        $('.career-number').eq(1).text(count);
      }
      if( count <= 2380 ) {
        $('.career-number').eq(2).text(count);
      }
      if( count <= 50890 ) {
        $('.career-number').eq(3).text(count);
      }
      if( count > 50890 ){
        clearInterval(countTime);
      }
      count++;
    }, 10);

  });

  // inview
  $('.section5').on('inview', function(visible){

    console.log(visible);

  });
});