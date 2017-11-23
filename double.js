(function (global) {
  var SL = {};
  SL = {
    init: function () {
      this.lightbox();
      this.mcssone();
      this.mcsstwo();
      this.mcssthree();
      this.mcssfour();
      this.mobile();
      this.banner();
      
    }, //init 
    
    lightbox: function() {
      console.info('%c lightbox \u221a', 'background:blue;color:white;');
      var popup = document.getElementById('monetate_lightbox');
      //removes popup
      if(popup != null) {
        popup.parentElement.removeChild(popup);
      }
        
    },//lightbox

    mcssone: function () {
      console.info('%c cssone \u221a', 'background:blue;color:white;');
      var mainone = ' table,tr,td{margin:0 !important; padding:0 !important; border:0 !important; border-collapse:collapse !important;} #doubleodds { margin:0; padding:0;} .doubleodds_desktop { margin:0;padding:0; } .main {max-width:1140px; border:1px solid firebrick;margin:0 auto;box-shadow:0 0 1px 0 black;border-radius:4px} .imgres {width:100%; height:auto; } span.one:before {content:"1";font-size:22px; display:inline-block; margin-right:10px; margin-left:-10px; vertical-align:bottom; } span.two:before {content:"2";font-size:22px; display:inline-block; margin-right:10px; margin-left:-10px; } span.three:before {content:"3"; font-size:22px; display:inline-block; margin-right:10px; margin-left:-10px; } @media only screen and (min-width:992px) and (max-width:1500px){span.three {margin-left:-110px !important; } #doubleodds {width:940px !important; margin: 0 auto;}   table.main {width:940px!important; } table.inner {width:940px!important;} .heading h2 { font-size:19px!important; max-width:330px !important; } .heading h1 {font-size:48px!important; max-width:475px!important;padding:5px 0 5px!important; } .heading h3 {font-size:19px!important; max-width:460px!important; margin-top:-16px!important } .heading img.hero {margin-left:1em !important;} .terms .gaware {margin-right:3em !important; } span.two {margin-left:-75px; } img.divider { max-width:20px!important} .dbot tr td{ padding-left:15px!important; } td.pone p, td.ptwo p, td.pthree p { font-size:18px!important; } td.pone {max-width:108px!important} td.pone p { width:132px!important; margin-left:22px!important; }t d.ptwo {max-width:135px!important} td.ptwo p { width:175px!important; } td.pthree {max-width:185px!important} td.pthree p:nth-child(1){ width:150px!important; height:auto!important; margin-right:16px!important;margin-left:-10px!important;} td.pthree p:nth-child(2){width:130px!important; } td.pthree p:nth-child(2)> a { height:59px!important} td.pthree img.button { max-width:220px!important; } .brak { display:none!important;}} @media screen and (max-width:991px){ #doubleodds {width:730px !important; } table.main { width:730px!important;} table.inner { width:730px!important} .heading h2 { font-size:14px!important; max-width:250px!important;  margin:0!important}.heading h1 { font-size:32px!important; max-width:300px!important; padding:0!important; line-height:60px!important } .heading h3 { font-size:15px!important; max-width:300px!important; margin-top:-5px!important; letter-spacing:0!important;line-height:20px!important } td img.hero { max-width:315px!important; margin-left:3em!important; display:inline-block!important;} table.terms{width:100% !important; display:inline-table !important;} .terms .gaware{margin-right:3em!important} .terms .trms{  margin-top:0px!important;  } .trms a {font-size:12px !important; } img.arrow{ max-width:36px!important;line-height:90px!important}img.divider{max-width:15px!important}.dbot tr td {padding-left:7px!important; } td.pone p,td.ptwo p,td.pthree p {font-size:10px!important; } td.pone, td.ptwo, td.pthree {height:90px!important;} td.pone{ max-width:100px!important; } td.pone p { width:95px!important; margin-left:14px!important; line-height:90px!important; } td.ptwo { max-width:100px!important; margin-left:0!important;} td.ptwo p { width:150px!important; height:50px!important;} td span.one { margin-left:-20px; }  td span.two {margin-left:-36px!important; } td span.three { margin-left:-20px!important;} td.pthree{ max-width:200px!important; } td.pthree p:nth-child(2){width:70px!important; height:auto!important; margin-right:12px!important; margin-left:-2px!important; } td.pthree p:nth-child(3){ width:142px!important; height:40px!important; } td.pthree p:nth-child(3) > a { height:40px!important;} td.pthree img.button { max-width:142px!important; max-height:40px!important; } .brak {display:none!important; }}   ';

      var head = document.getElementsByTagName('head')[0];

      function addcss(css) {
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        s.appendChild(document.createTextNode(css));
        head.appendChild(s);
      }
      addcss(mainone);

    }, //maincss 

    mcsstwo: function () {
      console.info('%c csstwo \u221a', 'background:blue;color:white;');
      var maintwo = '@font-face {font-family:FuturaPT;src:url(Themes/Grosvenor/content/fonts/FuturaPT-Book.woff2);} @font-face {font-family:FuturaPT;src:url(/Themes/Grosvenor/content/fonts/FuturaPT-Heavy.woff2);font-weight:bold;} * {font-family:"FuturaPT",sans-serif;} #doubleodds {font-family:"FuturaPT",sans-serif; padding:0; margin:0; margin:0 auto; width:1140px; }    ';

      var head = document.getElementsByTagName('head')[0];
      function addcss(css) {
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        s.appendChild(document.createTextNode(css));
        head.appendChild(s);
      }
      addcss(maintwo);

    }, //maincss 
    
    mcssthree: function () {
      console.info('%c csstwo \u221a', 'background:blue;color:white;');
      var mainthree = ' #monetate_lightbox {display:none !important; } table tr {background-color:#fff; } .after-header-full.col-xs-12.col-z-12 {margin-bottom:1px !important; }   .trms {margin-top: -7px !important; }  .trms a {font-size:14px; line-height:36px; vertical-align: top; } td.pone p {margin-left:12px; } ';

      var head = document.getElementsByTagName('head')[0];
      function addcss(css) {
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        s.appendChild(document.createTextNode(css));
        head.appendChild(s);
      }
      addcss(mainthree);

    }, //maincss 
    
    mcssfour: function () {
      console.info('%c cssfour \u221a', 'background:blue;color:white;');
      var mainfour = '@media only screen and (max-width:1500px) and (min-width:992px) { td.pone p {color:#333;} td.ptwo p {color:#333;} td.pthree p {color:#333;} span.three {color:#333;} span.two {color:#333;} }  @media screen and (max-width:991px){ td.pone p {color:#333;} td.ptwo p {color:#333;} td.pthree p {color:#333;} span.three {color:#333;} span.two {color:#333;}  } ';

      var head = document.getElementsByTagName('head')[0];
      function addcss(css) {
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        s.appendChild(document.createTextNode(css));
        head.appendChild(s);
      }
      addcss(mainfour);

    }, //maincss 
    
    mobile: function() {
      console.info('%c mobile \u221a', 'background:blue;color:white;');
      var mainmobile = '@media only screen and (max-device-width:1024px) and (min-device-width:1024px) { span.two {margin-left:-10px !important;} span.three {margin-left:-77px !important; } .heading img.hero {margin-left:0 !important;} .heading h3 {font-size:18px !important; }  }   @media only screen and (max-device-width:768px) and (min-device-width:768px) { td.pone p {margin-left:49px !important;} td span.two {margin-left:-25px !important;} td.ptwo p {width:155px !important; padding-right:0px !important;} td span.three {margin-left:-5px !important; } .heading img.hero {margin-left:4.5em !important;} .heading h3 {font-size:14px !important; max-width:290px !important; } td.pthree p:nth-child(2) {margin-right:22px !important;} .terms .gaware {margin-right:2.1em !important;}}  @media only screen and (max-device-width:414px) and (min-device-width:414px) { #doubleodds {width:414px !important;} table.main {width:414px !important;} table.inner {width:414px !important;} .heading h2 {font-size:10px !important; max-width:180px !important;} .heading h1 {font-size:20px !important; max-width:190px !important; line-height:24px !important; } .heading h3 {margin-top:0px !important; font-size:10px !important; line-height:16px !important; max-width:200px !important;} td img.hero {margin-left:0px !important; margin-right:3em; margin-top:5px; max-width:210px !important;}  img.arrow {max-width:24px !important; line-height:50px !important; } .terms .gaware {margin-right: 2.5em !important; } .trms a {font-size:9px !important;} td.pthree img.button { max-width:105px !important; max-height:29px !important;} td.pthree p:nth-child(3) > a {height:29px !important;} td.pthree p:nth-child(3) {width:109px !important; height:29px !important;} td.pone p, td.ptwo p, td.pthree p {font-size:10px !important; } td.pone {max-width:97px !important;} td.ptwo {max-width:100px !important;} td.pthree {max-width:205px !important;} td.ptwo p {width:72px !important; line-height:20px !important; } td.pthree p:nth-child(2) {width:50px !important; line-height:20px !important;} }    ';

      var head = document.getElementsByTagName('head')[0];
      function addcss(css) {
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        s.appendChild(document.createTextNode(css));
        head.appendChild(s);
      }
      addcss(mainmobile);
      
    },//mobile


    banner: function () {
      console.info('%c banner \u221a', 'background:blue;color:white;');
      var banner = document.createElement('div');
      banner.id = 'doubleodds';

      if (global.location.href == "https://www.grosvenorcasinos.com/") {
        console.log('home page');
        if (document.getElementById('doubleodds')) {
           var remove = document.getElementById('doubleodds');
           remove.parentElement.removeChild(remove);
           return true;
        }//if doubleodds exist
        
      }//if home pg
      else if(global.location.href.indexOf('/sport') > -1) {
         console.log('sport page');
         banner.innerHTML = '  <div class="doubleodds_desktop"> <table class="main" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="width: 100%; background-color: #fff;"> <tr> <td> <table cellpadding="0" cellspacing="0" border="0" class="inner" style="width: 1140px; margin:0 auto;"> <tr> <td> <table cellpadding="0" cellspacing="0" border="0" class="dtop" style="width:100%;"> <tr> <td style="background-color:#fff;"> <img class="imgres divider" src="https://sb.monetate.net/img/1/748/1246959.png" width="25" height="25" alt="spacer" style="max-width: 25px; display: block;"> </td></tr><tr> <td style="background-color:#fff;"> <table cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" class="heading" style="width: 100%; background-color: #fff;"> <tr> <td> <img class="imgres" alt="spacer" src="https://sb.monetate.net/img/1/748/1246960.png" width="27" height="27" style="max-width: 27px; display: block;"> </td><td> <h2 style="font-size:23px; color:#333; margin:0;max-width:405px;margin-top:0px; display:block;font-weight:normal; text-align:left;">ANY SPORT. ANY ODDS. ANY BET.</h2> <h1 style="font-size:58px; font-weight:bold; color:#202020; line-height: 66px; padding:15px 0 10px; max-width: 610px; margin:0; letter-spacing:0px; margin-left:-3px; text-align:left; ">DOUBLE THE ODDS</h1> </td><td> <img class="imgres hero" src="https://sb.monetate.net/img/1/748/1246961.png" alt="Sports" width="450" height="136" style="max-width:450px; margin-left:6.5em; display:block;"> </td></tr><tr> <td style="background-color:#fff;"> <img class="imgres" src="https://sb.monetate.net/img/1/748/1246960.png" width="27" height="27" alt="spacer" style="display: block; max-width:27px;"> </td><td style="background-color:#fff;"> <h3 style="color: #5d5d5d; font-size: 26px;  font-weight: normal; max-width: 610px; line-height: 36px; margin:0; vertical-align: middle; margin:0; margin-top:-15px; text-align:left; ">New players get Double the Odds on their first bet</h3> </td><td> <table cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" class="terms" style="width: 100%; background-color: #fff;"> <tr> <td> <img class="imgres" src="https://sb.monetate.net/img/1/748/1246955.png" width="27" height="27" alt="spacer" style="max-width:27px;display:block;"> </td><td class="trms" style="line-height: 36px; vertical-align:middle; display:block; margin-top: -12px; text-align:right;"><a target="_blank" style="text-decoration: underline; color:#333;" href="https://www.grosvenorcasinos.com/static/termsandconditions#terms" target="_blank" title="Terms and Conditions">T&Cs apply.</a> <span><img class="imgres" src="https://sb.monetate.net/img/1/748/1246954.png" width="26" height="19" alt="18" style="max-width:26px;line-height: 36px; vertical-align: middle;"></span> <a class="gaware" target="_blank" style="text-decoration: none; color:#333; margin-right:3.5em; line-height:22px; vertical-align:middle;" href="https://www.begambleaware.org/" target="_blank" title="BeGambleAware.org" >begambleaware.org</a> </td></tr></table> </td></tr><tr> <td colspan="3" style="background-color: #fff;"> <img class="imgres divider" src="https://sb.monetate.net/img/1/748/1246960.png" width="27" alt="spacer" height="27" style="max-width:27px; display: block;"> </td></tr></table> </td></tr></table> </td></tr><tr> <td> <table cellpadding="0" cellspacing="0" border="0" bgcolor="#ededed" class="dbot" style="background-color: #ededed; width:100%;"> <tr style="background-color:#ededed;"> <td class="pone" style="vertical-align: middle;font-size:20px; max-width:110px; height:114px;padding-left:37px;"> <p style="width:180px; margin:0; display:inline-block; line-height:108px; vertical-align:middle;padding-bottom:3px;"><span class="one"></span> Choose any bet</p><img class="imgres arrow" src="https://sb.monetate.net/img/1/748/1246956.png" width="50" alt="arrow" height="114" style="max-width: 50px;line-height: 114px; vertical-align:middle;"> </td><td class="ptwo" style="vertical-align:middle;font-size:20px; max-width:160px;"> <span class="two"></span> <p style="width:245px; margin:0; display:inline-block;height:66px; vertical-align: middle;"> Select ‘odds boost‘ on the<br class="brak"/>bet slip and stake up to<br class="brak"/> £10</p><img class="imgres arrow" style="max-width: 50px;line-height: 114px; vertical-align:middle;" src="https://sb.monetate.net/img/1/748/1246956.png" alt="arrow" width="50" height="114"> </td><td class="pthree" style="max-width:241px; vertical-align:middle; font-size: 20px;"> <span class="three" style="margin-left: -36px;"></span> <p style="width: 200px; height:50px; vertical-align:middle; margin:0; display: inline-block;margin-right:42px;">Get Double the Odds<br class="brak"/> paid in cash!</p><p style="width:221px; vertical-align:middle; height:59px; margin:0; display:inline-block;"><a target="_blank" style="height:60px; display:inline-block;" href="https://www.grosvenorcasinos.com/registration" title="Bet Now"> <img class="imgres button" src="https://sb.monetate.net/img/1/748/1246958.png" width="251" height="67" style="margin:0; margin-left:.2em; max-height:67px;" alt="Bet Now"></a> </p></td></tr></table> </td></tr></table> </td></tr></table> </div>  '; 
        
           document.querySelector('.site-header').appendChild(banner);
        
        
        
      }//if sport page

    } //banner 

   

    


  }; //SL


  SL.init();


})(window);