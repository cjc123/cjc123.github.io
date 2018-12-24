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
    "revision": "3087cc2dbbbe2617fcdd2108581fa2f3"
  },
  {
    "url": "about/index.html",
    "revision": "249bb7e3ca9c3111ca0793fbf10939b6"
  },
  {
    "url": "assets/css/0.styles.01627f3c.css",
    "revision": "90b1407000e752fbeb41d8a21f8b6d05"
  },
  {
    "url": "assets/img/hb.967541f6.jpg",
    "revision": "967541f636378e5dc0bee778bacba647"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.5f3a8c93.js",
    "revision": "006d93a48a928408df5ac92327047b64"
  },
  {
    "url": "assets/js/3.60d0e534.js",
    "revision": "dd37663df16179d757d291f08edd8f4e"
  },
  {
    "url": "assets/js/4.028c7cac.js",
    "revision": "7cc96642b7138131c93024e22a1079b3"
  },
  {
    "url": "assets/js/5.0ec12852.js",
    "revision": "8883f386ed427579593745e379db3b2d"
  },
  {
    "url": "assets/js/6.f41b35dd.js",
    "revision": "25567ddce925d4c1659147592282c74f"
  },
  {
    "url": "assets/js/app.67802fbe.js",
    "revision": "1363e98b17d0b17f7614af5ecd309c23"
  },
  {
    "url": "blog/blog开张感言.html",
    "revision": "8a06b73f2a41e5b8e49b917b8210c168"
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
    "revision": "0cbd69ca6dad3802ffb78a6c80e4666b"
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
