let list_api_host = ['https://api.azgames.io/', 'https://api.1games.io/']
let api_host = list_api_host[0]
config.gdHost = isHostOnGDSDK()
window.GMDEBUG = {}
window.GMDEBUG['LOADED SDK'] = Date.now()
window.GMSOFT_OPTIONS = config
window.GMSOFT_OPTIONS.enableAds = false
window.GMSOFT_OPTIONS.debug = false
window.GMSOFT_OPTIONS.pub_id = ''
window.GMSOFT_OPTIONS.unlockTimer = 60
window.GMSOFT_OPTIONS.timeShowInter = 60
window.GMSOFT_OPTIONS.domainHost = window.location.hostname
window.GMSOFT_OPTIONS.sourceHtml =
  'RHhrUUVRZGJid2xHVUFnV0IwY01HeE1FQ2doS0NCdE9MRTlESGdJZUJ3WUxGUWNCRERJU1ZGb0xNdz09'
window.GMSOFT_OPTIONS.sdkversion = 5
window.GMSOFT_OPTIONS.adsDebug = true
window.GMSOFT_OPTIONS.game = null
window.GMSOFT_OPTIONS.promotion = null
window.GMSOFT_OPTIONS.allow_play = 'yes'
let _gameId = window.GMSOFT_OPTIONS.gameId
function _0x170291() {
  let _0x37f71d = new Date()
  let _0x418abb = _0x37f71d.getTime() + _0x37f71d.getTimezoneOffset() * 60000
  let _0x3b37a5 = window.location.hostname
  window.GMSOFT_OPTIONS.domainHost = window.location.hostname
  let _0x3e120c = api_host + 'ajax/infov3'
  let _0xb002 = 'no'
  if (isDiffHost()) {
    if (document.referrer) {
      let _0x3fbbd4 = document.referrer
      _0x3b37a5 = _0x3fbbd4.match(/:\/\/(.[^/]+)/)[1]
    }
    _0xb002 = 'yes'
  }
  let _0x165a43 = config.gdHost ? 1 : 0
  let _0x16ca31 =
    'd=' +
    _0x3b37a5 +
    '&gid=' +
    _gameId +
    '&hn=' +
    window.location.hostname +
    '&ts=' +
    _0x418abb +
    '&ie=' +
    _0xb002 +
    '&gdh=' +
    _0x165a43
  let _0x1d3820 = btoa(_0x16ca31)
  let _0x4a55c9 = _0x3e120c + '?params=' + _0x1d3820
  let _0x3485e3 = httpGet(_0x4a55c9)
  const _0x47cb59 = JSON.parse(_0x3485e3)
  window.GMDEBUG.LOADED_SDK_SUCCESS = Date.now()
  window.GMSOFT_MSG = _0x3485e3
  window.GMDEBUG.site_info = _0x47cb59
  if (
    typeof _0x47cb59.enable_ads !== 'undefined' &&
    _0x47cb59.enable_ads !== ''
  ) {
    window.GMSOFT_OPTIONS.enableAds = !!(_0x47cb59.enable_ads == 'yes')
  }
  if (
    typeof _0x47cb59.hostindex !== 'undefined' &&
    _0x47cb59.hostindex !== ''
  ) {
    window.GMSOFT_OPTIONS.hostindex = _0x47cb59.hostindex
  }
  if (typeof _0x47cb59.adsDebug !== 'undefined' && _0x47cb59.adsDebug !== '') {
    window.GMSOFT_OPTIONS.adsDebug = !!(_0x47cb59.adsDebug == 'yes')
  }
  try {
    let _0x3bcf94 = new URLSearchParams(window.location.search)
    if (
      typeof _0x47cb59.debug_mode !== 'undefined' &&
      _0x47cb59.debug_mode !== ''
    ) {
      if (_0x3bcf94.has('d') || _0x47cb59.debug_mode == 'yes') {
        window.GMSOFT_OPTIONS.enableDebug = 'yes'
      } else {
        window.GMSOFT_OPTIONS.enableDebug = 'no'
        console.log = function () { }
        console.error = function () { }
        console.warn = function () { }
        alert = function () { }
      }
    }
    if (
      window.GMSOFT_OPTIONS.enablePromotion &&
      typeof _0x47cb59.promotion !== 'undefined'
    ) {
      window.GMSOFT_OPTIONS.promotion = _0x47cb59.promotion
    }
  } catch (_0x51a533) { }
  if (
    typeof _0x47cb59.unlock_time !== 'undefined' &&
    _0x47cb59.unlock_timer >= 0
  ) {
    window.GMSOFT_OPTIONS.unlockTimer = _0x47cb59.unlock_timer
  }
  if (typeof _0x47cb59.enablePreroll !== 'undefined') {
    window.GMSOFT_OPTIONS.enablePreroll = _0x47cb59.enablePreroll
  }
  if (typeof _0x47cb59.pub_id !== 'undefined' && _0x47cb59.pub_id !== '') {
    window.GMSOFT_OPTIONS.pub_id = _0x47cb59.pub_id
  }
  if (config.gdHost && _0x47cb59.sdkType == 'gd') {
    window.GMSOFT_OPTIONS.pub_id = window.GMSOFT_OPTIONS.gdGameId
  }
  if (
    typeof _0x47cb59.timeShowInter !== 'undefined' &&
    _0x47cb59.timeShowInter >= 0
  ) {
    window.GMSOFT_OPTIONS.timeShowInter = _0x47cb59.timeShowInter
  }
  if (
    typeof _0x47cb59.timeShowReward !== 'undefined' &&
    _0x47cb59.timeShowReward >= 0
  ) {
    window.GMSOFT_OPTIONS.timeShowReward = _0x47cb59.timeShowReward
  }
  if (typeof _0x47cb59.game !== 'undefined') {
    window.GMSOFT_OPTIONS.game = _0x47cb59.game
  }
  if (typeof _0x47cb59.sdkType !== 'undefined' && _0x47cb59.pub_id !== '') {
    window.GMSOFT_OPTIONS.sdkType = _0x47cb59.sdkType
  }
  if (_0x47cb59.allow_embed) {
    window.GMSOFT_OPTIONS.allow_embed = _0x47cb59.allow_embed
  }
  if (_0x47cb59.allow_host) {
    window.GMSOFT_OPTIONS.allow_host = _0x47cb59.allow_host
  }
  window.GMSOFT_OPTIONS.allow_play = 'no'
  if (window.GMSOFT_OPTIONS.allow_host == 'yes' && _0xb002 != 'yes') {
    window.GMSOFT_OPTIONS.allow_play = 'yes'
  }
  if (window.GMSOFT_OPTIONS.allow_embed == 'yes' && _0xb002 == 'yes') {
    window.GMSOFT_OPTIONS.allow_play = 'yes'
  }
  if (_0x47cb59.game) {
    let _0x4c4db5 = _0x47cb59.game
    window.GMSOFT_OPTIONS.game = _0x4c4db5
    let _0x50b750 =
      '<style>#theGameBox,body,html{position:absolute;top:0;left:0;width:100%;height:100%;padding:0;margin:0}.gamePlayerContentSafeSize{width:1598px;height:841px;max-width:100%;position:relative}@-webkit-keyframes gamePlayerMoveRight{to{-webkit-transform:translateX(20px)}}@keyframes gamePlayerMoveRight{to{transform:translateX(20px)}}@-webkit-keyframes gamePlayerMoveLeft{to{-webkit-transform:translateX(-20px)}}@keyframes gamePlayerMoveLeft{to{transform:translateX(-20px)}}.gamePlayerPageLoader svg{z-index:-1}.gamePlayerLoadingAnim{width:100%;height:100%;display:flex;align-items:center;justify-content:center;position:absolute;top:0;left:0;z-index:100000000;background:rgba(0,0,0,.7)}.gamePlayerLoadingAnim div{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:4px;animation:gamePlayerLoadingAnim 1s infinite;border-style:solid;border-color:#fff transparent transparent transparent;border-width:3px;border-radius:50%}.gamePlayerLoadingAnim div:nth-child(1){animation-delay:-.9s}.gamePlayerLoadingAnim div:nth-child(2){animation-delay:-.8s}.gamePlayerLoadingAnim div:nth-child(3){animation-delay:-.1s}@keyframes gamePlayerLoadingAnim{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.gamePlayerLoadingAnim span{font-family:roboto,sans-serif;width:100%;text-align:center;color:#fff;padding-top:150px;position:absolute;z-index:99999999999999999999}.gamePlayerTable>div{display:table-cell;vertical-align:middle;padding:10px;text-align:left;width:auto;background:#fff;color:#272727}.gamePlayerTable>div:first-child{width:1%;white-space:nowrap;font-size:22px;font-weight:600;vertical-align:top}[data-gamePlayerplayer] div video{width:100%!important;height:100%!important}[data-gamePlayerplayer] div lima-video{width:100%!important;height:100%!important}.gamePlayerContent video{left:0;top:0}.gamePlayerContent{top:0;left:0}.gamePlayerHidden{display:none!important;visibility:hidden}.gamePlayerCenterTable>div{display:table-cell;text-align:left;vertical-align:middle;font-size:22px}.gamePlayerCenterTable>div:nth-child(2){padding:10px 30px;text-align:center;display:inline-block}#gamePlayermw1jclueedb9wbbpdztq{width:100%;height:100%}#gamePlayermw1jclueedb9wbbpdztq{background-color:#000;overflow:hidden}#gamePlayermw1jclueedb9wbbpdztq{padding:inherit;box-sizing:border-box;overflow:hidden;position:relative;z-index:9999}body>#gamePlayermw1jclueedb9wbbpdztq{position:fixed!important}#gamePlayermw1jclueedb9wbbpdztq.gamePlayerMidroll{background:rgba(0,0,0,1)}#gamePlayermw1jclueedb9wbbpdztq>div:first-child{z-index:2147483647}#gamePlayermw1jclueedb9wbbpdztq.gamePlayerNoClick>div:first-child{z-index:2147483646}#gamePlayermw1jclueedb9wbbpdztq:not(.gamePlayerAdLoaded)>div:not([class]){pointer-events:none}.gamePlayerContent{position:relative}#gamePlayermw1jclueedb9wbbpdztq .gamePlayerLoadingContainer>div{display:none}#gamePlayermw1jclueedb9wbbpdztq .gamePlayerLoadingContainer>div{width:25px;height:25px;position:absolute;top:50%;left:50%;margin-left:-15px;margin-top:-15px;animation:circle .75s linear infinite;border-width:2px;border-style:solid;border-color:rgba(252,12,12,0) #fff rgba(201,62,201,0) #fff;border-image:initial;border-radius:100%;-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite;transform-origin:center!important}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes gamePlayerTicTac{0%{transform:scale(1,1)}50%{transform:scale(1.2,1.2)}100%{transform:scale(1,1)}}.gamePlayerInstallFlash>div{display:table-cell;text-align:center;vertical-align:middle;width:100%;height:100%;color:#fff;font-family:"open sans";font-size:18px;letter-spacing:-1px}.gamePlayerInstallFlash>div>a{display:block;text-align:center;color:#ff0;padding:10px}.gamePlayerContextMenu li{border-bottom:1px solid rgba(255,255,255,.8);padding:5px;color:rgba(255,555,255,.6);list-style-type:none;padding:10px 0;font-family:roboto;font-size:11px;text-align:left}.gamePlayerContextMenu li a{color:rgba(255,555,255,.6);font-family:roboto;font-size:11px;text-align:left;text-decoration:none}.gamePlayerContextMenu li a:hover{text-decoration:underline}.gamePlayerContextMenu li:last-child{border-bottom:none}.gamePlayerContextMenu li span{cursor:pointer;font-size:12px;display:block;text-align:left;font-weight:400;font-family:roboto}#gamePlayermw1jclueedb9wbbpdztq iframe:first-of-type{display:block!important;background:0 0!important;border:none!important}#gamePlayermw1jclueedb9wbbpdztq .gamePlayerFlashSplash embed{transform:scale(100)}.loadingButton span{opacity:0;transition:.2s}@keyframes bounceHorizontal{0%{left:-4px}100%{left:4px}}@keyframes openChest{from{background-position-x:0}to{background-position-x:-294px}}@keyframes popIn{0%{-webkit-transform:scale(0);transform:scale(0);opacity:1}70%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}:root{--min5050:50px;--min202:20px;--min203:20px;--min405:40px;--min255:25px;--min143:14px;--min22040:150px;--min15015:150px;--min505:50px;--min364:36px;--min202:20px}@supports (padding:min(12px,13vw)){:root{--min5050:min(50px, 5vw);--min202:min(20px, 2vw);--min405:40px;--min203:min(20px, 3vh);--min405:min(40px, 5vw);--min255:min(25px, 5vw);--min143:min(14px, 3vw);--min22040:min(220px, 40vw);--min15015:min(150px, 15vw);--min505:min(50px, 5vw);--min364:min(36px, 4vh);--min202:min(20px, 2vw)}}.gamePlayerSplash *{box-sizing:border-box;font-family:Roboto,sans-serif!important;font-weight:300}.gamePlayerSplash{display:block;padding:var(--min5050);overflow:hidden;width:100%;height:100%;box-sizing:border-box;position:relative;background-color:#000;outline:0!important;transition:opacity .4s;background-repeat:no-repeat;background-position:center}.gamePlayerSplash .gamePlayerBg{display:block;width:100%;height:100%;position:absolute;top:0;left:0;z-index:1}.gamePlayerSplash .gamePlayerBg .gamePlayerBgImage{position:absolute;top:0;left:0;width:100%;height:100%;filter:blur(45px);background-size:cover;transform:scale(1.3)}.gamePlayerSplash .gamePlayerSplashContent{background:rgba(255,255,255,.4);border-radius:50px;display:block;width:100%;height:100%;z-index:10;box-shadow:0 0 0 0 #fff,10px 20px 21px rgba(0,0,0,.4);position:relative;transition:box-shadow .2s}.gamePlayerSplash .gamePlayerSplashContent:hover{box-shadow:-2px -2px 10px 1px #fff,10px 20px 21px rgba(0,0,0,.4)}.gamePlayerSplashContent .gamePlayerCenterContent{display:grid;width:100%;height:100%;grid-template-columns:2fr 1fr;box-sizing:border-box;place-items:center;padding:var(--min202)}.gamePlayerSplashContent .gamePlayerCenterContent>div{text-align:center;padding:var(--min202);width:100%}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollInfo{display:grid;width:100%;text-align:left;row-gap:20px}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerButtons{display:inline-block;text-align:center;display:grid;row-gap:20px;width:max-content;padding:20px}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA{transition:.2s;position:relative;cursor:pointer}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA:hover{transform:scale(1.1)}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA span{display:grid;grid-template-columns:auto auto;grid-gap:10px;background-color:#1c1c1c;color:#fff;border-radius:100px;padding:var(--min203) var(--min405);font-weight:400;font-size:var(--min255);box-shadow:0 0 20px rgba(0,0,0,.8);align-items:center;cursor:pointer;transition:.3s;text-transform:uppercase;user-select:none;pointer-events:none}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA:hover span{background-color:#91000a}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA span:before{display:block;content:" ";background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAPCAYAAADUFP50AAABKklEQVQokY2TvyvEcRjHX75dDFIGFhmuFFaLC7NFERkNBvInuCubhdtsBsUimVx28iPJarHSme4kAyU/6qVPPur6du7uqc+zPJ/3834/7+fzQR1Un9RzNavSykmAXaAMVIB7YAvopVmoFXU9skypD+qbuqZm/mMPqaxupAp59V2tqrNqkgYmUVBbSlgR6Ab2gBJwBeRqLyQNJvkA8kBPnP8GOAGyzYB/8QzMARNAF3AGTLcC7I+s11HuKXDQCBi6bwMXcd5O4BCYAVbrAYNRi8Aj0AesAMvAKzAcZIaGmTrAfWASWIim7ESp89Hh34h73KzZ0ai6pJbUF7gamePlayerdqT3GBjbga/YZwQoAGPAETAEVOs6oN6ql2pR/VaP1YFmDz2kcfVTvVNzLf0O5QcZKy4YNKUs+wAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-position:center;width:15px;height:15px}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA:hover span:before{animation:gamePlayerKnock .3s infinite}@keyframes gamePlayerKnock{0%{transform:translateX(0)}100%{transform:translateX(-10px)}}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollWb span{display:inline-block;border:2px solid #1c1c1c;color:#1c1c1c;border-radius:100px;padding:15px 20px;text-transform:uppercase;font-weight:500;font-size:var(--min143);box-shadow:0 0 20px rgba(0,0,0,.8);cursor:pointer;user-select:none}.gamePlayerThumb{display:block;position:relative;border-radius:50%;overflow:hidden;box-shadow:0 5px 20px rgba(0,0,0,.4);width:var(--min22040);height:var(--min22040);transition:.3s;cursor:pointer;margin:auto}.gamePlayerThumb:hover{transform:scale(1.1);box-shadow:-2px -2px 10px 1px #fff,0 5px 40px rgba(0,0,0,.4)}.gamePlayerThumb>div{position:absolute;border-radius:50%;top:0;left:0;width:100%;height:100%;background-size:cover;background-repeat:no-repeat;background-position:center}.gamePlayerTitle{font-weight:300;font-size:var(--min364);user-select:none;color:#1c1c1c;line-height:normal}.gamePlayerTitle:after{content:""!important}.gamePlayerPrerollDescription{font-weight:400;font-size:15px;user-select:none;color:#1c1c1c}.gamePlayerSplash{opacity:0}.gamePlayerPrerollCTA{position:relative}.gamePlayerSplash{opacity:1}.gamePlayerBg .gamePlayerBgImage{background-image:url(' +
      _0x4c4db5.image +
      ')!important}.gamePlayerThumb>div{background-image:url(' +
      _0x4c4db5.image +
      ')}@media only screen and (max-width:480px){.gamePlayerThumb{display:none}}</style> <div class="gamePlayerContent gamePlayerContentSafeSize"id=theGameBox><div id=gamePlayermw1jclueedb9wbbpdztq data-gameplayerplayer=true><div class="gamePlayerSplash gamePlayerSplashPreroll"><div class=gamePlayerBg><div class=gamePlayerBgImage></div></div><div class=gamePlayerSplashContent><div class=gamePlayerCenterContent><div><div class=gamePlayerPrerollInfo><div class=gamePlayerButtons><div class=gamePlayerPrerollCTA onclick="window.open(\'' +
      _0x4c4db5.redirect_url +
      "', '_blank')\" id=btn_playgame><span>Play game</span></div></div><div class=gamePlayerTitle>" +
      _0x4c4db5.name +
      '</div><div class=gamePlayerPrerollDescription>' +
      _0x4c4db5.description +
      '</div></div></div><div><div class=gamePlayerThumb><div></div></div></div></div></div></div></div></div>'
    if (isDiffHost()) {
      console.log('NEU GAME DUOC EMBED')
      const _0x20531d = new Date(
        new Date().toLocaleString('en', { timeZone: 'Asia/Ho_Chi_Minh' })
      )
      let _0x4fb54f = new Date(
        _0x20531d.getFullYear(),
        _0x20531d.getMonth(),
        _0x20531d.getDate(),
        _0x20531d.getHours(),
        _0x20531d.getMinutes(),
        _0x20531d.getSeconds()
      )
      let _0x203d7b = new Date(
        _0x20531d.getFullYear(),
        _0x20531d.getMonth(),
        _0x20531d.getDate(),
        6,
        0,
        0
      )
      let _0x511761 = new Date(
        _0x20531d.getFullYear(),
        _0x20531d.getMonth(),
        _0x20531d.getDate(),
        20,
        0,
        0
      )
      if (
        _0x203d7b.getTime() <= _0x4fb54f.getTime() &&
        _0x4fb54f.getTime() <= _0x511761.getTime()
      ) {
      }
      if (_0x47cb59.allow_embed != 'yes') {
        let _0x51a9ad = window.GMSOFT_OPTIONS.unlockTimer * 1000
        setTimeout(function () {
          document.body.innerHTML = _0x50b750
        }, _0x51a9ad)
      }
    } else {
      console.log('site_info_parse.allow_host ==>' + _0x47cb59.allow_host)
      if (_0x47cb59.allow_host != 'yes') {
        console.log('site_info_parse.allo 22')
        let _0x4c907c = window.GMSOFT_OPTIONS.unlockTimer * 1000
        setTimeout(function () {
          document.body.innerHTML = _0x50b750
        }, _0x4c907c)
      }
    }
  }
  document.dispatchEvent(new CustomEvent('gmsoftSdkReady'))
}
_0x170291()
if (window.GMSOFT_OPTIONS.enableAds == true) {
  if (window.GMSOFT_OPTIONS.sdkType == 'h5') {
    window.GMDEBUG.ADS = 'H5 SDK integration.'
    var script = document.createElement('script')
    script.setAttribute('crossorigin', 'anonymous')
    if (
      typeof window.GMSOFT_OPTIONS.adsDebug !== 'undefined' &&
      window.GMSOFT_OPTIONS.adsDebug == true
    ) {
      script.setAttribute('data-adbreak-test', 'on')
    }
    script.setAttribute('data-ad-frequency-hint', '30s')
    if (typeof _gameId !== 'undefined' && _gameId != '') {
      script.setAttribute('data-ad-channel', _gameId)
    }
    script.src =
      'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' +
      window.GMSOFT_OPTIONS.pub_id
    document.head.appendChild(script)
    this._showRewardAdFn = null
    window.adsbygoogle = window.adsbygoogle || []
    var afg = {
      adBreak: (window.adConfig = function (_0x2f61df) {
        adsbygoogle.push(_0x2f61df)
      }),
      ready: false,
    }
    var onReady = function () {
      afg.ready = true
    }
    adConfig({
      preloadAdBreaks: 'on',
      onReady: onReady,
    })
    var beforeAdCalled = false
    afg.onBeforeAd = function () {
      beforeAdCalled = true
    }
    afg.onAfterAd = function () {
      beforeAdCalled = false
    }
    window.afg = afg
  } else {
    if (window.GMSOFT_OPTIONS.sdkType == 'wgplayer') {
      window.GMDEBUG.ADS = 'wgplayer'
      var wgConf = document.createElement('script')
      wgConf.addEventListener(
        'load',
        function (_0x46caa6) {
          var _0x1e7dd2 = document.createElement('script')
          _0x1e7dd2.addEventListener(
            'load',
            function (_0x22b949) {
              console.log('WGSDK: Development resources loaded.')
            }.bind(this)
          )
          document.getElementsByTagName('head')[0].appendChild(_0x1e7dd2)
          _0x1e7dd2.src =
            'https://afg.wgplayer.com/1games.io/js/wnlvUzqr01_UmhONvHscTg/88126564825/wgAds.js'
        }.bind(this)
      )
      document.getElementsByTagName('head')[0].appendChild(wgConf)
      wgConf.src = 'https://afg.wgplayer.com/1games.io/wgAds.iframe.conf.js'
      this._showRewardAdFn = null
    }
  }
}
function isDiffHost() {
  try {
    if (window.top && window == window.top) {
      return false
    }
    if (window.top.location.hostname == window.location.hostname) {
      return false
    }
  } catch (_0x4ad7fc) {
    return true
  }
  return true
}
var unityhostname = window.location.hostname
function httpGet(_0x1fd768) {
  var _0xcb8f8e = new XMLHttpRequest()
  _0xcb8f8e.open('GET', _0x1fd768, false)
  _0xcb8f8e.send('')
  return _0xcb8f8e.responseText
}
function isHostOnGDSDK() {
  let _0x46f8b4 = window.location.hostname.split('.')
  let _0x9de1e5 = _0x46f8b4.slice(-2).join('.')
  return _0x9de1e5 == 'gamedistribution.com'
}


