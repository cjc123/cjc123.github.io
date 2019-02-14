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
    "revision": "bd8392b7064d3fa4fa59c805c12a8536"
  },
  {
    "url": "about/index.html",
    "revision": "1359de3863db4a7d7b2819e80e759ff8"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.51e04b75.js",
    "revision": "42e6fa9ec6b7c9b2b8576f1c638805a3"
  },
  {
    "url": "assets/js/3.60d0e534.js",
    "revision": "dd37663df16179d757d291f08edd8f4e"
  },
  {
    "url": "assets/js/4.a886aca7.js",
    "revision": "c1f812520f3fabb10afc6f289803c696"
  },
  {
    "url": "assets/js/5.d011de83.js",
    "revision": "698653800ea7a57deb80306812057fd3"
  },
  {
    "url": "assets/js/6.eb425c5b.js",
    "revision": "bd542118bf2f7c3f47b152a0293c7162"
  },
  {
    "url": "assets/js/7.b35768b7.js",
    "revision": "52c953546451c7dc0d13c7ee243c09e2"
  },
  {
    "url": "assets/js/app.3f9e8ca5.js",
    "revision": "851add7b3793aa33dae211e188718606"
  },
  {
    "url": "blog/blog开张感言.html",
    "revision": "09ea50887402e99083e819f71184b889"
  },
  {
    "url": "blog/vue开发微信公众号记录.html",
    "revision": "6a5e22c0799034f23b02925d29f05c62"
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
    "revision": "c13fecb05d3375442935f787a2547cbe"
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
