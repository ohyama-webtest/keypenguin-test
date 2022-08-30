$(function () {

  // ハンバーガーメニュー
  $('#hamburger-open').click(function () {
    $('.header-sp').fadeIn();
    $('.header-sp').css('display', 'flex');
    $('.header-sp-items').css('display', 'block');
    $('.header-sp-contact').css('display', 'block');
  });
  $('#hamburger-close').click(function () {
    $('.header-sp').fadeOut();
    // $('.header-sp').css('display', 'none');
    $('.header-sp-items').css('display', 'none');
    $('.header-sp-contact').css('display', 'none');
  });
  // ハンバーガーメニュー


  // eachTextAnimeにappeartextというクラス名を付ける定義
  function EachTextAnimeControl() {
    $('.eachTextAnime').each(function () {
      var elemPos = $(this).offset().top - 50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("appeartext");

      } else {
        $(this).removeClass("appeartext");
      }
    });
  }

  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

  // 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function () {
    //spanタグを追加する
    var element = $(".eachTextAnime");
    element.each(function () {
      var text = $(this).text();
      var textbox = "";
      text.split('').forEach(function (t, i) {
        if (t !== " ") {
          if (i < 1) {
            textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
          } else {
            var n = i / 15;
            textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
          }

        } else {
          textbox += t;
        }
      });
      $(this).html(textbox);
    });

    EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


  function slideAnime() {
    //====左に動くアニメーションここから===
    $('.leftAnime').each(function () {
      var elemPos = $(this).offset().top - 50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        //左から右へ表示するクラスを付与
        //テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
        $(this).addClass("slideAnimeLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
        $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
      } else {
        //左から右へ表示するクラスを取り除く
        $(this).removeClass("slideAnimeLeftRight");
        $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");

      }
    });

  }

  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    slideAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

  function slideAnimeNow() {
    //====左に動くアニメーションここから===
    $('.leftAnime-now').each(function () {
      var elemPos = $(this).offset().top - 50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        //左から右へ表示するクラスを付与
        //テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
        $(this).addClass("slideAnimeLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
        $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
      } else {
        //左から右へ表示するクラスを取り除く
        $(this).removeClass("slideAnimeLeftRight");
        $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
      }
    });
  }
  // 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function () {
    slideAnimeNow();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


  // フワッと浮き上がるやつ
  function fadeAnime() {
    // ふわっ
    $('.fadeUpTrigger').each(function () { //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top - 50;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
      } else {
        $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
      }
    });
  }

  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

});