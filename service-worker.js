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
    "revision": "8ec28ecdca8d9d4a52de952b653b8dac"
  },
  {
    "url": "about/index.html",
    "revision": "8ffde814748e2f2169ca0b1c0d62aacd"
  },
  {
    "url": "assets/css/0.styles.01627f3c.css",
    "revision": "90b1407000e752fbeb41d8a21f8b6d05"
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
    "url": "assets/js/10.55a8da5a.js",
    "revision": "2475604c6045daefce8eb815974a450f"
  },
  {
    "url": "assets/js/11.bd9f2ecc.js",
    "revision": "bf73642fcefd9ae132cee05d89af7f31"
  },
  {
    "url": "assets/js/12.14c550b4.js",
    "revision": "513c0108b394d92778e3805f09862999"
  },
  {
    "url": "assets/js/2.1e350ad2.js",
    "revision": "4e2746321fbc4da83df50794d9be98bf"
  },
  {
    "url": "assets/js/3.efad92fe.js",
    "revision": "f4c89c0641053528b97034b595e8ce3e"
  },
  {
    "url": "assets/js/4.866a5b30.js",
    "revision": "af3c52a7bbc73492a86685ab64c546e5"
  },
  {
    "url": "assets/js/5.cde3a082.js",
    "revision": "537878cecf3fa6a646c9a29ca8cceca4"
  },
  {
    "url": "assets/js/6.3dfb5db8.js",
    "revision": "c584b8f886ae18555deb0ea12943f574"
  },
  {
    "url": "assets/js/7.f442a699.js",
    "revision": "6e8b9cd09a96a9293ed366c67f3a0a7f"
  },
  {
    "url": "assets/js/8.ccf951e4.js",
    "revision": "b7b474f5c3f06b661089b384e931ef41"
  },
  {
    "url": "assets/js/9.a74b0025.js",
    "revision": "98544ce5128d70583cec0cf1528c7108"
  },
  {
    "url": "assets/js/app.4a540de0.js",
    "revision": "fdc3d96134462e85dc50f8634d1c807c"
  },
  {
    "url": "blog/blog开张感言.html",
    "revision": "e52883cd19a7a06939f885a10f3ce470"
  },
  {
    "url": "blog/ios输入框type=search键盘是回车没有搜索.html",
    "revision": "4509c87a30a1242adac3c540e606c925"
  },
  {
    "url": "blog/js下载后端返回的文件流.html",
    "revision": "fe8ad14a159341defb5489e4329426e6"
  },
  {
    "url": "blog/vue开发微信公众号记录.html",
    "revision": "3054d0eb26eb80638de0ec8698d792fc"
  },
  {
    "url": "blog/windows下MongoDB安装及配置.html",
    "revision": "4bf38f3962ee94674f991a5f809ed9dc"
  },
  {
    "url": "blog/接入招商银行一网通扫码支付.html",
    "revision": "75fbe642d6ae2d0989595d4b4c57e35e"
  },
  {
    "url": "blog/环信通话回声.html",
    "revision": "0c9aff502ebdfbcfc89bd6e06e2c3ff7"
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
    "revision": "07f2b3a993111e3f98b0dc5f124fd4a5"
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
