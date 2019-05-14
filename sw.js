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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/images/favicon.ico",
    "revision": "4cc25b0bb9c89c26e220ee617d36a3a9"
  },
  {
    "url": "assets/images/hoshi.svg",
    "revision": "f63cd8b09849befb89de0e96ce59ebce"
  },
  {
    "url": "assets/photos/1.png",
    "revision": "bdacc33a4c34f5c7bb9dcb2efd6a3fa2"
  },
  {
    "url": "assets/photos/2.jpg",
    "revision": "45621f8071e1c92eb4dfa4826981d305"
  },
  {
    "url": "assets/photos/3.jpg",
    "revision": "d16434df9aacda514dc24678df7b2ec0"
  },
  {
    "url": "assets/photos/4.jpg",
    "revision": "ee5ef06e7a77e391a736ad4db7ce12ee"
  },
  {
    "url": "assets/photos/5.jpg",
    "revision": "3aff47ddf96af9bfaea4d88827ea0910"
  },
  {
    "url": "assets/photos/6.png",
    "revision": "98ee5f80c5deecf5f688cd69f38853e3"
  },
  {
    "url": "assets/sounds/knife.mp3",
    "revision": "755044508ca81e19d074eaab7d3c3e95"
  },
  {
    "url": "index.html",
    "revision": "f3d2c83b45adee52813f85f8c653d223"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
