/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c1d0c503134ff0bd5141544934d7071f"
  },
  {
    "url": "about/index.html",
    "revision": "2372f2e09f70e52b64ad3584c948207b"
  },
  {
    "url": "assets/css/0.styles.f095bb12.css",
    "revision": "c46d1fb7b4c981a085679329ff2fe679"
  },
  {
    "url": "assets/img/authorization.1092b8ce.png",
    "revision": "1092b8ce927d06d1f3ece1302c45a761"
  },
  {
    "url": "assets/img/hb.967541f6.jpg",
    "revision": "967541f636378e5dc0bee778bacba647"
  },
  {
    "url": "assets/img/mongodb_fw.e8ed3bec.jpg",
    "revision": "e8ed3beccad725f8b2b03712fd8fa23e"
  },
  {
    "url": "assets/img/mongodb_qd.a1fa20b7.jpg",
    "revision": "a1fa20b7fabf0ebe4d8bdc57767c291b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b3e8c8db.js",
    "revision": "11aecfda4c0cbc85f6254d7d7f5b2fd6"
  },
  {
    "url": "assets/js/11.ee140743.js",
    "revision": "3581fc605bfe77ba4a735384847c38f4"
  },
  {
    "url": "assets/js/12.396663ae.js",
    "revision": "0baaea262abb2c050b1727bc8eba3fd7"
  },
  {
    "url": "assets/js/13.c135fa2f.js",
    "revision": "e9e7ac75214f7139707c2c1d557c73c4"
  },
  {
    "url": "assets/js/2.5a5dea6e.js",
    "revision": "bf344c0b69fdd4151c0b812dda0a4f31"
  },
  {
    "url": "assets/js/3.d35465a0.js",
    "revision": "83941e4624f94668bf61e62c5f78a1dc"
  },
  {
    "url": "assets/js/4.f0d07000.js",
    "revision": "0b03ac294b9df098d8a0630c038bcd19"
  },
  {
    "url": "assets/js/5.e1034eb2.js",
    "revision": "b164e3024311b6a8f089433b4dbf5b84"
  },
  {
    "url": "assets/js/6.ea31b299.js",
    "revision": "81d498ba0357cd755289411d5ee245f6"
  },
  {
    "url": "assets/js/7.63e05056.js",
    "revision": "97488d0526a5da89b4f7e755c9e7ce39"
  },
  {
    "url": "assets/js/8.8efbbf51.js",
    "revision": "2a7ed0936642d87d16417dc6bd012db5"
  },
  {
    "url": "assets/js/9.cee105aa.js",
    "revision": "72d119939e449a8787cd6bfa792fc774"
  },
  {
    "url": "assets/js/app.e2b940ca.js",
    "revision": "7e39e174fc379f920e11def2de25f5a5"
  },
  {
    "url": "blog/blog开张感言.html",
    "revision": "aadbfe74285a7610537311c4f595ad9f"
  },
  {
    "url": "blog/ios输入框type=search键盘是回车没有搜索.html",
    "revision": "2522121764d5ec8f0c7486b86d1cdfc9"
  },
  {
    "url": "blog/js下载后端返回的文件流.html",
    "revision": "f1a9c72748898d6acfdd83151b127929"
  },
  {
    "url": "blog/vue开发微信公众号记录.html",
    "revision": "507af3660fdea4abb5525f1f873fd775"
  },
  {
    "url": "blog/windows下MongoDB安装及配置.html",
    "revision": "99ca4e881ebfbf75547f3d388514bbc0"
  },
  {
    "url": "blog/接入招商银行一网通扫码支付.html",
    "revision": "45da86773b5a8bc667a7c659469e2a53"
  },
  {
    "url": "blog/环信通话回声.html",
    "revision": "0143be68655bc51bd8f4df8b282ab385"
  },
  {
    "url": "blog/遇到问题汇总.html",
    "revision": "aaf5657fcff896ac949b58ca227e8660"
  },
  {
    "url": "images/bg.jpg",
    "revision": "5e5023e1aa23956b710fb6b635d77b70"
  },
  {
    "url": "images/logo.jpg",
    "revision": "82d1cac9ba5727c57b7dd291de849d3e"
  },
  {
    "url": "index.html",
    "revision": "a39df9078782addcea83b7fa306a3c11"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
