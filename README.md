<html>
  <head>
    <meta charset="utf-8">
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css">

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  </head>

  <body class="red darken-3 white-text">
    <div class="container">
      
      <h2><img style="width: 20%; margin-right: 20px; vertical-align: middle;" src="https://frame-illust.com/fi/wp-content/uploads/2015/02/6326e377c0b36f5eed473be4f3d7df13.png" alt="">緊急地震速報</h2>
      <h4>岩手県沖で震度7の地震を確認しました。津波や土砂崩れが発生する恐れがありますので直ちに避難してください。</h4>
      <a href="https://www.amazon.co.jp/ミドリ安全-ヘルメット-クリアバイザー-通気孔付-SC11PCLV/dp/B002SOPAOW/ref=sr_1_2_sspa?__mk_ja_JP=カタカナ&crid=PO4XKZLO3RZ4&dchild=1&keywords=安全ヘルメット&qid=1628214162&sprefix=anzenhe%2Caps%2C273&sr=8-2-spons&psc=1" class="btn btn-laege">了解</a>
    </div>
    <div id="alert" class="modal">
      <div class="modal-content black-text">
        <h2>緊急地震速報</h2>
        <p>岩手県沖で震度7の地震が発生しました。直ちに避難してください。</p>
      </div>
      <div class="modal-footer">
        <button id="close" class="btn btn-laege">OK</button>d
      </div>
    </div>
    <!--JavaScript at end of body for optimized loading-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script>
    <script>
      function play_se(){
        // SEとバイブレーションの制御
        var voice = new Audio('jishin.mp3');
        var warning = new Audio('warning.mp3');
        warning.play();
        voice.play();
        navigator.vibrate([300, 200, 300, 200, 300, 200, 300, 200, 300]);
      }

      $(function(){
        // ブラウザバック禁止
        history.pushState(null, null, null);
        $(window).on("popstate", function(e){
          if (!e.originalEvent.state){
            play_se();
            history.pushState(null, null, null);
            return;
          }
        });

        // モーダル初期化
        $('.modal').modal({dismissible: false});
        $('#alert').modal('open');
        $('#close').click(function(){
          $('#alert').modal('close');
          play_se();
        });

        var device = navigator.userAgent.match(/Android|iPhone|iPad/);
        if (device == null){
          device = '端末';
        }
        $('#device').text(device);

        var time = 60;
        setInterval(function(){
          time--;
          $('#timer').text(time);
        }, 1000);
      });
    </script>
  </body>
</html>
