/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import 'regenerator-runtime';
import CacheHelper from './utlis/cache-helper';

const assetsToCache = [
  './',
  './heros/hero-image_4.jpg',
  './icons/favicon-16-x16.png',
  './icons/favicon-32-x32.png',
  './icons/android-chrome-192x192.png',
  './icons/android-chrome-512x512.png',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
