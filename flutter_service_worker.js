'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "01987ec63f6a917ac016f0478451fda6",
"index.html": "4a4b5047eb540246eb88655a6f01310f",
"/": "4a4b5047eb540246eb88655a6f01310f",
"main.dart.js": "cd86da5a3839878b5ae41dd99d421aad",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon0.png": "5dcef449791fa27946b3d35ad8803796",
"favicon.png": "347f3eb69428f3ec618eb4e1c288e5cd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d26f430ccee5d9d0e8919721468bd22b",
"assets/AssetManifest.json": "9b0050980c7f1a741a9229220159f86d",
"assets/NOTICES": "d03d7fd388b5787f4a7a39a84dbd4dc6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "24c6d0a073503f8cc25308b5842d5b03",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "e10c3405bfab9cb9b0313cbd0d94acf7",
"assets/fonts/MaterialIcons-Regular.otf": "f9f6a5ec586b9f74a7adb0384a705928",
"assets/assets/audios/sfx_congratulations.mp3": "86101ecb1cf6412c20031deef39b5414",
"assets/assets/audios/sfx_twinkle.mp3": "76ef97a6965b60704837332e4af900ad",
"assets/assets/audios/music_hotham_morning_bliss.mp3": "fc78c2c7565409e46191d3db96a2d57c",
"assets/assets/audios/sfx_boing.mp3": "b66419eb412b4f07a617b78fb8dace0a",
"assets/assets/images/img_glass_jar_clear.png": "e2e722954641812a4c9302ca814de8fb",
"assets/assets/images/ic_general.png": "699b7595895f671b68c49aa4adbae3f4",
"assets/assets/images/img_laptop.png": "a83a8e1f390d946cac414f902fe269d6",
"assets/assets/images/ic_organic.png": "43d7c44e6989b4ca04dab1f9685e8390",
"assets/assets/images/img_news_paper.png": "7f5403d0f688d03e6c9e750b4578f4a4",
"assets/assets/images/img_tea_bag.png": "8c4ad0bf7021c676f749f81b731eea50",
"assets/assets/images/img_tutorial_knowledge.jpg": "22bedfe93500b6443f1eaaf3f4e70344",
"assets/assets/images/img_plastic_bottle.png": "5cf9d8bb0dcd18e764a242f33fc7db7f",
"assets/assets/images/img_wine.png": "51b5ec7fc370c0a15fee2a1ca3e18c2e",
"assets/assets/images/ic_glass.png": "b990487d1dc14062e6551022803f9da4",
"assets/assets/images/img_keyboard.png": "90454cbb854bdb036247e2a3c9953a6c",
"assets/assets/images/img_motor_oil.png": "c93c64265ce5c570c1fc722eb407e8aa",
"assets/assets/images/img_paint_can.png": "eac6ada2a7ef73bfef30fd3e3d2c4d69",
"assets/assets/images/img_cutlery.png": "14baba46a6a88c996fd38246c42b59fb",
"assets/assets/images/ic_hazardous.png": "b12996f3f8823bba3ce33a177a0c8961",
"assets/assets/images/bg_animation.gif": "7eea7a51349df3035ef17449fef1f24b",
"assets/assets/images/img_banana_peel.png": "d7211ad211d6de9429a5d106cdb26db5",
"assets/assets/images/img_glass_bottle_green.png": "cff2e07f20144d849c260981cd4024b1",
"assets/assets/images/img_tutorial_chalenge_mode.jpg": "465af958fa7e94ad5ba2b09d12be8c92",
"assets/assets/images/img_tablet.png": "8883a5ec13c4f45255ab6363329d8a44",
"assets/assets/images/img_tissue_box.png": "123d3de9e1a103ee436103b69020f7b0",
"assets/assets/images/img_milk_jug.png": "026697fee714ddbc0755364edba72aca",
"assets/assets/images/img_tutorial_hint_false.jpg": "f07d5f92f6a04e6cf5a868f2e4767d3b",
"assets/assets/images/img_battery.png": "1a8b232820ef63f1d8c3beb789c241d9",
"assets/assets/images/img_orange_peel.png": "465501297a725c08aed38a2463ae10c5",
"assets/assets/images/img_tissue.png": "05847176dc2cef88db9120e712c373f6",
"assets/assets/images/img_pesticide.png": "231af2845d9b9c4f6f900d75b155937d",
"assets/assets/images/img_tutorial_card.jpg": "6f584477f220268043106fe2e37bd800",
"assets/assets/images/img_beer_can.png": "6a372ef345a4c7e6b9975bb33dba7f57",
"assets/assets/images/img_foil.png": "c86baf6fd8ea4a60bfb93e854008c962",
"assets/assets/images/img_broken_toy.png": "48d72f45a456b3408aac8ebdf99b3eba",
"assets/assets/images/img_office_paper.png": "a693699051ae1d8617ecc66ac73ac3c7",
"assets/assets/images/img_worn_out_shoes.png": "55339408722e1c21857eab586473dd28",
"assets/assets/images/img_glass_bottle_brown.png": "53a133cb4350536fbcb0e87c9b8034e3",
"assets/assets/images/img_mobile_phone.png": "fcb9bd3b4e4f25e78561c44279e09f11",
"assets/assets/images/img_styrofoam.png": "0bd237233e90ac1c78ab13b52d14bc16",
"assets/assets/images/img_leaves.png": "595e9a21f20f203fb6ee1f88970539e6",
"assets/assets/images/img_book.png": "7be61380401c7c11e88d8609dbb914f6",
"assets/assets/images/img_tutorial_hint_true.jpg": "966475c86906c1f5cfb908047e336ceb",
"assets/assets/images/img_pickle_jar.png": "d9c326e2f26d1a182fb2f3ecdbae56b1",
"assets/assets/images/img_mouse.png": "d52d69b6f86965b25710db3d3a577e79",
"assets/assets/images/img_glass_jar_brown.png": "2d67ea0e7702ccd9fd5da75065b811ac",
"assets/assets/images/img_spay_can.png": "dbf51d3e064489e9408ad8dfc306993e",
"assets/assets/images/img_aluminum_tray.png": "43b6483c5ab43d8ef4361c50a9de2805",
"assets/assets/images/img_tutorial_board_hover.png": "c8dce472c2cd2cde565a8dee64a64ec3",
"assets/assets/images/img_light_bulb.png": "4a20620433b1145e52b8c7061037783f",
"assets/assets/images/img_egg_shell.png": "09446f63f6f5bc5b3bf93a1e91359368",
"assets/assets/images/img_chips_bag.png": "5ecaf5ccf7173ae641542a664f17e78f",
"assets/assets/images/img_tutorial_board.png": "19986f3c1197df3cd9578e20e33ae6b4",
"assets/assets/images/img_broken_glass.png": "f2fdd5576362aae36f34d030acc2d696",
"assets/assets/images/img_shampoo.png": "9189cfefeebd03d76a18e31efbd9d989",
"assets/assets/images/img_shredded_paper.png": "cfc0ee88041a3c6b24019717bf9bdba9",
"assets/assets/images/img_aluminum_plate.png": "95972812823eba6fa6a459097c2b8e16",
"assets/assets/images/img_juice_carton.png": "a14b38c004882dd402204cfebbfa0992",
"assets/assets/images/ic_paper.png": "d53843c1bdc4e77e3fe9b95d546ab7f8",
"assets/assets/images/img_cereal_box.png": "3d3fcabdf40b411678634c426e7e065e",
"assets/assets/images/img_food_can.png": "e3b26fc06a46d58bc04408ff746d3f2b",
"assets/assets/images/img_monitor.png": "7a2cd3b3669a2c7a301cd9ca9f303c85",
"assets/assets/images/img_potato_peel.png": "2679baab5f92a96fc9b66b058c4b2cbf",
"assets/assets/images/img_tooth_paste.png": "24d4ffd6336d7e8cd0e0b53d5c59e592",
"assets/assets/images/img_apple_core.png": "cfd50be77f55a5add90dc6156ecf8c56",
"assets/assets/images/img_glass_jar_green.png": "97175301cd1292ef7f5c2e904734ce71",
"assets/assets/images/img_jam_jar.png": "3e82d88eea1e2f91565cb0dd00879970",
"assets/assets/images/img_soda_can.png": "4955921ee10eb8937423aca3d5cd0e8f",
"assets/assets/images/ic_electronic.png": "347f3eb69428f3ec618eb4e1c288e5cd",
"assets/assets/images/ic_aluminum.png": "5dce6c3e058ba61cfa68b39046f85c1d",
"assets/assets/images/img_soda_bottle.png": "57c4f60843fed40f23074d1850fc9afc",
"assets/assets/images/img_glass_bottle_clear.png": "156440705edae08cdb4d22988e1a4335",
"assets/assets/images/ic_plastic.png": "f71775a0bdd71913215177849af276bc",
"assets/assets/images/img_letter.png": "91d9118b178f2e1dab09d941613bf4b0",
"assets/assets/translations/translation.json": "4d4848765da876a8d2e6129a98aef735",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
