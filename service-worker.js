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

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    url: "404.html",
    revision: "240f46a2ece23bac76a4389510f01411"
  },
  {
    url: "about/index.html",
    revision: "07707a57f8632601f149701213e80f29"
  },
  {
    url: "assets/css/0.styles.01627f3c.css",
    revision: "90b1407000e752fbeb41d8a21f8b6d05"
  },
  {
    url: "assets/img/authorization.1092b8ce.png",
    revision: "1092b8ce927d06d1f3ece1302c45a761"
  },
  {
    url: "assets/img/hb.967541f6.jpg",
    revision: "967541f636378e5dc0bee778bacba647"
  },
  {
    url: "assets/img/mongodb_fw.e8ed3bec.jpg",
    revision: "e8ed3beccad725f8b2b03712fd8fa23e"
  },
  {
    url: "assets/img/mongodb_qd.a1fa20b7.jpg",
    revision: "a1fa20b7fabf0ebe4d8bdc57767c291b"
  },
  {
    url: "assets/img/search.83621669.svg",
    revision: "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    url: "assets/js/10.0db33e57.js",
    revision: "3bb7eaa0d1e5073c4cd6301e8cdc4bd0"
  },
  {
    url: "assets/js/2.43fdb5df.js",
    revision: "b1475b5e3d9a97f7bbd8a30ea25b4da9"
  },
  {
    url: "assets/js/3.c2f10139.js",
    revision: "8c48abce33ec7f7ea4223550cacd4452"
  },
  {
    url: "assets/js/4.866a5b30.js",
    revision: "af3c52a7bbc73492a86685ab64c546e5"
  },
  {
    url: "assets/js/5.d29592ee.js",
    revision: "cc66688a16df1df0c93b8c955e37f0ed"
  },
  {
    url: "assets/js/6.d93f6499.js",
    revision: "2c83bcf0e926019c617f42bf2d2c44e8"
  },
  {
    url: "assets/js/7.1c824522.js",
    revision: "a3d5dc5779f565562004d79507efc6e5"
  },
  {
    url: "assets/js/8.66b36867.js",
    revision: "32c25496206f0574316757e522456c1c"
  },
  {
    url: "assets/js/9.3798c768.js",
    revision: "c93fe26d2a8401e8262b4fe82fcc9811"
  },
  {
    url: "assets/js/app.021ef4ac.js",
    revision: "f55e8a8cdd5a5633c42278a09bc865b8"
  },
  {
    url: "blog/blog开张感言.html",
    revision: "7ee66ec83f91e3a234270360d34590a7"
  },
  {
    url: "blog/js下载后端返回的文件流.html",
    revision: "fba70c1b78a84205277f7f9b57cb37f3"
  },
  {
    url: "blog/vue开发微信公众号记录.html",
    revision: "12e724c45cbe0b81bf1a09a61276232e"
  },
  {
    url: "blog/windows下MongoDB安装及配置.html",
    revision: "ab0d29192e78eb17d7023009e5eeb764"
  },
  {
    url: "blog/接入招商银行一网通扫码支付.html",
    revision: "38381f813f93e69eab69bba6fc80de08"
  },
  {
    url: "images/bg.jpg",
    revision: "5e5023e1aa23956b710fb6b635d77b70"
  },
  {
    url: "images/logo.jpg",
    revision: "82d1cac9ba5727c57b7dd291de849d3e"
  },
  {
    url: "index.html",
    revision: "b34f0516b58ee8a0c9855fa6d3335051"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener("message", event => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting") {
    event.waitUntil(
      self
        .skipWaiting()
        .then(
          () => replyPort.postMessage({ error: null }),
          error => replyPort.postMessage({ error })
        )
    );
  }
});
