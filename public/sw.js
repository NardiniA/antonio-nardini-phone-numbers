if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const t=e=>a(e,n),f={module:{uri:n},exports:r,require:t};s[n]=Promise.all(c.map((e=>f[e]||t(e)))).then((e=>(i(...e),r)))}}define(["./workbox-946f13af"],(function(e){"use strict";importScripts("fallback-xbtG415ZDoPzPp76BJJWy.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/110.778c07880c415e96.js",revision:"778c07880c415e96"},{url:"/_next/static/chunks/1182.e1da1f8a606ee853.js",revision:"e1da1f8a606ee853"},{url:"/_next/static/chunks/1387.4d3d8ebd403f852b.js",revision:"4d3d8ebd403f852b"},{url:"/_next/static/chunks/1448.694acf5666bdf6ed.js",revision:"694acf5666bdf6ed"},{url:"/_next/static/chunks/1634.63fd1bc672676558.js",revision:"63fd1bc672676558"},{url:"/_next/static/chunks/1718.14273da1c92e8e69.js",revision:"14273da1c92e8e69"},{url:"/_next/static/chunks/182.2f743267db57fbea.js",revision:"2f743267db57fbea"},{url:"/_next/static/chunks/2329.c6f192147caca081.js",revision:"c6f192147caca081"},{url:"/_next/static/chunks/235.8ae957820b40f4a2.js",revision:"8ae957820b40f4a2"},{url:"/_next/static/chunks/2657.5c4f03c3fa0aa9c0.js",revision:"5c4f03c3fa0aa9c0"},{url:"/_next/static/chunks/2671.a00a439db3484729.js",revision:"a00a439db3484729"},{url:"/_next/static/chunks/2807.c010221a2e3c8173.js",revision:"c010221a2e3c8173"},{url:"/_next/static/chunks/2895.6241783eaabf4aa1.js",revision:"6241783eaabf4aa1"},{url:"/_next/static/chunks/2909.8494e4f6236583e4.js",revision:"8494e4f6236583e4"},{url:"/_next/static/chunks/3984.0f2989ba8a118ca6.js",revision:"0f2989ba8a118ca6"},{url:"/_next/static/chunks/4078.004e3a5179f3972d.js",revision:"004e3a5179f3972d"},{url:"/_next/static/chunks/426.527c9c7f3f42071d.js",revision:"527c9c7f3f42071d"},{url:"/_next/static/chunks/4299.28fdd5cfa13d113d.js",revision:"28fdd5cfa13d113d"},{url:"/_next/static/chunks/4421.5a832866c566c401.js",revision:"5a832866c566c401"},{url:"/_next/static/chunks/4488.1ca3e6dfbc8bde85.js",revision:"1ca3e6dfbc8bde85"},{url:"/_next/static/chunks/4632.ba12a5dc35198ad1.js",revision:"ba12a5dc35198ad1"},{url:"/_next/static/chunks/466.5ba8f0033a8df713.js",revision:"5ba8f0033a8df713"},{url:"/_next/static/chunks/5073.71c9eaa4d75fe8fd.js",revision:"71c9eaa4d75fe8fd"},{url:"/_next/static/chunks/5176.f57aa970de95fe6e.js",revision:"f57aa970de95fe6e"},{url:"/_next/static/chunks/5233.c531881639aeb208.js",revision:"c531881639aeb208"},{url:"/_next/static/chunks/5549.ad7ea25f1957e1de.js",revision:"ad7ea25f1957e1de"},{url:"/_next/static/chunks/5770.d5e6a3772f611799.js",revision:"d5e6a3772f611799"},{url:"/_next/static/chunks/5801.2a51161fa67acfe6.js",revision:"2a51161fa67acfe6"},{url:"/_next/static/chunks/5883.5547bac487616e55.js",revision:"5547bac487616e55"},{url:"/_next/static/chunks/6296-5a58a8357847edcd.js",revision:"5a58a8357847edcd"},{url:"/_next/static/chunks/6297.45a5ec9f860c30e8.js",revision:"45a5ec9f860c30e8"},{url:"/_next/static/chunks/6481.806dfc2206712e34.js",revision:"806dfc2206712e34"},{url:"/_next/static/chunks/6506.cf4f2b8aa40c16b1.js",revision:"cf4f2b8aa40c16b1"},{url:"/_next/static/chunks/6634.8d6087d752cba198.js",revision:"8d6087d752cba198"},{url:"/_next/static/chunks/6759.7c9189f707c2f461.js",revision:"7c9189f707c2f461"},{url:"/_next/static/chunks/7047.12e0629d0ba71ce7.js",revision:"12e0629d0ba71ce7"},{url:"/_next/static/chunks/725.0f1496d686bd32a7.js",revision:"0f1496d686bd32a7"},{url:"/_next/static/chunks/7387.397c502fd6200475.js",revision:"397c502fd6200475"},{url:"/_next/static/chunks/7421.09055465eee24483.js",revision:"09055465eee24483"},{url:"/_next/static/chunks/7441-917de186ec05adb9.js",revision:"917de186ec05adb9"},{url:"/_next/static/chunks/7495.b04abc68fb432b78.js",revision:"b04abc68fb432b78"},{url:"/_next/static/chunks/7531.5dc879de9dce92e4.js",revision:"5dc879de9dce92e4"},{url:"/_next/static/chunks/7578-bcc50a39435aba1f.js",revision:"bcc50a39435aba1f"},{url:"/_next/static/chunks/758.bfb26b2302899406.js",revision:"bfb26b2302899406"},{url:"/_next/static/chunks/8056.dc011d83ffe7d73a.js",revision:"dc011d83ffe7d73a"},{url:"/_next/static/chunks/8185.b1e1d525c91924f3.js",revision:"b1e1d525c91924f3"},{url:"/_next/static/chunks/8349.c3f4b7908712794d.js",revision:"c3f4b7908712794d"},{url:"/_next/static/chunks/8707.f120bc950862058b.js",revision:"f120bc950862058b"},{url:"/_next/static/chunks/875.381f8d92ca1910c8.js",revision:"381f8d92ca1910c8"},{url:"/_next/static/chunks/8879.d8f5d2897e783066.js",revision:"d8f5d2897e783066"},{url:"/_next/static/chunks/8894.73f7f4bfac1cbf94.js",revision:"73f7f4bfac1cbf94"},{url:"/_next/static/chunks/8994.f827c9303741338c.js",revision:"f827c9303741338c"},{url:"/_next/static/chunks/9218.92ef745ca798fde1.js",revision:"92ef745ca798fde1"},{url:"/_next/static/chunks/9419.ab090e9f03c8af7f.js",revision:"ab090e9f03c8af7f"},{url:"/_next/static/chunks/962.72f0c5d063dabe9e.js",revision:"72f0c5d063dabe9e"},{url:"/_next/static/chunks/9669.71f15450992e32f4.js",revision:"71f15450992e32f4"},{url:"/_next/static/chunks/9853.496fda747e6fd8f1.js",revision:"496fda747e6fd8f1"},{url:"/_next/static/chunks/framework-cfc81117475133e7.js",revision:"cfc81117475133e7"},{url:"/_next/static/chunks/main-967c866eef548559.js",revision:"967c866eef548559"},{url:"/_next/static/chunks/pages/%5Bslug%5D-447137101c729f67.js",revision:"447137101c729f67"},{url:"/_next/static/chunks/pages/404-b67c6ce1389c2e0f.js",revision:"b67c6ce1389c2e0f"},{url:"/_next/static/chunks/pages/500-e0b81f04815c9c5a.js",revision:"e0b81f04815c9c5a"},{url:"/_next/static/chunks/pages/_app-e830e8105e27671d.js",revision:"e830e8105e27671d"},{url:"/_next/static/chunks/pages/_error-c39e6816e88a1770.js",revision:"c39e6816e88a1770"},{url:"/_next/static/chunks/pages/_offline-d59370a930ebc51b.js",revision:"d59370a930ebc51b"},{url:"/_next/static/chunks/pages/blog-detail-b3e88c704ec4f70c.js",revision:"b3e88c704ec4f70c"},{url:"/_next/static/chunks/pages/index-6234a752dda23181.js",revision:"6234a752dda23181"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-2d1c8da8513fca0e.js",revision:"2d1c8da8513fca0e"},{url:"/_next/static/css/5851837b39593159.css",revision:"5851837b39593159"},{url:"/_next/static/css/5ff0d40026122dc7.css",revision:"5ff0d40026122dc7"},{url:"/_next/static/media/boxicons.72b47ec0.woff2",revision:"72b47ec0"},{url:"/_next/static/media/boxicons.741e715f.eot",revision:"741e715f"},{url:"/_next/static/media/boxicons.818b5a3e.ttf",revision:"818b5a3e"},{url:"/_next/static/media/boxicons.85c1b5a2.woff",revision:"85c1b5a2"},{url:"/_next/static/media/boxicons.f6b31b98.svg",revision:"f6b31b98"},{url:"/_next/static/xbtG415ZDoPzPp76BJJWy/_buildManifest.js",revision:"93abd2b99cb295bf4e7614bffd3dc4e5"},{url:"/_next/static/xbtG415ZDoPzPp76BJJWy/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_offline",revision:"xbtG415ZDoPzPp76BJJWy"},{url:"/android-chrome-192x192.png",revision:"0feed9ea3a656186d7fcd7c52b0bb41b"},{url:"/android-chrome-512x512.png",revision:"884988263e9f850eef46054723fd3cae"},{url:"/apple-touch-icon-152.png",revision:"f281d863d0a97d9810f85f83f66ad8a8"},{url:"/apple-touch-icon-167.png",revision:"468b7500e0f4cadfe72b1faec26b7cad"},{url:"/apple-touch-icon.png",revision:"6f54b5ad5c940f947d8fe64eaf855211"},{url:"/browserconfig.xml",revision:"b0abf33a904309440cbde67640074b16"},{url:"/favicon-16x16.png",revision:"bb06e8fa97631cc2ba5589fb648e56e8"},{url:"/favicon-32x32.png",revision:"ea1404c92b6bad34c207cddd066c4cb2"},{url:"/favicon.ico",revision:"551484407457209f584cf0982c7fffe5"},{url:"/icons/icon-close-2.svg",revision:"5f787c8fb070a7768a79d7d704a1d8fc"},{url:"/icons/icon-close.svg",revision:"f9fc6e67415c6dc603fd8a90cc93ea4b"},{url:"/icons/icon-quote.svg",revision:"962a3ace75d1862055337cc12e1b65c3"},{url:"/mstile-150x150.png",revision:"db66f35fcfca523a7a827299ad406b3d"},{url:"/safari-pinned-tab.svg",revision:"ca60e5d95d9b4a919ff863850b38fb4c"},{url:"/site.webmanifest",revision:"dcac710c0f8dba74fa9c2146ad6a7e82"},{url:"/splash/apple-splash-1125-2436.jpg",revision:"6b62865bc1a241bc30b405ee288a672e"},{url:"/splash/apple-splash-1136-640.jpg",revision:"3a80e2b039ef8a421baebe7479237f2f"},{url:"/splash/apple-splash-1170-2532.jpg",revision:"6196cdf8b6e3230039f638d1b067e35a"},{url:"/splash/apple-splash-1179-2556.jpg",revision:"da625a1fafa9e8fad000fd0562b76734"},{url:"/splash/apple-splash-1242-2208.jpg",revision:"4f2059d35a55d64936ad6bb21f73888a"},{url:"/splash/apple-splash-1242-2688.jpg",revision:"7fbeece0298d3f9dcf8eb3ea871a39ba"},{url:"/splash/apple-splash-1284-2778.jpg",revision:"bd5748815ae60fa1fe3e1ad931abd668"},{url:"/splash/apple-splash-1290-2796.jpg",revision:"ff0c45c62f3f870d64847de6a6101d9f"},{url:"/splash/apple-splash-1334-750.jpg",revision:"a0e555c797baf58170dbeafdda9fdd63"},{url:"/splash/apple-splash-1536-2048.jpg",revision:"d303cc915d2c9581e0a4876b1a86e350"},{url:"/splash/apple-splash-1620-2160.jpg",revision:"601c4c8f0b898c91de4fba9e289d04cc"},{url:"/splash/apple-splash-1668-2224.jpg",revision:"e7dd82219927bf3a4f9898a42ff4e2fb"},{url:"/splash/apple-splash-1668-2388.jpg",revision:"4447489e418a5f7862906b3410fbbc12"},{url:"/splash/apple-splash-1792-828.jpg",revision:"379291af37c87a08a92777b97b929eb2"},{url:"/splash/apple-splash-2048-1536.jpg",revision:"535846d70abb774aaa2d8d3fedd41281"},{url:"/splash/apple-splash-2048-2732.jpg",revision:"8febe5e47602f1637ec2871e91ffefaa"},{url:"/splash/apple-splash-2160-1620.jpg",revision:"46fad0820530d2cc436df1384897e59a"},{url:"/splash/apple-splash-2208-1242.jpg",revision:"694e51297e02c367dad83855a458e97c"},{url:"/splash/apple-splash-2224-1668.jpg",revision:"abd761167966be0f736ef33bdf5b9254"},{url:"/splash/apple-splash-2388-1668.jpg",revision:"c64d77c8b2f0d4745d8d6bfb046f0418"},{url:"/splash/apple-splash-2436-1125.jpg",revision:"645fe6c0c0fbda1a9439137daa1040d3"},{url:"/splash/apple-splash-2532-1170.jpg",revision:"769a099c33408bc65e46073f3fcd9f39"},{url:"/splash/apple-splash-2556-1179.jpg",revision:"1a8d8abace0f8d1d24d7be99b5c63d51"},{url:"/splash/apple-splash-2688-1242.jpg",revision:"2bb4369fdc9da57ba3ffa7b974cbf560"},{url:"/splash/apple-splash-2732-2048.jpg",revision:"e63df3ccee6db0e1d6b21e90f33ce4e6"},{url:"/splash/apple-splash-2778-1284.jpg",revision:"dbdac099f425b8bde266f44cad204d8b"},{url:"/splash/apple-splash-2796-1290.jpg",revision:"e911cf408bb5759f12af2a457e205533"},{url:"/splash/apple-splash-640-1136.jpg",revision:"9a3a3120ddc2a4badcef509bd2cdeaa3"},{url:"/splash/apple-splash-750-1334.jpg",revision:"a1a646936b0e099aa1822d2d46599c51"},{url:"/splash/apple-splash-828-1792.jpg",revision:"38b5defaed7bbaa25b3b85388fd06578"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));