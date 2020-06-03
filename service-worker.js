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
    "url": "404.html",
    "revision": "ca4f48372b410666b33becafa50063da"
  },
  {
    "url": "assets/css/0.styles.3064bf1a.css",
    "revision": "c2c9479d52449d09fef65682c19700e0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.eb3acae3.js",
    "revision": "01762a65b973756820e599a5e36f084b"
  },
  {
    "url": "assets/js/11.cb6a765d.js",
    "revision": "ec58acc29ec6e4405e5ce5a1b2249d26"
  },
  {
    "url": "assets/js/12.7766da7e.js",
    "revision": "6c55c80718180f42eb9532bcb610e30f"
  },
  {
    "url": "assets/js/13.2aa77213.js",
    "revision": "cf97e393fa53066a304b995ddf09f62b"
  },
  {
    "url": "assets/js/14.102d9591.js",
    "revision": "81beee430eeb2015c344ddd6e2d8ba4e"
  },
  {
    "url": "assets/js/15.2ed35cc7.js",
    "revision": "b47289e3df1fa595ba5192fdf2db307f"
  },
  {
    "url": "assets/js/16.160a28df.js",
    "revision": "357e8fe23c9f1f5b5f635412f4e87cc8"
  },
  {
    "url": "assets/js/17.9c4da2d3.js",
    "revision": "e29b736980c03291008a1c7de78c4012"
  },
  {
    "url": "assets/js/18.8518041f.js",
    "revision": "24596e9d284cb50e544882112f12884a"
  },
  {
    "url": "assets/js/19.7c815657.js",
    "revision": "d25d517d30279234b60c92d4ddd953ed"
  },
  {
    "url": "assets/js/2.c86593f3.js",
    "revision": "466c105f5f72373856785ba1d1a7b9d4"
  },
  {
    "url": "assets/js/20.9f5c6d33.js",
    "revision": "9158c1987f8d786c5129079a9fe788c9"
  },
  {
    "url": "assets/js/21.6f01bef2.js",
    "revision": "42c88c94d681ec1b57b568c48c958830"
  },
  {
    "url": "assets/js/22.fce2f891.js",
    "revision": "de13fc9cd947b81fa11294de3dc1b968"
  },
  {
    "url": "assets/js/23.ea99c812.js",
    "revision": "cb14256aab87ae2d96c959b696f5dfe5"
  },
  {
    "url": "assets/js/24.424883bc.js",
    "revision": "4ddf2ea1c69c33b3c235e9fd9631d5f9"
  },
  {
    "url": "assets/js/25.65ca748d.js",
    "revision": "bef3ac5c76463f7db8962a4d94624678"
  },
  {
    "url": "assets/js/26.62ef6ef6.js",
    "revision": "236adc1822ffcfa5fb4226e12371bc69"
  },
  {
    "url": "assets/js/27.34b43d78.js",
    "revision": "8ad7d0525b35a054c777d312a3e3e73c"
  },
  {
    "url": "assets/js/3.320c7af2.js",
    "revision": "3509f64b9d4f61c6ab12baaa4a3ef12b"
  },
  {
    "url": "assets/js/4.02e8fb35.js",
    "revision": "64ed5fd7a120442dba6714eb7f5aab4e"
  },
  {
    "url": "assets/js/5.f6f0d28b.js",
    "revision": "140b8e31c62a7397c8eba93a6cbd6e39"
  },
  {
    "url": "assets/js/6.b65c3648.js",
    "revision": "28a82ef0e0ea21974d5b233eb469eb5f"
  },
  {
    "url": "assets/js/7.fe60d063.js",
    "revision": "339b9bd88aa638aea1995912e3b5cc70"
  },
  {
    "url": "assets/js/8.ca46a370.js",
    "revision": "3faad5db94730581031a1711ec87bdde"
  },
  {
    "url": "assets/js/9.9fcee18d.js",
    "revision": "0ffffb7e6be0d2901af1e8a62a28329e"
  },
  {
    "url": "assets/js/app.d613d7ac.js",
    "revision": "1d56a02d5fe9dd9ffbad9029c37debbc"
  },
  {
    "url": "guide/auth/index.html",
    "revision": "9bb97719cab028324aa3d61b698ab79e"
  },
  {
    "url": "guide/commands/edit/index.html",
    "revision": "7b9e3e6369b5a9e4f2d05912f51fde0c"
  },
  {
    "url": "guide/commands/index.html",
    "revision": "4ff26fdd9af7a1b30268b3ec8f20ebd4"
  },
  {
    "url": "guide/commands/viewing/index.html",
    "revision": "25eeb52d9d0f193371f7ee44f631741c"
  },
  {
    "url": "guide/commands/webhooks/index.html",
    "revision": "9b3fe668ea886305bbb48b56d81bb989"
  },
  {
    "url": "guide/dev/index.html",
    "revision": "4b023b5c4d0d4d7d1e6d3d088d4ec377"
  },
  {
    "url": "guide/dev/self-host/index.html",
    "revision": "e3f4aea55956d6bb4f7c0c8c10aa90c8"
  },
  {
    "url": "guide/index.html",
    "revision": "08c1a4fa9bdf2c76562974ec1ec5e132"
  },
  {
    "url": "guide/other/bots/index.html",
    "revision": "581369d10c87b59858c4c92004e1473a"
  },
  {
    "url": "guide/other/faq/index.html",
    "revision": "2baf46ee492fd3d0926810ac20bb8126"
  },
  {
    "url": "guide/other/index.html",
    "revision": "de94c8186f24264fed773cdf7528ee0c"
  },
  {
    "url": "guide/other/team/index.html",
    "revision": "b566d9d9ad36b2deb0415b324b932c7c"
  },
  {
    "url": "guide/webhooks/index.html",
    "revision": "a99bd150faa17d8253f0e08156b7b3eb"
  },
  {
    "url": "index.html",
    "revision": "90b8dac855c97f3610c56ef0269f6349"
  },
  {
    "url": "logo_footer.png",
    "revision": "4a3d748deb78f45d39acb1e49f48e5ad"
  },
  {
    "url": "logo_happy.png",
    "revision": "58d172cce956e365eabef94b93a26323"
  },
  {
    "url": "logo_happy.svg",
    "revision": "be8417e5043e415ec0dc528e41121b25"
  },
  {
    "url": "logo_sad.png",
    "revision": "563a8755b2585accef16c9e830aa350d"
  },
  {
    "url": "logo_sad.svg",
    "revision": "a775f57dcf5e8e7ee51d3fc129b8e4ad"
  },
  {
    "url": "logo/android-chrome-192x192.png",
    "revision": "4b6de7141d2b174bf7d8fa0527144ae4"
  },
  {
    "url": "logo/android-chrome-512x512.png",
    "revision": "c86231c13df055fcb8460d49dcd64966"
  },
  {
    "url": "logo/apple-touch-icon.png",
    "revision": "c016e09eec37c159192e3acae031d96e"
  },
  {
    "url": "logo/favicon-16x16.png",
    "revision": "97230c22023ece6492ad324a21bc8e0d"
  },
  {
    "url": "logo/favicon-32x32.png",
    "revision": "5251b3d00bb0bdf144a8fe2bcc360c87"
  },
  {
    "url": "logo/mstile-150x150.png",
    "revision": "d520c61d8ea8944df9d9bbe6677eb9fe"
  },
  {
    "url": "logo/safari-pinned-tab.svg",
    "revision": "3f29789c0f9e7d10a873834c82259da4"
  },
  {
    "url": "placeholder_discord.png",
    "revision": "a006bc78840a44612d15676522f74049"
  }
].concat(self.__precacheManifest || []);
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