/* let list_api_host = ['https://api.azgames.io/', "https://api.1games.io/"];
let api_host = list_api_host[0];
config.gdHost = isHostOnGDSDK();
window.GMDEBUG = {};
window.GMDEBUG["LOADED SDK"] = Date.now();
window.GMSOFT_OPTIONS = config;
window.GMSOFT_OPTIONS.enableAds = false;
window.GMSOFT_OPTIONS.debug = false;
window.GMSOFT_OPTIONS.pub_id = '';
window.GMSOFT_OPTIONS.unlockTimer = 0x3c;
window.GMSOFT_OPTIONS.timeShowInter = 0x3c;
window.GMSOFT_OPTIONS.domainHost = window.location.hostname;
window.GMSOFT_OPTIONS.sourceHtml = "RHhrUUVRZGJid2xHVUFnV0IwY01HeE1FQ2doS0NCdE9MRTlESGdJZUJ3WUxGUWNCRERJU1ZGb0xNdz09";
window.GMSOFT_OPTIONS.sdkversion = 0x5;
window.GMSOFT_OPTIONS.adsDebug = true;
window.GMSOFT_OPTIONS.game = null;
window.GMSOFT_OPTIONS.promotion = null;
window.GMSOFT_OPTIONS.allow_play = "yes";
let _gameId = window.GMSOFT_OPTIONS.gameId;
function _0x170291() {
  let _0x37f71d = new Date();
  let _0x418abb = _0x37f71d.getTime() + _0x37f71d.getTimezoneOffset() * 0xea60;
  let _0x3b37a5 = window.location.hostname;
  window.GMSOFT_OPTIONS.domainHost = window.location.hostname;
  let _0x3e120c = api_host + "ajax/infov3";
  let _0xb002 = 'no';
  if (isDiffHost()) {
    if (document.referrer) {
      let _0x3fbbd4 = document.referrer;
      _0x3b37a5 = _0x3fbbd4.match(/:\/\/(.[^/]+)/)[0x1];
    }
    _0xb002 = "yes";
  }
  let _0x165a43 = config.gdHost ? 0x1 : 0x0;
  let _0x16ca31 = 'd=' + _0x3b37a5 + "&gid=" + _gameId + "&hn=" + window.location.hostname + '&ts=' + _0x418abb + "&ie=" + _0xb002 + "&gdh=" + _0x165a43;
  let _0x1d3820 = btoa(_0x16ca31);
  let _0x4a55c9 = _0x3e120c + "?params=" + _0x1d3820;
  let _0x3485e3 = httpGet(_0x4a55c9);
  const _0x47cb59 = JSON.parse(_0x3485e3);
  window.GMDEBUG.LOADED_SDK_SUCCESS = Date.now();
  window.GMSOFT_MSG = _0x3485e3;
  window.GMDEBUG.site_info = _0x47cb59;
  if (typeof _0x47cb59.enable_ads !== "undefined" && _0x47cb59.enable_ads !== '') {
    window.GMSOFT_OPTIONS.enableAds = !!(_0x47cb59.enable_ads == "yes");
  }
  if (typeof _0x47cb59.hostindex !== 'undefined' && _0x47cb59.hostindex !== '') {
    window.GMSOFT_OPTIONS.hostindex = _0x47cb59.hostindex;
  }
  if (typeof _0x47cb59.adsDebug !== "undefined" && _0x47cb59.adsDebug !== '') {
    window.GMSOFT_OPTIONS.adsDebug = !!(_0x47cb59.adsDebug == 'yes');
  }
  try {
    let _0x3bcf94 = new URLSearchParams(window.location.search);
    if (typeof _0x47cb59.debug_mode !== "undefined" && _0x47cb59.debug_mode !== '') {
      if (_0x3bcf94.has('d') || _0x47cb59.debug_mode == 'yes') {
        window.GMSOFT_OPTIONS.enableDebug = 'yes';
      } else {
        window.GMSOFT_OPTIONS.enableDebug = 'no';
        console.log = function () {};
        console.error = function () {};
        console.warn = function () {};
        alert = function () {};
      }
    }
    if (window.GMSOFT_OPTIONS.enablePromotion && typeof _0x47cb59.promotion !== "undefined") {
      window.GMSOFT_OPTIONS.promotion = _0x47cb59.promotion;
    }
  } catch (_0x51a533) {}
  if (typeof _0x47cb59.unlock_time !== "undefined" && _0x47cb59.unlock_timer >= 0x0) {
    window.GMSOFT_OPTIONS.unlockTimer = _0x47cb59.unlock_timer;
  }
  if (typeof _0x47cb59.enablePreroll !== 'undefined') {
    window.GMSOFT_OPTIONS.enablePreroll = _0x47cb59.enablePreroll;
  }
  if (typeof _0x47cb59.pub_id !== "undefined" && _0x47cb59.pub_id !== '') {
    window.GMSOFT_OPTIONS.pub_id = _0x47cb59.pub_id;
  }
  if (config.gdHost && _0x47cb59.sdkType == 'gd') {
    window.GMSOFT_OPTIONS.pub_id = window.GMSOFT_OPTIONS.gdGameId;
  }
  if (typeof _0x47cb59.timeShowInter !== 'undefined' && _0x47cb59.timeShowInter >= 0x0) {
    window.GMSOFT_OPTIONS.timeShowInter = _0x47cb59.timeShowInter;
  }
  if (typeof _0x47cb59.timeShowReward !== "undefined" && _0x47cb59.timeShowReward >= 0x0) {
    window.GMSOFT_OPTIONS.timeShowReward = _0x47cb59.timeShowReward;
  }
  if (typeof _0x47cb59.game !== "undefined") {
    window.GMSOFT_OPTIONS.game = _0x47cb59.game;
  }
  if (typeof _0x47cb59.sdkType !== "undefined" && _0x47cb59.pub_id !== '') {
    window.GMSOFT_OPTIONS.sdkType = _0x47cb59.sdkType;
  }
  if (_0x47cb59.allow_embed) {
    window.GMSOFT_OPTIONS.allow_embed = _0x47cb59.allow_embed;
  }
  if (_0x47cb59.allow_host) {
    window.GMSOFT_OPTIONS.allow_host = _0x47cb59.allow_host;
  }
  window.GMSOFT_OPTIONS.allow_play = 'no';
  if (window.GMSOFT_OPTIONS.allow_host == 'yes' && _0xb002 != "yes") {
    window.GMSOFT_OPTIONS.allow_play = "yes";
  }
  if (window.GMSOFT_OPTIONS.allow_embed == "yes" && _0xb002 == "yes") {
    window.GMSOFT_OPTIONS.allow_play = "yes";
  }
  if (_0x47cb59.game) {
    let _0x4c4db5 = _0x47cb59.game;
    window.GMSOFT_OPTIONS.game = _0x4c4db5;
    let _0x50b750 = "<style>#theGameBox,body,html{position:absolute;top:0;left:0;width:100%;height:100%;padding:0;margin:0}.gamePlayerContentSafeSize{width:1598px;height:841px;max-width:100%;position:relative}@-webkit-keyframes gamePlayerMoveRight{to{-webkit-transform:translateX(20px)}}@keyframes gamePlayerMoveRight{to{transform:translateX(20px)}}@-webkit-keyframes gamePlayerMoveLeft{to{-webkit-transform:translateX(-20px)}}@keyframes gamePlayerMoveLeft{to{transform:translateX(-20px)}}.gamePlayerPageLoader svg{z-index:-1}.gamePlayerLoadingAnim{width:100%;height:100%;display:flex;align-items:center;justify-content:center;position:absolute;top:0;left:0;z-index:100000000;background:rgba(0,0,0,.7)}.gamePlayerLoadingAnim div{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:4px;animation:gamePlayerLoadingAnim 1s infinite;border-style:solid;border-color:#fff transparent transparent transparent;border-width:3px;border-radius:50%}.gamePlayerLoadingAnim div:nth-child(1){animation-delay:-.9s}.gamePlayerLoadingAnim div:nth-child(2){animation-delay:-.8s}.gamePlayerLoadingAnim div:nth-child(3){animation-delay:-.1s}@keyframes gamePlayerLoadingAnim{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.gamePlayerLoadingAnim span{font-family:roboto,sans-serif;width:100%;text-align:center;color:#fff;padding-top:150px;position:absolute;z-index:99999999999999999999}.gamePlayerTable>div{display:table-cell;vertical-align:middle;padding:10px;text-align:left;width:auto;background:#fff;color:#272727}.gamePlayerTable>div:first-child{width:1%;white-space:nowrap;font-size:22px;font-weight:600;vertical-align:top}[data-gamePlayerplayer] div video{width:100%!important;height:100%!important}[data-gamePlayerplayer] div lima-video{width:100%!important;height:100%!important}.gamePlayerContent video{left:0;top:0}.gamePlayerContent{top:0;left:0}.gamePlayerHidden{display:none!important;visibility:hidden}.gamePlayerCenterTable>div{display:table-cell;text-align:left;vertical-align:middle;font-size:22px}.gamePlayerCenterTable>div:nth-child(2){padding:10px 30px;text-align:center;display:inline-block}#gamePlayermw1jclueedb9wbbpdztq{width:100%;height:100%}#gamePlayermw1jclueedb9wbbpdztq{background-color:#000;overflow:hidden}#gamePlayermw1jclueedb9wbbpdztq{padding:inherit;box-sizing:border-box;overflow:hidden;position:relative;z-index:9999}body>#gamePlayermw1jclueedb9wbbpdztq{position:fixed!important}#gamePlayermw1jclueedb9wbbpdztq.gamePlayerMidroll{background:rgba(0,0,0,1)}#gamePlayermw1jclueedb9wbbpdztq>div:first-child{z-index:2147483647}#gamePlayermw1jclueedb9wbbpdztq.gamePlayerNoClick>div:first-child{z-index:2147483646}#gamePlayermw1jclueedb9wbbpdztq:not(.gamePlayerAdLoaded)>div:not([class]){pointer-events:none}.gamePlayerContent{position:relative}#gamePlayermw1jclueedb9wbbpdztq .gamePlayerLoadingContainer>div{display:none}#gamePlayermw1jclueedb9wbbpdztq .gamePlayerLoadingContainer>div{width:25px;height:25px;position:absolute;top:50%;left:50%;margin-left:-15px;margin-top:-15px;animation:circle .75s linear infinite;border-width:2px;border-style:solid;border-color:rgba(252,12,12,0) #fff rgba(201,62,201,0) #fff;border-image:initial;border-radius:100%;-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite;transform-origin:center!important}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes gamePlayerTicTac{0%{transform:scale(1,1)}50%{transform:scale(1.2,1.2)}100%{transform:scale(1,1)}}.gamePlayerInstallFlash>div{display:table-cell;text-align:center;vertical-align:middle;width:100%;height:100%;color:#fff;font-family:\"open sans\";font-size:18px;letter-spacing:-1px}.gamePlayerInstallFlash>div>a{display:block;text-align:center;color:#ff0;padding:10px}.gamePlayerContextMenu li{border-bottom:1px solid rgba(255,255,255,.8);padding:5px;color:rgba(255,555,255,.6);list-style-type:none;padding:10px 0;font-family:roboto;font-size:11px;text-align:left}.gamePlayerContextMenu li a{color:rgba(255,555,255,.6);font-family:roboto;font-size:11px;text-align:left;text-decoration:none}.gamePlayerContextMenu li a:hover{text-decoration:underline}.gamePlayerContextMenu li:last-child{border-bottom:none}.gamePlayerContextMenu li span{cursor:pointer;font-size:12px;display:block;text-align:left;font-weight:400;font-family:roboto}#gamePlayermw1jclueedb9wbbpdztq iframe:first-of-type{display:block!important;background:0 0!important;border:none!important}#gamePlayermw1jclueedb9wbbpdztq .gamePlayerFlashSplash embed{transform:scale(100)}.loadingButton span{opacity:0;transition:.2s}@keyframes bounceHorizontal{0%{left:-4px}100%{left:4px}}@keyframes openChest{from{background-position-x:0}to{background-position-x:-294px}}@keyframes popIn{0%{-webkit-transform:scale(0);transform:scale(0);opacity:1}70%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}:root{--min5050:50px;--min202:20px;--min203:20px;--min405:40px;--min255:25px;--min143:14px;--min22040:150px;--min15015:150px;--min505:50px;--min364:36px;--min202:20px}@supports (padding:min(12px,13vw)){:root{--min5050:min(50px, 5vw);--min202:min(20px, 2vw);--min405:40px;--min203:min(20px, 3vh);--min405:min(40px, 5vw);--min255:min(25px, 5vw);--min143:min(14px, 3vw);--min22040:min(220px, 40vw);--min15015:min(150px, 15vw);--min505:min(50px, 5vw);--min364:min(36px, 4vh);--min202:min(20px, 2vw)}}.gamePlayerSplash *{box-sizing:border-box;font-family:Roboto,sans-serif!important;font-weight:300}.gamePlayerSplash{display:block;padding:var(--min5050);overflow:hidden;width:100%;height:100%;box-sizing:border-box;position:relative;background-color:#000;outline:0!important;transition:opacity .4s;background-repeat:no-repeat;background-position:center}.gamePlayerSplash .gamePlayerBg{display:block;width:100%;height:100%;position:absolute;top:0;left:0;z-index:1}.gamePlayerSplash .gamePlayerBg .gamePlayerBgImage{position:absolute;top:0;left:0;width:100%;height:100%;filter:blur(45px);background-size:cover;transform:scale(1.3)}.gamePlayerSplash .gamePlayerSplashContent{background:rgba(255,255,255,.4);border-radius:50px;display:block;width:100%;height:100%;z-index:10;box-shadow:0 0 0 0 #fff,10px 20px 21px rgba(0,0,0,.4);position:relative;transition:box-shadow .2s}.gamePlayerSplash .gamePlayerSplashContent:hover{box-shadow:-2px -2px 10px 1px #fff,10px 20px 21px rgba(0,0,0,.4)}.gamePlayerSplashContent .gamePlayerCenterContent{display:grid;width:100%;height:100%;grid-template-columns:2fr 1fr;box-sizing:border-box;place-items:center;padding:var(--min202)}.gamePlayerSplashContent .gamePlayerCenterContent>div{text-align:center;padding:var(--min202);width:100%}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollInfo{display:grid;width:100%;text-align:left;row-gap:20px}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerButtons{display:inline-block;text-align:center;display:grid;row-gap:20px;width:max-content;padding:20px}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA{transition:.2s;position:relative;cursor:pointer}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA:hover{transform:scale(1.1)}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA span{display:grid;grid-template-columns:auto auto;grid-gap:10px;background-color:#1c1c1c;color:#fff;border-radius:100px;padding:var(--min203) var(--min405);font-weight:400;font-size:var(--min255);box-shadow:0 0 20px rgba(0,0,0,.8);align-items:center;cursor:pointer;transition:.3s;text-transform:uppercase;user-select:none;pointer-events:none}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA:hover span{background-color:#91000a}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA span:before{display:block;content:\" \";background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAPCAYAAADUFP50AAABKklEQVQokY2TvyvEcRjHX75dDFIGFhmuFFaLC7NFERkNBvInuCubhdtsBsUimVx28iPJarHSme4kAyU/6qVPPur6du7uqc+zPJ/3834/7+fzQR1Un9RzNavSykmAXaAMVIB7YAvopVmoFXU9skypD+qbuqZm/mMPqaxupAp59V2tqrNqkgYmUVBbSlgR6Ab2gBJwBeRqLyQNJvkA8kBPnP8GOAGyzYB/8QzMARNAF3AGTLcC7I+s11HuKXDQCBi6bwMXcd5O4BCYAVbrAYNRi8Aj0AesAMvAKzAcZIaGmTrAfWASWIim7ESp89Hh34h73KzZ0ai6pJbUF7gamePlayerdqT3GBjbga/YZwQoAGPAETAEVOs6oN6ql2pR/VaP1YFmDz2kcfVTvVNzLf0O5QcZKy4YNKUs+wAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-position:center;width:15px;height:15px}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA:hover span:before{animation:gamePlayerKnock .3s infinite}@keyframes gamePlayerKnock{0%{transform:translateX(0)}100%{transform:translateX(-10px)}}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollWb span{display:inline-block;border:2px solid #1c1c1c;color:#1c1c1c;border-radius:100px;padding:15px 20px;text-transform:uppercase;font-weight:500;font-size:var(--min143);box-shadow:0 0 20px rgba(0,0,0,.8);cursor:pointer;user-select:none}.gamePlayerThumb{display:block;position:relative;border-radius:50%;overflow:hidden;box-shadow:0 5px 20px rgba(0,0,0,.4);width:var(--min22040);height:var(--min22040);transition:.3s;cursor:pointer;margin:auto}.gamePlayerThumb:hover{transform:scale(1.1);box-shadow:-2px -2px 10px 1px #fff,0 5px 40px rgba(0,0,0,.4)}.gamePlayerThumb>div{position:absolute;border-radius:50%;top:0;left:0;width:100%;height:100%;background-size:cover;background-repeat:no-repeat;background-position:center}.gamePlayerTitle{font-weight:300;font-size:var(--min364);user-select:none;color:#1c1c1c;line-height:normal}.gamePlayerTitle:after{content:\"\"!important}.gamePlayerPrerollDescription{font-weight:400;font-size:15px;user-select:none;color:#1c1c1c}.gamePlayerSplash{opacity:0}.gamePlayerPrerollCTA{position:relative}.gamePlayerSplash{opacity:1}.gamePlayerBg .gamePlayerBgImage{background-image:url(" + _0x4c4db5.image + ')!important}.gamePlayerThumb>div{background-image:url(' + _0x4c4db5.image + ")}@media only screen and (max-width:480px){.gamePlayerThumb{display:none}}</style> <div class=\"gamePlayerContent gamePlayerContentSafeSize\"id=theGameBox><div id=gamePlayermw1jclueedb9wbbpdztq data-gameplayerplayer=true><div class=\"gamePlayerSplash gamePlayerSplashPreroll\"><div class=gamePlayerBg><div class=gamePlayerBgImage></div></div><div class=gamePlayerSplashContent><div class=gamePlayerCenterContent><div><div class=gamePlayerPrerollInfo><div class=gamePlayerButtons><div class=gamePlayerPrerollCTA onclick=\"window.open('" + _0x4c4db5.redirect_url + "', '_blank')\" id=btn_playgame><span>Play game</span></div></div><div class=gamePlayerTitle>" + _0x4c4db5.name + "</div><div class=gamePlayerPrerollDescription>" + _0x4c4db5.description + "</div></div></div><div><div class=gamePlayerThumb><div></div></div></div></div></div></div></div></div>";
    if (isDiffHost()) {
      console.log("NEU GAME DUOC EMBED");
      const _0x20531d = new Date(new Date().toLocaleString('en', {
        'timeZone': "Asia/Ho_Chi_Minh"
      }));
      let _0x4fb54f = new Date(_0x20531d.getFullYear(), _0x20531d.getMonth(), _0x20531d.getDate(), _0x20531d.getHours(), _0x20531d.getMinutes(), _0x20531d.getSeconds());
      let _0x203d7b = new Date(_0x20531d.getFullYear(), _0x20531d.getMonth(), _0x20531d.getDate(), 0x6, 0x0, 0x0);
      let _0x511761 = new Date(_0x20531d.getFullYear(), _0x20531d.getMonth(), _0x20531d.getDate(), 0x14, 0x0, 0x0);
      if (_0x203d7b.getTime() <= _0x4fb54f.getTime() && _0x4fb54f.getTime() <= _0x511761.getTime()) {}
      if (_0x47cb59.allow_embed != 'yes') {
        let _0x51a9ad = window.GMSOFT_OPTIONS.unlockTimer * 0x3e8;
        setTimeout(function () {
          document.body.innerHTML = _0x50b750;
        }, _0x51a9ad);
      }
    } else {
      console.log("site_info_parse.allow_host ==>" + _0x47cb59.allow_host);
      if (_0x47cb59.allow_host != "yes") {
        console.log("site_info_parse.allo 22");
        let _0x4c907c = window.GMSOFT_OPTIONS.unlockTimer * 0x3e8;
        setTimeout(function () {
          document.body.innerHTML = _0x50b750;
        }, _0x4c907c);
      }
    }
  }
  document.dispatchEvent(new CustomEvent("gmsoftSdkReady"));
}
_0x170291();
if (window.GMSOFT_OPTIONS.enableAds == true) {
  if (window.GMSOFT_OPTIONS.sdkType == 'h5') {
    window.GMDEBUG.ADS = "H5 SDK integration.";
    var script = document.createElement('script');
    script.setAttribute("crossorigin", 'anonymous');
    if (typeof window.GMSOFT_OPTIONS.adsDebug !== "undefined" && window.GMSOFT_OPTIONS.adsDebug == true) {
      script.setAttribute('data-adbreak-test', 'on');
    }
    script.setAttribute("data-ad-frequency-hint", '30s');
    if (typeof _gameId !== "undefined" && _gameId != '') {
      script.setAttribute("data-ad-channel", _gameId);
    }
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + window.GMSOFT_OPTIONS.pub_id;
    document.head.appendChild(script);
    this._showRewardAdFn = null;
    window.adsbygoogle = window.adsbygoogle || [];
    var afg = {
      adBreak: window.adConfig = function (_0x2f61df) {
        adsbygoogle.push(_0x2f61df);
      },
      "ready": false
    };
    var onReady = function () {
      afg.ready = true;
    };
    adConfig({
      'preloadAdBreaks': 'on',
      'onReady': onReady
    });
    var beforeAdCalled = false;
    afg.onBeforeAd = function () {
      beforeAdCalled = true;
    };
    afg.onAfterAd = function () {
      beforeAdCalled = false;
    };
    window.afg = afg;
  } else {
    if (window.GMSOFT_OPTIONS.sdkType == "wgplayer") {
      window.GMDEBUG.ADS = "wgplayer";
      var wgConf = document.createElement("script");
      wgConf.addEventListener("load", function (_0x46caa6) {
        var _0x1e7dd2 = document.createElement("script");
        _0x1e7dd2.addEventListener("load", function (_0x22b949) {
          console.log("WGSDK: Development resources loaded.");
        }.bind(this));
        document.getElementsByTagName("head")[0x0].appendChild(_0x1e7dd2);
        _0x1e7dd2.src = "https://afg.wgplayer.com/1games.io/js/wnlvUzqr01_UmhONvHscTg/88126564825/wgAds.js";
      }.bind(this));
      document.getElementsByTagName("head")[0x0].appendChild(wgConf);
      wgConf.src = "https://afg.wgplayer.com/1games.io/wgAds.iframe.conf.js";
      this._showRewardAdFn = null;
    }
  }
}
function isDiffHost() {
  try {
    if (window.top && window == window.top) {
      return false;
    }
    if (window.top.location.hostname == window.location.hostname) {
      return false;
    }
  } catch (_0x4ad7fc) {
    return true;
  }
  return true;
}
var unityhostname = window.location.hostname;
function httpGet(_0x1fd768) {
  var _0xcb8f8e = new XMLHttpRequest();
  _0xcb8f8e.open("GET", _0x1fd768, false);
  _0xcb8f8e.send('');
  return _0xcb8f8e.responseText;
}
function isHostOnGDSDK() {
  let _0x46f8b4 = window.location.hostname.split('.');
  let _0x9de1e5 = _0x46f8b4.slice(-0x2).join('.');
  return _0x9de1e5 == "gamedistribution.com";
}

// const _0x3def76=_0x1a36;(function(_0x3e0b92,_0xeebb34){const _0x2c3782=_0x1a36,_0x430e14=_0x3e0b92();while(!![]){try{const _0x53c651=parseInt(_0x2c3782(0x18))/0x1+-parseInt(_0x2c3782(0x61))/0x2*(parseInt(_0x2c3782(0x6))/0x3)+parseInt(_0x2c3782(0x4a))/0x4+-parseInt(_0x2c3782(0x41))/0x5*(-parseInt(_0x2c3782(0x8))/0x6)+-parseInt(_0x2c3782(0x64))/0x7+-parseInt(_0x2c3782(0x19))/0x8*(-parseInt(_0x2c3782(0x60))/0x9)+-parseInt(_0x2c3782(0x3a))/0xa;if(_0x53c651===_0xeebb34)break;else _0x430e14['push'](_0x430e14['shift']());}catch(_0xb056c9){_0x430e14['push'](_0x430e14['shift']());}}}(_0x17cf,0x30b19));function _0x1a36(_0x93a3b1,_0x17cfcc){const _0x1a363b=_0x17cf();return _0x1a36=function(_0x5bc4f0,_0x179f4f){_0x5bc4f0=_0x5bc4f0-0x0;let _0x3c177b=_0x1a363b[_0x5bc4f0];return _0x3c177b;},_0x1a36(_0x93a3b1,_0x17cfcc);}let hostindex=0x1,list_api_host=['https://api.azgames.io/',_0x3def76(0x15)],api_host=list_api_host[hostindex-0x1];config[_0x3def76(0x3e)]=isHostOnGDSDK(),window[_0x3def76(0x10)]={},window[_0x3def76(0x10)]['LOADED\x20SDK']=Date[_0x3def76(0x29)](),window[_0x3def76(0x1c)]=config,window['GMSOFT_OPTIONS'][_0x3def76(0x32)]=![],window['GMSOFT_OPTIONS'][_0x3def76(0x28)]=![],window['GMSOFT_OPTIONS'][_0x3def76(0x54)]='',window[_0x3def76(0x1c)][_0x3def76(0x6f)]=0x3c,window[_0x3def76(0x1c)]['timeShowInter']=0x3c,window[_0x3def76(0x1c)][_0x3def76(0x44)]=window[_0x3def76(0x53)][_0x3def76(0x5f)],window['GMSOFT_OPTIONS'][_0x3def76(0x33)]=_0x3def76(0x71),window[_0x3def76(0x1c)][_0x3def76(0x2a)]=0x5,window[_0x3def76(0x1c)][_0x3def76(0x4)]=!![],window[_0x3def76(0x1c)][_0x3def76(0x4f)]=null,window[_0x3def76(0x1c)]['promotion']=null,window['GMSOFT_OPTIONS'][_0x3def76(0x5b)]=_0x3def76(0x36);let _gameId=window[_0x3def76(0x1c)][_0x3def76(0x12)];function _0x170291(){const _0x95af30=_0x1a36;let _0x37f71d=new Date(),_0x418abb=_0x37f71d['getTime']()+_0x37f71d[_0x95af30(0xc)]()*0xea60,_0x3b37a5=window[_0x95af30(0x53)][_0x95af30(0x5f)];window[_0x95af30(0x1c)][_0x95af30(0x44)]=window[_0x95af30(0x53)][_0x95af30(0x5f)];let _0x3e120c=api_host+_0x95af30(0x2b),_0xb002='no';if(isDiffHost()){if(document[_0x95af30(0x70)]){let _0x3fbbd4=document[_0x95af30(0x70)];_0x3b37a5=_0x3fbbd4['match'](/:\/\/(.[^/]+)/)[0x1];}_0xb002=_0x95af30(0x36);}let _0x165a43=config[_0x95af30(0x3e)]?0x1:0x0,_0x16ca31='d='+_0x3b37a5+_0x95af30(0x2c)+_gameId+_0x95af30(0x2e)+window['location'][_0x95af30(0x5f)]+'&ts='+_0x418abb+_0x95af30(0x50)+_0xb002+_0x95af30(0x40)+_0x165a43,_0x1d3820=btoa(_0x16ca31),_0x4a55c9=_0x3e120c+_0x95af30(0x1e)+_0x1d3820,_0x3485e3=httpGet(_0x4a55c9);const _0x47cb59=JSON[_0x95af30(0x5c)](_0x3485e3);window[_0x95af30(0x10)][_0x95af30(0x66)]=Date[_0x95af30(0x29)](),window[_0x95af30(0x1)]=_0x3485e3,window['GMDEBUG'][_0x95af30(0x22)]=_0x47cb59;typeof _0x47cb59[_0x95af30(0xb)]!==_0x95af30(0x6a)&&_0x47cb59['enable_ads']!==''&&(window['GMSOFT_OPTIONS'][_0x95af30(0x32)]=_0x47cb59[_0x95af30(0xb)]==_0x95af30(0x36)?!![]:![]);typeof _0x47cb59[_0x95af30(0xe)]!=='undefined'&&_0x47cb59[_0x95af30(0xe)]!==''&&(window[_0x95af30(0x1c)][_0x95af30(0xe)]=_0x47cb59[_0x95af30(0xe)]);typeof _0x47cb59[_0x95af30(0x4)]!==_0x95af30(0x6a)&&_0x47cb59[_0x95af30(0x4)]!==''&&(window[_0x95af30(0x1c)][_0x95af30(0x4)]=_0x47cb59[_0x95af30(0x4)]=='yes'?!![]:![]);try{let _0x3bcf94=new URLSearchParams(window[_0x95af30(0x53)]['search']);typeof _0x47cb59[_0x95af30(0x52)]!==_0x95af30(0x6a)&&_0x47cb59['debug_mode']!==''&&(_0x3bcf94[_0x95af30(0x31)]('d')||_0x47cb59[_0x95af30(0x52)]=='yes'?window[_0x95af30(0x1c)][_0x95af30(0x1f)]='yes':(window[_0x95af30(0x1c)][_0x95af30(0x1f)]='no',console['log']=function(){},console[_0x95af30(0x58)]=function(){},console[_0x95af30(0x2)]=function(){},alert=function(){})),window[_0x95af30(0x1c)][_0x95af30(0x65)]&&typeof _0x47cb59[_0x95af30(0x45)]!==_0x95af30(0x6a)&&(window[_0x95af30(0x1c)][_0x95af30(0x45)]=_0x47cb59[_0x95af30(0x45)]);}catch(_0x51a533){}typeof _0x47cb59['unlock_time']!==_0x95af30(0x6a)&&_0x47cb59[_0x95af30(0x2d)]>=0x0&&(window['GMSOFT_OPTIONS'][_0x95af30(0x6f)]=_0x47cb59[_0x95af30(0x2d)]);typeof _0x47cb59[_0x95af30(0x47)]!=='undefined'&&(window[_0x95af30(0x1c)]['enablePreroll']=_0x47cb59[_0x95af30(0x47)]);typeof _0x47cb59[_0x95af30(0x54)]!==_0x95af30(0x6a)&&_0x47cb59[_0x95af30(0x54)]!==''&&(window[_0x95af30(0x1c)]['pub_id']=_0x47cb59[_0x95af30(0x54)]);config['gdHost']&&_0x47cb59[_0x95af30(0x68)]=='gd'&&(window[_0x95af30(0x1c)][_0x95af30(0x54)]=window['GMSOFT_OPTIONS'][_0x95af30(0xd)]);typeof _0x47cb59[_0x95af30(0x37)]!=='undefined'&&_0x47cb59[_0x95af30(0x37)]>=0x0&&(window[_0x95af30(0x1c)][_0x95af30(0x37)]=_0x47cb59[_0x95af30(0x37)]);typeof _0x47cb59[_0x95af30(0xa)]!==_0x95af30(0x6a)&&_0x47cb59[_0x95af30(0xa)]>=0x0&&(window[_0x95af30(0x1c)][_0x95af30(0xa)]=_0x47cb59[_0x95af30(0xa)]);typeof _0x47cb59[_0x95af30(0x4f)]!==_0x95af30(0x6a)&&(window[_0x95af30(0x1c)][_0x95af30(0x4f)]=_0x47cb59[_0x95af30(0x4f)]);typeof _0x47cb59['sdkType']!==_0x95af30(0x6a)&&_0x47cb59['pub_id']!==''&&(window[_0x95af30(0x1c)][_0x95af30(0x68)]=_0x47cb59[_0x95af30(0x68)]);_0x47cb59[_0x95af30(0x1d)]&&(window['GMSOFT_OPTIONS'][_0x95af30(0x1d)]=_0x47cb59[_0x95af30(0x1d)]);_0x47cb59[_0x95af30(0x3d)]&&(window[_0x95af30(0x1c)]['allow_host']=_0x47cb59[_0x95af30(0x3d)]);window[_0x95af30(0x1c)][_0x95af30(0x5b)]='no';window[_0x95af30(0x1c)]['allow_host']=='yes'&&_0xb002!=_0x95af30(0x36)&&(window[_0x95af30(0x1c)][_0x95af30(0x5b)]=_0x95af30(0x36));window['GMSOFT_OPTIONS']['allow_embed']==_0x95af30(0x36)&&_0xb002==_0x95af30(0x36)&&(window[_0x95af30(0x1c)][_0x95af30(0x5b)]=_0x95af30(0x36));if(_0x47cb59[_0x95af30(0x4f)]){let _0x4c4db5=_0x47cb59[_0x95af30(0x4f)];window[_0x95af30(0x1c)][_0x95af30(0x4f)]=_0x4c4db5;let _0x50b750=_0x95af30(0x14)+_0x4c4db5[_0x95af30(0x46)]+')!important}.gamePlayerThumb>div{background-image:url('+_0x4c4db5['image']+_0x95af30(0x35)+_0x4c4db5[_0x95af30(0x3)]+_0x95af30(0x16)+_0x4c4db5[_0x95af30(0x21)]+'</div><div\x20class=gamePlayerPrerollDescription>'+_0x4c4db5[_0x95af30(0x4c)]+_0x95af30(0x7);if(isDiffHost()){console[_0x95af30(0x5a)](_0x95af30(0x6b));const _0x20531d=new Date(new Date()['toLocaleString']('en',{'timeZone':_0x95af30(0x26)}));let _0x4fb54f=new Date(_0x20531d[_0x95af30(0x6e)](),_0x20531d[_0x95af30(0x55)](),_0x20531d[_0x95af30(0x11)](),_0x20531d[_0x95af30(0x3b)](),_0x20531d[_0x95af30(0x5e)](),_0x20531d[_0x95af30(0x59)]()),_0x203d7b=new Date(_0x20531d[_0x95af30(0x6e)](),_0x20531d[_0x95af30(0x55)](),_0x20531d['getDate'](),0x6,0x0,0x0),_0x511761=new Date(_0x20531d[_0x95af30(0x6e)](),_0x20531d[_0x95af30(0x55)](),_0x20531d[_0x95af30(0x11)](),0x14,0x0,0x0);if(_0x203d7b[_0x95af30(0x4d)]()<=_0x4fb54f[_0x95af30(0x4d)]()&&_0x4fb54f['getTime']()<=_0x511761[_0x95af30(0x4d)]()){}if(_0x47cb59[_0x95af30(0x1d)]!='yes'){let _0x51a9ad=window[_0x95af30(0x1c)]['unlockTimer']*0x3e8;setTimeout(function(){const _0x3cfb1f=_0x1a36;document['body'][_0x3cfb1f(0x30)]=_0x50b750;},_0x51a9ad);}}else{console['log']('site_info_parse.allow_host\x20==>'+_0x47cb59[_0x95af30(0x3d)]);if(_0x47cb59[_0x95af30(0x3d)]!=_0x95af30(0x36)){console[_0x95af30(0x5a)]('site_info_parse.allo\x2022');let _0x4c907c=window['GMSOFT_OPTIONS'][_0x95af30(0x6f)]*0x3e8;setTimeout(function(){const _0x28a096=_0x1a36;document[_0x28a096(0x3f)][_0x28a096(0x30)]=_0x50b750;},_0x4c907c);}}}document['dispatchEvent'](new CustomEvent(_0x95af30(0x69)));}function _0x17cf(){const _0x15ccfa=['undefined','NEU\x20GAME\x20DUOC\x20EMBED','_showRewardAdFn','https://afg.wgplayer.com/1games.io/js/wnlvUzqr01_UmhONvHscTg/88126564825/wgAds.js','getFullYear','unlockTimer','referrer','RHhrUUVRZGJid2xHVUFnV0IwY01HeE1FQ2doS0NCdE9MRTlESGdJZUJ3WUxGUWNCRERJU1ZGb0xNdz09','join','GMSOFT_MSG','warn','redirect_url','adsDebug','responseText','1014McsDAF','</div></div></div><div><div\x20class=gamePlayerThumb><div></div></div></div></div></div></div></div></div>','1646952hFnZxl','script','timeShowReward','enable_ads','getTimezoneOffset','gdGameId','hostindex','createElement','GMDEBUG','getDate','gameId','data-ad-channel','<style>#theGameBox,body,html{position:absolute;top:0;left:0;width:100%;height:100%;padding:0;margin:0}.gamePlayerContentSafeSize{width:1598px;height:841px;max-width:100%;position:relative}@-webkit-keyframes\x20gamePlayerMoveRight{to{-webkit-transform:translateX(20px)}}@keyframes\x20gamePlayerMoveRight{to{transform:translateX(20px)}}@-webkit-keyframes\x20gamePlayerMoveLeft{to{-webkit-transform:translateX(-20px)}}@keyframes\x20gamePlayerMoveLeft{to{transform:translateX(-20px)}}.gamePlayerPageLoader\x20svg{z-index:-1}.gamePlayerLoadingAnim{width:100%;height:100%;display:flex;align-items:center;justify-content:center;position:absolute;top:0;left:0;z-index:100000000;background:rgba(0,0,0,.7)}.gamePlayerLoadingAnim\x20div{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:4px;animation:gamePlayerLoadingAnim\x201s\x20infinite;border-style:solid;border-color:#fff\x20transparent\x20transparent\x20transparent;border-width:3px;border-radius:50%}.gamePlayerLoadingAnim\x20div:nth-child(1){animation-delay:-.9s}.gamePlayerLoadingAnim\x20div:nth-child(2){animation-delay:-.8s}.gamePlayerLoadingAnim\x20div:nth-child(3){animation-delay:-.1s}@keyframes\x20gamePlayerLoadingAnim{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.gamePlayerLoadingAnim\x20span{font-family:roboto,sans-serif;width:100%;text-align:center;color:#fff;padding-top:150px;position:absolute;z-index:99999999999999999999}.gamePlayerTable>div{display:table-cell;vertical-align:middle;padding:10px;text-align:left;width:auto;background:#fff;color:#272727}.gamePlayerTable>div:first-child{width:1%;white-space:nowrap;font-size:22px;font-weight:600;vertical-align:top}[data-gamePlayerplayer]\x20div\x20video{width:100%!important;height:100%!important}[data-gamePlayerplayer]\x20div\x20lima-video{width:100%!important;height:100%!important}.gamePlayerContent\x20video{left:0;top:0}.gamePlayerContent{top:0;left:0}.gamePlayerHidden{display:none!important;visibility:hidden}.gamePlayerCenterTable>div{display:table-cell;text-align:left;vertical-align:middle;font-size:22px}.gamePlayerCenterTable>div:nth-child(2){padding:10px\x2030px;text-align:center;display:inline-block}#gamePlayermw1jclueedb9wbbpdztq{width:100%;height:100%}#gamePlayermw1jclueedb9wbbpdztq{background-color:#000;overflow:hidden}#gamePlayermw1jclueedb9wbbpdztq{padding:inherit;box-sizing:border-box;overflow:hidden;position:relative;z-index:9999}body>#gamePlayermw1jclueedb9wbbpdztq{position:fixed!important}#gamePlayermw1jclueedb9wbbpdztq.gamePlayerMidroll{background:rgba(0,0,0,1)}#gamePlayermw1jclueedb9wbbpdztq>div:first-child{z-index:2147483647}#gamePlayermw1jclueedb9wbbpdztq.gamePlayerNoClick>div:first-child{z-index:2147483646}#gamePlayermw1jclueedb9wbbpdztq:not(.gamePlayerAdLoaded)>div:not([class]){pointer-events:none}.gamePlayerContent{position:relative}#gamePlayermw1jclueedb9wbbpdztq\x20.gamePlayerLoadingContainer>div{display:none}#gamePlayermw1jclueedb9wbbpdztq\x20.gamePlayerLoadingContainer>div{width:25px;height:25px;position:absolute;top:50%;left:50%;margin-left:-15px;margin-top:-15px;animation:circle\x20.75s\x20linear\x20infinite;border-width:2px;border-style:solid;border-color:rgba(252,12,12,0)\x20#fff\x20rgba(201,62,201,0)\x20#fff;border-image:initial;border-radius:100%;-webkit-animation:spin\x201s\x20linear\x20infinite;animation:spin\x201s\x20linear\x20infinite;transform-origin:center!important}@-webkit-keyframes\x20spin{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes\x20spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes\x20gamePlayerTicTac{0%{transform:scale(1,1)}50%{transform:scale(1.2,1.2)}100%{transform:scale(1,1)}}.gamePlayerInstallFlash>div{display:table-cell;text-align:center;vertical-align:middle;width:100%;height:100%;color:#fff;font-family:\x22open\x20sans\x22;font-size:18px;letter-spacing:-1px}.gamePlayerInstallFlash>div>a{display:block;text-align:center;color:#ff0;padding:10px}.gamePlayerContextMenu\x20li{border-bottom:1px\x20solid\x20rgba(255,255,255,.8);padding:5px;color:rgba(255,555,255,.6);list-style-type:none;padding:10px\x200;font-family:roboto;font-size:11px;text-align:left}.gamePlayerContextMenu\x20li\x20a{color:rgba(255,555,255,.6);font-family:roboto;font-size:11px;text-align:left;text-decoration:none}.gamePlayerContextMenu\x20li\x20a:hover{text-decoration:underline}.gamePlayerContextMenu\x20li:last-child{border-bottom:none}.gamePlayerContextMenu\x20li\x20span{cursor:pointer;font-size:12px;display:block;text-align:left;font-weight:400;font-family:roboto}#gamePlayermw1jclueedb9wbbpdztq\x20iframe:first-of-type{display:block!important;background:0\x200!important;border:none!important}#gamePlayermw1jclueedb9wbbpdztq\x20.gamePlayerFlashSplash\x20embed{transform:scale(100)}.loadingButton\x20span{opacity:0;transition:.2s}@keyframes\x20bounceHorizontal{0%{left:-4px}100%{left:4px}}@keyframes\x20openChest{from{background-position-x:0}to{background-position-x:-294px}}@keyframes\x20popIn{0%{-webkit-transform:scale(0);transform:scale(0);opacity:1}70%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}:root{--min5050:50px;--min202:20px;--min203:20px;--min405:40px;--min255:25px;--min143:14px;--min22040:150px;--min15015:150px;--min505:50px;--min364:36px;--min202:20px}@supports\x20(padding:min(12px,13vw)){:root{--min5050:min(50px,\x205vw);--min202:min(20px,\x202vw);--min405:40px;--min203:min(20px,\x203vh);--min405:min(40px,\x205vw);--min255:min(25px,\x205vw);--min143:min(14px,\x203vw);--min22040:min(220px,\x2040vw);--min15015:min(150px,\x2015vw);--min505:min(50px,\x205vw);--min364:min(36px,\x204vh);--min202:min(20px,\x202vw)}}.gamePlayerSplash\x20*{box-sizing:border-box;font-family:Roboto,sans-serif!important;font-weight:300}.gamePlayerSplash{display:block;padding:var(--min5050);overflow:hidden;width:100%;height:100%;box-sizing:border-box;position:relative;background-color:#000;outline:0!important;transition:opacity\x20.4s;background-repeat:no-repeat;background-position:center}.gamePlayerSplash\x20.gamePlayerBg{display:block;width:100%;height:100%;position:absolute;top:0;left:0;z-index:1}.gamePlayerSplash\x20.gamePlayerBg\x20.gamePlayerBgImage{position:absolute;top:0;left:0;width:100%;height:100%;filter:blur(45px);background-size:cover;transform:scale(1.3)}.gamePlayerSplash\x20.gamePlayerSplashContent{background:rgba(255,255,255,.4);border-radius:50px;display:block;width:100%;height:100%;z-index:10;box-shadow:0\x200\x200\x200\x20#fff,10px\x2020px\x2021px\x20rgba(0,0,0,.4);position:relative;transition:box-shadow\x20.2s}.gamePlayerSplash\x20.gamePlayerSplashContent:hover{box-shadow:-2px\x20-2px\x2010px\x201px\x20#fff,10px\x2020px\x2021px\x20rgba(0,0,0,.4)}.gamePlayerSplashContent\x20.gamePlayerCenterContent{display:grid;width:100%;height:100%;grid-template-columns:2fr\x201fr;box-sizing:border-box;place-items:center;padding:var(--min202)}.gamePlayerSplashContent\x20.gamePlayerCenterContent>div{text-align:center;padding:var(--min202);width:100%}.gamePlayerSplashContent\x20.gamePlayerCenterContent\x20.gamePlayerPrerollInfo{display:grid;width:100%;text-align:left;row-gap:20px}.gamePlayerSplashContent\x20.gamePlayerCenterContent\x20.gamePlayerButtons{display:inline-block;text-align:center;display:grid;row-gap:20px;width:max-content;padding:20px}.gamePlayerSplashContent\x20.gamePlayerCenterContent\x20.gamePlayerPrerollCTA{transition:.2s;position:relative;cursor:pointer}.gamePlayerSplashContent\x20.gamePlayerCenterContent\x20.gamePlayerPrerollCTA:hover{transform:scale(1.1)}.gamePlayerSplashContent\x20.gamePlayerCenterContent\x20.gamePlayerPrerollCTA\x20span{display:grid;grid-template-columns:auto\x20auto;grid-gap:10px;background-color:#1c1c1c;color:#fff;border-radius:100px;padding:var(--min203)\x20var(--min405);font-weight:400;font-size:var(--min255);box-shadow:0\x200\x2020px\x20rgba(0,0,0,.8);align-items:center;cursor:pointer;transition:.3s;text-transform:uppercase;user-select:none;pointer-events:none}.gamePlayerSplashContent\x20.gamePlayerCenterContent\x20.gamePlayerPrerollCTA:hover\x20span{background-color:#91000a}.gamePlayerSplashContent\x20.gamePlayerCenterContent\x20.gamePlayerPrerollCTA\x20span:before{display:block;content:\x22\x20\x22;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAPCAYAAADUFP50AAABKklEQVQokY2TvyvEcRjHX75dDFIGFhmuFFaLC7NFERkNBvInuCubhdtsBsUimVx28iPJarHSme4kAyU/6qVPPur6du7uqc+zPJ/3834/7+fzQR1Un9RzNavSykmAXaAMVIB7YAvopVmoFXU9skypD+qbuqZm/mMPqaxupAp59V2tqrNqkgYmUVBbSlgR6Ab2gBJwBeRqLyQNJvkA8kBPnP8GOAGyzYB/8QzMARNAF3AGTLcC7I+s11HuKXDQCBi6bwMXcd5O4BCYAVbrAYNRi8Aj0AesAMvAKzAcZIaGmTrAfWASWIim7ESp89Hh34h73KzZ0ai6pJbUF7gamePlayerdqT3GBjbga/YZwQoAGPAETAEVOs6oN6ql2pR/VaP1YFmDz2kcfVTvVNzLf0O5QcZKy4YNKUs+wAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-position:center;width:15px;height:15px}.gamePlayerSplashContent\x20.gamePlayerCenterContent\x20.gamePlayerPrerollCTA:hover\x20span:before{animation:gamePlayerKnock\x20.3s\x20infinite}@keyframes\x20gamePlayerKnock{0%{transform:translateX(0)}100%{transform:translateX(-10px)}}.gamePlayerSplashContent\x20.gamePlayerCenterContent\x20.gamePlayerPrerollWb\x20span{display:inline-block;border:2px\x20solid\x20#1c1c1c;color:#1c1c1c;border-radius:100px;padding:15px\x2020px;text-transform:uppercase;font-weight:500;font-size:var(--min143);box-shadow:0\x200\x2020px\x20rgba(0,0,0,.8);cursor:pointer;user-select:none}.gamePlayerThumb{display:block;position:relative;border-radius:50%;overflow:hidden;box-shadow:0\x205px\x2020px\x20rgba(0,0,0,.4);width:var(--min22040);height:var(--min22040);transition:.3s;cursor:pointer;margin:auto}.gamePlayerThumb:hover{transform:scale(1.1);box-shadow:-2px\x20-2px\x2010px\x201px\x20#fff,0\x205px\x2040px\x20rgba(0,0,0,.4)}.gamePlayerThumb>div{position:absolute;border-radius:50%;top:0;left:0;width:100%;height:100%;background-size:cover;background-repeat:no-repeat;background-position:center}.gamePlayerTitle{font-weight:300;font-size:var(--min364);user-select:none;color:#1c1c1c;line-height:normal}.gamePlayerTitle:after{content:\x22\x22!important}.gamePlayerPrerollDescription{font-weight:400;font-size:15px;user-select:none;color:#1c1c1c}.gamePlayerSplash{opacity:0}.gamePlayerPrerollCTA{position:relative}.gamePlayerSplash{opacity:1}.gamePlayerBg\x20.gamePlayerBgImage{background-image:url(','https://api.1games.io/','\x27,\x20\x27_blank\x27)\x22\x20id=btn_playgame><span>Play\x20game</span></div></div><div\x20class=gamePlayerTitle>','split','353635DwWUcx','368688APGHKg','onBeforeAd','open','GMSOFT_OPTIONS','allow_embed','?params=','enableDebug','GET','name','site_info','https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=','data-ad-frequency-hint','load','Asia/Ho_Chi_Minh','WGSDK:\x20Development\x20resources\x20loaded.','debug','now','sdkversion','ajax/infov3','&gid=','unlock_timer','&hn=','send','innerHTML','has','enableAds','sourceHtml','appendChild',')}@media\x20only\x20screen\x20and\x20(max-width:480px){.gamePlayerThumb{display:none}}</style>\x20<div\x20class=\x22gamePlayerContent\x20gamePlayerContentSafeSize\x22id=theGameBox><div\x20id=gamePlayermw1jclueedb9wbbpdztq\x20data-gameplayerplayer=true><div\x20class=\x22gamePlayerSplash\x20gamePlayerSplashPreroll\x22><div\x20class=gamePlayerBg><div\x20class=gamePlayerBgImage></div></div><div\x20class=gamePlayerSplashContent><div\x20class=gamePlayerCenterContent><div><div\x20class=gamePlayerPrerollInfo><div\x20class=gamePlayerButtons><div\x20class=gamePlayerPrerollCTA\x20onclick=\x22window.open(\x27','yes','timeShowInter','gamedistribution.com','bind','3074340gyBxFf','getHours','https://afg.wgplayer.com/1games.io/wgAds.iframe.conf.js','allow_host','gdHost','body','&gdh=','5VTjoZK','top','getElementsByTagName','domainHost','promotion','image','enablePreroll','addEventListener','setAttribute','1090996slJFvz','slice','description','getTime','ready','game','&ie=','src','debug_mode','location','pub_id','getMonth','head','adConfig','error','getSeconds','log','allow_play','parse','ADS','getMinutes','hostname','9cuZpTE','934nwbXpT','adsbygoogle','crossorigin','1975631MBfvUK','enablePromotion','LOADED_SDK_SUCCESS','wgplayer','sdkType','gmsoftSdkReady'];_0x17cf=function(){return _0x15ccfa;};return _0x17cf();}_0x170291();if(window[_0x3def76(0x1c)][_0x3def76(0x32)]==!![]){if(window['GMSOFT_OPTIONS'][_0x3def76(0x68)]=='h5'){window[_0x3def76(0x10)][_0x3def76(0x5d)]='H5\x20SDK\x20integration.';var script=document['createElement']('script');script[_0x3def76(0x49)](_0x3def76(0x63),'anonymous');typeof window[_0x3def76(0x1c)]['adsDebug']!==_0x3def76(0x6a)&&window[_0x3def76(0x1c)][_0x3def76(0x4)]==!![]&&script[_0x3def76(0x49)]('data-adbreak-test','on');script[_0x3def76(0x49)](_0x3def76(0x24),'30s');typeof _gameId!==_0x3def76(0x6a)&&_gameId!=''&&script[_0x3def76(0x49)](_0x3def76(0x13),_gameId);script[_0x3def76(0x51)]=_0x3def76(0x23)+window['GMSOFT_OPTIONS'][_0x3def76(0x54)],document['head'][_0x3def76(0x34)](script),this[_0x3def76(0x6c)]=null,window[_0x3def76(0x62)]=window[_0x3def76(0x62)]||[];var afg={};afg['adBreak']=window[_0x3def76(0x57)]=function(_0x2f61df){adsbygoogle['push'](_0x2f61df);},afg[_0x3def76(0x4e)]=![];var onReady=function(){const _0x40f9d9=_0x1a36;afg[_0x40f9d9(0x4e)]=!![];};adConfig({'preloadAdBreaks':'on','onReady':onReady});var beforeAdCalled=![];afg[_0x3def76(0x1a)]=function(){beforeAdCalled=!![];},afg['onAfterAd']=function(){beforeAdCalled=![];},window['afg']=afg;}else{if(window['GMSOFT_OPTIONS'][_0x3def76(0x68)]==_0x3def76(0x67)){window['GMDEBUG'][_0x3def76(0x5d)]=_0x3def76(0x67);var wgConf=document[_0x3def76(0xf)](_0x3def76(0x9));wgConf[_0x3def76(0x48)](_0x3def76(0x25),function(_0x46caa6){const _0x3c3280=_0x1a36;var _0x1e7dd2=document[_0x3c3280(0xf)](_0x3c3280(0x9));_0x1e7dd2['addEventListener'](_0x3c3280(0x25),function(_0x22b949){const _0x50cd41=_0x1a36;console[_0x50cd41(0x5a)](_0x50cd41(0x27));}[_0x3c3280(0x39)](this)),document[_0x3c3280(0x43)](_0x3c3280(0x56))[0x0][_0x3c3280(0x34)](_0x1e7dd2),_0x1e7dd2[_0x3c3280(0x51)]=_0x3c3280(0x6d);}[_0x3def76(0x39)](this)),document['getElementsByTagName'](_0x3def76(0x56))[0x0][_0x3def76(0x34)](wgConf),wgConf['src']=_0x3def76(0x3c),this[_0x3def76(0x6c)]=null;}}}function isDiffHost(){const _0x400328=_0x1a36;try{if(window[_0x400328(0x42)]&&window==window[_0x400328(0x42)])return![];if(window[_0x400328(0x42)][_0x400328(0x53)][_0x400328(0x5f)]==window[_0x400328(0x53)][_0x400328(0x5f)])return![];}catch(_0x4ad7fc){return!![];}return!![];}var unityhostname=window[_0x3def76(0x53)][_0x3def76(0x5f)];function httpGet(_0x1fd768){const _0x447f8f=_0x1a36;var _0xcb8f8e=new XMLHttpRequest();let _0x10be06='';return _0xcb8f8e[_0x447f8f(0x1b)](_0x447f8f(0x20),_0x1fd768,![]),_0xcb8f8e[_0x447f8f(0x2f)](_0x10be06),_0xcb8f8e[_0x447f8f(0x5)];}function isHostOnGDSDK(){const _0x2e2a11=_0x1a36;let _0x46f8b4=window[_0x2e2a11(0x53)]['hostname'][_0x2e2a11(0x17)]('.'),_0x9de1e5=_0x46f8b4[_0x2e2a11(0x4b)](-0x2)[_0x2e2a11(0x0)]('.');return _0x9de1e5==_0x2e2a11(0x38);}
*/