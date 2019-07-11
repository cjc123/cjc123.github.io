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
    "revision": "03e9ff351c42009689c8edc2a65a6662"
  },
  {
    "url": "about/index.html",
    "revision": "b13e913190d63768fa9fe8ab5b645e45"
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
    "url": "assets/js/10.70b6a122.js",
    "revision": "eaf8124f409acf88f0e822bff4d4f2c6"
  },
  {
    "url": "assets/js/11.1a627e4b.js",
    "revision": "9d5229281a7e7c85bcc379588d591f41"
  },
  {
    "url": "assets/js/2.10c0548d.js",
    "revision": "3ad1ca36aed5a5c0af53df1830e8439e"
  },
  {
    "url": "assets/js/3.c2f10139.js",
    "revision": "8c48abce33ec7f7ea4223550cacd4452"
  },
  {
    "url": "assets/js/4.fbe0117c.js",
    "revision": "86b9cdc2e72792816e94e0a89f78b4f2"
  },
  {
    "url": "assets/js/5.d9883888.js",
    "revision": "d1377ee91b412023afff54cfb43dc342"
  },
  {
    "url": "assets/js/6.369f2f01.js",
    "revision": "be4ea05d5e4292b37b1135d4ba951b88"
  },
  {
    "url": "assets/js/7.f442a699.js",
    "revision": "6e8b9cd09a96a9293ed366c67f3a0a7f"
  },
  {
    "url": "assets/js/8.3cab1b62.js",
    "revision": "adebb0af106ac9088fbdb94852a8654a"
  },
  {
    "url": "assets/js/9.4d127889.js",
    "revision": "08a5e15535d8d3cd14f9916e1bd84903"
  },
  {
    "url": "assets/js/app.5fcc0667.js",
    "revision": "a332c7e56cf0be435363726e26ab5b3e"
  },
  {
    "url": "blog/blog开张感言.html",
    "revision": "e45afafa241935b2c803f7a25739e519"
  },
  {
    "url": "blog/js下载后端返回的文件流.html",
    "revision": "c9919e38434739e94971b4392a385218"
  },
  {
    "url": "blog/vue开发微信公众号记录.html",
    "revision": "f2d6574640b50a5864c82061d07c58be"
  },
  {
    "url": "blog/windows下MongoDB安装及配置.html",
    "revision": "42cf02da26b527ec3c327ab6b48c6567"
  },
  {
    "url": "blog/接入招商银行一网通扫码支付.html",
    "revision": "f3c4b5378d6378e5d8c67eaf5e39252f"
  },
  {
    "url": "blog/环信通话回声.html",
    "revision": "3578da17121b0a2818c41c0791c6655b"
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
    "revision": "15fd6fe8b6dfb01b80f5f24e2a0b3c5f"
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
